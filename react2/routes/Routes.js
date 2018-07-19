const axios = require("axios");
const router = require("express").Router();
const express = require("express");
const app = express();
const cheerio = require("cheerio");

let NytArticle = require("../models/Article.js")

// Move articles into database 
app.get("/get", function(req, res) {
    console.log("inside router.get(api/articles");



    // res.render("index");


    
    // axios.get("https://www.nytimes.com/?WT.z_jog=1&hF=f&vS=undefined").then(function (response) {
    //     let $ = cheerio.load(response);

    //     $("story-heading").each(function (i, element) {
    //         const result = {};

    //         result.title = $(element).children().text();
    //         result.date = Date.now()
    //         result.url = $(element).children().attr("href")
    //         console.log("title" + title);
    //         console.log("date" + date);
    //         console.log("url" + url);

    //         const articleInfo = {
    //             title: title,
    //             date: date,
    //             link: link
    //         }
    //         console.log("This is articleInfo of title, date,link", articleInfo);

    //         NytArticle.create(result)
    //             .then(function (dbData) {
    //                 console.log("Here is database Data", dbData)
    //             })
    //             .catch(function (err) {
    //                 return res.json(err);
    //             });
    //     })
    //     res.send("Scrape Complete");
    // })
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