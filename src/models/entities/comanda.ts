import {
  Entity,
  Column,
  ManyToOne,
  ManyToMany,
  JoinColumn,
  CreateDateColumn,
  UpdateDateColumn,
} from "typeorm";

import { Login } from "./login";
import { Produto } from "./produto";

@Entity()
export class Comanda {
  @Column("uuid", {
    primary: true,
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("timestamp", { default: () => Date.now() })
  aberta_em: Date;

  @Column("timestamp", { nullable: true })
  fechada_em: Date | null;

  @ManyToOne(() => Login, (login) => login.comandas)
  pessoa: Login;

  @ManyToMany(() => Produto, (produto) => produto.comandas)
  @JoinColumn()
  produtos: Produto[];

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;
}
