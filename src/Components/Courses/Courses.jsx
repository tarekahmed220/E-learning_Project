import {
  collection,
  getDocs,
  limit,
  query,
  startAfter,
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../firebase-config";
import CourseItem from "./CourseItem";
import Spinner from "../Spinner";

export default function Courses() {
  const [courses, setCourses] = useState([]);
  const [loading, setLoading] = useState(false);
  const [lastVisible, setLastVisible] = useState(null);
  const [searchTerm, setSearchTerm] = useState("");
  const [searching, setSearching] = useState(false);
  useEffect(() => {
    fetchCourses();
  }, []);

  async function fetchCourses() {
    setLoading(true);
    try {
      const coursesCollection = collection(db, "courses");
      let q = query(coursesCollection, limit(20));
      const querySnapshot = await getDocs(q);

      const coursesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredCourses = coursesList.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastVisible(lastVisibleDoc);

      setCourses(filteredCourses);
    } catch (error) {
      console.error("Error fetching courses:", error);
    } finally {
      setLoading(false);
      setSearching(false);
    }
  }

  const loadMoreCourses = async () => {
    if (!lastVisible) return;
    setLoading(true);
    try {
      const coursesCollection = collection(db, "courses");
      const q = query(coursesCollection, startAfter(lastVisible), limit(20));
      const querySnapshot = await getDocs(q);

      const coursesList = querySnapshot.docs.map((doc) => ({
        id: doc.id,
        ...doc.data(),
      }));

      const filteredCourses = coursesList.filter((course) =>
        course.title.toLowerCase().includes(searchTerm.toLowerCase())
      );

      const lastVisibleDoc = querySnapshot.docs[querySnapshot.docs.length - 1];
      setLastVisible(lastVisibleDoc);

      setCourses((prevCourses) => [...prevCourses, ...filteredCourses]);
    } catch (error) {
      console.error("Error fetching more courses:", error);
    } finally {
      setLoading(false);
    }
  };

  const handleSearch = (event) => {
    const value = event.target.value.replace(/[^a-zA-Z\s]/g, "");
    setSearchTerm(value);
  };

  const handleSearchClick = () => {
    setSearching(true);
    fetchCourses();
  };

  return (
    <div className="layout w-full pb-24">
      <div className="text-center p-10">
        <h1 className="font-bold text-4xl mb-4">All Courses</h1>
        <div className="flex justify-center space-x-2">
          <input
            type="text"
            placeholder="Search for courses..."
            value={searchTerm}
            onChange={handleSearch}
            pattern="[A-Za-z\s]*"
            className="p-2 border border-gray-300 rounded-lg"
          />
          <button
            onClick={handleSearchClick}
            className="px-4 py-2 bg-[#d97706] hover:bg-[#d97706d7] transition ease-in-out text-white rounded"
          >
            Search
          </button>
        </div>
      </div>

      <section
        id="Projects"
        className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-12 gap-x-9 mt-10 mb-5"
      >
        {courses.map((course) => (
          <CourseItem course={course} key={course.id} />
        ))}
      </section>
      <div className="flex justify-center">
        <button
          onClick={loadMoreCourses}
          disabled={loading || searching}
          className="mt-4 px-4 py-2 bg-[#d97706] hover:bg-[#d97706d7] transition ease-in-out text-white rounded mx-auto"
        >
          {loading ? <Spinner /> : "Load More"}
        </button>
      </div>
    </div>
  );
}
