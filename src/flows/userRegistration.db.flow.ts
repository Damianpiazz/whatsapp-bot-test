import { addKeyword } from '@builderbot/bot'
import { db } from '../database/sqlite'

export const userRegistrationDbFlow = addKeyword(['register', 'registro'])

    .addAnswer('👤 Nombre?', { capture: true }, async (ctx, { state }) => {
        await state.update({ name: ctx.body })
    })

    .addAnswer('🎂 Edad?', { capture: true }, async (ctx, { state }) => {
        await state.update({ age: Number(ctx.body) })
    })

    .addAction(async (ctx, { state, flowDynamic }) => {

        const name = state.get('name')
        const age = state.get('age')

        db.prepare(`
            INSERT INTO users (phone, name, age)
            VALUES (?, ?, ?)
        `).run(ctx.from, name, age)

        await flowDynamic(`✅ Usuario guardado: ${name}`)
    })