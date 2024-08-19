import { useState } from "react";
import { auth, db } from "../../firebase-config";
import { doc, getDoc, updateDoc } from "firebase/firestore";
import { useEffect } from "react";
import { useSelector } from "react-redux";

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

  const translate = useSelector(state => state.language.translation);

  const [userData, setUserData] = useState({
    fullName: "",
    email: "",
    phone: "",
    country: "",
    city: "",
  }); // لتخزين بيانات المستخدم
  const [loading, setLoading] = useState(true); // لتتبع حالة التحميل
  const [error, setError] = useState({
    fullNameError: "",
    phoneError: "",
    generalError: "",
  }); // لتخزين رسالة الخطأ في حال حدوثه

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

            // تحديث حالة userData بالبيانات المستلمة
          } else {
            setError({
              ...error,
              generalError: "No such document!",
            }); // إذا لم توجد الوثيقة
          }
        } else {
          setError({
            ...error,
            generalError: "No user is signed in.",
          }); // إذا لم يكن هناك مستخدم مسجل
        }
      } catch (err) {
        setError({
          ...error,
          generalError: "Failed to load user data.",
        }); // التعامل مع الأخطاء
        console.error("Error fetching user data:", err);
      } finally {
        setLoading(false); // تحديد أن الجلب قد اكتمل
      }
    };

    fetchUserData(); // استدعاء الدالة عند تحميل المكون
  }, []);

  const validFullName = /^[a-zA-Z\s]{3,50}$/;
  const validPhone = /^\d{7,15}$/;

  const handleUserData = (e) => {
    if (e.target.name === "fullName") {
      setUserData({
        ...userData,
        fullName: e.target.value,
      });
      console.log(userData);
      setError({
        ...error,
        fullNameError:
          !validFullName.test(e.target.value) &&
          "Please enter a valid full name (3-50 letters).",
      });
    } else if (e.target.name === "phone") {
      setUserData({
        ...userData,
        phone: e.target.value,
      });
      setError({
        ...error,
        phoneError:
          !validPhone.test(e.target.value) &&
          "Please enter a valid phone number (7-15 numbers).",
      });
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
      } else {
        setError({
          ...error,
          generalError: "No user is signed in.",
        });
      }
    } catch (err) {
      setError({
        ...error,
        generalError: "Failed to update user data.",
      });
      console.error("Error updating user data:", err);
    }
  };

  const [iconUpdate, setIconUpdate] = useState(false);
  const handleToUpdate = () => {
    iconUpdate ? setIconUpdate(false) : setIconUpdate(true);
  };

  if (loading) return <p>Loading...</p>; // عرض رسالة التحميل أثناء انتظار البيانات
  if (error.generalError) return <p>{error.generalError}</p>;

  return (
    <>
      <section className="layout py-12">
        <div className="w-full px-10 md:w-3/4 lg:w-1/2 m-auto">
          <div className="m-auto rounded bg-white relative">
            <figure className="w-10" onClick={handleToUpdate}>
              <img src="../../../public/update-icon.png" alt="" />
            </figure>
            <h4 className="text-2xl font-bold text-center pt-[100px]">
              {translate.EditYourProfileDetails}
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
                  {translate.FullName}
                </label>
                <input
                  className="focus:outline-none w-full rounded border-solid border-2 border-[#AFAFAF] p-2"
                  type="text"
                  pattern="^[a-zA-Z\s]{2,50}$"
                  name="fullName"
                  value={userData.fullName}
                  onChange={iconUpdate ? (e) => handleUserData(e) : null}
                />
                {error.fullNameError && (
                  <span className="text-red-500">{error.fullNameError}</span>
                )}
              </div>

              <div className="my-4">
                <label className="font-bold" htmlFor="">
                  {translate.Email}
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
                    {translate.Country}
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
                    {translate.City}
                  </label>
                  <input
                    className="focus:outline-none w-full rounded border-solid border-2 border-[#AFAFAF] p-2"
                    type="text"
                    value={userData.city}
                    readOnly
                  />
                </div>
              </div>

              <div className="my-4">
                <label className="font-bold" htmlFor="">
                  {translate.PhoneNumber}
                </label>
                <input
                  className="focus:outline-none w-full rounded border-solid border-2 border-[#AFAFAF] p-2"
                  type="text"
                  name="phone"
                  defaultValue={userData.phone}
                  onChange={(e) => handleUserData(e)}
                />
                {error.phoneError && (
                  <span className="text-red-500">{error.phoneError}</span>
                )}
              </div>

              <div className="my-4">
                <label className="font-bold" htmlFor="">
                  {translate.ResetPassword}
                </label>
                <input
                  className="focus:outline-none w-full rounded border-solid border-2 border-[#AFAFAF] p-2"
                  type="text"
                  placeholder="password"
                />
              </div>

              <div className="mt-10 flex justify-between flex-col md:flex-row gap-5 md:gap-0">
                <button className="bg-[#676767] px-4 py-1 rounded-md">
                  {translate.Cancel}
                </button>
                <button className="bg-[#EFA400] px-4 py-1 text-white rounded-md">
                  {translate.UpdateProfile}
                </button>
              </div>
            </form>
          </div>
        </div>
      </section>
    </>
  );
}
