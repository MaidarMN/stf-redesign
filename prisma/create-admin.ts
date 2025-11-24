import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcryptjs'

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: "postgresql://postgres.upuseohllenyykcmnxan:Tamir08Chingis@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres",
        },
    },
})

async function main() {
    const hashedPassword = await bcrypt.hash('admin123', 12)

    const user = await prisma.user.upsert({
        where: { username: 'admin' },
        update: { password: hashedPassword },
        create: {
            username: 'admin',
            password: hashedPassword,
        },
    })

    console.log('Admin user created/updated:', user)
}

main()
    .then(async () => {
        await prisma.$disconnect()
        console.log('Done!')
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
