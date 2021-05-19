const express = require('express');
const router = express.Router();

const db = require('../models');
const { response } = require('express');



const axios = require('axios');

//this is the landing page for my searchj databse and its supposed to pull data from the api below 
// which is inside of it
router.get('/cryptosearch', (req, res) => { 

    res.render('./currency/cryptosearch');
});


router.get('/results', (req, res) => {

    let results = [];
    if (req.query.label) {
        const config = { //this is the example code from my api documentation
            method: 'GET',
            url: `http://api.coincap.io/v2/assets/${req.query.label}`,
            headers: {  } 
          };
          
          axios(config)
          .then(function (response) {
            //   if(response.data === undefined) 
            results = [response.data]; //define results
            console.log(results);
            res.render('./currency/results', {results}); 
            
          })
          .catch(function (error) {
            console.log(error);
          });
    } else {
        res.render('./currency/results', {results});

    }
    

  
})


module.exports = router;



