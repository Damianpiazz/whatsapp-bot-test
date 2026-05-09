import { addKeyword } from '@builderbot/bot'
import axios from 'axios'

export const sendDataApiFlow = addKeyword(['send', 'post', 'api'])

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

        await axios.post('https://tu-api.com/leads', payload)

        await flowDynamic('✅ Enviado a API correctamente')
    })