const express = require ('express')
const app = express();
const con = require('./database/mysql')
if (con.getConnection) {
    console.log('connected!');
}

app.use('/user',require('./routes/api/contact'))

app.listen(8080 , ()=>{
    console.log('listening to port 8080...')
})