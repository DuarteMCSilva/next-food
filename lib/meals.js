import sql from 'better-sqlite3';

const db = sql('meals.db');

export async function getMeals() {
    await new Promise( (resolve) => setTimeout(resolve, 1500));
    // throw new Error("failed")
    return db.prepare('SELECT * FROM meals').all();
}

export async function getMeal(slug) {
    await new Promise( (resolve) => setTimeout(resolve, 500));
    return db.prepare('SELECT * FROM meals WHERE slug = ?').get(slug);
}