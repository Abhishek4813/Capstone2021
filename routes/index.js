const express = require('express');
const process=require("child_process");
const router = express.Router();

function execute(ls, v){
ls.stdout.on('data', function (data) {
   ls.stdin.write(v+'\n');
});
}

router.post('/people', function(req, res, next) {
  const {firstname,lastname}=req.body;
  ls=process.exec("./discover/discover.sh");
  execute(ls,2);
  execute(ls,firstname);
  execute(ls,lastname);
  res.status(200).end();
});

module.exports = router;
