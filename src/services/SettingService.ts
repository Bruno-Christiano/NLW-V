
import { getCustomRepository, Repository } from "typeorm";
import { Setting } from "../entities/Setting";
import { SettingsRepository } from "../repositories/SettingsRepository";

interface SettingCreate {
    chat: boolean,
    username: string
}

class SettingService {

    private settingsRepository: Repository<Setting>

    constructor(){
         this.settingsRepository = getCustomRepository(SettingsRepository);
    }

    async create({ chat, username }: SettingCreate) {


        const userAlreadyExists = await this.settingsRepository.findOne({
            username
        })// verificar esse esse registro ja existe

        if (userAlreadyExists) {
            throw new Error(`Usuário ${userAlreadyExists.username} jé existe no banco de dados`);
        }

        const settings = this.settingsRepository.create({
            chat,
            username

        });


        await this.settingsRepository.save(settings);

        return settings;

    }

}

export { SettingService }