import 'dotenv/config'
import { createBot, createProvider, createFlow } from '@builderbot/bot'
import { MemoryDB as Database } from '@builderbot/bot'
import { MetaProvider as Provider } from '@builderbot/provider-meta'

import { entryFlow } from './flows/entry.flow'
import { welcomeFlow } from './flows/welcome.flow'
import { interactiveMenuFlow } from './flows/interactive.menu.ui.flow'

import { userRegistrationDbFlow } from './flows/userRegistration.db.flow'
import { weatherApiFlow } from './flows/weather.api.flow'
import { sendDataApiFlow } from './flows/sendData.api.flow'

import { mediaTestFlow } from './flows/media.test.flow'

import { fallbackFlow } from './flows/fallback.error.flow'
import { cancelFlow } from './flows/cancel.flow'

import { registerRoutes } from './routes/api.routes'

import { apiGetFlow } from './flows/api.get.flow'
import { apiPostFlow } from './flows/api.post.flow'

const PORT = process.env.PORT ?? 3008

const main = async () => {
    const adapterFlow = createFlow([
        entryFlow,
        welcomeFlow,
        interactiveMenuFlow,
        userRegistrationDbFlow,
        weatherApiFlow,
        sendDataApiFlow,
        mediaTestFlow,
        cancelFlow,
        fallbackFlow,
        apiGetFlow,
        apiPostFlow
    ])

    const adapterProvider = createProvider(Provider, {
        jwtToken: process.env.JWT_TOKEN,
        numberId: process.env.NUMBER_ID,
        verifyToken: process.env.VERIFY_TOKEN,
        version: process.env.VERSION
    })

    const adapterDB = new Database()

    const { handleCtx, httpServer } = await createBot({
        flow: adapterFlow,
        provider: adapterProvider,
        database: adapterDB,
    })

    if (typeof registerRoutes === 'function') {
        registerRoutes(adapterProvider.server, handleCtx)
    }

    httpServer(+PORT)
}

main()