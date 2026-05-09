export const registerRoutes = (server, handleCtx) => {

    server.post('/v1/messages',
        handleCtx(async (bot, req, res) => {

            const { number, message, urlMedia } = req.body

            await bot.sendMessage(number, message, {
                media: urlMedia ?? null
            })

            res.end('sended')
        })
    )


    server.post('/v1/register',
        handleCtx(async (bot, req, res) => {

            const { number, name } = req.body

            await bot.dispatch('REGISTER_FLOW', {
                from: number,
                name
            })

            res.end('trigger')
        })
    )


    server.post('/v1/samples',
        handleCtx(async (bot, req, res) => {

            const { number } = req.body

            await bot.dispatch('SAMPLES', {
                from: number
            })

            res.end('trigger')
        })
    )


    server.post('/v1/blacklist',
        handleCtx(async (bot, req, res) => {

            const { number, intent } = req.body

            if (intent === 'remove') bot.blacklist.remove(number)
            if (intent === 'add') bot.blacklist.add(number)

            res.json({
                status: 'ok',
                number,
                intent
            })
        })
    )


    server.get('/v1/blacklist/list',
        handleCtx(async (bot, req, res) => {

            const blacklist = bot.blacklist.getList()

            res.json({
                status: 'ok',
                blacklist
            })
        })
    )
}