import express from 'express'
import { PrismaClient } from '@prisma/client'
import bcrypt from 'bcrypt';
import cors from 'cors'

const prisma = new PrismaClient() //vai ser importante por guardar tudo que tem dentro do prisma

const app = express()
app.use(express.json())
app.use(cors())

const users = []

app.post('/cad_user', async (req, res) => {
    const usuario = await prisma.usuario.create({
        data: {
            email: req.body.email,
            senha: await bcrypt.hash(req.body.senha, 10)
        }
    })

    res.status(201).json({
        message: "Usuário cadastrado com sucesso!",
        email: req.body.email
    })
})

//faltando fazer a tela de cad e login de vendedor, e vincular a area do vendedor à tela de login
app.post('/cad_vendedor', async (req,res) => {
    const vendedor = await prisma.vendedor.create({
        data: {
            email: req.body.email,
            senha: await bcrypt.hash(req.body.senha, 10) 
        }
    })

    res.status(201).json({
        message: "Vendedor cadastrado com sucesso!",
        email: req.body.email
    })
})

app.post('/area_vendedor', async (req,res) => {
    const vendedorPadraoId = 1;
    const produto = await prisma.produto.create({
        data: {
            nome: req.body.nome,
            valor: parseFloat(req.body.valor),
            imagemURL: req.body.imageURL,
            vendedorId: vendedorPadraoId
        }
    })
    res.status(201).json({
        message: "Produto cadastrado com sucesso!",
        nome: req.body.nome,
        valor: req.body.valor,
        imageURL: req.body.imageURL
    })
}) 

app.post('/catalogo', async (req, res) => {
    const { valorTotal, produtos } = req.body
    const clientePadraoId = 1

    const venda = await prisma.venda.create({
        data: {
        valorTotal: parseFloat(valorTotal),
        clienteId: clientePadraoId,
        produtos: {
            connect: produtos.map(prod => ({ id: prod.id}))
        }
    }
})

res.status(201).json({
    message:"Venda cadastrada com sucesso!",
})

})
 /*Estrutura da Rota*/

 /*1)Tipo da rota/método HTTP(post, put, get, delete, patch)*/
 /*2)Endereço dela(/produto, /cad_vendedor)*/

 app.listen(3000)