import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";

export default function NewsPage() {
    const newsItems = [
        {
            id: 1,
            title: "Шинжлэх ухааны ажилтны өдрийг тэмдэглэн өнгөрүүллээ",
            date: "2023-11-24",
            category: "Мэдээ",
            image: "/news/news-1.jpg", // Placeholder
            summary:
                "Монгол Улсад орчин цагийн шинжлэх ухааны байгууллага үүсэж хөгжсөний 102 жилийн ой, “Шинжлэх ухааны ажилтны өдөр”-ийг тохиолдуулан салбарын шилдэг ажилтнуудад шагнал гардууллаа.",
        },
        {
            id: 2,
            title: "2024 оны шинжлэх ухаан, технологийн төсөл сонгон шалгаруулалтын дүн",
            date: "2023-11-20",
            category: "Зарлал",
            image: "/news/news-2.jpg", // Placeholder
            summary:
                "2024 онд хэрэгжүүлэх шинжлэх ухаан, технологийн төслийн сонгон шалгаруулалтын дүн гарлаа. Шалгарсан төслүүдийн жагсаалттай танилцана уу.",
        },
        {
            id: 3,
            title: "Монгол-Хятадын хамтарсан судалгааны тэтгэлэг зарлагдлаа",
            date: "2023-11-15",
            category: "Тэтгэлэг",
            image: "/news/news-3.jpg", // Placeholder
            summary:
                "Монгол-Хятадын хамтарсан судалгааны төсөл хэрэгжүүлэх эрдэмтэн судлаачдыг урьж байна. Төслийн саналыг 2023 оны 12-р сарын 20 хүртэл хүлээн авна.",
        },
        {
            id: 4,
            title: "Инновацийн долоо хоног 2023 арга хэмжээ амжилттай болж өндөрлөлөө",
            date: "2023-10-30",
            category: "Мэдээ",
            image: "/news/news-4.jpg", // Placeholder
            summary:
                "Инновацийн долоо хоног арга хэмжээний хүрээнд зохион байгуулагдсан үзэсгэлэн, хэлэлцүүлэг, сургалтууд амжилттай болж өндөрлөлөө.",
        },
        {
            id: 5,
            title: "Шинжлэх ухааны паркийн захиргаа байгуулагдлаа",
            date: "2023-10-15",
            category: "Мэдээ",
            image: "/news/news-5.jpg", // Placeholder
            summary:
                "Шинжлэх ухааны паркийн эрх зүйн байдлын тухай хууль батлагдсантай холбогдуулан Шинжлэх ухааны паркийн захиргааг байгууллаа.",
        },
        {
            id: 6,
            title: "Залуу судлаачдын тэтгэлэгт хөтөлбөр зарлагдлаа",
            date: "2023-10-01",
            category: "Тэтгэлэг",
            image: "/news/news-6.jpg", // Placeholder
            summary:
                "Шинжлэх ухаан, технологийн сангаас залуу судлаачдыг дэмжих зорилгоор тэтгэлэгт хөтөлбөр зарлалаа.",
        },
    ];

    return (
        <div className="min-h-screen bg-gray-50 py-12">
            <div className="container mx-auto px-4">
                <div className="mb-10">
                    <h1 className="text-3xl font-bold text-gray-900 mb-4">Мэдээ мэдээлэл</h1>
                    <p className="text-gray-600 max-w-2xl">
                        Шинжлэх ухаан, технологийн салбарын шинэ содон мэдээ, зарлал, арга хэмжээний талаарх мэдээллийг цаг алдалгүй хүлээн аваарай.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {newsItems.map((item) => (
                        <article
                            key={item.id}
                            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
                        >
                            <div className="h-48 bg-gray-200 relative">
                                {/* Placeholder for image */}
                                <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                    <span className="text-sm">Зураг байхгүй</span>
                                </div>
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                    <div className="flex items-center text-gray-400 text-xs">
                                        <Calendar size={14} className="mr-1" />
                                        {item.date}
                                    </div>
                                </div>
                                <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-700 transition-colors">
                                    <Link href={`/news/${item.id}`}>{item.title}</Link>
                                </h2>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                                    {item.summary}
                                </p>
                                <Link
                                    href={`/news/${item.id}`}
                                    className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mt-auto"
                                >
                                    Дэлгэрэнгүй унших
                                    <ArrowRight size={16} className="ml-1" />
                                </Link>
                            </div>
                        </article>
                    ))}
                </div>
            </div>
        </div>
    );
}
