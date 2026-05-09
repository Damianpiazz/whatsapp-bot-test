import { addKeyword } from '@builderbot/bot'

export const cancelFlow = addKeyword(['cancel', 'salir', 'stop'])
    .addAnswer('🚫 Operación cancelada')
    .addAnswer('Escribe *menu* para volver al inicio')