import { Router } from "express";

import LoginService from "../services/login.service";

const loginRouter = Router();

loginRouter.post("/Criar", async (req, res) => {
  try {
    const { email, cpf, senha } = req.body;

    const loginFuncao = new LoginService();

    const dadosLogin = await loginFuncao.Create({ email, cpf, senha });

    return res.status(201).json(dadosLogin);
  } catch (err) {
    return res.status(400).json({ message: err.message });
  }
});

export default loginRouter;
