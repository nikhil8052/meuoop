// v1/routes/userRoutes.js
const express = require('express');
const router = express.Router(); // Initialize the router

const controller = require('../controller/flow.controller.js');
//add flow
router.post('/flow', controller.createFlow);

//add image
router.post('/image', controller.createImage);

//add element
router.post('/element', controller.createElement);

//add imageElement
router.post('/imageElement', controller.createImageElement);

//get imageElement by Id
router.get('/getImageElement', controller.getImageElement);



module.exports = router;
