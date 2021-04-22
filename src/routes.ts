import { Router } from 'express'
import { getCustomRepository } from 'typeorm';

import { SettingsRepository } from './repositories/SettingsRepository';

const routes = Router();

routes.post("/settings", async (req, res) => {
    const { chat, username } = req.body

    const settingsRepository = getCustomRepository(SettingsRepository)

    const settings = settingsRepository.create({
        chat,
        username
    });

    await settingsRepository.save(settings)

    return res.status(200).json(settings);


    // const newSettings = req.body
    // try {   
    //  const createsettings = settingsRepository.create(newSettings) 
    //  return res.status(200).json(createsettings)
    // } catch (error) {
    //     return res.status(500).json(error.message)
    // }



})

export { routes }