import logo from "../assets/img/Horizon UI Logo.svg"

export const Header = () => {
  return (
    <>
         {/* header */}
      <header className="py-[26px]">
        <div className=" container mx-auto">
          <div className="flex justify-between items-center">

            {/* logo  */}
            <div className="">
              <a href="/">
                <img src={logo} alt="Logo" />
              </a>
            </div>

            {/* menu  */}
            <nav className="">
              <ul className="flex items-center">
                <li className="font-[400] text-[14px] mr-[48px] text-black hover:border-b-2 border-[#4318FF]">
                  <a href="/">
                    Product
                  </a>
                </li>
                <li className="font-[400] text-[14px] mr-[48px] text-black hover:border-b-2 border-[#4318FF]">
                  <a href="/">
                    Features
                  </a>
                </li>
                <li className="font-[400] text-[14px] mr-[48px] text-black hover:border-b-2 border-[#4318FF]">
                  <a href="/">
                    Pricing
                  </a>
                </li>
                <li className="font-[400] text-[14px] text-black hover:border-b-2 border-[#4318FF]">
                  <a href="/">
                    Companny
                  </a>
                </li>
              </ul>
            </nav>

            {/* btn-action  */}
            <div className="flex">
              <button className="block px-[16px] py-[8px] mr-[4px] rounded-[10px]  hover:bg-[#E9E3FF] hover:font-[700] hover:text-[#4318FF] ">Log In</button>
              <button className="block px-[16px] py-[8px] mr-[4px] rounded-[10px]  hover:bg-[#E9E3FF] hover:font-[700] hover:text-[#4318FF]">Sign Up</button>
            </div>
          </div>
        </div>
      </header>
      {/* End- header  */}
    </>
  )
}