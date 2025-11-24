import { NextRequest, NextResponse } from 'next/server';
import { prisma } from '@/lib/prisma';

// GET /api/news - Get all news articles
export async function GET() {
    try {
        const news = await prisma.news.findMany({
            orderBy: {
                date: 'desc',
            },
        });
        return NextResponse.json(news);
    } catch (error) {
        console.error('Error fetching news:', error);
        return NextResponse.json(
            { error: 'Failed to fetch news' },
            { status: 500 }
        );
    }
}

// POST /api/news - Create new news article (admin only - will add auth later)
export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { title, content, summary, date, category, mainImage, images } = body;

        const news = await prisma.news.create({
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

        return NextResponse.json(news, { status: 201 });
    } catch (error) {
        console.error('Error creating news:', error);
        return NextResponse.json(
            { error: 'Failed to create news' },
            { status: 500 }
        );
    }
}
