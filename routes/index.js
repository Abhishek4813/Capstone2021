const express = require('express');
const process=require("child_process");
const router = express.Router();

ls=process.exec("../discover/discover.sh");
function execute(v){
ls.stdout.on('data', function (data) {
   console.log(data.toString());
   ls.stdin.write(v+'\n');
});
}
execute(2);
execute("Abhishek");
execute("Kumar");
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Express' });
});

module.exports = router;
