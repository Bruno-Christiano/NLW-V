import { getCustomRepository, Repository } from "typeorm";
import { User } from "../entities/User";
import { UserRepository } from "../repositories/UsersRepository"


class UsersService {
    private userRepository: Repository<User>

    constructor(){
        this.userRepository = getCustomRepository(UserRepository);
    }

    async create(email: string) {

        const userAlreadyExists = await this.userRepository.findOne({
            email
        })// verificar esse esse registro ja existe

        if (userAlreadyExists) {
            throw new Error(`Usuário ${userAlreadyExists.email} jé existe no banco de dados`);
        }

        const users =this.userRepository.create({
            email

        });


        await this.userRepository.save(users);

        return users;//retonar o usuario criado

    }

}

export { UsersService }