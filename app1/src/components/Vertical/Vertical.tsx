import { Link } from "react-router-dom";

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
  blog: Blog;
}

export default function Vertical({ blog: { slug, title, excerpt, author, image, readTime, category, date } }: DisplayblogsProps) {
  return (
    <>
      <Link to={slug}>
        <div className="self-start rounded-3xl my-10 border border-[#262626] overflow-hidden group hover:border-[#f97200] transition-all duration-300">
          <div className="relative forimg w-full">
            <img src={image} alt={title} className="relative w-full h-full group-hover:scale-[1.2] transition-all duration-300" />
            <div className="absolute z-10 w-fit px-3 flex items-center gap-1 rounded-3xl p-1 top-5 right-5  bg-[#111010] border-0">
              <p className="text-white font-bold text-[12px]">
                {category}
              </p>
            </div>
          </div>
          <div className="contant relative z-10 h-fit p-6 w-full bg-[#161616]">
            <div className="headd row gap-5 items-center">
              <div className="text-[#737373] text-[14px]">
                <i className="pe-3 fa-regular fa-clock text-[#737373]  text-[12px]"></i>
                {readTime} . {date}
              </div>
            </div>
            <h3 className="font-bold text-3xl group-hover:text-[#f97200] py-3">
              {title}
            </h3>
            <p className="text-[#a1a1a1] py-2 pb-8  border-b border-gray-600">
              {excerpt}
            </p>
            <div className="row justify-between items-center py-5">
              <div className="row gap-3">
                <img className="border-[#262626] border-2 relative rounded-full size-12" src={author.avatar} alt="avatar" />

                <div>
                  <h4 className="font-bold">
                    {author.name}
                  </h4>
                  <p className="text-[12px] text-[#737373]">
                    {author.role}
                  </p>
                </div>
              </div>
              <div className="bg-[#2e1e14] rounded-full flex justify-center items-center size-7 border border-[#4f2911] group-hover:bg-[#f97200] transition-all duration-300">
                <i className="fa-solid fa-chevron-left text-[#f97200] group-hover:text-white transition-all duration-300" ></i>
              </div>
            </div>
          </div>
        </div>
      </Link>
    </>
  )
}
