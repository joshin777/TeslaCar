
module.exports = app => {
    var cars = require('../controllers/cars.controller');

    var router = require('express').Router();

    router.post("/", cars.create);

    router.get("/", cars.findAll);

    router.put('/:id', cars.update)

    router.delete('/:id', cars.delete)

    app.use("/api/cars", router);

}