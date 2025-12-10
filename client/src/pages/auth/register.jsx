import CommonForm from "@/components/common/form";
import { useToast } from "@/components/ui/use-toast";
import { registerFormControls } from "@/config";
import { registerUser } from "@/store/auth-slice";
import { useState } from "react";
import { useDispatch } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

const initialState = {
  userName: "",
  email: "",
  password: "",
};

function AuthRegister() {
  const [formData, setFormData] = useState(initialState);
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const { toast } = useToast();

  function onSubmit(event) {
    event.preventDefault();
    dispatch(registerUser(formData))
      .then((data) => {
        console.log("Registration response:", data);
        if (data?.payload?.success) {
          toast({
            title: data?.payload?.message,
          });
          navigate("/auth/login");
        } else {
          toast({
            title: data?.payload?.message || "Registration failed",
            variant: "destructive",
          });
        }
      })
      .catch((error) => {
        console.error("Registration error:", error);
        const errorMessage =
          error?.payload?.message || "Registration failed. Please try again.";
        toast({
          title: errorMessage,
          variant: "destructive",
        });
      });
  }

  console.log(formData);

  return (
    <div className="mx-auto font-google w-full max-w-md space-y-6">
      <div className="text-center mb-12 flex flex-col gap-3 items-start">
        <h1 className="text-5xl font-bold text-foreground">Register Here</h1>
        <div className="flex flex-col gap-1 mt-1">
          <p className="text-lg text-gray-500 font-bold">
            Already have an account ?{" "}
            <Link
              className="font-bold underline text-primary hover:underline"
              to="/auth/login"
            >
              Login
            </Link>
          </p>
        </div>
      </div>
      <CommonForm
        formControls={registerFormControls}
        buttonText={"Register"}
        formData={formData}
        setFormData={setFormData}
        onSubmit={onSubmit}
      />
      <div className="flex mt-10 flex-col gap-3">
        <div className="text-gray-400 items-center justify-center flex gap-2">
          <div className="bg-gray-400 h-[1px] w-[100px]"></div>
          <div>Or Login With</div>
          <div className="bg-gray-400 h-[1px] w-[100px]"></div>
        </div>
        <button className="bg-white text-black hover:bg-black hover:text-white border-2 border-black duration-150 font-semibold px-4 py-[13px] rounded-md w-full">
          Sign Up With Google
        </button>
      </div>
    </div>
  );
}

export default AuthRegister;
