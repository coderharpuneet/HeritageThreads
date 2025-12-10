import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { loginFormControls } from "@/config";
import { loginUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { FaGoogle } from "react-icons/fa";
import { Link } from "react-router-dom";

const initialState = {
  email: "",
  password: "",
};

function AuthLogin() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();

    dispatch(loginUser(formData)).then((data) => {
      if (data?.payload?.success) {


        toast({
          title: data?.payload?.message,
        });
      } else {
        toast({
          title: data?.payload?.message,
          variant: "destructive",
        });
      }
    });
  }

  return (
    <div className="mx-auto flex flex-col gap-10 justify-center font-google w-full max-w-md">
      <div className="text-center gap-2 flex flex-col items-start justify-center">
        <h1 className="text-5xl font-bold ">
          Welcome Back!
        </h1>
        <div className="mt-2 text-left text-gray-500">
          Enter Your Email and Get Back to Interact with Other Users
        </div>
      </div>
      <CommonForm
        formControls={loginFormControls}
        buttonText={"Login"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
       <div className="flex flex-col gap-6">
        <div className="text-gray-400 items-center justify-center flex gap-2">
          <div className="bg-gray-400 h-[1px] w-[100px]"></div>
          <div>Or Login With</div>
          <div className="bg-gray-400 h-[1px] w-[100px]"></div>
        </div>
        <button className="bg-purple-700 border-2 border-purple-600 hover:bg-transparent hover:text-purple-700 duration-200 flex items-center justify-center gap-2 font-semibold text-white px-4 py-[13px] rounded-md w-full">
          <div>Sign Up with Google</div>
          <FaGoogle className="text-white"/>
        </button>
      </div>
      {/* <div className="flex justify-between items-center">
        <div className="flex gap-1 items-center justify-center">
          <input type="radio" />
          <div>Remember Me</div>
        </div>
        <div className="text-purple-700">
          <Link to={"/auth/register"}>
          Forgot Your Password?
          </Link>
        </div>
      </div> */}
      <div className="flex tracking-wide font-bold gap-2"> 
        <div>
          Don&#39;t have an Account?
        </div>
        <Link to={"/auth/register"} className="underline font-bold text-purple-700">
          Register Here 
        </Link>
      </div>
    </div>
  
  );
}

export default AuthLogin;
