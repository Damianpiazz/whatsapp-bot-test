import { addKeyword } from '@builderbot/bot'
import { userRegistrationDbFlow } from './userRegistration.db.flow'
import { mediaTestFlow } from './media.test.flow'

export const interactiveMenuFlow = addKeyword(['menu', 'button'])

    .addAction(async (_, { flowDynamic }) => {

        await flowDynamic([
            {
                body: '📌 *MENÚ INTERACTIVO*',
                buttons: [
                    {
                        body: '🧾 Registro'
                    },
                    {
                        body: '📦 Media / Test'
                    },
                    {
                        body: 'ℹ️ Ayuda'
                    }
                ]
            }
        ])
    })

    .addAction(async (ctx, { gotoFlow, flowDynamic }) => {

        const option = ctx.body?.toLowerCase().trim()

        switch (option) {

            case '🧾 registro':
            case 'registro':
                return gotoFlow(userRegistrationDbFlow)

            case '📦 media / test':
            case 'media':
            case 'test':
                return gotoFlow(mediaTestFlow)

            case 'ℹ️ ayuda':
            case 'ayuda':
                return await flowDynamic(
                    '🆘 COMANDOS DISPONIBLES:\n' +
                    '- menu → ver opciones\n' +
                    '- registro → crear usuario\n' +
                    '- media → probar multimedia'
                )

            default:
                return await flowDynamic('⚠️ Opción no válida. Usa los botones del menú.')
        }
    })