                        ## 🧜🏻‍♂️🏄🏿Welcome

##💻💻
I first started off doing creating my ejs files for my navigation routes.

picture here

## The Beginning
I then started one by one creating my routes inside of the my controller files. I could put it inside of the server.js and did app. but I decided to out it inside of the controllers and use router.get, put, etc. This made it easier for me to locate things when I needed to debug a problem which I had lots of problems

## Blockers 🛠 🧑🏾‍💻🧑🏾‍💻🧑🏾‍💻🗣🗣🗣  
Running into blocker with this project was not uncommon and I would often get cannot get error which often got fixed from me making sure my router location was pointing to the right page.


## My API 🚀🚀🚀
I then added an api called "Coin API 2.0 which did not require key. This made my effort much more to easier because I did not have to put a key Inside of a .env.



<img src="./images/coinapi.png" alt="Coin API's documentation on postman"/>



## TESTING MY API🔌🔌
after that I wanted to see if I could get some data back and that required me to make a router.get for it as shown

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