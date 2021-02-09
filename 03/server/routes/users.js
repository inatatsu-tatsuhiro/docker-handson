var express = require('express');
var router = express.Router();


const user = {
  id: '1810370015',
  name: 'inagaki tatsuhiro',
  nickname: 'inatatsu',
  age: 21,
}
/* GET users listing. */
router.get('/', function(req, res, next) {
  res.status(200).send({
    'user': user
  })
});

module.exports = router;
