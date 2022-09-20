const DB = require('../bancoDeDados/bancoDedados')

module.exports = function(app) {

    app.post('/usuarios/registro', async (req, res) => {
        // 1. obter informações
        const nome = req.body.nome;
        const email = req.body.email;
        const senha = req.body.senha;
    
        // validando
        if (!nome || !email || !senha) {
            res.status(400).send({ error: 'Nome, email ou senha não informado!' })
            return;
        }
    
        let usuarioJaRegistrado = await DB.usuario.findUnique({
            where: {
                email: email
            }
        });
    
        // 2. adicionar no array de usuarios
        // um objeto com essas propriedades acima
        const usuario = { nome, email, senha };
        await DB.usuario.create ({ data : usuario});
        
    
        // 3. retornar o usuario registrado
        res.send({ usuario })
    })
    
    app.get('/usuarios', async (req, res) => {
        const todosUsuarios = await DB.usuario.findMany();
        res.send({ usuarios: todosUsuarios })
    })
    
    app.post('/usuarios/login', async (req, res) => {
        const email = req.body.email;
        const senha = req.body.senha;
    
        let usuario = await DB.usuario.findFirst();
        if (!usuario) {
            res.status(400).send({ error: 'Usuário não encontrado' })
            return;
        }
    
        if (usuario.senha !== senha) {
            res.status(400).send({ error: 'Senha inválida' })
            return;
        }
    
        res.send({ usuario: usuario })
    })
}
  