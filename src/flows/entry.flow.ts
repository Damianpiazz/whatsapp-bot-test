import { addKeyword } from '@builderbot/bot'

export const entryFlow = addKeyword(['menu', 'start', 'hola', 'hi', 'hello'])
    .addAnswer('👋 Bienvenido al bot')
    .addAnswer('Escribe *menu* para ver opciones o *help* para ayuda')