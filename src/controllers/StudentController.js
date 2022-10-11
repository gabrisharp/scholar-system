import Aluno from '../models/Aluno';
import Photo from '../models/Photo';

class StudentController {
  async index(req, res) {
    const alunos = await Aluno.findAll({
      attributes: ['id', 'nome'], // Responde somente esses atributos
      order: [['id', 'DESC'], [Photo, 'id', 'DESC']], // Retorno em ordem decrescente para ID
      include: {
        model: Photo,
        attributes: ['url', 'filename'],
      },
    });
    return res.json(alunos);
  }

  async show(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['Faltando ID'] });
      }

      const aluno = await Aluno.findByPk(id, {
        attributes: ['id', 'nome'], // Responde somente esses atributos
        order: [['id', 'DESC'], [Photo, 'id', 'DESC']], // Retorno em ordem decrescente para ID
        include: {
          model: Photo,
          attributes: ['url', 'filename'],
        },
      });
      if (!aluno) {
        return res.status(400).json({ errors: ['Aluno não existe'] });
      }
      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async store(req, res) {
    try {
      const aluno = await Aluno.create(req.body);
      return res.json(aluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async update(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['Faltando ID'] });
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ errors: ['Aluno não existe'] });
      }

      const updatedAluno = await aluno.update(req.body);
      return res.json(updatedAluno);
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }

  async delete(req, res) {
    try {
      const { id } = req.params;
      if (!id) {
        return res.status(400).json({ errors: ['Faltando ID'] });
      }

      const aluno = await Aluno.findByPk(id);
      if (!aluno) {
        return res.status(400).json({ errors: ['Aluno não existe'] });
      }

      await aluno.destroy();
      return res.json({ erased: true });
    } catch (error) {
      return res.status(400).json({
        errors: error.errors.map((err) => err.message),
      });
    }
  }
}

export default new StudentController();

/*
Recomendado em cada controle ter até 5 métodos
Exemplos
  index → lista todos usuários         | get
  store/create → cria um novo usuário  | post
  delete → apaga um usuário            | delete
  show → mostra um usuário             | get
  update → atualiza um usuário         | patch [unico valor] ou put [todo o objeto]
 */
