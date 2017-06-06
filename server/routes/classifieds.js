'use strict';

const express = require('express');
const router = express.Router();
const knex = require('../../knex')

router.get('/', function(req, res) {
  knex('classifieds')
  .select('id', 'title', 'description', 'price', 'item_image')
    .then((classifieds) => {
      res.json(classifieds);
    }).catch(function(err) {
      res.send(err);
    })
});

router.get('/:id', function(req, res) {
  knex('classifieds')
  .select('id', 'title', 'description', 'price', 'item_image')
    .then((classifieds) => {
      res.json(classifieds[0]);
    }).catch(function(err) {
      res.send(err);
    })
});

router.post('/', (req, res, next) => {
  knex('classifieds')
    .insert({
      title: req.body.title,
      description: req.body.description,
      price: req.body.price,
      item_image: req.body.item_image
    })
    .returning(["id", "title", "description", "price", "item_image"])
    .then((classified) => {
      res.json(classified[0]);
    }).catch(function(err) {
      res.send(err);
    })
});

router.patch('/:id', function(req, res, next) {
  knex('classifieds')
  .update({
    title: req.body.title,
    description: req.body.description,
    price: req.body.price,
    item_image: req.body.item_image
  })
  .returning(["id", "title", "description", "price", "item_image"])
  .then(classifieds => {
    res.json(classifieds[0])
  }).catch(function(err) {
      res.send(err);
    })
})

router.delete('/:id', function(req, res, next) {
  knex('classifieds')
  .where('id', req.params.id)
  .del()
  .returning(["id", "title", "description", "price", "item_image"])
  .then(classifieds => {
    res.send(classifieds[0])
  }).catch(function(err) {
      res.send(err);
    })
})

module.exports = router;
