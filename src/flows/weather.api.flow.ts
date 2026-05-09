import { addKeyword } from '@builderbot/bot'
import axios from 'axios'

export const weatherApiFlow = addKeyword(['clima', 'weather'])

    .addAction(async (ctx, { flowDynamic }) => {

        const text = ctx.body.toLowerCase()

        // extraer ciudad simple
        const city = text.replace('clima', '').trim() || 'Buenos Aires'

        try {
            const { data } = await axios.get(
                `https://api.open-meteo.com/v1/forecast`,
                {
                    params: {
                        latitude: -34.6037,
                        longitude: -58.3816,
                        current_weather: true
                    }
                }
            )

            const temp = data.current_weather.temperature
            const wind = data.current_weather.windspeed

            await flowDynamic(
                `🌤 Clima en ${city}\n` +
                `🌡 Temperatura: ${temp}°C\n` +
                `💨 Viento: ${wind} km/h`
            )

        } catch (error) {
            console.error(error)
            await flowDynamic('❌ Error consultando el clima')
        }
    })