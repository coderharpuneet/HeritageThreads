import { Outlet } from "react-router-dom";

function LoginLayout() {
  return (
    <div className="flex bg-[#a1a134] min-h-screen w-full">
      <div className="flex bg-[#F5F5F4] flex-1 items-center justify-center bg-background px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
      <div className="hidden lg:flex  h-screen items-center justify-center bg-[#c8c857] w-1/2 ">
        <img className="object-cover h-full w-full" src="https://plus.unsplash.com/premium_photo-1673288397476-f1e9c3e15a1d?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3DD" alt="" />
      </div>
    </div>
  );
}

export default LoginLayout;
