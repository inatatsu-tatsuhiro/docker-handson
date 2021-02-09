var express = require('express');
var router = express.Router();
const cn = require('../database')

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

router.get('/:id', function(req, res, next) {
  const query = `SELECT * FROM users WHERE id='${req.params.id}'`
  cn.query(query, (error, results, fields) => {
    if (error) throw error
    console.log(results)
    res.send(results)
  })
});


module.exports = router;
