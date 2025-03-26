const express = require('express');
const path = require('path');
const { PrismaClient } = require('@prisma/client');
const bcrypt = require('bcrypt');
const bodyParser = require('body-parser');

const app = express();
const prisma = new PrismaClient();
const PORT = 3000;

app.use(express.static(__dirname));
app.use('/images', express.static(path.join(__dirname, 'images')));
app.use('/assets', express.static(path.join(__dirname, 'assets')));
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());

// Rota para cadastro de usuário
app.post('/cadastro', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const hashedPassword = await bcrypt.hash(senha, 10);
        await prisma.usuarios.create({
            data: { email, senha: hashedPassword }
        });
        res.send("Cadastro realizado com sucesso!");
    } catch (error) {
        res.status(400).send("Erro ao cadastrar usuário: " + error.message);
    }
});

// Rota para login de usuário
app.post('/login', async (req, res) => {
    const { email, senha } = req.body;

    try {
        const usuario = await prisma.usuarios.findUnique({ where: { email } });

        if (!usuario || !(await bcrypt.compare(senha, usuario.senha))) {
            return res.status(401).send("Email ou senha incorretos");
        }

        res.send("Login realizado com sucesso!");
    } catch (error) {
        res.status(400).send("Erro no login: " + error.message);
    }
});

app.listen(PORT, () => {
    console.log(`Servidor rodando em http://localhost:${PORT}`);
});

