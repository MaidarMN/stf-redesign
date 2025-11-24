"use client";

import { useSession, signOut } from "next-auth/react";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import Link from "next/link";
import { Plus, Edit, Trash2, LogOut } from "lucide-react";

interface NewsItem {
    id: number;
    title: string;
    date: string;
    category: string;
    summary: string;
}

export default function AdminDashboard() {
    const { data: session, status } = useSession();
    const router = useRouter();
    const [news, setNews] = useState<NewsItem[]>([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        if (status === "unauthenticated") {
            router.push("/admin/login");
        }
    }, [status, router]);

    useEffect(() => {
        fetchNews();
    }, []);

    const fetchNews = async () => {
        try {
            const res = await fetch("/api/news");
            const data = await res.json();
            setNews(data);
        } catch (error) {
            console.error("Error fetching news:", error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id: number) => {
        if (!confirm("Энэ мэдээг устгах уу?")) return;

        try {
            await fetch(`/api/news/${id}`, { method: "DELETE" });
            fetchNews();
        } catch (error) {
            console.error("Error deleting news:", error);
        }
    };

    if (status === "loading" || loading) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-lg">Уншиж байна...</div>
            </div>
        );
    }

    if (!session) {
        return null;
    }

    return (
        <div className="min-h-screen bg-gray-50">
            {/* Header */}
            <header className="bg-white shadow-sm border-b">
                <div className="container mx-auto px-4 py-4 flex justify-between items-center">
                    <h1 className="text-2xl font-bold text-gray-900">Админ панел</h1>
                    <div className="flex items-center gap-4">
                        <span className="text-gray-600">Сайн байна уу, {session.user?.name}</span>
                        <button
                            onClick={() => signOut({ callbackUrl: "/admin/login" })}
                            className="flex items-center gap-2 px-4 py-2 bg-red-600 text-white rounded-lg hover:bg-red-700 transition"
                        >
                            <LogOut size={18} />
                            Гарах
                        </button>
                    </div>
                </div>
            </header>

            {/* Main Content */}
            <main className="container mx-auto px-4 py-8">
                <div className="bg-white rounded-xl shadow-sm p-6">
                    <div className="flex justify-between items-center mb-6">
                        <h2 className="text-xl font-bold text-gray-900">Мэдээ мэдээлэл</h2>
                        <Link
                            href="/admin/news/new"
                            className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            <Plus size={18} />
                            Шинэ мэдээ нэмэх
                        </Link>
                    </div>

                    {/* News List */}
                    <div className="overflow-x-auto">
                        <table className="w-full">
                            <thead className="bg-gray-50 border-b">
                                <tr>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Гарчиг</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Ангилал</th>
                                    <th className="px-4 py-3 text-left text-sm font-semibold text-gray-900">Огноо</th>
                                    <th className="px-4 py-3 text-right text-sm font-semibold text-gray-900">Үйлдэл</th>
                                </tr>
                            </thead>
                            <tbody className="divide-y">
                                {news.map((item) => (
                                    <tr key={item.id} className="hover:bg-gray-50">
                                        <td className="px-4 py-3 text-sm text-gray-900">{item.title}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">{item.category}</td>
                                        <td className="px-4 py-3 text-sm text-gray-600">
                                            {new Date(item.date).toLocaleDateString("mn-MN")}
                                        </td>
                                        <td className="px-4 py-3 text-sm text-right">
                                            <div className="flex justify-end gap-2">
                                                <Link
                                                    href={`/admin/news/edit/${item.id}`}
                                                    className="p-2 text-blue-600 hover:bg-blue-50 rounded-lg transition"
                                                >
                                                    <Edit size={18} />
                                                </Link>
                                                <button
                                                    onClick={() => handleDelete(item.id)}
                                                    className="p-2 text-red-600 hover:bg-red-50 rounded-lg transition"
                                                >
                                                    <Trash2 size={18} />
                                                </button>
                                            </div>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                </div>
            </main>
        </div>
    );
}
