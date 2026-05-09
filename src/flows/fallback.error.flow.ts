import { addKeyword } from '@builderbot/bot'

export const fallbackFlow = addKeyword([''])
    .addAnswer('❌ No entendí el mensaje')
    .addAnswer('Escribe *menu* para ver opciones')