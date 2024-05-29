import { Section2Item } from "./Section-2/Section2Item";

export const Section2 = () => {
    return (
        <>
            {/* Section - 2  */}
            <div className=" py-[120px]">
                <div className="container mx-auto flex flex-col items-center">
                    <div className="mb-[60px]">
                        <h2 className="font-[800] text-[36px] text-dark mb-[10px] text-center">How Horizon works?</h2>
                        <div className="text-light font-[500px] text-[16px]">Tellus rutrum tellus pellentesque eu tincidunt tortor condimentum.</div>
                    </div>
                    <div className="flex leading-[30px]">
                        <Section2Item 
                            Number="1"
                            Title ="Create your Account"
                            Desc = "Condimentum vit pellemsque habitant morbi at molestie."
                        />
                        <Section2Item 
                            Number="2"
                            Title ="Setup your Account"
                            Desc = "Condimentum vit pellemsque habitant morbi at molestie."
                        />
                        <Section2Item 
                            Number="3"
                            Title ="Start creating with Horizon"
                            Desc = "Condimentum vit pellemsque habitant morbi at molestie."
                        />
                    </div>
                </div>
            </div>
            {/* End - Section-2 */}
        </>
    );
}