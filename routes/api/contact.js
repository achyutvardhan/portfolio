const express = require ('express')
const router = express.Router()
const postController =require('../../controller/postController')
router.post('/submit',postController.add)
router.get('*',(req,res)=>{
    res.status(404).send('page not found');
});
module.exports = router;