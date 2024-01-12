import { IoLocationOutline } from "react-icons/io5";
import { MdOutlineMail } from "react-icons/md";
import { BsTelephone } from "react-icons/bs";

const Footer = () => {
    return (
        <>
            <footer className="divide-y bg-slate-950 text-gray-400 px-5 md:px-20">
                <div className="container flex flex-col justify-between py-10 mx-auto space-y-8 lg:flex-row lg:space-y-0">
                    <div className="">
                    <header className="footer-title normal-case text-lg text-[#12d3cf]">Office Address</header>
                        <div className="space-y-2">
                            <p className="flex gap-5 items-center"> <IoLocationOutline size={25} /> Aysha Ali Mansion(Ground Floor), <br></br> Pahartali, Raozan, Chattogram</p>
                            <p className="flex gap-5 items-center pl-1"> <MdOutlineMail size={20} /> ctgmorshed45@gmail.com</p>
                            <p className="flex gap-5 items-center pl-1"> <BsTelephone size={20} /> +88 01851 363745 </p>
                        </div>
                    </div>
                    <div className="grid grid-cols-2 text-sm gap-x-10 gap-y-8">
                        <div className="space-y-3 w-full">
                            <header className="footer-title normal-case text-base text-[#12d3cf]">Quick Links</header>
                            <ul className="space-y-1">
                                <li> <a rel="noopener noreferrer" href="#"> Upcoming Live Batch  </a> </li>
                                <li> <a rel="noopener noreferrer" href="#">  Free Courses </a> </li>
                                <li> <a rel="noopener noreferrer" href="#">  Live Workshop </a> </li>
                                <li> <a rel="noopener noreferrer" href="#">  Blogs </a> </li>
                            </ul>
                        </div>
                        <div className="space-y-3">
                            <header className="footer-title normal-case text-base text-[#12d3cf]">Company</header>
                            <ul className="space-y-1">
                                <li> <a rel="noopener noreferrer" href="#"> About Us  </a> </li>
                                <li> <a rel="noopener noreferrer" href="#">  Refind Policy </a> </li>
                                <li> <a rel="noopener noreferrer" href="#">  Privacy Policy </a> </li>
                                <li> <a rel="noopener noreferrer" href="#">  Terms & Condition </a> </li>
                            </ul>
                        </div>
                    </div>
                    <div className="space-y-3">
                            
                            <div className="">
                                <header className="footer-title normal-case text-center md:text-left text-base text-[#12d3cf]">Follow Us</header>
                                <div className="flex justify-center md:justify-start space-x-3">
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z"></path></svg></a>
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z"></path></svg></a>
                                    <a><svg xmlns="http://www.w3.org/2000/svg" width="20" height="24" viewBox="0 0 24 24" className="fill-current"><path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z"></path></svg></a>
                                </div>
                            </div>

                            <form className="w-full">
                                <header className="footer-title normal-case text-center md:text-left text-[#12d3cf]">Newsletter</header>
                                <fieldset className="form-control w-full">
                                    <label className="label">
                                        <span className="text-gray-400 label-text">Enter your email address</span>
                                    </label>
                                    <div className="relative">
                                        <input type="text" placeholder="username@site.com" className="input input-bordered w-full pr-16" />
                                        <button className="btn bg-[#12d3cf] absolute text-white top-0 right-0 rounded-l-none hover:bg-[#74D3AE]">Subscribe</button>
                                    </div>
                                </fieldset>
                            </form>
                        </div>
                </div>
                <div className="py-6 text-sm text-center dark:text-gray-400">
                    © 2024, Develop By: Morshed Alam.
                </div>
            </footer>
        </>
    );
};

export default Footer;