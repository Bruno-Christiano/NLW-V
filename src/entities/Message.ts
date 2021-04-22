import {Entity, Column, CreateDateColumn,  UpdateDateColumn, PrimaryColumn, JoinColumn, ManyToMany, ManyToOne} from 'typeorm'

import {v4 as uuid} from 'uuid';
import { User } from './User';

@Entity('messages')
export class Message {
    
    @PrimaryColumn()
    id:string

    @Column()
    admin_id: string

    /* definição do grau de relacionamento*/
    @JoinColumn({ name: 'user_id'}) // fazer o join com a coluna referenciada
    @ManyToOne(()=> User)// refeencia a entidade
    user : User// N-1 muitas mensagens para 1 usuario

    @Column()
    user_id:string

    @Column()
    text:string

    @CreateDateColumn()
    created_at:Date

    constructor (){
        if (!this.id) {
            this.id = uuid(); //gerar uma chave 
        }
    }
}