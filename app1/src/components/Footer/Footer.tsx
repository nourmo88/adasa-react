import { Link } from "react-router-dom";

export default function Footer() {
    return (
        <>
            <div className="bg-[#0a0a0a] text-[#737373] py-10 px-5">
                <div className='px-3'>
                    <div className='row justify-evenly border-b border-[#7373736e] pb-10'>
                        <div className='w-full md:w-1/2 lg:w-1/4 px-4'>
                            <div className="inner">
                                <div className="row items-center gap-3 pb-5">
                                    <div className="forlet rounded-2xl text-white p-3 bg-[#fd5b00] text-center w-fit px-5 font-bold">
                                        ع
                                    </div>
                                    <h3 className="text-[20px] font-bold text-white">
                                        عدسة
                                    </h3>
                                </div>
                                <p className="text-[#737373] pb-4 text-[14px] w-[95%] line-hieght-[23px]">
                                    مدونة متخصصة في فن التصوير الفوتوغرافي، نشارك معكم أسرار المحترفين ونصائح عملية لتطوير مهاراتكم.
                                </p>
                                <div className="foricons row gap-3">
                                    <div className="iconn w-fit rounded-2xl bg-[#161616] p-2 border border-[#737373] hover:bg-[#ff6100] hover:scale-[1.2] transition-all duration-300 group">
                                        <i className="fa-brands fa-x-twitter text-[#737373] group-hover:text-white"></i>
                                    </div>
                                    <div className="iconn w-fit rounded-2xl bg-[#161616] p-2 border border-[#737373] hover:bg-[#ff6100] hover:scale-[1.2] transition-all duration-300 group">
                                        <i className="fa-brands fa-github text-[#737373] group-hover:text-white"></i>
                                    </div>
                                    <div className="iconn w-fit rounded-2xl bg-[#161616] p-2 border border-[#737373] hover:bg-[#ff6100] hover:scale-[1.2] transition-all duration-300 group">
                                        <i className="fa-brands fa-square-linkedin text-[#737373] group-hover:text-white"></i>
                                    </div>
                                    <div className="iconn w-fit rounded-2xl bg-[#161616] p-2 border border-[#737373] hover:bg-[#ff6100] hover:scale-[1.2] transition-all duration-300 group">
                                        <i className="fa-brands fa-youtube text-[#737373] group-hover:text-white"></i>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 lg:w-1/4 px-4'>
                            <div className="inner">
                                <div className="berforeLine relative pb-2 w-[60%]">
                                    <h3 className="font-bold pt-3 text-center">
                                        استكشف
                                    </h3>
                                </div>
                                <div className="links py-3">
                                    <Link to="/" className="group flex items-center pb-3 gap-2">
                                        <i className="fa-solid fa-chevron-left text-[#ff6100] opacity-0 group-hover:opacity-100"></i>
                                        <span className="text-[#737373] group-hover:text-[#ff6100]">الرئيسية</span>
                                    </Link>
                                    <Link to="/blog" className="group flex items-center pb-3 gap-2">
                                        <i className="fa-solid fa-chevron-left text-[#ff6100] opacity-0 group-hover:opacity-100"></i>
                                        <span className="text-[#737373] group-hover:text-[#ff6100]">
                                            المدونة
                                        </span>
                                    </Link>
                                    <Link to="*" className="group flex items-center gap-2">
                                        <i className="fa-solid fa-chevron-left text-[#ff6100] opacity-0 group-hover:opacity-100"></i>
                                        <span className="text-[#737373] group-hover:text-[#ff6100]">
                                            من نحن
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 lg:w-1/4 px-4'>
                            <div className="inner">
                                <div className="berforeLine relative pb-2 w-[60%]">
                                    <h3 className="font-bold pt-3 text-center">
                                        التصنيفات
                                    </h3>
                                </div>
                                <div className="links py-3">
                                    <Link to="/blog" className="group flex items-center pb-3 gap-2">
                                        <i className="fa-solid fa-chevron-left text-[#ff6100] opacity-0 group-hover:opacity-100"></i>
                                        <span className="text-[#737373] group-hover:text-[#ff6100]">اضاءة</span>
                                    </Link>
                                    <Link to="/blog" className="group flex items-center pb-3 gap-2">
                                        <i className="fa-solid fa-chevron-left text-[#ff6100] opacity-0 group-hover:opacity-100"></i>
                                        <span className="text-[#737373] group-hover:text-[#ff6100]">
                                            بورتريه
                                        </span>
                                    </Link>
                                    <Link to="/blog" className="group flex items-center pb-3 gap-2">
                                        <i className="fa-solid fa-chevron-left text-[#ff6100] opacity-0 group-hover:opacity-100"></i>
                                        <span className="text-[#737373] group-hover:text-[#ff6100]">
                                            مناظر طبيعية
                                        </span>
                                    </Link>
                                    <Link to="/blog" className="group flex items-center gap-2">
                                        <i className="fa-solid fa-chevron-left text-[#ff6100] opacity-0 group-hover:opacity-100"></i>
                                        <span className="text-[#737373] group-hover:text-[#ff6100]">
                                            تقنيات
                                        </span>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className='w-full md:w-1/2 lg:w-1/4 px-4'>
                            <div className="inner">
                                <div className="berforeLine relative pb-2 w-[60%]">
                                    <h3 className="font-bold pt-3 text-center">
                                        ابقى على اطلاع
                                    </h3>
                                </div>
                                <p className="text-[#737373] py-4 text-[14px] w-[95%] line-hieght-[23px]">
                                    اشترك للحصول على أحدث المقالات والتحديثات.
                                </p>
                                <input type="email" placeholder="ادخل بريدك الالكتروني" className="bg-[#161616] border border-[#737373] rounded-2xl p-3 w-full focus:outline-none focus:border-[#ff6100] transition-all duration-300 my-2" />
                                <button className="bg-[#ff6100] text-white rounded-3xl p-3 w-full hover:-translate-y-1 transition-all duration-300 my-2 font-bold">
                                    اشترك
                                </button>
                            </div>
                        </div>
                    </div>
                    <div className="row pt-6 justify-between items-center ">
                        <p className="text-[#737373] text-[14px] md:w-1/2 w-full">
                            © 2026 عدسة. صنع بكل 🧡 جميع الحقوق محفوظة.
                        </p>
                        <div className="row gap-3 md:w-1/2 w-full md:justify-end">
                            <Link to="*" className="text-[#737373] text-[14px] hover:text-[#ff6100] transition-all duration-300">
                                سياسة الخصوصية
                            </Link>
                            <Link to="*" className="text-[#737373] text-[14px] hover:text-[#ff6100] transition-all duration-300">
                                شروط الخدمة
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}
