const express=require('express')

const controller=require('../controller')
const router=express.Router({mergeParams:true})

router.route('/employee').post(controller.employeeController.employeeSave);
router.route('/employee/:id').get(controller.employeeController.employeeGet);
router.route('/employee/:id').put(controller.employeeController.employeeUpdate);
router.route('/employee/:id').delete(controller.employeeController.employeeDelete);

module.exports=router;