const db = require ('../database/mysql')

function add(req,res){
    var user = {
        name : req.body.name,
        email : req.body.email,
        msg : req.body.message
    }
    async function postData(){
      let sql = `insert into detail values ('${user.name}','${user.email}','${user.msg}');`
      var result = await db.query(sql);
      if (result[0].affectedRows>0) {
        res.send("Data Saved");
    } else {
      res.send("Data Failed To Save");
    
      }
    }
    postData();
}

module.exports.add = add;