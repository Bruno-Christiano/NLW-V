import { Request, Response } from 'express';
import { promises } from 'node:dns';
import { UsersService } from '../services/UsersService';

export class UsersController {


    async create(request: Request, response: Response): Promise<Response> {

        const {email} = request.body; //desestruturação

        const usersService = new UsersService();

        try {
            const user = await usersService.create(email)

            return response.status(200).json(user);

        } catch (error) {
            return response.status(400).json({
                mensagem: error.message

            });
        };
    };
}





