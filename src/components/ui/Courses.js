import Image from 'next/image';
import office from '@/assets/office.jpg';
import graphics from '@/assets/graphics.png';
import { CiCalendarDate } from "react-icons/ci";
import { FcCalendar } from "react-icons/fc";

const Courses = () => {
    return (
        <section className="text-gray-600 bg-[#0f041c] body-font">
            <div className="container px-10 py-20 mx-auto">
                <div className='text-center pb-10'><header className="footer-title normal-case text-4xl text-[#12d3cf]"> Our Courses</header></div>
                <div className="flex flex-wrap -m-4">
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-slate-950 border border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                            <Image src={office} alt='office' />
                            <div className="flex gap-5 pl-5 pt-3 items-center border-b border-gray-500 pb-3 flex-wrap">
                                <div className="text-md bg-rose-200 rounded-sm py-2 px-3 text-gray-800 inline-flex items-center md:mb-2 lg:mb-0"><FcCalendar className='text-2xl font-bold' /> <p className="pl-3"> Enrolment Last Date : 10 January 2024  </p> </div>
                            </div>
                            <div className="px-6 py-3">
                                <header className="footer-title normal-case text-lg text-[#12d3cf]"> Computer Office Application</header>
                                {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1> */}
                                <p className="leading-relaxed mb-3"> Comprehensive Microsoft Office course covers Word, Excel, PowerPoint, Outlook. From basics to advanced features, enhance productivity and proficiency.</p>
                                <div className="flex justify-center items-center flex-wrap">
                                    <button className="btn btn-primary w-full border-[#12d3cf] hover:bg-transparent hover:border-[#12d3cf] [#12d3cf] bg-[#12d3cf] hover:text-[#12d3cf] text-gray-800 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    {/* Repeat the above structure for the other two items */}

                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-slate-950 border border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                            <Image src={office} alt='office' />
                            <div className="flex gap-5 pl-5 pt-3 items-center border-b border-gray-500 pb-3 flex-wrap">
                                <div className="bg-rose-200 rounded-sm py-2 px-3 text-gray-800 inline-flex items-center md:mb-2 lg:mb-0"><FcCalendar className='text-2xl font-bold' /> <p className="pl-3"> Enrolment Last Date : 10 January 2024  </p> </div>
                            </div>
                            <div className="px-6 py-3">
                                <header className="footer-title normal-case text-lg text-[#12d3cf]"> Computer Office Application</header>
                                {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1> */}
                                <p className="leading-relaxed mb-3"> Comprehensive Microsoft Office course covers Word, Excel, PowerPoint, Outlook. From basics to advanced features, enhance productivity and proficiency.</p>
                                <div className="flex justify-center items-center flex-wrap">
                                    <button className="btn btn-primary w-full border-[#12d3cf] hover:bg-transparent hover:border-[#12d3cf] [#12d3cf] bg-[#12d3cf] hover:text-[#12d3cf] text-gray-800 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="p-4 md:w-1/3">
                        <div className="h-full bg-slate-950 border border-gray-500 border-opacity-60 rounded-lg overflow-hidden">
                            <Image src={office} alt='office' />
                            <div className="flex gap-5 pl-5 pt-3 items-center border-b border-gray-500 pb-3 flex-wrap">
                                <div className="bg-rose-200 rounded-sm py-2 px-3 text-gray-800 inline-flex items-center md:mb-2 lg:mb-0"><FcCalendar className='text-2xl font-bold' /> <p className="pl-3"> Enrolment Last Date : 10 January 2024  </p> </div>
                            </div>
                            <div className="px-6 py-3">
                                <header className="footer-title normal-case text-lg text-[#12d3cf]"> Computer Office Application</header>
                                {/* <h1 className="title-font text-lg font-medium text-gray-900 mb-3">The Catalyzer</h1> */}
                                <p className="leading-relaxed mb-3"> Comprehensive Microsoft Office course covers Word, Excel, PowerPoint, Outlook. From basics to advanced features, enhance productivity and proficiency.</p>
                                <div className="flex justify-center items-center flex-wrap">
                                    <button className="btn btn-primary w-full border-[#12d3cf] hover:bg-transparent hover:border-[#12d3cf] [#12d3cf] bg-[#12d3cf] hover:text-[#12d3cf] text-gray-800 inline-flex items-center md:mb-2 lg:mb-0">Learn More
                                        <svg
                                            className="w-4 h-4 ml-2"
                                            viewBox="0 0 24 24"
                                            stroke="currentColor"
                                            strokeWidth="2"
                                            fill="none"
                                            strokeLinecap="round"
                                            strokeLinejoin="round"
                                        >
                                            <path d="M5 12h14"></path>
                                            <path d="M12 5l7 7-7 7"></path>
                                        </svg>
                                    </button>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Courses;