const express=require('express')

const controller=require('../controller')
const authenticationMiddleware=require('../middleware/authentication.middleware')
const validationMiddleware=require("../middleware/validation.middleware")

const router=express.Router({mergeParams:true})

router.use(authenticationMiddleware);

router.route('/employee').post(validationMiddleware,controller.employeeController.employeeSave);
router.route('/employee').get(controller.employeeController.employeeGetAll);
router.route('/employee/:id').get(controller.employeeController.employeeGet);
router.route('/employee/:id').put(validationMiddleware,controller.employeeController.employeeUpdate);
router.route('/employee/:id').delete(validationMiddleware,controller.employeeController.employeeDelete);

module.exports=router;