import { useParams } from "react-router-dom";
import { doc, getDoc } from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import { FaHeart, FaRegHeart } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { addToWishlist, removeFromWishlist } from "../../Redux/wishlistSlice";

const CourseDetails = () => {
  const { id } = useParams();
  const [course, setCourse] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [isFavorite, setIsFavorite] = useState(false);
  const dispatch = useDispatch();
  useEffect(() => {
    const fetchCourse = async () => {
      try {
        const courseDoc = doc(db, "courses", id);
        const docSnap = await getDoc(courseDoc);

        if (docSnap.exists()) {
          setCourse(docSnap.data());
        } else {
          setError("No such document!");
        }
      } catch (err) {
        setError("Error fetching course details");
      } finally {
        setLoading(false);
      }
    };

    fetchCourse();
  }, [id]);

  const handleAddToFavorites = (course) => {
    setIsFavorite(!isFavorite);
    if (isFavorite) {
      setIsFavorite(false);
      dispatch(removeFromWishlist(course.id));
    } else {
      setIsFavorite(true);
      dispatch(addToWishlist(course));
    }
  };

  const handleEnroll = () => {};

  if (loading)
    return <p className="text-center text-xl font-semibold">Loading...</p>;
  if (error) return <p className="text-center text-xl text-red-500">{error}</p>;

  return (
    <div className="bg-[#fff8d9] py-[60px]">
      <div className="course-details max-w-4xl mx-auto p-6 bg-white shadow-lg rounded-lg ">
        {course ? (
          <div>
            <div className="relative mb-6">
              <img
                src={course.image_480x270}
                alt={course.title}
                className="w-full h-60 object-cover rounded-lg shadow-md"
              />
              <div className="absolute top-4 right-4 bg-white p-2 rounded-full shadow-md">
                <img
                  src={course.visible_instructors[0].image_100x100}
                  alt={course.visible_instructors[0].display_name}
                  className="w-16 h-16 rounded-full border-2 border-gray-300"
                />
              </div>
            </div>
            <h1 className="text-4xl font-bold text-gray-800 mb-2">
              {course.title}
            </h1>
            <p className="text-xl text-gray-600 mb-4">{course.headline}</p>
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Instructor
              </h2>
              <p className="text-lg text-gray-800">
                {course.visible_instructors[0].display_name}
              </p>
              <p className="text-gray-500">
                {course.visible_instructors[0].job_title}
              </p>
            </div>
            <div className="bg-gray-50 p-4 rounded-lg shadow-inner mb-6">
              <h2 className="text-2xl font-semibold text-gray-700 mb-2">
                Price
              </h2>
              <p className="text-2xl font-bold text-green-600">
                {course.price}
              </p>
            </div>
            <div className="flex space-x-4 justify-center">
              <button
                onClick={() => handleAddToFavorites(course)}
                className={`p-2 rounded-full border-2 ${
                  isFavorite
                    ? "border-red-600 text-red-600"
                    : "border-gray-300 text-gray-500"
                } hover:bg-gray-100 transition`}
              >
                {isFavorite ? <FaHeart size={24} /> : <FaRegHeart size={24} />}
              </button>
              <button
                onClick={handleEnroll}
                className="py-2 px-4 bg-amber-600 hover:bg-amber-700 text-white font-semibold rounded-md transition"
              >
                Enroll
              </button>
            </div>
          </div>
        ) : (
          <p className="text-center text-xl">No course found</p>
        )}
      </div>
    </div>
  );
};

export default CourseDetails;