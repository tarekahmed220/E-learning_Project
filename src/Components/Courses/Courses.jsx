import React from 'react'

export default function Courses() {
    return (
        <div className="layout w-full pb-24">


            <div className="text-center p-10">
                <h1 className="font-bold text-4xl mb-4">All Courses</h1>
            </div>

            <section id="Projects"
                className="w-fit mx-auto grid grid-cols-1 lg:grid-cols-3 md:grid-cols-2 justify-items-center justify-center gap-y-12 gap-x-9 mt-10 mb-5">

                <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

                    <div className="project-img relative ">
                        <img src="https://img-b.udemycdn.com/course/240x135/437398_46c3_10.jpg"
                            alt="Course" className="h-80 w-80 object-cover rounded-t-xl" />
                        <div className="fav-icon absolute top-2 right-3 w-11 h-11 rounded-full flex justify-center items-center text-lg text-black bg-white bg-opacity-40 hover:text-red-600 hover:bg-slate-300 hover:bg-opacity-50 ">
                            <i class="fa-solid fa-heart"></i>


                        </div>

                    </div>
                    <div className="px-4 py-3 w-80">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Categoryyy</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Course Name</p>
                        <div className="flex items-center">
                            <p className='text-green-500'>Free</p>

                            <div className="ml-auto">                                    <button className='py-1 px-2 text-white bg-amber-600 hover:bg-amber-700 text-sm font-medium rounded-md'>Enroll</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

                    <div className="project-img relative ">
                        <img src="https://img-b.udemycdn.com/course/240x135/437398_46c3_10.jpg"
                            alt="Course" className="h-80 w-80 object-cover rounded-t-xl" />
                        <div className="fav-icon absolute top-2 right-3 w-11 h-11 rounded-full flex justify-center items-center text-lg text-black bg-white bg-opacity-40 hover:text-red-600 hover:bg-slate-300 hover:bg-opacity-50 ">
                            <i class="fa-solid fa-heart"></i>


                        </div>

                    </div>
                    <div className="px-4 py-3 w-80">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Category</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Course Name</p>
                        <div className="flex items-center">
                            <p className='text-green-500'>Free</p>

                            <div className="ml-auto">                                    <button className='py-1 px-2 text-white bg-amber-600 hover:bg-amber-700 text-sm font-medium rounded-md'>Enroll</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

                    <img src="https://img-b.udemycdn.com/course/240x135/947098_02ec_2.jpg"
                        alt="Course" className="h-80 w-80 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-80">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Category</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Course Name</p>
                        <div className="flex items-center">
                            <p className='text-green-500'>Free</p>
                            <div className="ml-auto">                                    <button className='py-1 px-2 text-white bg-amber-600 hover:bg-amber-700 text-sm font-medium rounded-md'>Enroll</button>
                            </div>
                        </div>
                    </div>

                </div>

                <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

                    <img src="https://img-b.udemycdn.com/course/240x135/822444_a6db.jpg"
                        alt="Course" className="h-80 w-80 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-80">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Category</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Course Name</p>
                        <div className="flex items-center">
                            <p className='text-green-500'>Free</p>

                            <div className="ml-auto">                                    <button className='py-1 px-2 text-white bg-amber-600 hover:bg-amber-700 text-sm font-medium rounded-md'>Enroll</button>
                            </div>
                        </div>
                    </div>

                </div>
                <div className="w-80 bg-white shadow-md rounded-xl duration-500 hover:scale-105 hover:shadow-xl">

                    <img src="https://img-b.udemycdn.com/course/240x135/1463348_52a4_4.jpg"
                        alt="Course" className="h-80 w-80 object-cover rounded-t-xl" />
                    <div className="px-4 py-3 w-80">
                        <span className="text-gray-400 mr-3 uppercase text-xs">Category</span>
                        <p className="text-lg font-bold text-black truncate block capitalize">Course Name</p>
                        <div className="flex items-center">
                            <p className='text-green-500'>Free</p>

                            <div className="ml-auto">                                    <button className='py-1 px-2 text-white bg-amber-600 hover:bg-amber-700 text-sm font-medium rounded-md'>Enroll</button>
                            </div>
                        </div>
                    </div>

                </div>




            </section>




        </div>)
}