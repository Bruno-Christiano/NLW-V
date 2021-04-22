import { getCustomRepository } from "typeorm";
import { UserRepository } from "../repositories/UsersRepository"


class UsersService {

    async create(email: string) {

        const userRepository = getCustomRepository(UserRepository);

        const userAlreadyExists = await userRepository.findOne({
            email
        })// verificar esse esse registro ja existe

        if (userAlreadyExists) {
            throw new Error(`Usuário ${userAlreadyExists.email} jé existe no banco de dados`);
        }

        const users = userRepository.create({
            email

        });


        await userRepository.save(users);

        return users;//retonar o usuario criado

    }

}

export { UsersService }