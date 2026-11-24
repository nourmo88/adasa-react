import Vertical from "../Vertical/Vertical";
import { useState } from "react";
// import Displayblogs from "../Displayblogs/Displayblogs";
// import Details from "../Details/Details";
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
interface DisplayblogsProps {
  blog: Blog[];
}
export default function Blog({ blog }: DisplayblogsProps) {

  const [selectedCategory, setSelectedCategory] = useState("الكل");
  const [search, setSearch] = useState("");

  const categories = [
    { name: "إضاءة", count: 3, color: "emerald" },
    { name: "بورتريه", count: 3, color: "purple" },
    { name: "مناظر طبيعية", count: 2, color: "blue" },
    { name: "تقنيات", count: 5, color: "orange" },
    { name: "معدات", count: 3, color: "emerald" }
  ];

  const filteredBlogs = selectedCategory === "الكل"
    ? blog.slice(0, 6)
    : blog.filter(item => item.category === selectedCategory);

  return (
    <>
      <div className=" bg-[#0a0a0a] relative overflow-hidden py-14">
        <div className="absolute inset-0 
                bg-[linear-gradient(rgba(255,255,255,0.05)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.05)_1px,transparent_1px)]
                bg-size-[60px_60px]">
        </div>

        <div className="relative z-10 text-center pt-28">
          <div className="orgdiv relative w-30 mx-auto rounded-3xl row p-2 px-3 justify-end bg-[#25160b] border border-[#64320e]">
            <p className="text-white">
              <i className="fa-solid fa-newspaper pe-3"></i>
              مدونتنا
            </p>
          </div>
          <h2 className="text-white text-[60px] font-bold leading-20 w-[60%] mx-auto py-5">
            استكشف{" "}
            <span className="text-[#fba01f]">
              مقالاتنا
            </span>
          </h2>
          <p className="text-gray-500 text-[20px] w-[50%] mx-auto">
            اكتشف الدروس والرؤى وأفضل الممارسات للتطوير الحديث
          </p>


        </div>
      </div>

      <div className='bg-[#0a0a0a] min-h-screen px-8 py-10'>
        <div className="btnLinks row justify-between items-center pb-8 border-b border-gray-700">

          <input
            type="text"
            placeholder="ابحث في المقالات"
            onChange={(e) => setSearch(e.target.value)}
            className="bg-[#161616] p-3 px-6 rounded-2xl w-[30%] border border-[#262626]"
          />

          <div className="row gap-3 items-center">

            <button
              onClick={() => setSelectedCategory("الكل")}
              className={`text-[14px] p-3 px-6 rounded-2xl border border-[#262626]
                        ${selectedCategory === "الكل"
                  ? "bg-[#f97200] text-white"
                  : "bg-[#161616]"
                }`}
            >
              جميع المقالات
            </button>

            {categories.map((category) => (
              <button
                key={category.name}
                onClick={() => setSelectedCategory(category.name)}
                className={`text-[14px] p-3 px-6 rounded-2xl border border-[#262626]
                            ${selectedCategory === category.name
                    ? "bg-[#f97200] text-white"
                    : "bg-[#161616]"
                  }`}
              >
                {category.name}
              </button>
            ))}

          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4 bg-[#0d0b0a] px-8">
          {(search === ""
            ? filteredBlogs
            : blog.filter(item => item.title.toLowerCase().includes(search.toLowerCase()))
          ).map((item) => (
            <Vertical key={item.id} blog={item} />
          ))}
        </div>
      </div>

    </>
  )
}
