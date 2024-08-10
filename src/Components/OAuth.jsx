import { signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { FcGoogle } from "react-icons/fc";
import { auth } from "../firebase-config";
import { useNavigate } from "react-router-dom";

function OAuth() {
  const navigate = useNavigate();
  async function onGoogleRegister() {
    const provider = new GoogleAuthProvider();
    try {
      await signInWithPopup(auth, provider);
      navigate("home");
    } catch (error) {
      console.error("Error during Google Sign-In:", error);
    }
  }

  return (
    <button
      type="button"
      onClick={onGoogleRegister}
      className="uppercase w-full bg-[#F9A826] text-white py-[10px] rounded text-md flex justify-center items-center mt-1"
    >
      <FcGoogle className="mr-2 bg-white rounded-full text-2xl" />
      continue with google
    </button>
  );
}

export default OAuth;
