import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class User {
    @PrimaryGeneratedColumn()
    id:number;

    @Column()
    fisrtName:string;

    @Column()
    lastName:string;

    @Column()
    birthday:string;

    @Column()
    email:string;
}
