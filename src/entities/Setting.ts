
import {Entity, Column, CreateDateColumn, UpdateDateColumn, PrimaryColumn} from 'typeorm'

import {v4 as uuid} from 'uuid';

@Entity("settings") // nome da tabela
class Setting{
    @PrimaryColumn()
    id:string

    @Column()
    username:string

    @Column()
    chat:boolean

    @UpdateDateColumn()//a forma ja trazida junto com o typeorm
    updated_at: Date

    @CreateDateColumn() //a forma ja trazida junto com o typeorm
    created_at:Date

    constructor (){
        if (!this.id) {
            this.id = uuid(); //gerar uma chave 
        }
    }
}
export {Setting}