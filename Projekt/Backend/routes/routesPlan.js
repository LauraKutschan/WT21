const express = require('express');
const router = express.Router();
const Plan = require('../models/plan');

// eine GET-Anfrage
router.get('/', async(req, res) => {

    res.send({ message: "Hello FIW!" });
});



// get all Plans
router.get('/yourPlants/plan', async(req, res) => {
    const allPlans = await Plan.find();
    console.log(allPlans);
    res.send(allPlans);
});

// post one plan
router.post('/yourPlants/plan', async(req, res) => {
    const newPlan = new Plan({
        plant: req.body.plant,
        date: req.body.date,
        activity: req.body.activity
    })
    await newPlan.save();
    res.send(newPlan);
});

// get one plan via id
router.get('/yourPlants/plan/:id', async(req, res) => {
    try {
        const plan = await Plan.findOne({ _id: req.params.id });
        console.log(req.params);
        res.send(plan);
    } catch {
        res.status(404);
        res.send({
            error: "Plan does not exist!"
        });
    }
})

// update one plan
router.patch('/yourPlants/plan/:id', async(req, res) => {
    try {
        const plan = await Plan.findOne({ _id: req.params.id })

        if (req.body.plant) {
            plan.plant = req.body.plant
        }

        if (req.body.date) {
            plan.date = req.body.date
        }

        if (req.body.activity) {
            plan.activity = req.body.activity
        }

        await Plan.updateOne({ _id: req.params.id }, plan);
        res.send(plan)
    } catch {
        res.status(404)
        res.send({ error: "Plan does not exist!" })
    }
});

// delete one plan via id
router.delete('/yourPlants/plan/:id', async(req, res) => {
    try {
        await Plan.deleteOne({ _id: req.params.id })
        res.status(204).send()
    } catch {
        res.status(404)
        res.send({ error: "Plan does not exist!" })
    }
});

module.exports = router;