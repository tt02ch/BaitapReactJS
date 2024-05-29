import user from "../assets/img/Ellipse 1.png";
export const Secition5 = () => {
    return (
        <>
            <div className="py-[120px]">
                <div className="container mx-auto ">
                    <div className="flex flex-col items-center justify-center mb-[74px] leading-[30px]">
                        <h2 className="font-[800] text-dark text-[36px] text-center mb-[16px]">Customer Testimonials</h2>
                        <div className="font-[500] text-[16px] text-light text-center w-[686.34px]">Anim aute id magna aliqua ad ad non deserunt sunt. Qui irure qui lorem cupidatat commodo. Elit sunt amet fugiat veniam occaecat fugiat aliqua.</div>
                    </div>
                    <div className="grid grid-cols-2 gap-[18px] leading-[30px]">
                        <div className="flex flex-col items-center justify-center px-[32px] py-[32px] rounded-[16px] bg-[#F6F8FD]">
                            <div className="text-dark text-[20px] font-[700] text-center mb-[37px]">“A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.”</div>
                            <div className="flex flex-col items-center justify-center">
                                <img className="mb-[16px]" src={user} alt="user" />
                                <div className="text-dark text-[18px] font-[800]">Tiana Schleifer</div>
                                <div className="text-light text-[12px] font-[600] text-center">CEO & Founder</div>
                            </div>
                        </div>
                        <div className="flex flex-col items-center justify-center px-[32px] py-[32px] rounded-[16px] bg-[#F6F8FD]">
                            <div className="text-dark text-[20px] font-[700] text-center mb-[37px]">“A must needed kit for every single software arhitect. It makes your coding life easier and your final product will be blooming.”</div>
                            <div className="flex flex-col items-center justify-center">
                                <img className="mb-[16px]" src={user} alt="user" />
                                <div className="text-dark text-[18px] font-[800]">Tiana Schleifer</div>
                                <div className="text-light text-[12px] font-[600] text-center">CEO & Founder</div>
                            </div>
                        </div>
                        
                    </div>
                </div>
            </div>
        </>
    );
}