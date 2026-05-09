import { addKeyword } from '@builderbot/bot'

export const welcomeFlow = addKeyword(['hi', 'hello', 'hola', 'start', 'menu'])
    .addAnswer('👋 Hola, bienvenido al bot')
    .addAnswer('📌 Escribe *menu* para ver las opciones disponibles')