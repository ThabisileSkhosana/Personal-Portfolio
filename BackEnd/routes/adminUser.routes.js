

import adminUserController from '../controllers/adminUser.controller.js'
import express from 'express'
const adminUserRoutes = express.Router()

adminUserRoutes.post('/adminUsers',adminUserController.createAdminUser);

adminUserRoutes.get('/adminUsers', adminUserController.getAllAdminUsers);

adminUserRoutes.get('/adminUsers/:id', adminUserController.getAdminUserById);

adminUserRoutes.put('/adminUsers/:id', adminUserController.updateadminUserDetail);

adminUserRoutes.delete('/adminUsers/:id', adminUserController.deleteAdminUser);

export default adminUserRoutes;
