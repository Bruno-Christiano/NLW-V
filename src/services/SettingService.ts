import { getCustomRepository } from "typeorm";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface SettingCreate {
    chat: boolean,
    username: string
}

class SettingService {

    async create({ chat, username }: SettingCreate) {

        const settingsRepository = getCustomRepository(SettingsRepository);

        const userAlreadyExists = await settingsRepository.findOne({
            username
        })// verificar esse esse registro ja existe

        if (userAlreadyExists) {
            throw new Error(`Usuário ${userAlreadyExists.username} jé existe no banco de dados`);
        }

        const settings = settingsRepository.create({
            chat,
            username

        });


        await settingsRepository.save(settings);

        return settings;

    }

}

export { SettingService }