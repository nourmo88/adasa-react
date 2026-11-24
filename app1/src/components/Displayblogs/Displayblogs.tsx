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

export default function Displayblogs({ blog: {slug, title, excerpt, author, image, readTime, category, date } }: DisplayblogsProps) {
    return (
        <>
        <Link to={`/blog/${slug}`}>
            <div className="row rounded-3xl my-10 border border-[#262626] overflow-hidden group hover:border-[#f97200] transition-all duration-300">
                <div className="relative forimg w-full md:w-1/2">
                    <img src={image} alt={category} className="relative w-full h-full group-hover:scale-[1.2] transition-all duration-300" />
                    <div className="absolute z-10 w-20 flex items-center gap-1 rounded-3xl p-1 px-2 top-5 right-5  bg-[#ff7400] border-0">
                        <i className="fa-solid fa-star text-white"></i>
                        <p className="text-white font-bold">
                            مميز
                        </p>
                    </div>
                </div>
                <div className="contant relative z-10 p-10 w-full md:w-1/2 bg-[#161616]">
                    <div className="headd row gap-5 items-center">
                        <div className=" text-center rounded-3xl w-fit p-1 px-2 top-5 right-5 border border-[#f97200] bg-[#2e1e14]">
                            <p className="text-[#f97200] text-[12px]">
                               {category}
                            </p>

                        </div>
                        <div className="text-[#737373] text-[14px]">
                            <i className="fa-regular fa-clock text-[#737373] pe-5 text-[12px]"></i>
                            {readTime}
                        </div>
                    </div>
                    <h3 className="font-bold text-3xl group-hover:text-[#f97200] py-3">
                       {title}
                    </h3>
                    <p className="text-[#a1a1a1] py-2 pb-16">
                       {excerpt}
                    </p>
                    <div className="row justify-between items-center py-5">
                        <div className="row gap-3">
                            <div className="relative">
                                <img className="border-[#262626] border-2 relative rounded-full size-12" src={author.avatar} alt="avatar" />
                                <div className="absolute size-4 rounded-full bg-[#ff6900] bottom-0 left-0 border-2 border-black">
                                </div>
                            </div>
                            <div>
                                <h4 className="font-bold">
                                   {author.name}
                                </h4>
                                <p className="text-[12px] text-[#737373]">
                                    {date}
                                </p>
                            </div>
                        </div>
                        <p className="text-[#f97200] text-[14px] font-bold flex items-center">
                            أقرأ المقال
                            <i className="fa-solid fa-arrow-left-long ps-3 text-[#f97200] group-hover:ms-2 transition-all duration-300" ></i>
                        </p>
                    </div>
                </div>
            </div>
            </Link>
        </>
        
    )
}
