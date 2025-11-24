import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Calendar } from "lucide-react";

interface NewsItem {
    id: number;
    title: string;
    date: string;
    category: string;
    summary: string;
    mainImage?: string | null;
}

interface HeroProps {
    news: NewsItem[];
}

export default function Hero({ news }: HeroProps) {
    return (
        <div className="relative bg-white overflow-hidden pb-16">
            <div className="absolute inset-0">
                <div className="absolute inset-0 bg-gradient-to-r from-blue-50 to-white/50" />
                <div className="absolute top-0 right-0 -mt-20 -mr-20 w-96 h-96 bg-blue-100 rounded-full blur-3xl opacity-50" />
                <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-72 h-72 bg-blue-50 rounded-full blur-3xl opacity-50" />
            </div>

            <div className="relative container mx-auto px-4 pt-20 pb-12">
                <div className="max-w-5xl mx-auto text-center mb-16">
                    <h1 className="text-3xl md:text-5xl font-bold text-gray-900 tracking-tight mb-6 leading-tight uppercase">
                        Үндэсний шинжлэх ухаан технологийн сан
                    </h1>

                    <p className="text-lg md:text-xl text-gray-600 leading-relaxed max-w-3xl mx-auto">
                        Монгол Улсын шинжлэх ухаан, технологийн судалгааг дэлхийн жишигт хүргэх санхүү, хөрөнгө оруулалтын үндэсний сан.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {news.map((item) => (
                        <Link
                            key={item.id}
                            href={`/news/${item.id}`}
                            className="group bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full text-left"
                        >
                            <div className="h-48 bg-slate-100 relative overflow-hidden">
                                {item.mainImage ? (
                                    <Image
                                        src={item.mainImage}
                                        alt={item.title}
                                        fill
                                        className="object-cover"
                                    />
                                ) : (
                                    <div className="absolute inset-0 bg-gradient-to-br from-blue-100 to-slate-100" />
                                )}
                                <div className="absolute inset-0 bg-gradient-to-t from-slate-900/20 to-transparent" />
                                <div className="absolute bottom-4 left-4">
                                    <span className="bg-blue-600 text-white text-xs font-bold px-3 py-1 rounded-full uppercase tracking-wider">
                                        {item.category}
                                    </span>
                                </div>
                            </div>

                            <div className="p-6 flex flex-col flex-grow">
                                <div className="flex items-center text-slate-400 text-sm mb-4">
                                    <Calendar size={16} className="mr-2" />
                                    {new Date(item.date).toLocaleDateString("mn-MN")}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    {item.title}
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    {item.summary}
                                </p>
                                <div className="inline-flex items-center text-blue-600 font-medium group-hover:text-blue-800 transition-colors mt-auto">
                                    Дэлгэрэнгүй <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </div>
                            </div>
                        </Link>
                    ))}
                </div>
            </div>
        </div>
    );
}
