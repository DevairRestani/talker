import {
  Column,
  CreateDateColumn,
  Entity,
  UpdateDateColumn,
  OneToMany,
} from "typeorm";

import { Comanda } from "./comanda";

@Entity()
export class Login {
  @Column("uuid", {
    primary: true,
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("varchar", { nullable: true })
  email: string | null;

  @Column({ unique: true })
  cpf: string;

  @Column()
  senha: string;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;

  @OneToMany(() => Comanda, (comanda) => comanda.pessoa)
  comandas: Comanda[];
}
