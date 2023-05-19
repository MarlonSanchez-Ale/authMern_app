import { Router } from "express";
const router = Router();

//Importando los controladores 

import * as controller from '../controllers/appController.js';

// POST METHOD
router.route('/register').post(controller.register)
//router.route('/registerMail').post(); // send the email
router.route('/authenticate').post((req, res) => res.end()); // authenticate user
router.route('/login').post(controller.login); // login in app

// GET METHOD

router.route('/users').get(controller.getAllUsers)
router.route('/user/:username').get(controller.getUser); // user with username
router.route('/generateOTP').get(controller.generateOTP); // generate random otp
router.route('/verifyOTP').get(controller.verifyOTP);
router.route('/createResetSession').get(controller.createResetSession);

// PUT METHOD
router.route('/updateuser').put(); // is use to update the user profile
router.route('/resetPassword').put();  // use to reset password

export default router;