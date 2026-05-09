import { addKeyword } from '@builderbot/bot'
import { apiGet } from '../services/api.service'

export const apiGetFlow = addKeyword(['api get', 'consulta api'])
    .addAnswer('🔎 Consultando API...')

    .addAction(async (_, { flowDynamic }) => {
        const data = await apiGet('/status')

        await flowDynamic(`📡 Respuesta API:\n${JSON.stringify(data, null, 2)}`)
    })