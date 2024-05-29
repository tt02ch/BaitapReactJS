import logo from "../assets/img/Horizon UI Logo.svg"
import { FaGithub } from "react-icons/fa6";
import { FaFacebookF } from "react-icons/fa";
import { FaTwitter } from "react-icons/fa";
import { SlSocialInstagram } from "react-icons/sl";
export const Footer = () => {
    return (
        <>
            <footer className="py-[80px]">
                <div className="container mx-auto flex flex-col items-center justify-center">
                    <div className="mb-[32px]">
                        <img src={logo} alt="logo" />
                    </div>
                    <nav className="mb-[24px]">
                        <ul className="flex">
                            <li className="mr-[48px] "><a className="text-light font-[500] text-[16px]" href="/">About</a></li>
                            <li className="mr-[48px] "><a className="text-light font-[500] text-[16px]" href="/">Features</a></li>
                            <li className="mr-[48px] "><a className="text-light font-[500] text-[16px]" href="/">Blog</a></li>
                            <li className="mr-[48px] "><a className="text-light font-[500] text-[16px]" href="/">Resources</a></li>
                            <li className="mr-[48px] "><a className="text-light font-[500] text-[16px]" href="/">Partners</a></li>
                            <li className="mr-[48px] "><a className="text-light font-[500] text-[16px]" href="/">Help</a></li>
                            <li className=" "><a className="text-light font-[500] text-[16px]" href="/">Terms</a></li>
                        </ul>
                    </nav>
                    <div className="mb-[32px]">
                        <ul className="flex">
                            <li className="mr-[32px]"><a href="/" target="_blank">
                                <FaFacebookF className="opacity-25 text-[24px]" />
                            </a></li>
                            <li className="mr-[32px]"><a  href="/" target="_blank">
                                <FaTwitter className="opacity-25 text-[24px]" />
                            </a></li>
                            <li className="mr-[32px]"><a href="/" target="_blank">
                                <FaGithub className="opacity-25 text-[24px]" />
                            </a></li>
                            <li className="mr-[32px]"><a href="/" target="_blank">
                                <FaFacebookF className="opacity-25 text-[24px]" />
                            </a></li>
                            <li className="mr-[32px]"><a href="/" target="_blank">
                                <SlSocialInstagram className="opacity-25 text-[24px]" />
                            </a></li>
                        </ul>
                    </div>
                    <div className="text-light text-[14px] font-[500]">© 2024 28Tech. All rights reserved.</div>
                </div>
            </footer>
        </>
    );
}