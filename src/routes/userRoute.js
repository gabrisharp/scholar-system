import { Router } from 'express';
import userController from '../controllers/UserController';
import loginRequired from '../middlewares/loginRequired';

const router = new Router();
/* Preferencialmente deixar comentado ↓ */
router.get('/', userController.index);
router.get('/:id', userController.show);

router.post('/', userController.store);
// Usuário só poderá editar seu próprio login
router.put('/', loginRequired, userController.update);
router.delete('/', loginRequired, userController.delete);

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
