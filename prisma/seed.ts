import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
    const recipe1 = await prisma.recipe.upsert({
        where: { title: 'Spaghetti Bolognese' },
        update: {},
        create: {
            title: 'Spaghetti Bolognese',
            description: 'A classic Italian Dish',
            ingredients: 'Spaghetti, minced beef, tomato sauce, onions, garlic, olive oil, salt, pepper',
            instructions: '1. Cook the spaghetti\n2. Fry the minced beef\n3. Add the tomato sauce\n4. Serve spaghetti with the sauce'
        }
    });

    const recipe2 = await prisma.recipe.upsert({
        where: { title: 'Chicken Curry' },
        update: {},
        create: {
            title: 'Chicken Curry',
            description: 'A spicy Indian dish',
            ingredients: 'Chicken, curry powder, onions, garlic, coconut milk, olive oil, salt, pepper',
            instructions: '1. Fry the chicken\n2. Add the curry powder to the chicken\n3. Add the coconut milk\n4. Serve the curry with rice'
        }
    });

    console.log({ recipe1, recipe2 })
}

main().catch(e => {
    console.error(e)
    process.exit(1)
}).finally(async () => {
    await prisma.$disconnect
})