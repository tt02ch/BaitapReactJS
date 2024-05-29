import thumnail from "../assets/img/Image.png"
export const Secition4 = () => {
    return (
        <>
            <div className="py-[120px]">
                <div className="container mx-auto flex justify-between items-center">
                    <div className="leading-[30px]">
                        <div className="leading-[30px] mb-[60px]">
                            <h2 className="text-dark text-[30px] font-[800]">Boost your workflow with Horizon</h2>
                            <div className="font-[500] text-light text-[16px]">Urna duis convallis convallis tellus interdum velit laoreet pentesque aliquam tortor consequat porta.</div>
                        </div>
                        <div className="grid grid-cols-2 grid-rows-2 gap-x-[40px] gap-y-[60px]">
                            <div className="flex flex-col items-start">
                                <div className="text-dark font-[800] text-[36px]">340+</div>
                                <div className="text-dark font-[700] text-[16px]">Successful Projects</div>
                                <div className="text-light font-[500] text-[16px] w-[230px]">Urna duis convallis convallis tellus interdum velit laoreet.</div>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="text-dark font-[800] text-[36px]">340+</div>
                                <div className="text-dark font-[700] text-[16px]">Successful Projects</div>
                                <div className="text-light font-[500] text-[16px] w-[230px]">Urna duis convallis convallis tellus interdum velit laoreet.</div>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="text-dark font-[800] text-[36px]">340+</div>
                                <div className="text-dark font-[700] text-[16px]">Successful Projects</div>
                                <div className="text-light font-[500] text-[16px] w-[230px]">Urna duis convallis convallis tellus interdum velit laoreet.</div>
                            </div>
                            <div className="flex flex-col items-start">
                                <div className="text-dark font-[800] text-[36px]">340+</div>
                                <div className="text-dark font-[700] text-[16px]">Successful Projects</div>
                                <div className="text-light font-[500] text-[16px] w-[230px]">Urna duis convallis convallis tellus interdum velit laoreet.</div>
                            </div>
                        </div>
                    </div>
                    <div> 
                     <img src={thumnail} alt="thumb" />
                    </div>
                </div>
            </div>
        </>
    );
}