import Database from 'better-sqlite3'
import { join } from 'path'

export const db = new Database(join(process.cwd(), 'bot.sqlite'))

// crear tabla si no existe
db.exec(`
CREATE TABLE IF NOT EXISTS users (
    id INTEGER PRIMARY KEY AUTOINCREMENT,
    phone TEXT,
    name TEXT,
    age INTEGER,
    created_at DATETIME DEFAULT CURRENT_TIMESTAMP
)
`)