import { Link } from "react-router-dom";
import Displayblogs from "../Displayblogs/Displayblogs";
import Categorys, { type Category } from "../Categorys/Categorys";
import Vertical from "../Vertical/Vertical";
export interface Blog {
    id: number;
    slug: string;
    title: string;
    excerpt: string;
    author: {
        name: string;
        avatar: string;
        role: string;
    };
    image: string;
    date: string;
    readTime: string;
    featured: boolean;
    tags: string[];
    category: string;
}

interface ChooseartinhomeProps {
    blog: Blog[];
    category: Category[];
}
export default function Chooseartinhome({ blog, category }: ChooseartinhomeProps) {
  
  return (
    <>
      <div className="px-8 headd row justify-between items-end bg-[#0d0b0a] pb-16 pt-20">
        <div className="sec">
          <div className="orgdiv relative w-20 rounded-3xl row p-2 px-3 justify-end bg-[#25160b] border border-[#64320e]">
            <p className="text-white">
              مميز
            </p>
          </div>
          <h2 className="text-[60px] font-bold">
            مقالات مختارة
          </h2>
          <p className="text-[#a1a1a1] text-[18px]">
            محتوى منتقى لبدء رحلة تعلمك
          </p>
        </div>
        <div className="btnn">
          <button className="bg-[#f85000] text-white rounded-2xl p-2 px-4 group w-37.5">
            <Link to="blog">
              عرض الكل
              <i className="fa-solid fa-angle-left group-hover:ms-2 transition-all duration-300"></i>
            </Link>
          </button>
        </div>
      </div>
      <div className="bbody px-8 py-10 min-h-screen bg-[#0d0b0a] cursor-pointer">
        {blog.slice(0, 3).map((currentBlog) => (
          <Displayblogs key={currentBlog.id} blog={currentBlog} />
        ))}
      </div>
      <div className="px-8 headd row justify-between items-end bg-[#111111] pb-16 pt-20">
        <div className="sec w-full text-center">
          <div className="orgdiv relative w-30 mx-auto rounded-3xl row p-2 px-3 justify-end bg-[#25160b] border border-[#64320e]">
            <p className="text-white">
              التصنيفات
            </p>
          </div>
          <h2 className="text-[60px] font-bold">
            استكشف حسب الموضوع
          </h2>
          <p className="text-[#a1a1a1] text-[18px]">
            اعثر على محتوى مصمم حسب اهتماماتك
          </p>
        </div>

      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4 px-8 py-10 bg-[#111111] min-h-screen">
        {category.map((currentCategory) => (
          <Categorys key={currentCategory.name} category={currentCategory} />
        ))}
      </div>
      <div className="px-8 headd row justify-between items-end bg-[#0d0b0a] pb-16 pt-20">
        <div className="sec">
          <div className="orgdiv relative w-24 rounded-3xl row p-2 px-3 justify-end bg-[#25160b] border border-[#64320e]">
            <p className="text-white">
              الأحدث
            </p>
          </div>
          <h2 className="text-[60px] font-bold">
            أحدث المقالات
          </h2>
          <p className="text-[#a1a1a1] text-[18px]">
            محتوى جديد طازج من المطبعة
          </p>
        </div>
        <Link to='blog' className="text-[#ff8904] hover:pe-2 transition-all duration-300">
          عرض جميع المقالات
          <i className="fa-solid fa-arrow-left me-auto text-[#ff8904]" ></i>
        </Link>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#0d0b0a] px-8">
        {blog.slice(3, 6).map((item) => (
          <Vertical key={item.id} blog={item}/>
        ))}
      </div>
      
    </>
  )
}
