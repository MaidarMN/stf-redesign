import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/news/[id] - Get single news article
export async function GET(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const news = await prisma.news.findUnique({
            where: { id },
        });

        if (!news) {
            return NextResponse.json(
                { error: 'News not found' },
                { status: 404 }
            );
        }

        return NextResponse.json(news);
    } catch (error) {
        console.error('Error fetching news:', error);
        return NextResponse.json(
            { error: 'Failed to fetch news' },
            { status: 500 }
        );
    }
}

// PUT /api/news/[id] - Update news article (admin only)
export async function PUT(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        const body = await request.json();
        const { title, content, summary, date, category, mainImage, images } = body;

        const news = await prisma.news.update({
            where: { id },
            data: {
                title,
                content,
                summary,
                date: new Date(date),
                category,
                mainImage,
                images: images || [],
            },
        });

        return NextResponse.json(news);
    } catch (error) {
        console.error('Error updating news:', error);
        return NextResponse.json(
            { error: 'Failed to update news' },
            { status: 500 }
        );
    }
}

// DELETE /api/news/[id] - Delete news article (admin only)
export async function DELETE(
    request: NextRequest,
    { params }: { params: { id: string } }
) {
    try {
        const id = parseInt(params.id);
        await prisma.news.delete({
            where: { id },
        });

        return NextResponse.json({ message: 'News deleted successfully' });
    } catch (error) {
        console.error('Error deleting news:', error);
        return NextResponse.json(
            { error: 'Failed to delete news' },
            { status: 500 }
        );
    }
}
