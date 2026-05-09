import { addKeyword } from '@builderbot/bot'
import { join } from 'path'

export const mediaTestFlow = addKeyword(['media', 'test'])

    .addAnswer('🖼 Imagen', {
        media: join(process.cwd(), 'assets', 'sample.png')
    })

    .addAnswer('🎥 Video', {
        media: 'https://www.w3schools.com/html/mov_bbb.mp4'
    })

    .addAnswer('🎵 Audio', {
        media: 'https://www.soundhelix.com/examples/mp3/SoundHelix-Song-1.mp3'
    })