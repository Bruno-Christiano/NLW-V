import { Request, Response } from 'express';
import { getCustomRepository } from 'typeorm';
import { SettingsRepository } from '../repositories/SettingsRepository';
import { SettingService } from '../services/SettingService';

class SettingsController {
    async create(request: Request, response: Response) {

        const { chat, username } = request.body; //desestruturação
        const settingService = new SettingService();
        try {
            const settings = await settingService.create({
                chat,
                username
            })
            return response.status(200).json(settings);

        } catch (error) {
            return response.status(400).json({
                mensagem: error.message

            });
        };
    };
};

export { SettingsController };