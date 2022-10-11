import { Router } from 'express';
import StudentController from '../controllers/StudentController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();

router.get('/', StudentController.index);
router.get('/:id', StudentController.show);
router.post('/', loginRequired, StudentController.store);
router.put('/:id', loginRequired, StudentController.update);
router.delete('/:id', loginRequired, StudentController.delete);

export default router;

/*
Recomendado em cada controle ter até 5 métodos
Exemplos
  index → lista todos usuários         | get
  store/create → cria um novo usuário  | post
  delete → apaga um usuário            | delete
  show → mostra um usuário             | get
  update → atualiza um usuário         | patch [unico valor] ou put [todo o objeto]
 */
