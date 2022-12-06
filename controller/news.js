const news = require('../models/news')

const helloworld = async (req, res) => {
    return res.json({message: "helloworld"})
}

const createNews = async (req, res) => {
    const newsInit = await news.news.create({
        imageUrl: "http://localhost",
        title: "Hello",
        time: "123"
    })
    const newsDetailInit = await news.newsDetail.create({
        id: newsInit.id,
        imageUrl: "http://localhost123123",
        title: "Hello",
        time: "123",
        description:"asdasdkasdasd",
        like: 56,
    })
    return res.json(newsInit)
}

const getNewsById = async (req, res) => {
    const data = await news.news.findByPk(req.params.id);
    if(!data) {
        return res.status(403).json({errorMessage :"Invalid id, please check and try again"});
    }
    return res.json(data);
}

const getListNews = async (req, res) => {
    let limit = 10;
    if(req.params.limit) {
        limit = req.params.limit;
    }
    const data = await news.news.findAll({
        limit: Number(limit),
    })
    return res.json(data);
}

const getNewsDetailById = async (req, res) => {
    const data = await await news.newsDetail.findByPk(req.params.id);
    if(!data) {
        return res.status(403).json({errorMessage :"Invalid id, please check and try again"});
    }
    return res.json(data);
}

module.exports = {
    helloworld,
    createNews,
    getNewsById,
    getNewsDetailById,
    getListNews
}