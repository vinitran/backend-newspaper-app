const news = require('../models/news')
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI('78b8a6d680c64e65b57a30ec3f9f47a1');
const helloworld = async (req, res) => {
    return res.json({ message: "helloworld" })
}

const createNews = async (req, res) => {
    const body = req.body;
    console.log(body)
    const newsInit = await news.news.create({
        imageUrl: body.imageUrl,
        title: body.title,
        time: body.time
    })
    const newsDetailInit = await news.newsDetail.create({
        id: newsInit.id,
        imageUrl: body.imageUrl,
        title: body.title,
        time: body.time,
        descriptionId: newsInit.id,
        like: 0,
    })
    for (let i = 0; i < body.description.length; i++) {
        const data = body.description[i];
        await news.description.create({
            descriptionId: newsDetailInit.descriptionId,
            description: data.description,
            imageUrl: data.imageUrl
        })
    }
    return res.json(newsInit)
}

const upgradeNews = async (req, res) => {
    await newsapi.v2.topHeadlines({
        sources: 'bbc-news,the-verge',
        language: 'en',
      }).then(response => {
        console.log(response.articles[0].content);
        /*
          {
            status: "ok",
            articles: [...]
          }
        */
      });
    return res.json({ message: "success" })
}

const getNewsById = async (req, res) => {
    const data = await news.news.findByPk(req.params.id);
    if (!data) {
        return res.status(403).json({ errorMessage: "Invalid id, please check and try again" });
    }
    return res.json(data);
}

const getListNews = async (req, res) => {
    let limit = 10;
    if (req.params.limit) {
        limit = req.params.limit;
    }
    const data = await news.news.findAll({
        limit: Number(limit),
    })
    return res.json(data);
}

const getNewsDetailById = async (req, res) => {
    const newsData = await news.newsDetail.findByPk(req.params.id);
    const descriptionData = await news.description.findAll({ 
        where: {
            descriptionId: newsData.descriptionId
        }
    })
    if (!newsData) {
        return res.status(403).json({ errorMessage: "Invalid id, please check and try again" });
    }
    return res.json({
        id: newsData.id,
        imageUrl: newsData.imageUrl,
        title: newsData.title, 
        time: newsData.time,
        like: newsData.like,
        description:  descriptionData
    });
}

module.exports = {
    helloworld,
    createNews,
    getNewsById,
    getNewsDetailById,
    getListNews,
    upgradeNews
}