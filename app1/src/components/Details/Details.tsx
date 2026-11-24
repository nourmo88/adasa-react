import { Link, useParams } from "react-router-dom";
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
    content: string;
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
export default function Details({ blog }: DisplayblogsProps) {

    const { slug } = useParams();
    const selectedBlog = blog.find(item => item.slug === slug);
    console.log(selectedBlog);


    return (
        <>
            {selectedBlog ? (
                <>
                    <div className="headsection relative min-h-screen">
                        <div className="forimg relative w-full min-h-screen">
                            <img
                                className="w-full h-full bg-cover"
                                src={selectedBlog.image}
                                alt="image"
                            />
                        </div>

                        <div className="content absolute top-0 bottom-0 z-10 w-full min-h-screen bg-[#0a0a0aa2] px-8 py-28">
                            <div className="mb-10 font-bold flex items-center gap-3 w-fit text-[13px] forroute rounded-3xl p-2 px-6 bg-[#1f1f1f]">
                                <Link to="/">
                                    <i className="fa-solid fa-house text-gray-400 hover:text-[#ff8904] transition-all duration-300"></i>
                                </Link>

                                <i className="fa-solid fa-angle-left text-gray-400"></i>

                                <Link to="/blog" className="text-gray-400 hover:text-[#ff8904] transition-all duration-300">
                                    المدونة
                                </Link>

                                <i className="fa-solid fa-angle-left text-gray-400"></i>

                                <span className="text-[#ff8904]">
                                    {selectedBlog.title}
                                </span>
                            </div>

                            <div className="forcontent md:px-20 px-10">
                                <div className="row items-center gap-6 pb-3">
                                    <div className="org bg-[#ff6900] rounded-3xl text-white font-bold py-1 px-4">
                                        {selectedBlog.category}
                                    </div>

                                    <i className="fa-regular fa-calendar text-gray-400 px-2"></i>

                                    <p className="text-gray-400">
                                        {selectedBlog.date}
                                    </p>

                                    <i className="fa-regular fa-clock text-gray-400 px-2"></i>

                                    <p className="text-gray-400">
                                        {selectedBlog.readTime}
                                    </p>
                                </div>

                                <h2 className="md:text-[60px] text-[30px] font-bold text-white">
                                    {selectedBlog.title}
                                </h2>

                                <div className="mt-4 forperson w-fit border border-[#373634] bg-[#282420] rounded-2xl p-5 flex items-center gap-5">
                                    <div className="forimg">
                                        <img
                                            className="size-14 rounded-full border-2 border-[#94450f]"
                                            src={selectedBlog.author.avatar}
                                            alt="avatar"
                                        />
                                    </div>

                                    <div>
                                        <p className="font-bold">
                                            {selectedBlog.author.name}
                                        </p>

                                        <span className="text-gray-400 text-[14px]">
                                            {selectedBlog.author.role}
                                        </span>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>

                    <div className="relative contentDiv px-4 pt-10 md:px-8 bg-[#0a0a0a] w-full min-h-screen row flex-col md:flex-row items-start gap-12 scroll-smooth">

                        <div className="right w-full md:flex-3 min-h-screen">
                            <div className="bg-[#1f1309] border border-[#4d2407] rounded-2xl p-6 mb-10">
                                <p className="text-[18px]">
                                    {selectedBlog.excerpt}
                                </p>
                            </div>

                            {selectedBlog.content.split("\n\n").map((paragraph, index) => (
                                paragraph.startsWith("## ") ? (
                                    <div id={`section-${index}`} key={index} className="py-8 scroll-mt-12">
                                        <div className="forhead row items-center gap-6 pb-7">
                                            <div className="foricon size-12 rounded-2xl flex justify-center items-center border border-[#662c06] bg-[#231309]">
                                                <i className="fa-solid fa-camera text-[30px] text-[#ff6900]"></i>
                                            </div>

                                            <h3 className="font-bold text-[30px]">
                                                {paragraph.replace("## ", "")}
                                            </h3>
                                        </div>
                                    </div>
                                ) : (
                                    <p key={index} id={`section-${index}`} className="text-[18px] pb-12">
                                        {paragraph}
                                    </p>
                                )
                            ))}
                        </div>

                        <div className="left w-full md:flex-1 h-fit rounded-3xl p-8 py-6 bg-[#111111] border border-[#262626] md:sticky top-25 block">
                            <div className="row gap-3 items-center pb-8">
                                <div className="foricon size-10 text-center flex items-center justify-center rounded-xl bg-[#29190f] border border-[#6b310b]">
                                    <i className="fa-solid fa-list-ul text-[#ff6900]"></i>
                                </div>

                                <h4 className="font-bold">
                                    محتويات المقال
                                </h4>
                            </div>

                            <div className="px-2">
                                {selectedBlog.content.split("\n\n").map((paragraph, index) => (
                                    paragraph.startsWith("## ") ? (
                                        <a href={`#section-${index}`} key={index}>
                                            <div className="options row gap-5 items-center rounded-xl py-1 px-5 mb-4 w-full hover:bg-[#29190f] transition-all duration-300 group">
                                                <div className="bg-[#1a1a1a] text-gray-600 size-5 text-center rounded-xl group-hover:bg-[#6b310b] group-hover:text-[#ff6900] transition-all duration-300">
                                                    {selectedBlog.content.split("\n\n").filter((item, i) => i <= index && item.startsWith("## ")).length}
                                                </div>

                                                <p className="text-gray-600 text-[14px] group-hover:text-[#ff6900] transition-all duration-300 py-2">
                                                    {paragraph.replace("## ", "")}
                                                </p>
                                            </div>
                                        </a>
                                    ) : null
                                ))}
                            </div>
                        </div>
                    </div>

                    <div className="relative contentDiv px-4 pt-10 pb-20 md:px-8 bg-[#0a0a0a] w-full h-fit row flex-col md:flex-row items-start gap-12">

                        <div className="right w-full md:flex-4 h-fit rounded-3xl">
                            <div className="p-5 py-7 rounded-3xl bg-[#111111] border border-[#262626]">
                                <div className="row items-center gap-4">
                                    <div className="foricon size-10 rounded-2xl flex justify-center items-center border border-[#662c06] bg-[#231309]">
                                        <i className="fa-solid fa-tag text-[18px] text-[#ff6900]"></i>
                                    </div>

                                    <h4 className="font-bold">
                                        الوسوم
                                    </h4>
                                </div>

                                <div className="row items-center gap-4 pt-5">
                                    {selectedBlog.tags.map((tag, index) => (
                                        <div key={index} className="bg-[#1a1a1a] border text-gray-500 text-[14px] border-[#262626] cursor-pointer rounded-3xl py-2 px-6 hover:text-[#f97200] transition-all duration-300">
                                            #{tag}
                                        </div>
                                    ))}
                                </div>
                            </div>

                            <div className="p-5 py-7 my-5 rounded-3xl bg-[#111111] border border-[#262626]">
                                <div className="row justify-between items-center">
                                    <div className="row items-center gap-4">
                                        <div className="foricon size-10 rounded-2xl flex justify-center items-center border border-[#662c06] bg-[#231309]">
                                            <i className="fa-solid fa-share-nodes text-[18px] text-[#ff6900]"></i>
                                        </div>

                                        <h4 className="font-bold">
                                            شارك المقال
                                        </h4>
                                    </div>

                                    <div className="foricons row gap-3">
                                        <div className="iconn w-fit rounded-2xl bg-[#161616] p-2 border border-[#737373] hover:bg-blue-500 hover:scale-[1.2] transition-all duration-300 group">
                                            <i className="fa-brands fa-x-twitter text-[#737373] group-hover:text-white"></i>
                                        </div>

                                        <div className="iconn w-fit rounded-2xl bg-[#161616] p-2 border border-[#737373] hover:bg-blue-600 hover:scale-[1.2] transition-all duration-300 group">
                                            <i className="fa-brands fa-square-linkedin text-[#737373] group-hover:text-white"></i>
                                        </div>

                                        <div className="iconn w-fit rounded-2xl bg-[#161616] p-2 border border-[#737373] hover:bg-green-500 hover:scale-[1.2] transition-all duration-300 group">
                                            <i className="fa-brands fa-whatsapp text-[#737373] group-hover:text-white"></i>
                                        </div>

                                        <div className="iconn w-fit rounded-2xl bg-[#161616] p-2 border border-[#737373] hover:bg-[#ff6100] hover:scale-[1.2] transition-all duration-300 group">
                                            <i className="fa-solid fa-link text-[#737373] group-hover:text-white"></i>
                                        </div>
                                    </div>
                                </div>
                            </div>

                            <div className="p-5 py-7 rounded-3xl bg-[#111111] border border-[#262626]">
                                <div className="row items-center gap-4">
                                    <div className="forimg size-24 rounded-2xl border-4 border-[#662c06]">
                                        <img
                                            className="rounded-xl"
                                            src={selectedBlog.author.avatar}
                                            alt="avatar"
                                        />
                                    </div>

                                    <div>
                                        <p className="text-[12px] font-bold text-[#f97200]">
                                            كاتب المقال
                                        </p>

                                        <h4 className="font-bold text-[20px]">
                                            {selectedBlog.author.name}
                                        </h4>

                                        <span className="text-[14px] text-[#737373]">
                                            {selectedBlog.author.role}
                                        </span>

                                        <p className="text-[#a1a1a1] py-2">
                                            مصور محترف شغوف بمشاركة المعرفة والخبرات في عالم التصوير الفوتوغرافي.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        <div className="left w-full md:flex-1/8 h-fit rounded-3xl">
                            <div className="row gap-5 items-stretch justify-between p-5 rounded-3xl bg-[#111111] border border-[#262626]">
                                <div className="bg-[#0a0a0a] flex-1 text-center p-5 rounded-2xl">
                                    <i className="fa-regular fa-clock text-[#f97200]"></i>

                                    <h4 className="font-bold text-[]">
                                        {selectedBlog.readTime}
                                    </h4>

                                    <span className="text-[13px] text-gray-600">
                                        وقت القراءة
                                    </span>
                                </div>

                                <div className="bg-[#0a0a0a] flex-1 text-center p-5 rounded-2xl">
                                    <i className="fa-regular fa-calendar text-[#f97200]"></i>

                                    <h4 className="font-bold text-[]">
                                        {selectedBlog.date}
                                    </h4>

                                    <span className="text-[13px] text-gray-600">
                                        تاريخ النشر
                                    </span>
                                </div>
                            </div>

                            <div className="p-5 rounded-3xl text-center my-5 bg-[#1c1309] border border-[#4c2407]">
                                <div className="foricon size-14 mx-auto rounded-2xl flex justify-center items-center bg-[#4c2407]">
                                    <i className="fa-solid fa-envelope text-[18px] text-[#ff6900]"></i>
                                </div>

                                <h4 className="font-bold text-[18px] text-center py-3">
                                    لا تفوّت جديدنا
                                </h4>

                                <p className="text-gray-500 text-center pb-5">
                                    اشترك للحصول على أحدث المقالات
                                </p>

                                <button className="w-full py-3 font-bold bg-[#ff6900] text-white rounded-2xl">
                                    <Link to="/blog">
                                        تصفح المزيد
                                    </Link>
                                </button>
                            </div>
                        </div>
                    </div>
                </>
            ) : (
                <div className="min-h-screen bg-[#0a0a0a] text-white flex justify-center items-center">
                    <h2 className="text-3xl font-bold">
                        Article Not Found
                    </h2>
                </div>
            )}
        </>
    );

}
