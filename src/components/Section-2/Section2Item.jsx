export const Section2Item = (props) => {
    // console.log(props)
    const {Number,Title,Desc} = props

    return (
        <>
            <div className="flex  mr-[40px]">
                <div className="w-[48px] h-[48px] rounded-[50%] bg-[#4318FF] inline-flex justify-center items-center text-white mr-[18px]">{Number}</div>
                <div className="flex-1">
                    <div className="font-[700] text-[16px] text-dark">{Title}</div>
                    <div className="font-[500] text-[16px] text-light">{Desc}</div>
                </div>
            </div>
            
        </>
    );
}