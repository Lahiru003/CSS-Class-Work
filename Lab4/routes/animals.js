const express = require('express');
const router = express.Router();
const animalController = require('../controllers/animalController');

router.get('/', animalController.displayHomePage);
router.get('/animals/all-animals', animalController.displayAllAnimals);
router.get('/animals/entry-form', animalController.displayCreateAnimalForm);
router.post('/animals/add', animalController.createAnimal);
router.get('/animals/edit/:id', animalController.displayEditAnimalForm);
router.post('/animals/edit/:id', animalController.updateAnimal);
router.post('/animals/delete/:id', animalController.deleteAnimal);

module.exports = router;
