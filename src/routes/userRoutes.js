import express from 'express';
import UserController from '../controllers/userController.js';

const router = express.Router();
const userController = new UserController();

router.get('/', userController.getAllUsers.bind(userController));
router.get('/:id', userController.getUser.bind(userController));
router.post('/', userController.createUser.bind(userController));
router.put('/:id', userController.updateUser.bind(userController));
router.delete('/:id', userController.deleteUser.bind(userController));

export default router; 
