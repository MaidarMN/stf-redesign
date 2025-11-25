"use client";

import { useSession } from "next-auth/react";
import CommentForm from "./CommentForm";
import Link from "next/link";

interface Comment {
    id: string;
    content: string;
    createdAt: string;
    user: {
        name: string | null;
        image: string | null;
    };
}

interface CommentSectionProps {
    newsId: number;
    initialComments: Comment[];
}

export default function CommentSection({ newsId, initialComments }: CommentSectionProps) {
    const { data: session } = useSession();

    return (
        <div className="mt-12 border-t border-gray-100 pt-8">
            <h3 className="text-xl font-bold text-gray-900 mb-6">Сэтгэгдэл ({initialComments.length})</h3>

            <div className="space-y-6 mb-8">
                {initialComments.map((comment) => (
                    <div key={comment.id} className="flex space-x-4">
                        <div className="flex-shrink-0 w-10 h-10 rounded-full bg-gray-200 flex items-center justify-center text-gray-500 font-semibold">
                            {comment.user.image ? (
                                <img src={comment.user.image} alt={comment.user.name || "User"} className="w-full h-full rounded-full object-cover" />
                            ) : (
                                (comment.user.name?.[0] || "U").toUpperCase()
                            )}
                        </div>
                        <div className="flex-grow">
                            <div className="flex items-center space-x-2 mb-1">
                                <span className="font-semibold text-gray-900">{comment.user.name || "Хэрэглэгч"}</span>
                                <span className="text-xs text-gray-500">
                                    {new Date(comment.createdAt).toLocaleDateString("mn-MN")}
                                </span>
                            </div>
                            <p className="text-gray-700 text-sm leading-relaxed">{comment.content}</p>
                        </div>
                    </div>
                ))}

                {initialComments.length === 0 && (
                    <p className="text-gray-500 text-center py-4">Одоогоор сэтгэгдэл алга байна.</p>
                )}
            </div>

            {session ? (
                <CommentForm newsId={newsId} />
            ) : (
                <div className="bg-gray-50 rounded-lg p-6 text-center">
                    <p className="text-gray-600 mb-4">Сэтгэгдэл бичихийн тулд нэвтэрнэ үү.</p>
                    <Link
                        href="/api/auth/signin"
                        className="inline-block px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-colors"
                    >
                        Нэвтрэх
                    </Link>
                </div>
            )}
        </div>
    );
}
