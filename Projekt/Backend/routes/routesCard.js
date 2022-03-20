const express = require('express');
const router = express.Router();
const Card = require('../models/card');

// eine GET-Anfrage
router.get('/', async(req, res) => {

    res.send({ message: "Hello FIW!" });
});


// get all Cards
router.get('/yourPlants', async(req, res) => {
    const allCards = await Card.find();
    console.log(allCards);
    res.send(allCards);
});


// post one plan
router.post('/yourPlants', async(req, res) => {
    const newCard = new Card({
            plant: req.body.plant,
            user_id: req.body.user_id
    })
    await newCard.save();
    res.send(newCard);
});

// get one card via id
router.get('/yourPlants/plant/:id', async(req, res) => {
    try {
        const card = await Card.findOne({ _id: req.params.id });
        console.log(req.params);
        res.send(card);
    } catch {
        res.status(404);
        res.send({
            error: "Card does not exist!"
        });
    }
});

// get all Cards to User
router.get('/yourPlants/:id', async(req, res) => {
    try {
        const allCardsToUser = await Card.find({user_id: req.params.id});
        res.send(allCardsToUser);
    } catch {
        res.status(404);
        res.send({
            error: "User does not exist!"
        });
    }
});

// update one card
router.patch('/yourPlants/:id', async(req, res) => {
    try {
        const card = await Card.findOne({ _id: req.params.id })

        if (req.body.plant) {
            card.plant = req.body.plant
        }

        await Card.updateOne({ _id: req.params.id }, card);
        res.send(card)
    } catch {
        res.status(404)
        res.send({ error: "Plan does not exist!" })
    }
});

// delete one card via id
router.delete('/yourPlants/:id', async(req, res) => {
    try {
        await Card.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Plan does not exist!" })
    }
});


module.exports = router;