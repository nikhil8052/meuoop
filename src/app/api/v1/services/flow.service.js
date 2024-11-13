// v1/services/userService.js
const db = require('../models'); // Import db object with all models

async function createFlow(data) {
  let flow = await db.uxFlow.create(data);
  return flow;
};

async function findFlow(flowId) {
  let flow = await db.uxFlow.findOne({
    where: { id: flowId }
  });
  return flow;
};

async function createImage(data) {
  let image = await db.images.create(data);
  return image;
};

async function createElement(data) {
  let element = await db.elements.create(data);
  return element;
};

async function findImage(imageId) {
  let element = await db.elements.findOne({
    where: { id: imageId }
  });
  return element;
};

async function findElement(elementId) {
  let element = await db.elements.findOne({
    where: { id: elementId }
  });
  return element;
};

async function createImageElement(data) {
  let element = await db.imagesElements.create(data);
  return element;
};

async function getImageElement(id) {
  let iamgeElements = await db.imagesElements.findOne({
    where: { id: id },
    include: [
      {
        model: db.images,
        as: 'images',
      },
      {
        model: db.elements,
        as: 'elements'
      }
    ]
  });
  return iamgeElements;
};


module.exports = { createFlow, findFlow, createImage, createElement, findImage, findElement, createImageElement, getImageElement };
