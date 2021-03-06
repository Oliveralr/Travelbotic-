//ATRACTIVOS DOLORES: http://dolores-hidalgo.com/lugares-tipo/atractivos/
//ATRACTIVO PARTICULAR: http://dolores-hidalgo.com/lugares/cuna-de-tierra/

const rp = require('request-promise');
const $ = require('cheerio');
const parserito = require('./exp_parse');
const url = 'http://dolores-hidalgo.com/lugares-tipo/atractivos/';

/*atractivo scraping*/
rp(url)
    .then((html) => {
        const atrCollection = [];
        for(let i = 0; i < 1; i++){
            atrCollection.push($('h4 > a', html)[i].attribs.href);
        }
        return Promise.all(
            atrCollection.map((url) => {
                return parserito(url);
            })
        )
    })

    .then((atractivos) => {
        console.log(atractivos);
    })
    .catch((err) => {
        console.log(`Here's an error!`);
    })
