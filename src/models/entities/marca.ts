import {
  Column,
  Entity,
  UpdateDateColumn,
  CreateDateColumn,
  OneToMany,
} from "typeorm";

import { Produto } from "./produto";

@Entity()
export class Marca {
  @Column("uuid", {
    primary: true,
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column()
  nome: string;

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;

  @OneToMany(() => Produto, (produto) => produto.marca)
  produtos: Produto[];
}
