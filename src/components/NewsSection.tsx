import Link from "next/link";
import { Calendar, ArrowRight } from "lucide-react";

interface NewsItem {
    id: number;
    title: string;
    date: string;
    category: string;
    summary: string;
    image?: string;
}

interface NewsSectionProps {
    title: string;
    items: NewsItem[];
    link?: string;
}

export default function NewsSection({ title, items, link }: NewsSectionProps) {
    return (
        <section className="py-16 bg-white">
            <div className="container mx-auto px-4">
                <div className="flex justify-between items-end mb-10">
                    <h2 className="text-3xl font-bold text-slate-900 relative pb-4 after:content-[''] after:absolute after:bottom-0 after:left-0 after:w-20 after:h-1 after:bg-blue-600">
                        {title}
                    </h2>
                    {link && (
                        <Link
                            href={link}
                            className="text-blue-600 hover:text-blue-800 font-medium flex items-center transition-colors"
                        >
                            Бүгдийг үзэх <ArrowRight size={18} className="ml-2" />
                        </Link>
                    )}
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {items.map((item) => (
                        <div
                            key={item.id}
                            className="group bg-white rounded-xl border border-slate-100 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden flex flex-col h-full"
                        >
                            {/* Image Placeholder - could be real image if available */}
                            <div className="h-48 bg-slate-100 relative overflow-hidden">
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
                                    {item.date}
                                </div>
                                <h3 className="text-xl font-bold text-slate-900 mb-3 group-hover:text-blue-600 transition-colors line-clamp-2">
                                    <Link href={`/news/${item.id}`}>
                                        {item.title}
                                    </Link>
                                </h3>
                                <p className="text-slate-600 text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                                    {item.summary}
                                </p>
                                <Link
                                    href={`/news/${item.id}`}
                                    className="inline-flex items-center text-blue-600 font-medium hover:text-blue-800 transition-colors mt-auto"
                                >
                                    Дэлгэрэнгүй <ArrowRight size={16} className="ml-2 group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
}
