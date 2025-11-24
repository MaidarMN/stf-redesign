import Hero from "@/components/Hero";
import { Users, FileText, Building2, Trophy } from "lucide-react";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

async function getNews() {
    try {
        const news = await prisma.news.findMany({
            take: 3,
            orderBy: {
                date: 'desc',
            },
        });
        // Convert Date objects to strings to avoid serialization warnings if needed, 
        // but Server Components can handle Dates if passed to client components carefully.
        // However, Hero expects specific shape. Let's ensure it matches.
        return JSON.parse(JSON.stringify(news));
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
}

export default async function Home() {
    const news = await getNews();

    const stats = [
        { label: "Хэрэгжиж буй төсөл", value: "100+", icon: FileText, color: "bg-blue-500" },
        { label: "Эрдэмтэн судлаачид", value: "500+", icon: Users, color: "bg-indigo-500" },
        { label: "Хамтрагч байгууллага", value: "50+", icon: Building2, color: "bg-violet-500" },
        { label: "Амжилттай төсөл", value: "1K+", icon: Trophy, color: "bg-emerald-500" },
    ];

    return (
        <div className="flex flex-col min-h-screen">
            <Hero news={news} />

            {/* Stats Section */}
            <section className="py-12 -mt-10 relative z-10">
                <div className="container mx-auto px-4">
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                        {stats.map((stat, index) => (
                            <div key={index} className="bg-white p-6 rounded-xl shadow-lg flex items-center space-x-4 border border-slate-100 hover:-translate-y-1 transition-transform duration-300">
                                <div className={`p-4 rounded-lg ${stat.color} text-white shadow-md`}>
                                    <stat.icon size={24} />
                                </div>
                                <div>
                                    <div className="text-2xl font-bold text-slate-900">{stat.value}</div>
                                    <div className="text-sm text-slate-500 font-medium">{stat.label}</div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Featured / Highlight Section */}
            <section className="py-20 bg-slate-50">
                <div className="container mx-auto px-4">
                    <div className="flex flex-col lg:flex-row items-center gap-12">
                        <div className="lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden shadow-2xl aspect-video bg-slate-200">
                                <div className="absolute inset-0 bg-gradient-to-br from-blue-600 to-indigo-900" />
                                <div className="absolute inset-0 flex items-center justify-center text-white/20">
                                    <Building2 size={120} />
                                </div>
                            </div>
                        </div>
                        <div className="lg:w-1/2 space-y-6">
                            <h2 className="text-3xl font-bold text-slate-900">
                                Шинжлэх ухаан, технологийн сангийн үйл ажиллагаа
                            </h2>
                            <p className="text-lg text-slate-600 leading-relaxed">
                                Бид шинжлэх ухаан, технологийн төсөл, хөтөлбөрийг санхүүжүүлэх,
                                үр дүнг үйлдвэрлэлд нэвтрүүлэх, инновацийг дэмжих чиглэлээр
                                идэвхтэй үйл ажиллагаа явуулж байна.
                            </p>
                            <ul className="space-y-4">
                                {[
                                    "Төсөл сонгон шалгаруулалт",
                                    "Эрдэм шинжилгээний хурал",
                                    "Гадаад хамтын ажиллагаа",
                                    "Инновацийн дэмжлэг"
                                ].map((item, i) => (
                                    <li key={i} className="flex items-center text-slate-700">
                                        <div className="w-2 h-2 bg-blue-500 rounded-full mr-3" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
}
