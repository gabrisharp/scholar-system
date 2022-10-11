class HomeController {
  async index(req, res) {
    res.json('tudo certo aqui');
  }
}

export default new HomeController();

/*
Recomendado em cada controle ter até 5 métodos
Exemplos
  index → lista todos usuários         | get
  store/create → cria um novo usuário  | post
  delete → apaga um usuário            | delete
  show → mostra um usuário             | get
  update → atualiza um usuário         | patch [unico valor] ou put [todo o objeto]
 */
