"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

interface CommentFormProps {
    newsId: number;
}

export default function CommentForm({ newsId }: CommentFormProps) {
    const [content, setContent] = useState("");
    const [isSubmitting, setIsSubmitting] = useState(false);
    const router = useRouter();

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        if (!content.trim()) return;

        setIsSubmitting(true);
        try {
            const res = await fetch("/api/comments", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify({
                    newsId,
                    content,
                }),
            });

            if (res.ok) {
                setContent("");
                router.refresh();
            }
        } catch (error) {
            console.error("Failed to submit comment", error);
        } finally {
            setIsSubmitting(false);
        }
    };

    return (
        <form onSubmit={handleSubmit} className="mt-6">
            <textarea
                value={content}
                onChange={(e) => setContent(e.target.value)}
                placeholder="Сэтгэгдэл бичих..."
                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent outline-none resize-none h-24"
                required
            />
            <div className="mt-2 flex justify-end">
                <button
                    type="submit"
                    disabled={isSubmitting || !content.trim()}
                    className="px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-colors"
                >
                    {isSubmitting ? "Илгээж байна..." : "Илгээх"}
                </button>
            </div>
        </form>
    );
}
