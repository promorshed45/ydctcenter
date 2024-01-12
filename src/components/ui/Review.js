import Image from 'next/image';
import team from '@/assets/img2.png';
import { GoCodeReview } from "react-icons/go";

const Review = () => {
    return (
        <>
            <section className="text-gray-400 bg-gray-900 body-font">
                <div className="container px-5 py-24 mx-auto">
                    <h1 className="text-3xl font-medium title-font text-white mb-12 text-center">Testimonials</h1>
                    <div className="flex flex-wrap -m-4">
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                            <GoCodeReview className="block w-10 h-10 text-gray-500 mb-6"/>
                                <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                                <a className="inline-flex items-center">
                                    <Image alt="team" src={team} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">Holden Caulfield</span>
                                        <span className="text-gray-500 text-sm">UI DEVELOPER</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                        <div className="p-4 md:w-1/2 w-full">
                            <div className="h-full bg-gray-800 bg-opacity-40 p-8 rounded">
                            <GoCodeReview className="block w-10 h-10 text-gray-500 mb-6"/>
                                <p className="leading-relaxed mb-6">Synth chartreuse iPhone lomo cray raw denim brunch everyday carry neutra before they sold out fixie 90's microdosing. Tacos pinterest fanny pack venmo, post-ironic heirloom try-hard pabst authentic iceland.</p>
                                <a className="inline-flex items-center">
                                    <Image alt="team" src={team} className="w-12 h-12 rounded-full flex-shrink-0 object-cover object-center" />
                                    <span className="flex-grow flex flex-col pl-4">
                                        <span className="title-font font-medium text-white">Alper Kamu</span>
                                        <span className="text-gray-500 text-sm">DESIGNER</span>
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default Review;