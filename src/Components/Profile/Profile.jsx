import { useState } from "react";
import { auth, db } from "../../firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";

export default function Profile() {
  //   // const x = 5;
  //   // console.log(auth);
  //   let userData;
  //   const user = auth.currentUser;
  //   console.log(user);

  //   // console.log(db);

  // const docRef = doc(db, "users", user.uid);
  // const docSnap = await getDoc(docRef);

  // if (docSnap.exists()) {
  //   // console.log("Document data:", docSnap.data().fullName);
  //   userData = docSnap.data();
  // } else {
  //   // docSnap.data() will be undefined in this case
  //   console.log("No such document!");
  // }

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
  }); // لتخزين بيانات المستخدم
  const [loading, setLoading] = useState(true); // لتتبع حالة التحميل
  const [error, setError] = useState(null); // لتخزين رسالة الخطأ في حال حدوثه

  useEffect(() => {
    const fetchUserData = async () => {
      try {
        const user = auth.currentUser; // الحصول على المستخدم الحالي
        if (user) {
          const docRef = doc(db, "users", user.uid); // مرجع الوثيقة في Firestore
          const docSnap = await getDoc(docRef); // جلب بيانات الوثيقة

          if (docSnap.exists()) {
            setUserData(docSnap.data());
            console.log(docSnap.data());
            // docSnap.data() = userData
            
            // تحديث حالة userData بالبيانات المستلمة
          } else {
            setError("No such document!"); // إذا لم توجد الوثيقة
          }
        } else {
          setError("No user is signed in."); // إذا لم يكن هناك مستخدم مسجل
        }
      } catch (err) {
        setError("Failed to load user data."); // التعامل مع الأخطاء
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false); // تحديد أن الجلب قد اكتمل
      }
    };

    fetchUserData(); // استدعاء الدالة عند تحميل المكون
  }, []);

  const handleUserData = (e) => {
    if (e.target.name == "fullName") {
      setUserData({
        ...userData,
        fullName: e.target.value,
      });
      console.log(userData);
    }
  };

  const handleSubmit = async (e) => {
    
    e.preventDefault();

    try {
      const user = auth.currentUser;
      if (user) {
        const docRef = doc(db, "users", user.uid);
        await updateDoc(docRef, userData);
        console.log("User data updated successfully!");
        console.log(user.displayName);
        
      } else {
        setError("No user is signed in.");
      }
    } catch (err) {
      setError("Failed to update user data.");
      console.error("Error updating user data:", err);
    }
  };

  if (loading) return <p>Loading...</p>; // عرض رسالة التحميل أثناء انتظار البيانات
  if (error) return <p>{error}</p>;

  return (
    <>
      <section className="layout py-12">
        <div className="w-full px-10 md:w-3/4 lg:w-1/2 m-auto">
          <div className="m-auto rounded bg-white relative">
            <h4 className="text-2xl font-bold text-center pt-[100px]">
              Edit Your Profile Details
            </h4>
            <form onSubmit={(e) => handleSubmit(e)} className="px-[10%] py-10">
              <figure className="w-[80px] absolute left-1/2 -translate-x-1/2 top-[-40px]">
                <img
                  className="w-full"
                  src="../../../public/undraw_pic_profile_re_7g2h.svg"
                  alt=""
                />
              </figure>
              <div className="my-4">
                <label className="font-bold" htmlFor="">
                  Full Name
                </label>
                <input
                  className="focus:outline-none w-full rounded border-solid border-2 border-[#AFAFAF] p-2"
                  type="text"
                  name="fullName"
                  value={userData.fullName}
                  onChange={(e) => handleUserData(e)}
                />
              </div>

              <div className="my-4">
                <label className="font-bold" htmlFor="">
                  Email Address
                </label>
                <input
                  className="focus:outline-none w-full rounded border-solid border-2 border-[#AFAFAF] p-2"
                  type="text"
                  value={userData.email}
                  readOnly
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
                    value={userData.country}
                    readOnly
                  />
                </div>
                <div>
                  <label className="font-bold" htmlFor="">
                    City
                  </label>
                  <input
                    className="focus:outline-none w-full rounded border-solid border-2 border-[#AFAFAF] p-2"
                    type="text"
                    value={userData.city}
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
                  value={userData.phone}
                  readOnly
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
