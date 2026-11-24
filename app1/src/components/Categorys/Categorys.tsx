
export interface Category {
    name: string;
    count: number;
    color: string;
}

interface CategorysProps {
    category: Category;
}

export default function Categorys({ category: { name, count } }: CategorysProps) {
    return (
        <>
            <div className="divs border border-[#262626] w-full p-6 rounded-3xl h-fit bg-[#161616] hover:bg-[#fb5800af] transition-all duration-300 group">
                <div className="row justify-between items-center">
                    <div className="foricon p-3 rounded-2xl w-fit bg-[#2e1e14] border border-[#592d10]">
                        <i className="fa-solid fa-sliders text-[#ff6900] group-hover:text-white" ></i>
                    </div>
                    <div className="foricon rounded-full hidden group-hover:flex justify-center items-center size-7 bg-[#fb970086]">
                        <i className="fa-solid fa-angle-left text-white"></i>
                    </div>
                </div>
                <h4 className="text-2xl font-bold py-3">
                    {name}
                </h4>
                <p className="text-gray-600">
                    {count} مقالة
                </p>
            </div>
        </>
    )
}
