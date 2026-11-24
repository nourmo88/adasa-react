
import { Link } from 'react-router-dom';
export default function Notfound() {
    return (
        <>
            <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden pb-10">

                <div className="absolute inset-0 
                bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
                bg-size-[60px_60px]">
                </div>

                <div className="relative z-10 text-center">
                    <h2 className="text-[#fc8b00] text-[180px] font-bold my-0 pt-10">404</h2>
                    <div className="bg-[#452e07] rounded-full mx-auto flex items-center justify-center size-20 border border-[#ff6900]">
                        <i className="fa-regular fa-face-frown text-[#ff6900] text-[40px]"></i>
                    </div>
                    <h3 className="text-white text-[30px] font-bold my-0 pt-6">
                        عفواً! الصفحة غير موجودة
                    </h3>
                    <p className="text-gray-500 text-[18px] sm:w-[60%] md:w-[40%] mx-auto my-0 pt-4">
                        الصفحة التي تبحث عنها غير موجودة أو تم نقلها. دعنا نعيدك إلى المسار الصحيح.
                    </p>
                    <div className="flex flex-wrap justify-evenly md:w-[50%] sm:w-[60%] mx-auto my-0 py-3 mt-6">
                        <button className="bg-[#ff6900] text-white px-6 py-3 rounded-full hover:-translate-y-1.25 transition-all duration-300">
                            <Link to="/">
                                <i className="fa-regular fa-house text-white me-2"></i>
                                الذهاب إلى الرئيسية</Link>
                        </button>
                        <button className="text-[#ff6900] px-6 py-3 rounded-full border border-[#ff6900] hover:bg-[#ff6900] hover:text-white transition-all duration-300 group">
                            <Link to="/blog">
                                <i className="fa-regular fa-newspaper text-[#ff6900] me-2 group-hover:text-white transition-all duration-300"></i>
                                تصفح المقالات
                            </Link>
                        </button>
                    </div>
                </div>

            </div>

        </>
    )
}
