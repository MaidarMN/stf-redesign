import { Calendar, ArrowRight } from "lucide-react";
import Link from "next/link";
import Image from "next/image";
import { prisma } from "@/lib/prisma";

export const dynamic = 'force-dynamic';

async function getNews() {
    try {
        const news = await prisma.news.findMany({
            orderBy: {
                date: 'desc',
            },
        });
        return news;
    } catch (error) {
        console.error("Error fetching news:", error);
        return [];
    }
}

export default async function NewsPage() {
    const newsItems = await getNews();

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
                    {newsItems.map((item: any) => (
                        <Link
                            key={item.id}
                            href={`/news/${item.id}`}
                            className="bg-white rounded-xl shadow-sm overflow-hidden hover:shadow-md transition-shadow border border-gray-100 flex flex-col"
                        >
                            <div className="h-48 bg-gray-200 relative overflow-hidden">
                                {item.mainImage ? (
                                    <Image
                                        src={item.mainImage}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 flex items-center justify-center text-gray-400">
                                        <span className="text-sm">Зураг байхгүй</span>
                                    </div>
                                )}
                            </div>
                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center justify-between mb-3">
                                    <span className="text-xs font-semibold text-blue-600 bg-blue-50 px-2 py-1 rounded-full">
                                        {item.category}
                                    </span>
                                    <div className="flex items-center text-gray-400 text-xs">
                                        <Calendar size={14} className="mr-1" />
                                        {new Date(item.date).toLocaleDateString("mn-MN")}
                                    </div>
                                </div>
                                <h2 className="text-lg font-bold text-gray-900 mb-3 line-clamp-2 hover:text-blue-700 transition-colors">
                                    {item.title}
                                </h2>
                                <p className="text-sm text-gray-600 mb-4 line-clamp-3 flex-grow">
                                    {item.summary}
                                </p>
                                <div className="inline-flex items-center text-sm font-medium text-blue-600 hover:text-blue-700 mt-auto">
                                    Дэлгэрэнгүй унших
                                    <ArrowRight size={16} className="ml-1" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
