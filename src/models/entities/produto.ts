import {
  Column,
  CreateDateColumn,
  Entity,
  JoinColumn,
  JoinTable,
  ManyToMany,
  ManyToOne,
  OneToOne,
} from "typeorm";

import { Marca } from "./marca";
import { Estoque } from "./estoque";
import { Comanda } from "./comanda";

@Entity()
export class Produto {
  @Column("uuid", {
    primary: true,
    default: () => "uuid_generate_v4()",
  })
  id: string;

  @Column()
  nome: string;

  @ManyToOne(() => Marca, (marca) => marca.produtos)
  marca: Marca;

  @Column("boolean", { default: () => true })
  ativo: boolean;

  @OneToOne(() => Estoque)
  @JoinColumn()
  estoque: Estoque;

  @ManyToMany(() => Comanda)
  @JoinColumn()
  comandas: Comanda[];

  @CreateDateColumn()
  criadoEm: Date;
}
