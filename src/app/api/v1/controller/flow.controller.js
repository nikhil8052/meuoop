const flow_type = require('../models/uxFlow.model');
const flowService = require('../services/flow.service.js');
const logger = require('../../logger.js');
const { log } = require('winston');

// create flow
async function createFlow(req, res) {
  try {

    let data = req.body;    
    let postdata = {
      flowType: data.flowType,
      name: data.name,
      description: data.description,
      status: data.status
    }
    const flow = await flowService.createFlow(postdata);
    res.status(201).json({
      message: 'Flow created successfully',
      status: 'success',
      flow: flow
    });
  } catch (error) {
    logger.error(`Failed to create flow: ${error.message}`);  // Log the error
    res.status(500).json({ error: 'Failed to create flow' });
  }
}

//add image
async function createImage(req, res) {
  try {
    let data = req.body;
    let postdata = {
      imagePath: data.image,
      flowId: data.flowId,
      status: data.status
    }
    const findFlow = await flowService.findFlow(postdata.flowId);
    if (!findFlow) {
      res.status(404).json({ error: 'Flow not found' });
    }
    const image = await flowService.createImage(postdata);
    res.status(201).json({
      message: 'Image added successfully',
      status: 'success',
      image: image
    });
  } catch (error) {
    logger.error(`Failed to create flow: ${error.message}`);  // Log the error
    res.status(500).json({ error: 'Failed to add image' });
  }
}

//add image
async function createElement(req, res) {
  try {
    let data = req.body;
    
    let postdata = {
      name: data.name,
      type: data.type,
      status: data.status
    }
    const image = await flowService.createElement(postdata);
    res.status(201).json({
      message: 'Element added successfully',
      status: 'success',
      image: image
    });
  } catch (error) {
    logger.error(`Failed to create flow: ${error.message}`);  // Log the error
    res.status(500).json({ error: 'Failed to add image' });
  }
}

//add imageElement
async function createImageElement(req, res) {
  try {
    let data = req.body;
    
    let postdata = {
      imageId: data.imageId,
      elementId: data.elementId,
      status: data.status
    }

    const findImage = await flowService.findImage(data.imageId);
    if(!findImage){
      res.status(500).json({ error: 'Image not found' });
    }

    const findElement = await flowService.findElement(data.elementId);
    if(!findElement){
      res.status(500).json({ error: 'Element not found' });
    }
    const image = await flowService.createImageElement(postdata);
    res.status(201).json({
      message: 'Image Element added successfully',
      status: 'success',
      image: image
    });
  } catch (error) {
    logger.error(`Failed to create flow: ${error.message}`);  // Log the error
    res.status(500).json({ error: 'Failed to add image' });
  }
}

//get imageElement by id
async function getImageElement(req, res) {
  try {
    let id = req.query.id;
    console.log("id#################:",id);
    

    const getImageElement = await flowService.getImageElement(id);
    if(!getImageElement){
      res.status(500).json({ error: 'ImageElement not found' });
    }

    res.status(201).json({
      message: 'Image Element get successfully',
      status: 'success',
      imageElement: getImageElement
    });
  } catch (error) {
    logger.error(`Failed to create flow: ${error.message}`);  // Log the error
    res.status(500).json({ error: 'Failed to get imageElements' });
  }
}


module.exports = { createFlow, createImage, createElement,createImageElement,getImageElement };
