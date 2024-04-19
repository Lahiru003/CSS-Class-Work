const Animal = require('../model/Animal');

// Display the home page
function displayHomePage(req, res) {
    res.render("index.ejs");
}

// Display list of all animals

    async function displayAllAnimals(req, res) {
        console.log("connecting all animals");
        try {
            const animals = await Animal.find();
            res.render('animals/all-animals', { title: 'Animal List', animals: animals });

        } catch (error) {
            console.error("Error retrieving animals: ", error);
            res.status(500).send({ message: "error retrieving animals." });
        }
    }
    


    function displayCreateAnimalForm(req, res) {
        res.render('animals/entry-form', { title: 'Add New Animal', animal: {} }); 
    }
    
    async function createAnimal(req, res) {
        const newAnimal = new Animal({
            Zoo: req.body.Zoo,
            ScientificName: req.body.ScientificName,
            CommonName: req.body.CommonName,
            GivenName: req.body.GivenName,
            Gender: req.body.Gender,
            DateOfBirth: req.body.DateOfBirth,
            Age: req.body.Age,
            IsTransportable: req.body.IsTransportable === 'true' 
        });
    
        try {
            await newAnimal.save();
            res.redirect('/animals/all-animals');
        } catch (error) {
            console.error("Error creating the animal: ", error);
            res.status(500).render('animals/entry-form', { title: 'Add New Animal', animal: req.body, error: "Failed to create animal." });
        }
    }
    
// Display the form to edit an existing animal
async function displayEditAnimalForm(req, res) {
    try {
        const animal = await Animal.findById(req.params.id);
        if (!animal) {
            return res.status(404).send({ message: "Animal not found with id " + req.params.id });
        }
        res.render('animals/edit-animal', { title: 'Edit Animal', animal: animal });
    } catch (error) {
        console.error("Error retrieving animal: ", error);
        res.status(500).send({ message: "Error retrieving animal with id " + req.params.id });
    }
}

// Handle updating an animal
async function updateAnimal(req, res) {
    try {
        // Convert 'IsTransportable' from 'on'/'undefined' to true/false
        req.body.IsTransportable = req.body.IsTransportable === 'on' ? true : false;

        await Animal.findByIdAndUpdate(req.params.id, req.body);
        res.redirect('/animals/all-animals');
    } catch (error) {
        console.error("Error updating animal: ", error);
        res.status(500).send({ message: "Error updating animal with id " + req.params.id });
    }
}

// Handle deleting an animal
async function deleteAnimal(req, res) {
    try {
        await Animal.findByIdAndDelete(req.params.id);
        res.redirect('/animals/all-animals');
    } catch (error) {
        console.error("Error deleting animal: ", error);
        res.status(500).send({ message: "Could not delete animal with id " + req.params.id });
    }
}

module.exports = {
    displayHomePage,
    displayAllAnimals,
    displayCreateAnimalForm,
    createAnimal,
    displayEditAnimalForm,
    updateAnimal,
    deleteAnimal
};
