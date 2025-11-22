"use client";

const historyEvents = [
    {
        date: "1998",
        title: "“ШИНЖЛЭХ УХААН, ТЕХНОЛОГИЙН ТУХАЙ“ МОНГОЛ УЛСЫН ХУУЛЬ",
        description: "1998 оны эхээр батлагдсан “Шинжлэх ухаан, технологийн тухай“ Монгол улсын хууль, мөн онд Шинжлэх Ухаан, Технологийн Үндэсний Зөвлөл /ШУТҮЗ/-өөр шинэчлэн батлагдсан Шинжлэх ухаан, технологийн сан /ШУТС/-гийн дүрмээр үйл ажиллагааны чиг үүрэг нилээд тодорхой болж баталгаажигдсан. Энэ хуулиар ШУТС нь улсын захиалгаар шинжлэх ухаан, технологийн төслийг санхүүжүүлэх, төслийн үр дүнг үнэлэх байгууллага мөн хэмээн зааж тус сангийн үйл ажиллагааны чиг үүргийг тодотгож өгсөн. 1994 оны 4-р сараас тус сангийн захирлаар доктор профессор Ц.Аюурзана томилогдож, 6 хүний орон тоотой үйл ажиллагаагаа эхлүүлж байжээ."
    },
    {
        date: "1994 - 1996",
        title: "ПРОФ. Ц.АЮУРЗАНА",
        description: "ШУТС-ийн захирлаар томилогдон ажилласан"
    },
    {
        date: "1993 12-р сарын 24",
        title: "ШИНЖЛЭХ УХААН, ТЕХНОЛОГИЙН САН",
        description: "Шинжлэх ухаан, технологийн сан (ШУТС) нь Монгол Улсын Засгийн Газрын 1993 оны 12-р сарын 24-ны өдрийн 192 дугаар тогтоолоор байгуулагдаж, мөрдөгдөж байгаа хууль тогтоомж болон холбогдох дүрэм, журмын дагуу үйл ажиллагаа явуулж байна. Шинжлэх ухаан, технологийн сангийн дүрэм нь дээрх тогтоолын хавсралтаар батлагдсан ба Сангийн ажиллах журам нь Монгол улсын шинжлэх ухаан, боловсролын сайд, Сангийн сайдын 1994 оны 5 дугаар сарын 19-ны өдрийн 113/100 дугаар тушаалаар батлагдсан."
    }
];

export default function HistoryPage() {
    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="max-w-6xl mx-auto">
                    <div className="bg-blue-900 h-48 relative overflow-hidden rounded-2xl shadow-lg mb-12">
                        <div className="absolute inset-0 bg-gradient-to-r from-blue-900 to-blue-700 opacity-90" />
                        <div className="absolute -bottom-10 -right-10 w-64 h-64 bg-white opacity-10 rounded-full blur-3xl" />
                        <div className="absolute top-10 left-10 w-32 h-32 bg-white opacity-10 rounded-full blur-2xl" />
                        <div className="relative h-full flex items-center justify-center">
                            <h1 className="text-4xl md:text-5xl font-bold text-white tracking-tight">
                                Түүхэн замнал
                            </h1>
                        </div>
                    </div>

                    <div className="relative min-h-[800px] hidden md:block">
                        {/* Diagonal Line SVG */}
                        <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{ zIndex: 0 }}>
                            <line
                                x1="10%"
                                y1="90%"
                                x2="90%"
                                y2="10%"
                                stroke="#BFDBFE"
                                strokeWidth="4"
                                strokeDasharray="10 10"
                            />
                        </svg>

                        <div className="absolute inset-0 flex flex-col justify-between py-12 px-12">
                            {/* 1998 - Top Right */}
                            <div className="self-end relative group z-10 hover:z-50">
                                <div className="relative flex items-center justify-center cursor-pointer">
                                    <div className="w-6 h-6 bg-blue-600 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300" />
                                    <div className="absolute right-10 text-2xl font-bold text-blue-900 whitespace-nowrap">
                                        {historyEvents[0].date}
                                    </div>
                                </div>
                                {/* Card - Opens Left */}
                                <div className="absolute top-0 right-12 w-[450px] bg-white p-6 rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-x-4 group-hover:translate-x-0">
                                    <h3 className="font-bold text-blue-800 mb-3 text-lg">{historyEvents[0].title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed text-justify">{historyEvents[0].description}</p>
                                </div>
                            </div>

                            {/* 1994 - Center */}
                            <div className="self-center relative group z-10 hover:z-50">
                                <div className="relative flex items-center justify-center cursor-pointer">
                                    <div className="w-6 h-6 bg-blue-500 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300" />
                                    <div className="absolute top-8 text-2xl font-bold text-blue-900 whitespace-nowrap">
                                        {historyEvents[1].date}
                                    </div>
                                </div>
                                {/* Card - Opens Bottom/Center */}
                                <div className="absolute top-16 left-1/2 transform -translate-x-1/2 w-[350px] bg-white p-6 rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 translate-y-4 group-hover:translate-y-0">
                                    <h3 className="font-bold text-blue-800 mb-3 text-lg">{historyEvents[1].title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed text-justify">{historyEvents[1].description}</p>
                                </div>
                            </div>

                            {/* 1993 - Bottom Left */}
                            <div className="self-start relative group z-10 hover:z-50">
                                <div className="relative flex items-center justify-center cursor-pointer">
                                    <div className="w-6 h-6 bg-blue-400 rounded-full border-4 border-white shadow-lg group-hover:scale-125 transition-transform duration-300" />
                                    <div className="absolute left-10 text-2xl font-bold text-blue-900 whitespace-nowrap">
                                        {historyEvents[2].date}
                                    </div>
                                </div>
                                {/* Card - Opens Right */}
                                <div className="absolute bottom-0 left-12 w-[450px] bg-white p-6 rounded-xl shadow-xl border border-gray-100 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform -translate-x-4 group-hover:translate-x-0">
                                    <h3 className="font-bold text-blue-800 mb-3 text-lg">{historyEvents[2].title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed text-justify">{historyEvents[2].description}</p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Mobile View (Vertical Stack) */}
                    <div className="md:hidden space-y-8 relative">
                        <div className="absolute left-4 top-0 bottom-0 w-0.5 bg-blue-200" />
                        {historyEvents.map((event, index) => (
                            <div key={index} className="relative pl-12">
                                <div className="absolute left-4 top-0 transform -translate-x-1/2 w-4 h-4 bg-blue-500 rounded-full border-4 border-white shadow-md" />
                                <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                                    <div className="text-blue-600 font-bold mb-2">{event.date}</div>
                                    <h3 className="font-bold text-gray-900 mb-2">{event.title}</h3>
                                    <p className="text-sm text-gray-600 leading-relaxed text-justify">{event.description}</p>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </div>
    );
}
