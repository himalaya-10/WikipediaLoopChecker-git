const express = require("express");
const router = express.Router();
const axios = require('axios');
const cheerio = require('cheerio');


router.post('/reqinfo', async (req, res) => {
    try {
        const { url } = req.body;
        let urlCounts = 0;
        let visitedPages = [];

        try {
            const response = await axios.get(url);
            const $ = cheerio.load(response.data);
            const paragraphs = $('div#mw-content-text p');
            for (let i = 0; i < paragraphs.length; i++) {
                const paragraphLinks = $(paragraphs[i]).find('a');
                for (let j = 0; j < paragraphLinks.length; j++) {
                    const link = $(paragraphLinks[j]).attr('href');
                    const absoluteLink = `https://en.wikipedia.org${link}`;
                    urlCounts++;
                    visitedPages.push(absoluteLink);
                    if (absoluteLink === 'https://en.wikipedia.org/wiki/Philosophy') {

                        return res.status(200).json({ urlCounts, visitedPages });
                    }
                }
            }

            res.status(200).json({ urlCounts, visitedPages });
        } catch (err) {
            console.log(err);
            res.status(400).send({ msg: "Internal error occurred" });
        }
    } catch (err) {
        console.log(err);
        res.status(400).send({ msg: "Internal error occurred" });
    }
});


module.exports = router;