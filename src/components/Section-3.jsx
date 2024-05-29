import { MdOutlineStackedLineChart } from "react-icons/md";
import { RiUserLine } from "react-icons/ri";
import { AiOutlineMessage } from "react-icons/ai";

export const Secition3 = () => {
    return (
        <>
            <div className="py-[120px]">
                <div className="container mx-auto grid grid-cols-3 gap-[8px]">
                    <div className="leading-[30px] flex flex-col justify-center items-center">
                        <div className="w-[64px] h-[64px] rounded-[15px] bg-primary inline-flex items-center justify-center mb-[24px] ">
                            <AiOutlineMessage className="text-[24px] text-white" />
                        </div>
                        <div className="px-[32px]">
                            <div className="text-dark font-[800] text-[24px] text-center">Share team inboxes</div>
                            <div className="text-light font-[500] text-[16px] text-center ">Whether you have a team of 2 or 200, our shared team inboxes keep <br/> everyone </div>
                        </div>
                    </div>
                    <div className="leading-[30px] flex flex-col justify-center items-center">
                        <div className="w-[64px] h-[64px] rounded-[15px] bg-primary inline-flex items-center justify-center mb-[24px]">
                            <MdOutlineStackedLineChart className="text-[24px] text-white" />
                        </div>
                        <div className="px-[32px]">
                            <div className="text-dark font-[800] text-[24px] text-center">Share team inboxes</div>
                            <div className="text-light font-[500] text-[16px] text-center">Whether you have a team of 2 or 200, our shared team inboxes keep <br/> everyone </div>
                        </div>
                    </div>
                    <div className="leading-[30px] flex flex-col justify-center items-center">
                        <div className="w-[64px] h-[64px] rounded-[15px] bg-primary inline-flex items-center justify-center mb-[24px]">
                            <RiUserLine className="text-[24px] text-white" />
                        </div>
                        <div className="px-[32px]">
                            <div className="text-dark font-[800] text-[24px] text-center">Share team inboxes</div>
                            <div className="text-light font-[500] text-[16px] text-center">Whether you have a team of 2 or 200, our shared team inboxes keep <br/> everyone </div>
                        </div>
                    </div>

                </div>
            </div>
        </>
    );
}