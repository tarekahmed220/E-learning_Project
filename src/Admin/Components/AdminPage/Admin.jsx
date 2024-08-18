import {
    collection,
    getDocs,
    limit,
    query,
    startAfter,
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

    const handleUpdateClick = () => {
        setIsUpdateFormVisible(true);
    };

    const handleCloseUpdateForm = () => {
        setIsUpdateFormVisible(false);
    };

    return (<>
        <div className="layout w-full pb-24">
            <div className="welcome w-4/5 mx-auto pt-24">
                <h2 className="p-20 rounded-lg text-center text-4xl  bg-amber-600 text-white">Welcome To Admin Panel</h2>
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

            <section
                id="Projects"
                className=" mx-auto justify-items-center justify-center gap-y-12 gap-x-9 mt-10 mb-5"
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
                                    className="celete-button p-2 rounded-md w-48 border-2 border-red-500 bg-opacity-30 border-solid bg-red-500"
                                >
                                    <i className="fa-regular fa-trash-can"></i> Delete
                                </button>
                                <button
                                    className="update-button p-2 rounded-md w-48 border-2 mt-5 border-blue-500 bg-opacity-30 border-solid bg-blue-500"
                                    onClick={handleUpdateClick}
                                >
                                    <i className="fa-solid fa-pen-to-square"></i> Update
                                </button>
                            </div>
                        </div>
                    </div>
                ))}
            </section>

            {/* Update Form */}
            {isUpdateFormVisible && (
                <div className="update w-screen mx-auto bg-gray-500 bg-opacity-45 flex justify-center items-center shadow-md fixed bottom-0 top-0 right-0 left-0">
                    <div className="update-form w-3/5 mx-auto h-4/5 bg-slate-50 rounded-xl shadow-sm">

                        <div className="imgs-update flex justify-evenly p-5 h-1/2 ">
                            <div className="course-img relative flex flex-col justify-center items-center w-1/3 h-full">
                                <img className="h-36 w-36 border bottom-4 border-amber-500 shadow-md rounded-full" src="data:image/jpeg;base64,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" alt="" />
                                <div className="edit-icon absolute top-32  border-2 border-amber-700 right-1/3 rounded-full flex justify-center items-center w-9 h-9 bg-slate-200 cursor-pointer shadow-sm">
                                    <i class="fa-solid fa-pen"></i>
                                </div>
                                <p className="pt-6 text-xl font-medium">Course Image</p>

                            </div>
                            <div className="instructor-img relative flex flex-col justify-center items-center w-1/3 h-full">

                                <img className="h-36 w-36 border bottom-4 border-amber-500 shadow-md rounded-full" src="https://www.shutterstock.com/image-photo/young-happy-business-woman-sitting-260nw-2223351415.jpg" alt="" />
                                <div className="edit-icon absolute top-32  border-2 border-amber-700 right-1/3 rounded-full flex justify-center items-center w-9 h-9 bg-slate-200 cursor-pointer shadow-sm">
                                    <i class="fa-solid fa-pen"></i>
                                </div>
                                <p className="pt-6 text-xl font-medium">Instructor Image</p>

                            </div>



                        </div>
                        <div className="name-update  flex justify-evenly  h-1/2">
                            <div className="course-name relative flex flex-col   w-1/3 h-full  ">
                                <label className="font-medium" htmlFor="name">Course Name Edit </label>
                                <input placeholder="Enter new name" className="p-1 bg-amber-100 bg-opacity-5 mt-2 h-10 rounded-md border border-amber-600 outline-2 outline-fuchsia-700" type="text" id="name" name="name" />
                                <button onClick={handleCloseUpdateForm} className="w-44 rounded-md p-3 bg-black hover:bg-gray-800 text-white mt-28">Cancel</button>
                            </div>
                            <div className="instructor-name   relative flex flex-col   w-1/3  ">
                                <label className="font-medium" htmlFor="name">Instructor Name Edit </label>
                                <input placeholder="Enter new name" className="p-1 bg-amber-100 bg-opacity-5 mt-2 h-10 rounded-md border border-amber-600 outline-2 outline-fuchsia-700" type="text" id="name" name="name" />
                                <button className="w-44 rounded-md ms-auto p-3 bg-amber-600 hover:bg-amber-700 text-white mt-28">Submit</button>

                            </div>

                        </div>

                    </div>


                </div>
            )};



            <div className="flex justify-center">
                <button
                    onClick={loadMoreCourses}
                    disabled={loading || searching}
                    className="mt-4 px-4 py-2 bg-[#d97706] hover:bg-[#d97706d7] transition ease-in-out text-white rounded mx-auto"
                >
                    {loading ? <Spinner /> : "Load More"}
                </button>
            </div>
        </div >
    </>
    );
}
