import { Column, Entity, PrimaryGeneratedColumn } from 'typeorm';

@Entity()
export default class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  email: string;

  @Column()
  passworld: string;

  @Column()
  profilePictureUrl: string;

  @Column()
  registrationDate: string;
}
