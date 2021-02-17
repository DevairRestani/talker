import {
  Column,
  Entity,
  JoinTable,
  ManyToMany,
  CreateDateColumn,
  UpdateDateColumn,
  OneToOne,
  JoinColumn,
} from "typeorm";

import { Produto } from "./produto";

@Entity()
export class Estoque {
  @Column("uuid", {
    primary: true,
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column("decimal")
  quantidade: Number;

  @Column("decimal")
  valor: Number;

  @Column("boolean", { default: () => true })
  ativo: boolean;

  @ManyToMany(() => Produto)
  @JoinColumn()
  produtos: Produto[];

  @CreateDateColumn()
  criado_em: Date;

  @UpdateDateColumn()
  atualizado_em: Date;

  @OneToOne(() => Produto)
  @JoinColumn()
  produto: Produto;
}
