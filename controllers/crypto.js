const express = require('express');
const router = express.Router();

const db = require('../models');
const methodOverride = require('method-override');


router.use(methodOverride('_method'));


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

router.get('/mywatchlist', (req, res) => {
        db.watchlist.findAll().then(response => res.render('./currency/mywatchlist', {listItems: response})).catch(err => console.log(err))

})
// whatere comes after mywatchlist/ is a parameter in this case (:id).
router.delete('/mywatchlist/:id', (req, res) => {
        // db.watchlist.destroy()
        console.log(req.params.id)
})



// -------------------------POST ROUTES-----------------



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
    res.redirect('/currency/results')
        console.log(req.body);

        const renderToPage = () => {
        results = []
        db.watchlist.findAll({
            where: 'watchlists'
        })
        const config = { // this api is still needed so it can update realtime when refreshed
            method: 'POST',
            url: `http://api.coincap.io/v2/assets/${req.body.label}`,
            headers: {  } 
          };

          axios(config)
          .then(function (response) {
            //   if(response.data === undefined) 
            results = [response.data]; //define results
            console.log(results);
            res.render('./currency/mywatchlist', {results}); 
            
          })
          .catch(function (error) {
            console.log(error);
          });
   

        res.render('./currency/mywatchlist', {results});
    }
    
})


router.put('/mywatchlist', (req, res) => {
    res.send('this is where mywatchlist is and will be updated');
});





module.exports = router;



