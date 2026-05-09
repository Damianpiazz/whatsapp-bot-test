import { addKeyword } from '@builderbot/bot'
import { db } from '../database/sqlite'

export const registerSQLiteFlow = addKeyword(['reg', 'registro'])

    .addAnswer('👤 ¿Cuál es tu nombre?', { capture: true }, async (ctx, { state }) => {
        await state.update({ name: ctx.body })
    })

    .addAnswer('🎂 ¿Cuál es tu edad?', { capture: true }, async (ctx, { state }) => {
        await state.update({ age: Number(ctx.body) })
    })

    .addAction(async (ctx, { state, flowDynamic }) => {

        const name = state.get('name')
        const age = state.get('age')
        const phone = ctx.from

        const stmt = db.prepare(`
            INSERT INTO users (phone, name, age)
            VALUES (?, ?, ?)
        `)

        stmt.run(phone, name, age)

        await flowDynamic(`✅ Guardado en SQLite:\n👤 ${name}\n🎂 ${age}`)
    })