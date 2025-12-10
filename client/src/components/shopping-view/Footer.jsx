import footerImage from './footer.png'; //
const List1 = ["Our Tale", "Our Stories", "Terms and Conditions", "We Care"];
const List2 = ["Return Policy", "Privacy", "Cancellation", "Refund"];
const List3 = ["Payment Policy", "Shipping & Policy", "Track your order / Return", "FAQs"];
const List4 = ["Customer Care: +91 0123456789", "Service Email:sharewithus@ht.in","Legal:compliance@nexo.com","Franchise Enquiry"]; 

const Footer = () => {
  return (
      <div>
        <footer className="font-tenor w-full mt-[-12px]">
        <div className="w-full relative text-center text-black">
            <img src={footerImage} className="h-[300px] w-full object-cover" alt="" />
            <div className="absolute inset-0 flex justify-evenly items-center p-4 space-x-4">
                <div className="text-left text-xs sm:text-sm md:text-base">
                    <div className="font-bold mb-2 hover:border-b-2 hover:border-b-black lg:text-xl">About Us</div>
                    <ul className="footerList flex flex-col gap-2 font-tenor">
                    {
                        List1.map((item, index) => (
                            <li className='hover:scale-[104%] duration-150 cursor-pointer hover:text-red-600' key={index}>{ item}</li>
                        ))
                    }
                    </ul>
                </div>
                <div className=" text-left text-xs sm:text-sm md:text-base">
                    <div className="font-bold mb-2 hover:border-b-2 hover:border-b-black lg:text-xl">Policies</div>
                    <ul className="footerList flex flex-col gap-2 font-tenor">
                    {
                        List2.map((item, index) => (
                            <li className='hover:scale-[104%] duration-150 cursor-pointer hover:text-red-600' key={index}>{ item}</li>
                        ))
                    }
                    </ul>
                </div>
                <div className="text-left text-xs sm:text-sm md:text-base">
                    <div className="font-bold mb-2 hover:border-b-2 hover:border-b-black lg:text-xl">Customer Services</div>
                    <ul className="footerList flex flex-col gap-2 font-tenor">
                    {
                        List3.map((item, index) => (
                            <li className='hover:scale-[104%] duration-150 cursor-pointer hover:text-red-600' key={index}>{ item}</li>
                        ))
                    }
                    </ul>
                </div>
                <div className="max-[700px]:hidden text-left text-xs sm:text-sm md:text-base">
                    <div className="font-bold mb-2 hover:border-b-2 hover:border-b-black lg:text-xl">Contact Us</div>
                    <ul className="footerList flex gap-2 flex-col font-tenor">
                    {
                        List4.map((item, index) => (
                            <li className='hover:scale-[104%] duration-150 cursor-pointer hover:text-red-600' key={index}>{ item}</li>
                        ))
                    }
                          </ul>
                          
                </div>
            </div>
            <div className="absolute  bottom-12  w-11/12 h-[1px] bg-gray-900 left-1/2 transform -translate-x-1/2"></div>

            <div className="absolute mt-2  inset-x-0">
                <p className="text-center text-xs sm:text-sm md:text-base mb-2 font-tenor">Copyright © 2024 Heritage Threads
                    | Country
                    of Origin: India</p>
            </div>
              </div>

        <div className="w-full">
            <img src="https://heritage-threads.vercel.app/Home/images/footer.webp" className="w-full h-[400px] object-cover" alt="" />
        </div>
    </footer>

    </div>
  )
}

export default Footer
