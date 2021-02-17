import { getRepository } from "typeorm";
import crypto from "crypto";

import { Login } from "../models/entities/login";

interface Params {
  email: string;
  cpf: string;
  senha: string;
}

class LoginService {
  async Create({ email, cpf, senha }: Params): Promise<Login> {
    const login = getRepository(Login);

    const senhaCriptografada = crypto
      .createHash("sha256")
      .update(senha)
      .digest("hex");

    const dadosLogin = login.create({
      email,
      cpf,
      senha: senhaCriptografada,
    });

    const loginSalvo = await login.save(dadosLogin);

    return loginSalvo;
  }
}

export default LoginService;
