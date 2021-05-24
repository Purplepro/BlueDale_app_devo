                        ## 🧜🏻‍♂️🏄🏿Welcome

##💻💻
I first started off doing creating my ejs files for my navigation routes.

<img src="https://github.com/Purplepro/BlueDale_app_devo/blob/main/public/images/Screen%20Shot%202021-05-24%20at%205.06.33%20AM.png?raw=true" alt="screenshot of my ejs files">

## The Beginning
I then started one by one creating my routes inside of the my controller files. I could put it inside of the server.js and did app. but I decided to out it inside of the controllers and use router.get, put, etc. This made it easier for me to locate things when I needed to debug a problem which I had lots of problems

## Blockers 🛠 🧑🏾‍💻🧑🏾‍💻🧑🏾‍💻🗣🗣🗣  
Running into blocker with this project was not uncommon and I would often get cannot get error which often got fixed from me making sure my router location was pointing to the right page.


## My API 🚀🚀🚀
I then added an api called "Coin API 2.0 which did not require key. This made my effort much more to easier because I did not have to put a key Inside of a .env.



<img src="https://github.com/Purplepro/BlueDale_app_devo/blob/main/public/images/coinapi.png?raw=true" alt="Coin API's documentation on postman"/>



## TESTING MY API Then render it on the page🔌🔌
after that I wanted to see if I could get some data back and that required me to make a router.get for it the api as shown

👇🏾👇🏾👇🏾👇🏾

``` javascript
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
```

<img src="https://github.com/Purplepro/BlueDale_app_devo/blob/main/public/images/Screen%20Shot%202021-05-24%20at%206.26.00%20AM.png?raw=true" alt="my current site with styling added">

 ## Got Data back and it now renders on the page all from that line of code NICE
 Here is the data along with styling
 <img src="https://github.com/Purplepro/BlueDale_app_devo/blob/main/public/images/Screen%20Shot%202021-05-24%20at%206.36.04%20AM.png?raw=true" alt="results page with styling added">



## Adding data to my sql data base 🔌💻💻

Next I wanted to add data from my search results to my database created. I had to create a form for that like I did with the get route. in the case it an add button.
``` javascript
<div id = "result-Bg" class="slideLeft">
<ul class="resultcolor">
    <% results.forEach(result => { %>
        <li>Id: <%= result.data.id %> </li>
        <li>Rank: <%= result.data.rank  %> </li>
        <li>Symbol: <%= result.data.symbol  %>  </li>
        <li>Name: <%= result.data.name  %> </li>
        <li>Price: $<%= result.data.priceUsd %> </li>
        <li>Supply: <%= result.data.supply %> </li>
        <li>MarketCapUsd: $<%= result.data.marketCapUsd %></li>
        <li>VolumeUsd24Hr: $<%= result.data.volumeUsd24Hr %> </li>
        <li>Explorer: <%= result.data.explorer %> </li>
        <li>Timestamp: <%= result.data.timestamp %> </li>
   <% }) %> 

   <% results.forEach(result => { %> 
   <form method="POST" action="./mywatchlist">
     <input hidden type="text" name="id" value="<%= result.data.id %> "> 
     <input hidden type="text" name="rank" value="<%= result.data.rank %> "> 
     <input hidden type="text" name="symbol" value="<%= result.data.symbol %> "> 
     <input hidden type="text" name="name" value="<%= result.data.name %> "> 
     <input hidden type="text" name="priceUsd" value="<%= result.data.priceUsd %> ">
     <input hidden type="text" name="supply" value="<%= result.data.supply %> ">  
     <input hidden type="text" name="maxSupply" value="<%= result.data.maxSupply %> "> 
     <input hidden type="text" name="marketCapUsd" value="<%= result.data.marketCapUsd %> "> 
     <input hidden type="text" name="volumeUsd24Hr" value="<%= result.data.volumeUsd24Hr %> "> 
     <input hidden type="text" name="changePercent24Hr" value="<%= result.data.changePercent24Hr %> "> 
     <input hidden type="text" name="vwap24Hr" value="<%= result.data.vwap24Hr %> "> 
     <input hidden type="text" name="explorer" value="<%= result.data.explorer %> "> 
    <button class="btn btn-primary" id="circle" type="submit">+</button>
   </form> 
       <% }) %>
   <!-- the above form is the form that I am using to add a cryptocurrency and its info to a database for favorites aka mywatchlist -->
    
</ul>
</div>
```
<img src="https://github.com/Purplepro/BlueDale_app_devo/blob/main/public/images/Screen%20Shot%202021-05-24%20at%206.26.45%20AM.png?raw=true" alt="my watchlist page added data is stored">

As you can see what I am doing is calling all of the



## 
``` javascript
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
```
##


##

###