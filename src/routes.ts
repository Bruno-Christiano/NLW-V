import { Router } from 'express'
import { SettingsController } from './controllers/SettingsController';


const routes = Router();

const settingsController = new SettingsController()

routes.post("/settings", settingsController.create)

routes.get('/home',(response, req)=>{
    req.json('Vaaaaaaaaaai')
}) 
export { routes }