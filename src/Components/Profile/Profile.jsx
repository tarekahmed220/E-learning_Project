import { auth } from "../../firebase-config";

export default function Profile() {
  // const x = 5;
  console.log(auth.currentUser.displayName);
  
  return (
    <>
      <section className="layout py-12">
        <div className="w-full px-10 md:w-3/4 lg:w-1/2 m-auto">
          <div className="m-auto rounded bg-white relative">
            <figure className="w-[80px] absolute left-1/2 -translate-x-1/2 top-[-40px]">
              <img
                className="w-full"
                src="../../../public/undraw_pic_profile_re_7g2h.svg"
                alt=""
              />
            </figure>
            <h4 className="text-2xl font-bold text-center pt-[100px]">
              Edit Your Profile Details
            </h4>
            <form className="px-[10%] py-10">
              <div className="my-4">
                <label className="font-bold" htmlFor="">
                  Full Name
                </label>
                <input
                  className="focus:outline-none w-full rounded border-solid border-2 border-[#AFAFAF] p-2"
                  type="text"
                  value={auth.currentUser.displayName}
                />
              </div>

              <div className="my-4">
                <label className="font-bold" htmlFor="">
                  Email Address
                </label>
                <input
                  className="focus:outline-none w-full rounded border-solid border-2 border-[#AFAFAF] p-2"
                  type="text"
                  value={auth.currentUser.email}
                />
              </div>

              <div className="my-4 grid grid-cols-1 md:grid-cols-2 gap-3">
                <div>
                  <label className="font-bold" htmlFor="">
                    Country
                  </label>
                  <input
                    className="focus:outline-none w-full rounded border-solid border-2 border-[#AFAFAF] p-2"
                    type="text"
                  />
                </div>
                <div>
                  <label className="font-bold" htmlFor="">
                    City
                  </label>
                  <input
                    className="focus:outline-none w-full rounded border-solid border-2 border-[#AFAFAF] p-2"
                    type="text"
                    placeholder="Egypt"
                  />
                </div>
              </div>

              <div className="my-4">
                <label className="font-bold" htmlFor="">
                  Phone Number
                </label>
                <input
                  className="focus:outline-none w-full rounded border-solid border-2 border-[#AFAFAF] p-2"
                  type="text"
                  placeholder="phone"
                />
              </div>

              <div className="my-4">
                <label className="font-bold" htmlFor="">
                  Reset Password
                </label>
                <input
                  className="focus:outline-none w-full rounded border-solid border-2 border-[#AFAFAF] p-2"
                  type="text"
                  placeholder="password"
                />
              </div>

              <div className="mt-10 flex justify-between flex-col md:flex-row gap-5 md:gap-0">
                <button className="bg-[#676767] px-4 py-1 rounded-md">
                  Cancel
                </button>
                <button className="bg-[#EFA400] px-4 py-1 text-white rounded-md">
                  Update Profile
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
