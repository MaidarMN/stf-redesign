import Image from "next/image";
import Link from "next/link";
import { Calendar, ArrowLeft } from "lucide-react";
import { prisma } from "@/lib/prisma";

export default async function NewsArticlePage({ params }: { params: { id: string } }) {
    const article = await prisma.news.findUnique({
        where: {
            id: parseInt(params.id),
        },
    });

    if (!article) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h1 className="text-4xl font-bold text-slate-900 mb-4">Мэдээ олдсонгүй</h1>
                    <Link href="/" className="text-blue-600 hover:text-blue-800 font-medium">
                        Нүүр хуудас руу буцах
                    </Link>
                </div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-white">
            <article className="container mx-auto px-4 py-12 max-w-4xl">
                {/* Back button */}
                <Link
                    href="/"
                    className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium mb-8 transition-colors"
                >
                    <ArrowLeft size={20} className="mr-2" />
                    Буцах
                </Link>

                {/* Category and Date */}
                <div className="flex items-center gap-4 mb-6">
                    <span className="bg-blue-600 text-white text-sm font-bold px-4 py-2 rounded-full uppercase tracking-wider">
                        {article.category}
                    </span>
                    <div className="flex items-center text-slate-500">
                        <Calendar size={18} className="mr-2" />
                        {new Date(article.date).toLocaleDateString("mn-MN")}
                    </div>
                </div>

                {/* Title */}
                <h1 className="text-3xl md:text-4xl font-bold text-slate-900 mb-8 leading-tight">
                    {article.title}
                </h1>

                {/* Main Image */}
                {article.mainImage && (
                    <div className="relative w-full h-[400px] md:h-[500px] rounded-2xl overflow-hidden mb-8 shadow-xl">
                        <Image
                            src={article.mainImage}
                            alt={article.title}
                            fill
                            className="object-cover"
                            priority
                        />
                    </div>
                )}

                {/* Content */}
                <div className="prose prose-lg max-w-none">
                    {article.content.split('\n\n').map((paragraph, index) => (
                        <p key={index} className="text-slate-700 leading-relaxed mb-6">
                            {paragraph}
                        </p>
                    ))}
                </div>

                {/* Additional Images */}
                {article.images && article.images.length > 0 && (
                    <div className="mt-12 grid grid-cols-1 md:grid-cols-2 gap-6">
                        {article.images.map((image, index) => (
                            <div
                                key={index}
                                className="relative w-full h-[300px] rounded-xl overflow-hidden shadow-lg"
                            >
                                <Image
                                    src={image}
                                    alt={`${article.title} - ${index + 1}`}
                                    fill
                                    className="object-cover"
                                />
                            </div>
                        ))}
                    </div>
                )}

                {/* Divider */}
                <div className="mt-16 pt-8 border-t border-slate-200">
                    <Link
                        href="/news/general"
                        className="inline-flex items-center text-blue-600 hover:text-blue-800 font-medium transition-colors"
                    >
                        <ArrowLeft size={20} className="mr-2" />
                        Бүх мэдээ үзэх
                    </Link>
                </div>
            </article>
        </div>
    );
}

