import Image from "next/image";
import img1 from '@/assets/img1.png'
import img2 from '@/assets/img2.png'
import img3 from '@/assets/img3.png'
import img4 from '@/assets/img4.png'
import img5 from '@/assets/img5.png'
import logo from '@/assets/logo.png'


const Header = () => {
    return (
        <>
            <div className="z-10">
                <div className="hero min-h-screen" style={{ backgroundImage: 'url(https://i.ibb.co/QdnYRDc/bannerBg.jpg)' }}>
                    <div className="hero-overlay bg-[#0a0716] bg-opacity-80"></div>
                    <div className="hero-content flex-col md:flex-row-reverse gap-10">
                        {/* <div className="w-1/2">
                    <img src="https://i.ibb.co/80DWs8x/doante-blankets-7.jpg" className="max-w-sm rounded-lg shadow-2xl" />
                    </div> */}

                        <div className="grid grid-col-2 grid-flow-col w-1/3 gap-4">
                            <div className="space-y-3">
                                <Image src={img1} alt="image1"/> 
                                <Image src={img2} alt="image2"/> 
                            </div>
                            <div className="space-y-3">
                                <div className=""> <Image src={img3} alt="image2"/> </div>
                                <Image src={img4} alt="image2"/>
                                <div>
                                <Image src={img5} alt="image2"/>
                                </div>

                            </div>
                        </div>
                        <div className="absolute top-20 left-16 w-32"> <Image src={logo} alt="logo" /> </div>
                        <div className="w-2/3 gap-20 text-center">
                            <h1 className="text-xl  text-[#59C6CE] "> Approved by Government of the People's Republic of Bangladesh </h1>
                            <h1 className="text-xl  text-[#59C6CE] "> Govt. Reg. No. CH-11600/2016, A Project of ICT Knowledge Ltd.</h1>
                            <h1 className="text-3xl md:text-4xl lg:text-3xl font-bold mt-5 text-white"> Youth Development Computer Training Center </h1>
                            <span className="text-3xl md:text-4xl lg:text-xl mt-5 text-white"> Not Only Education, But Also Technology Based Education is Needed...</span>
                        <div className="py-3">
                            <h1 className="text-3xl md:text-4xl lg:text-4xl font-bold mt-5 text-green-500"> যুব উন্নয়ন কম্পিউটার প্রশিক্ষণ কেন্দ্র </h1>
                            <span className="text-3xl md:text-4xl lg:text-2xl pt-7 text-yellow-600"> শুধু শিক্ষিত নয়, চাই তথ্য প্রযুক্তির শিক্ষায় শিক্ষিত জাতি... </span>
                        </div>


                            {/* <p className="py-6 text-lg text-slate-300"> We can achieve our fundraising goals when we unite our efforts and work collaboratively towards a common purpose. </p> */}
                            <div className="text-center"><button className="normal-case text-slate-300 font-semibold rounded-tl-2xl rounded-br-2xl border-primary text-xl border-2 py-3 px-3 lg:px-8 rounded-l-0  hover:text-slate-300 bg-primary hover:border-primary hover:bg-transparent"> Join Now </button> </div>
                        </div>
                    </div>
                </div>

            </div>
        </>
    );
};

export default Header;