import icon1 from "../assets/img/icon 1.png"
import banner1 from "../assets/img/Frame 59.png"
import { FaPhone } from "react-icons/fa6";
export const Secition1 = () => {
    return (
        <>
        {/* Section - 1  */}
      <div className="container mx-auto flex pb-[80px]">
        <div className="w-[50%] pt-[98px]">
          <div className="flex mb-[10px]" >
            <img src={icon1} alt="icon1" className="mr-[11px]" />
            <div className="font-[700] text-[14px] text-[#4318FF]">TRENDIEST TAILWIND TEMPLATES </div>
          </div>
          <h1 className="font-[800] text-[60px] text-dark mb-[24px]">Take your website to the next level with Horizon UI</h1>
          <div className="text-light font-[500] text-[16px] w-[429px] leading-[30px]">Save hundreds of hours trying to create and develop a dashboard from scratch. The fastest, most responsive & trendiest dashboard is here. Seriously.</div>
          <div className="flex mt-[24px]">
            <div className="px-[28px] py-[16px] rounded-[10px] bg-[#4318FF] text-white">
              <a href="/" className="font-[700] text-[14px]">Get started now</a>
            </div>
            <div className="flex px-[28px] py-[16px] rounded-[10px]">
              <FaPhone className="mr-[6px] " />
              <a href="/" className="font-[700] text-[14px] text-dark">Book a free call</a>
            </div>
          </div>
        </div>

        
        <div className="w-[50%]">
          <img src={banner1} alt="banner" className="float-right"/>
        </div>
      </div>
      {/* End - Section-1 */}
        </>
    );
}