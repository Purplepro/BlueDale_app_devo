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




router.put('/mywatchlist', (req, res) => {
    
    let updatedPrice
    const config = { 
        method: 'GET',
        url: `http://api.coincap.io/v2/assets/${req.body.cryptoid}`,      
        headers: {} 
      };
      
      axios(config)
      .then(function (response) {
        //   if(response.data === undefined) 
        updatedPrice = response.data.data.priceUsd
        console.log(response.data.data);
        // console.log("body: %j", req.body)
      })
      .then(response => {
        db.watchlist.update({
            priceUsd: updatedPrice
          }, { where: {
            id: req.body.id
          }})
          .then(results => {
              console.log(results)
          })
      })
      .catch(function (error) {
        console.log(error);
      });
   
        console.log(req.body);
        res.redirect('/currency/mywatchlist')
})




// whatever comes after mywatchlist/ is a parameter in this case (:id).

router.delete('/mywatchlist/:id', (req, res) => {
        db.watchlist.destroy({
            where: {id: parseInt(req.params.id)}
        })
        .then(removed => {
            console.log(removed);
            res.redirect('/currency/mywatchlist') 
        })
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

        

        res.render('./currency/mywatchlist', {results});
    
    
})








module.exports = router;



