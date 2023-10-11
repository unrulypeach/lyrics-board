var express = require('express');
var router = express.Router();

const messages = [
  {
    text: `Like no other you can't be replaced`,
    artist: 'Beach House',
    user: 'fruit',
    added: new Date().toLocaleDateString(),
  },
  {
    text: `Don't let your silly dreams Fall in between The crack of the bed and the wall`,
    artist: 'MMJ',
    user: 'baste',
    added: new Date().toLocaleDateString(),
  }
]
/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Fave Lyrics Board', messages });
});

router.get('/new', function(req, res, next) {
  res.render('form', {title: 'Your fave lyrics'})
})
module.exports = router;
