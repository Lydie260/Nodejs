const express = require('express');
const router = express.Router();
const Post = require('../models/post');


router.get('/',(req, res) =>{
    res.send('we are on posts');
});

router.post('/',async(req,res) =>{
    
    try {
       
    const post = new Post({
        title: req.body.title,
        description: req.body.description,
 

    });
    await post.save().exec()

    console.log(req.body)
    } catch (error) {
        console.log(error)
    }
});

// router.get('/specific',(req, res) =>{
//     res.send('we are on specific post');
// });



module.exports = router;