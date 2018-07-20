const axios = require("axios");
const router = require("express").Router();
const cheerio = require("cheerio");

let db = require("../models")

let Article = require("../models/Article.js")



// Move articles into database 
router.get("/get", function(req, res) {
    console.log("inside router.get(api/articles");
    
    axios.get("https://www.nytimes.com/").then(function (response) {
        console.log("inside cheerio function");
        let $ = cheerio.load(response.data);
        

        $(".story-heading").each(function (i, element) {
            console.log("inside .story-heading function");
            const result = {};

            result.title = $(element).children().text();
            // result.date = Date.now()
            result.url = $(element).children().attr("href")
            console.log("title" + result.title);
            console.log("date" + result.date);
            console.log("url" + result.url);

            const articleInfo = {
                title: result.title,
                date: Date.now(),
                url: result.url
            }
            console.log("This is articleInfo of title, date,link", articleInfo);

            Article.create(result)
                .then(function (dbData) {
                    console.log("Here is database Data", dbData)
                })
                .catch(function (err) {
                    return res.json(err);
                });
        })
        res.send("Scrape Complete");
    })
    //   axios
    //     .get("http://www.recipepuppy.com/api/", { params: req.query })
    //     .then(({ data: { results } }) => res.json(results))
    //     .catch(err => res.status(422).json(err));
});




// router.post("api/articles", (req, res) => {
//     axios
//       .get()
//   });

//   router.get("api/articles", (req, res) => {
//     axios
//       .get()
//   });

//   router.get("api/articles", (req, res) => {
//     axios
//       .get();
//   });

module.exports = router;