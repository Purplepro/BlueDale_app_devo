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

// router.get('/', (req, res) => {
//     console.log(req.body)
//     db.cryptocurrency.create(req.body)
//     .then(added => {
//         res.redirect('/results')
//     })
    
// })

router.post('/mywatchlist', (req, res) => {
    db.watchlist.create({
        cryptoid: req.body.id,
        name:req.body.name,
        symbol: req.body.symbol,
        supply: req.body.supply,
        maxSupply: req.body.maxSupply,
        marketCapUsd: req.body.marketCapUsd,
        volumeUsd24Hr: req.body.volumeUsd24Hr,
        priceUsd: req.body.priceUsd,
        changePercent24Hr: req.body.changePercent24Hr,
        vwap24Hr: req.body.vwap24Hr,
        explorer: req.body.explorer
      })
    .then(response => {
        console.log(response);
    })
    .catch(err => {
        console.log(err);
    })
    res.send('hit the page')
        console.log(req.body)
})

// router.get('/test', (req, res) => {
//     db.watchlist.findAll().then(items=>{
//         console.log(items);
//       });
// })
// res.render(‘favoriteslist’, { rickandmorty });




module.exports = router;



