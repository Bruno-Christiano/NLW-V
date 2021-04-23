import { getCustomRepository, Repository } from "typeorm"
import { Message } from "../entities/Message";
import { MessagesRepository } from "../repositories/MessagesRepostiry"

interface MessageCreate {
    admin_id?: string
    text: string
    user_id: string
}

export class MessagesService {

    private messageRepository: Repository <Message>;

    constructor(){
        this.messageRepository = getCustomRepository(MessagesRepository);
    }

    async create({ admin_id, text, user_id }: MessageCreate) {

        const message = this.messageRepository.create({
            admin_id,
            text,
            user_id
        })

        await this.messageRepository.save(message)

        return message
    }

    async listByUser(user_id:string){

        const messageRepository = this.messageRepository

        const list = await messageRepository.find({
            where:{user_id},
            relations:["user"]
        })
        
        return list
    }
}