import { Outlet } from "react-router-dom";

function RegisterLayout() {
  return (
    <div className="flex  min-h-screen w-full">
      <div className="hidden lg:flex h-screen items-center justify-center bg-black w-1/2 ">
        <img className="object-cover h-full w-full" src="https://images.unsplash.com/photo-1622542796254-5b9c46ab0d2f?q=80&w=1887&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" alt="" />
      </div>
      <div className="flex flex-1 bg-[#F1F5F8] items-center justify-center  px-4 py-12 sm:px-6 lg:px-8">
        <Outlet />
      </div>
    </div>
  );
}

export default RegisterLayout;
