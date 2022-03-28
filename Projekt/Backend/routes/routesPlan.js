const express = require('express');
const router = express.Router();
const Plan = require('../models/plan');

// get all Plans
router.get('/yourPlants/plan', async(req, res) => {
    const allPlans = await Plan.find();
    res.send(allPlans);
});

// post one plan
router.post('/yourPlants/:id/plan', async(req, res) => {
    const newPlan = new Plan({
        date: req.body.date,
        activity: req.body.activity,
        idPlant: req.body.idPlant,
    })
    await newPlan.save();
    res.send(newPlan);
});

// get one plan via id
router.get('/yourPlants/plan/:id', async(req, res) => {
    try {
        const plan = await Plan.findOne({ _id: req.params.id });
        res.send(plan);
    } catch {
        res.status(404);
        res.send({
            error: "Plan does not exist!"
        });
    }
})

// get all plans via idPlant
router.get('/yourPlants/:id/plan', async(req, res) => {
    try {
        const plan = await Plan.find({ idPlant: req.params.id });
        res.send(plan);
    } catch {
        res.status(404);
        res.send({
            error: "Plans does not exist!"
        });
    }
})

// get all plans via idPlant and entry
router.get('/yourPlants/:id/plan/:activity', async(req, res) => {
    try {
        const plan = await Plan.find({ idPlant: req.params.id, activity: req.params.activity });
        console.log(req.params);
        res.send(plan);
    } catch {
        res.status(404);
        res.send({
            error: "Plans does not exist!"
        });
    }
})


// delete one plan via id
router.delete('/yourPlants/:id/plan/:id', async(req, res) => {
    try {
        await Plan.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Plan does not exist!" })
    }
});


// delete all Plans via activity
router.delete('/yourPlants/:id/:activity', async(req, res) => {
    try {
        await Plan.deleteMany({ idPlant: req.params.id, activity: req.params.activity });
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: req.params.id })
    }
});

// delete all Plans via card
router.delete('/yourPlants/:id/plan', async(req, res) => {
    try {
        await Plan.deleteMany({ idPlant: req.params.id });
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: req.params.id })
    }
});

// delete all Plans
router.delete('/yourPlants/plan', async(req, res) => {
    try {
        await Plan.deleteMany();
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: req.params.id })
    }
});

module.exports = router;