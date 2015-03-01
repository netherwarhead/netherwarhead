var express = require('express');
var reddit = require('../lib/api/reddit');
var router = express.Router();

router.get('/pull', function (req, res, next) {
  reddit.all(function (body) {
    res.json(body);
  });
});

module.exports = router;