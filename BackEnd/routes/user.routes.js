import userController from '../controllers/user.controller.js'
import express from 'express'
const userRoutes = express.Router()

userRoutes.post('/users', userController.createUserMessage)
userRoutes.get('/users', userController.getAllUsers);

export default userRoutes