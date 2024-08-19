import {
    collection,
    getDocs,
    limit,
    query,
    startAfter,
    updateDoc,
    doc
} from "firebase/firestore";
import { useEffect, useState } from "react";
import { db } from "../../../firebase-config";
import CourseItem from "../../../Components/Courses/CourseItem";
import Spinner from "../../../Components/Spinner";

export default function Admin() {
    const [courses, setCourses] = useState([]);
    const [loading, setLoading] = useState(false);
    const [lastVisible, setLastVisible] = useState(null);
    const [searchTerm, setSearchTerm] = useState("");
    const [searching, setSearching] = useState(false);
    const [isUpdateFormVisible, setIsUpdateFormVisible] = useState(false);
    const [selectedCourse, setSelectedCourse] = useState(null);
    const [showForm, setShowForm] = useState(false);
    const [NewCourseName, setNewCourseName] = useState("");
    const [NewInstructorName, setNewInstructorName] = useState("");
    const [NewCourseImg, setNewCourseImg] = useState(null);
    const [NewInstructorImg, setNewInstructorImg] = useState(null);

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


    const [courseName, setCourseName] = useState(selectedCourse?.title || '');
    const [instructorName, setInstructorName] = useState(selectedCourse?.visible_instructors[0]?.display_name || '');
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

    const handleUpdateClick = (course) => {
        setSelectedCourse(course);
        setIsUpdateFormVisible(true);
    };

    const handleCloseUpdateForm = () => {
        setIsUpdateFormVisible(false);
        setSelectedCourse(null);
    };
    const handleAddCancel = () => {
        setShowForm(false); // Close the form when clicking AddCancel
    };

    const handleNewCourseImgChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setNewCourseImg(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleNewInstructorImgChange = (e) => {
        if (e.target.files && e.target.files[0]) {
            setNewInstructorImg(URL.createObjectURL(e.target.files[0]));
        }
    };

    const handleNewSubmit = () => {
        // Create an object to hold all the data
        const formData = {
            NewCourseName,
            NewInstructorName,
            NewCourseImg,
            NewInstructorImg,
        };
        console.log(formData); // Replace with any submission logic you want
        setShowForm(false); // Close the form after NewSubmitting
    };


    const handleImageUpload = (event, type) => {
        const file = event.target.files[0];
        if (file) {
            const reader = new FileReader();
            reader.onload = (e) => {
                if (type === "course") {
                    setSelectedCourse((prev) => ({
                        ...prev,
                        image_480x270: e.target.result,
                    }));
                } else if (type === "instructor") {
                    setSelectedCourse((prev) => ({
                        ...prev,
                        visible_instructors: [
                            {
                                ...prev.visible_instructors[0],
                                image_100x100: e.target.result,
                            },
                        ],
                    }));
                }
            };
            reader.readAsDataURL(file);
        }

    };

    const handleSubmit = () => {
        console.log('Updated Course Name:', courseName);
        console.log('Updated Instructor Name:', instructorName);
        console.log('Updated Course Image:', selectedCourse.image_480x270);
        console.log('Updated Instructor Image:', selectedCourse.visible_instructors[0].image_100x100);

    };


    return (
        <>
            <div className="layout w-full pb-24">
                <div className="welcome w-4/5 mx-auto pt-24">
                    <h2 className="p-20 rounded-lg text-center text-4xl bg-amber-600 text-white">
                        Welcome To Admin Panel
                    </h2>
                </div>
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
                <div className="w-4/5 mx-auto dd-product">
                    <button
                        className="p-3 ms-32 bg-green-300 rounded-md w-48 border-2 border-green-500 bg-opacity-30 border-solid"
                        onClick={() => setShowForm(true)} // Show the form when clicked
                    >
                        Add Product
                    </button>              </div>

                {showForm && (
                    <div className="add w-screen z-10 mx-auto bg-gray-500 bg-opacity-45 flex justify-center items-center shadow-md fixed bottom-0 top-0 right-0 left-0">
                        <div className="add-form w-3/5 mx-auto h-4/5 bg-amber-50 rounded-xl shadow-sm">
                            <div className="imgs-add flex justify-evenly p-5 h-1/2 ">
                                <div className="course-add-img relative flex flex-col justify-center items-center w-1/3 h-full">
                                    <img
                                        src={NewCourseImg || "https://img.myloview.com.br/adesivos/online-course-icon-vector-teacher-symbol-with-computer-monitor-and-whiteboard-for-online-education-class-in-a-glyph-pictogram-illustration-700-264104717.jpg"}
                                        className="h-36 w-36 border bottom-4 border-amber-500 shadow-md rounded-full"
                                        alt="Course"
                                    />
                                    <div className="add-icon absolute top-32 border-2 border-amber-700 right-1/3 rounded-full flex justify-center items-center w-9 h-9 bg-slate-200 cursor-pointer shadow-sm">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="absolute w-full h-full opacity-0 cursor-pointer"
                                            onChange={handleNewCourseImgChange}
                                        />
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </div>
                                </div>
                                <div className="instructor-add-img relative flex flex-col justify-center items-center w-1/3 h-full">
                                    <img
                                        className="h-36 w-36 bottom-4 border border-amber-500 shadow-md rounded-full"
                                        src={NewInstructorImg || "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcR_eN9ltaN4YL-7g4jrTdTXHsBUf_bWxQ_cSg&s"}
                                        alt="Instructor"
                                    />
                                    <div className="add-icon absolute top-32 border-2 border-amber-700 right-1/3 rounded-full flex justify-center items-center w-9 h-9 bg-slate-200 cursor-pointer shadow-sm">
                                        <input
                                            type="file"
                                            accept="image/*"
                                            className="absolute w-full h-full opacity-0 cursor-pointer"
                                            onChange={handleNewInstructorImgChange}
                                        />
                                        <i className="fa-solid fa-circle-plus"></i>
                                    </div>
                                </div>
                            </div>

                            <div className="p-8 flex justify-evenly items-center">
                                <div className="course-add-name relative flex flex-col w-1/3">
                                    <label className="font-medium" htmlFor="course-name">
                                        Course Name*
                                    </label>
                                    <input
                                        placeholder="Enter new name"
                                        className="p-1 bg-amber-100 bg-opacity-5 mt-2 h-10 rounded-md border border-amber-600 outline-2 outline-fuchsia-700"
                                        type="text"
                                        id="course-name"
                                        value={NewCourseName}
                                        onChange={(e) => setNewCourseName(e.target.value)}
                                    />
                                    <button
                                        className="w-44 rounded-md p-3 bg-black hover:bg-slate-700 text-white mt-14"
                                        onClick={handleAddCancel}
                                    >
                                        Cancel
                                    </button>
                                </div>
                                <div className="instructor-add-name relative flex flex-col w-1/3">
                                    <label className="font-medium" htmlFor="instructor-name">
                                        Instructor Name*
                                    </label>
                                    <input
                                        placeholder="Enter new name"
                                        className="p-1 bg-amber-100 bg-opacity-5 mt-2 h-10 rounded-md border border-amber-600 outline-2 outline-fuchsia-700"
                                        type="text"
                                        id="instructor-name"
                                        value={NewInstructorName}
                                        onChange={(e) => setNewInstructorName(e.target.value)}
                                    />
                                    <button
                                        className="w-44 rounded-md p-3 ms-auto bg-[#d97706] hover:bg-[#d97706d7] text-white mt-14"
                                        onClick={handleNewSubmit}
                                    >
                                        Submit
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>

                )}


                <section
                    id="Projects"
                    className="mx-auto justify-items-center justify-center gap-y-12 gap-x-9 mt-10 mb-5"
                >
                    {courses.map((course) => (
                        <div className="admin-courses w-4/5 grid-cols-1 mx-auto" key={course.id}>
                            <div className="course-card shadow-md flex mb-9 p-4 bg-white bg-opacity-70 rounded-lg w-4/5 mx-auto">
                                <div className="card-img w-1/4 relative">
                                    <img
                                        src={course.image_480x270}
                                        alt="Course"
                                        className="course-avatar h-40 w-40 object-cover rounded-xl"
                                    />
                                    <img
                                        className="instructor-avatar rounded-full w-[60px] absolute bottom-3 right-14"
                                        src={course.visible_instructors[0].image_100x100}
                                        alt=""
                                    />
                                </div>
                                <div className="card-data w-1/3 relative">
                                    <p className="text-lg font-semibold text-black truncate block capitalize py-2">
                                        {course.title}
                                    </p>
                                    <span className="text-gray-400 mr-3 uppercase text-xs">
                                        {course.visible_instructors[0].display_name}
                                    </span>
                                </div>

                                <div className="buttons mx-auto flex flex-col justify-end items-center">
                                    <button
                                        className="delete-button p-2 rounded-md w-48 border-2 border-red-500 bg-opacity-30 border-solid bg-red-500"
                                    >
                                        <i className="fa-regular fa-trash-can"></i> Delete
                                    </button>
                                    <button
                                        className="update-button p-2 rounded-md w-48 border-2 mt-5 border-blue-500 bg-opacity-30 border-solid bg-blue-500"
                                        onClick={() => handleUpdateClick(course)}
                                    >
                                        <i className="fa-solid fa-pen-to-square"></i> Update
                                    </button>
                                </div>
                            </div>
                        </div>
                    ))}
                </section>

                {isUpdateFormVisible && selectedCourse && (
                    <div className="update w-screen mx-auto bg-gray-500 bg-opacity-45 flex justify-center items-center shadow-md fixed bottom-0 top-0 right-0 left-0">
                        <div className="update-form  w-3/5 mx-auto h-4/5 bg-slate-50 rounded-xl shadow-sm">
                            <div className="imgs-update flex justify-evenly p-5 h-1/2 ">
                                <div className="course-img relative  flex flex-col justify-center items-center w-1/3 h-full">
                                    <img
                                        className="h-36 w-36 border bottom-4 border-amber-500 shadow-md rounded-full"
                                        src={selectedCourse.image_480x270}
                                        alt="Course"
                                    />
                                    <div
                                        className="edit-icon absolute top-32 border-2 border-amber-700 right-1/3 rounded-full flex justify-center items-center w-9 h-9 bg-slate-200 cursor-pointer shadow-sm"
                                        onClick={() => document.getElementById("course-image-upload").click()}
                                    >
                                        <i className="fa-solid fa-pen text-lg cursor-pointer"></i>
                                    </div>
                                    <input
                                        type="file"
                                        id="course-image-upload"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={(e) => handleImageUpload(e, "course")}
                                    />


                                </div>
                                <div className="instructor-img  relative flex flex-col justify-center items-center w-1/3 h-full">
                                    <img
                                        className="h-36 w-36 bottom-4 border border-amber-500 shadow-md rounded-full"
                                        src={selectedCourse.visible_instructors[0].image_100x100}
                                        alt="Instructor"
                                    />
                                    <div
                                        className="edit-icon absolute top-32 border-2 border-amber-700 right-1/3 rounded-full flex justify-center items-center w-9 h-9 bg-slate-200 cursor-pointer shadow-sm"
                                        onClick={() => document.getElementById("instructor-image-upload").click()}
                                    >
                                        <i className="fa-solid fa-pen text-lg cursor-pointer"></i>
                                    </div>
                                    <input
                                        type="file"
                                        id="instructor-image-upload"
                                        accept="image/*"
                                        style={{ display: "none" }}
                                        onChange={(e) => handleImageUpload(e, "instructor")}
                                    />
                                </div>
                            </div>


                            <div className="p-8 flex justify-evenly items-center">
                                <div className="instructor-name relative flex flex-col w-1/3">
                                    <label className="font-medium" htmlFor="course-name">
                                        Course Name Edit
                                    </label>
                                    <input
                                        placeholder="Enter new name"
                                        className="p-1 bg-amber-100 bg-opacity-5 mt-2 h-10 rounded-md border border-amber-600 outline-2 outline-fuchsia-700"
                                        type="text"
                                        id="course-name"
                                        value={courseName}
                                        onChange={(e) => setCourseName(e.target.value)}
                                    />
                                    <button onClick={handleCloseUpdateForm}
                                        className="w-44 rounded-md p-3 bg-black hover:bg-slate-700 text-white mt-14">
                                        Cancel
                                    </button>
                                </div>
                                <div className="instructor-name relative flex flex-col w-1/3">
                                    <label className="font-medium" htmlFor="instructor-name">
                                        Instructor Name Edit
                                    </label>
                                    <input
                                        placeholder="Enter new name"
                                        className="p-1 bg-amber-100 bg-opacity-5 mt-2 h-10 rounded-md border border-amber-600 outline-2 outline-fuchsia-700"
                                        type="text"
                                        id="instructor-name"
                                        value={instructorName}
                                        onChange={(e) => setInstructorName(e.target.value)}
                                    />
                                    <button onClick={handleSubmit} className="w-44 rounded-md p-3 ms-auto bg-[#d97706] hover:bg-[#d97706d7] text-white mt-14">
                                        Submit
                                    </button>
                                </div>

                            </div>
                        </div>
                    </div>
                )}

                {loading && <Spinner />}



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
        </>
    );
}
