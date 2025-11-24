
import { PrismaClient } from '@prisma/client'

const prisma = new PrismaClient({
    datasources: {
        db: {
            url: "postgresql://postgres.upuseohllenyykcmnxan:Tamir08Chingis@aws-1-ap-southeast-2.pooler.supabase.com:6543/postgres",
        },
    },
})

async function main() {
    const user = await prisma.user.findUnique({
        where: {
            username: 'admin',
        },
    })
    console.log('User found:', user)
}

main()
    .then(async () => {
        await prisma.$disconnect()
    })
    .catch(async (e) => {
        console.error(e)
        await prisma.$disconnect()
        process.exit(1)
    })
