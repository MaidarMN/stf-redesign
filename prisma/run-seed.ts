import { PrismaClient } from '@prisma/client'
import fs from 'fs'
import path from 'path'

const prisma = new PrismaClient()

async function main() {
    const sqlPath = path.join(process.cwd(), 'prisma', 'seed.sql')
    const sql = fs.readFileSync(sqlPath, 'utf-8')

    // Split by semicolon and execute each statement
    const statements = sql
        .split(';')
        .map(s => s.trim())
        .filter(s => s.length > 0)

    console.log(`Found ${statements.length} SQL statements. Executing...`)

    for (const statement of statements) {
        try {
            await prisma.$executeRawUnsafe(statement)
        } catch (e) {
            console.error('Error executing statement:', e)
        }
    }
    console.log('Seed completed.')
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
