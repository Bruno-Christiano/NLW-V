import { Request, Response } from 'express';
import { MessagesService } from '../services/MessagesService';


export class MessageController {


    async create(request: Request, response: Response): Promise<Response> {

        const { admin_id, text, user_id } = request.body; //desestruturação

        const messageService = new MessagesService();

        try {
            const message = await messageService.create({
                admin_id,
                text,
                user_id
            })

            return response.status(200).json(message);

        } catch (error) {
            return response.status(400).json({
                mensagem: error.message

            });
        };
    };

    async showByuser(request: Request, response: Response){
        const {id} = request.params

        const messageService = new MessagesService();

        const list = await messageService.listByUser(id)

        return response.json(list)
            
    }

    
}

