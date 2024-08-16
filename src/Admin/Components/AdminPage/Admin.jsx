import React from 'react'

export default function Admin() {
    return (<>
        <div className="layout relative h-screen">
            <div className="w-4/5 pt-16 text-center mx-auto ">


                <h2 className='text-4xl'>Admin Panel</h2>
                <div className="create mt-14 flex flex-col justify-center items-center">
                    <button className='p-3 w-44 rounded-md bg-blue-700 text-white' >Create Course</button>

                    <div className="create-form  absolute w-2/3 h-2/3 top-[220px] rounded-lg flex   bg-white shadow-md">

                        <div className="course-img  flex flex-col justify-center items-center w-1/3">
                            <img className='w-4/5 rounded-md' src="https://img.freepik.com/free-vector/flat-design-online-courses-illustration_23-2148528493.jpg" alt="" />
                            <button className='p-2 mt-3 w-44 rounded-md bg-blue-700 text-white' >Upload Photo</button>
                        </div>
                        <div className="course-data flex flex-col justify-start  w-1/2">
                            <input className='w-2/3 bg-slate-200 rounded-md p-3' type="text" name="" id="" placeholder='Enter Course Name ..' />
                        </div>


                    </div>
                </div>
            </div>
        </div>


    </>
    )
}
