import { getCustomRepository } from "typeorm"
import { MessagesRepository } from "../repositories/MessagesRepostiry"

interface MessageCreate {
    admin_id: string
    text: string
    user_id: string
}

export class MessagesService {

    async create({ admin_id, text, user_id }: MessageCreate) {

        const messageRepository = getCustomRepository(MessagesRepository);

        const message = messageRepository.create({
            admin_id,
            text,
            user_id
        })

        await messageRepository.save(message)

        return message
    }
}