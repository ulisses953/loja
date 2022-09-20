const DB = require('../bancoDeDados/bancoDedados')

module.exports = function(app) {
    app.post('produtos/registro', async , (req, res) => {

        const nome = req.body.nome;
        const descrisao = req.body.descrisao;
        const valor = req.body.valor;
        const quantidade = req.body.valor;

        if (!nome || !descrisao || !valor || !quantidade) {
            res.status(400).send({ error : 'nome ou descrisao ou valor ou quantidade nao foi informado '})
            return;
        };


        const produto = {nome, descrisao, valor, quantidade}
        await DB.produto.create({date : produto});

        res.send({ produto });
    });

    app.get('produtos' , async, (req , res) => {
        const todosProdutos = await DB.produto.findMany();
        res.send({todosProdutos});
    })









}