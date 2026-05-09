import { addKeyword } from '@builderbot/bot'
import { apiPost } from '../services/api.service'

export const apiPostFlow = addKeyword(['api post', 'enviar api'])

    .addAnswer('👤 Nombre?', { capture: true }, async (ctx, { state }) => {
        await state.update({ name: ctx.body })
    })

    .addAnswer('📧 Email?', { capture: true }, async (ctx, { state }) => {
        await state.update({ email: ctx.body })
    })

    .addAction(async (ctx, { state, flowDynamic }) => {

        const payload = {
            phone: ctx.from,
            name: state.get('name'),
            email: state.get('email')
        }

        const data = await apiPost('/leads', payload)

        await flowDynamic(`✅ Enviado correctamente\nID: ${data.id || 'OK'}`)
    })