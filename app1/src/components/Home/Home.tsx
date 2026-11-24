import { Link } from 'react-router-dom';
import Chooseartinhome from '../Chooseartinhome/Chooseartinhome';
import type { Blog } from '../Chooseartinhome/Chooseartinhome';
import type { Category } from '../Categorys/Categorys';

interface HomeProps {
  blog: Blog[];
  category: Category[];
}

export default function Home({ blog, category }: HomeProps) {
  return (
    <>
      <div className="min-h-screen bg-[#0a0a0a] relative overflow-hidden pb-16 pt-5">
        <div className="absolute inset-0 
                bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
                bg-size-[60px_60px]">
        </div>
        <div className="relative z-10 text-center pt-28">
          <div className="orgdiv relative w-45 mx-auto rounded-3xl row p-2 px-3 justify-end bg-[#25160b] border border-[#64320e]">
            <p className="text-white">
              مرحباً بك في عدسة
            </p>
          </div>
          <h1 className="text-white text-[72px] font-bold mb-4 leading-20 w-[60%] mx-auto py-5">
            اكتشف{" "}
            <span className="text-[#fba01f]">فن</span>
            {" "}التصوير الفوتوغرافي
          </h1>
          <p className="text-gray-500 text-2xl w-[50%] mx-auto">
            انغمس في أسرار المحترفين ونصائح عملية لتطوير مهاراتك في التصوير.
          </p>
          <div className="flex flex-wrap justify-evenly md:w-[40%] sm:w-[60%] mx-auto my-0 py-3 mt-6">
            <button className="bg-[#ff6900] text-white px-6 py-3 rounded-full hover:translate-y-1 transition-all duration-300">
              <Link to="blog">
                استكشف المقالات</Link>
              <i className="fa-solid fa-arrow-left-long text-white ms-2" ></i>
            </button>
            <button className="text-[#ff6900] px-6 py-3 rounded-full border border-[#ff6900] hover:bg-[#ff6900] hover:text-white transition-all duration-300 group">
              <Link to="">
                <i className="fa-solid fa-circle-exclamation me-2" ></i>
                اعرف المزيد
              </Link>
            </button>
          </div>
          <div className="row gap-5 justify-center items-center py-10">
            <div className="divs hover:scale-[1.1] transition-all duration-300 py-4 w-40 rounded-3xl bg-[#161514] border border-[#262626]">
              <i className="fa-solid fa-newspaper text-[#ff6900] text-3xl"></i>
              <h4 className='text-3xl font-bold text-[#ff6900]'>
                +50
              </h4>
              <span className='text-gray-700'>
                مقالة
              </span>
            </div>
            <div className="divs hover:scale-[1.1] transition-all duration-300 py-4 w-40 rounded-3xl bg-[#161514] border border-[#262626]">
              <i className="fa-solid fa-users text-[#ff6900] text-3xl"></i>
              <h4 className='text-3xl font-bold text-[#ff6900]'>
                +10ألف
              </h4>
              <span className='text-gray-700'>
                قارئ
              </span>
            </div>
            <div className="divs hover:scale-[1.1] transition-all duration-300 py-4 w-40 rounded-3xl bg-[#161514] border border-[#262626]">
              <i className="fa-solid fa-folder-open text-[#ff6900] text-3xl" ></i>
              <h4 className='text-3xl font-bold text-[#ff6900]'>
                4
              </h4>
              <span className='text-gray-700'>
                تصنيفات
              </span>
            </div>
            <div className="divs hover:scale-[1.1] transition-all duration-300 py-4 w-40 rounded-3xl bg-[#161514] border border-[#262626]">
              <i className="fa-solid fa-pen-nib text-[#ff6900] text-3xl"></i>
              <h4 className='text-3xl font-bold text-[#ff6900]'>
                6
              </h4>
              <span className='text-gray-700'>
                كاتب
              </span>
            </div>
          </div>
        </div>
      </div>

      <Chooseartinhome blog={blog} category={category}   />

      <div className="py-28 w-full min-h-screen bg-[#0d0b0a] text-center">
        <div className="Form w-[70%] p-14 mx-auto bg-[#161616] rounded-3xl">
          <div className="foricon flex justify-center items-center size-15 bg-[#f95100] rounded-2xl mx-auto">
            <i className="fa-regular fa-envelope text-white text-3xl" ></i>
          </div>
          <h4 className='font-bold text-4xl py-5'>
            اشترك في
            {" "}
            <span className='text-[#f98719]'>
              نشرتنا الإخبارية
            </span>
          </h4>
          <p className='text-gray-500 text-[18px]'>
            احصل على نصائح التصوير الحصرية ودروس جديدة مباشرة في بريدك الإلكتروني
          </p>
          <div className='py-8 row items-center justify-center gap-5'>
            <input type='email' placeholder='أدخل بريدك الالكتروني' className='bg-black rounded-2xl p-5 w-[50%]'></input>
            <button className='rounded-2xl p-5 px-8 w-[20%] bg-[#f64b00] font-bold hover:bg-[#f66200] transition-all duration-300'>
              أشترك الأن
            </button>
          </div>
          <div className="row w-[84%] mx-auto items-center">
            <div className="forimgs row">
              <img src="https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=100&h=100&fit=crop&crop=face" alt="avatar" className='rounded-full size-8 ' />
              <img src="https://images.unsplash.com/photo-1566492031773-4f4e44671857?w=100&h=100&fit=crop&crop=face" alt="avatar" className='rounded-full size-8 ' />
              <img src="https://images.unsplash.com/photo-1552058544-f2b08422138a?w=100&h=100&fit=crop&crop=face" alt="avatar" className='rounded-full size-8 ' />
            </div>
            <p className='text-gray-500 px-5'>
              انضم لـ   <span className='text-white'> +10,000 </span>مصور

            </p>
            <p className='text-gray-500 px-5'>
              بدون إزعاج
            </p>
             <p className='text-gray-500 px-5'>
              إلغاء الاشتراك في أي وقت
            </p>
          </div>

        </div>
      </div>
    </>
  )
}
