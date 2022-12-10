const videos = require('../models/videos')

const helloworld = async (req, res) => {
    return res.json({ message: "helloworld" })
}

const createVideo = async (req, res) => {
    const body = req.body;
    const videoInit = await videos.create({
        channelName: body.channelName,
        uri: body.uri,
        caption: body.caption,
        like: body.like,
        comments: body.comments,
        avatarUri: body.avatarUri,
        musicName: body.musicName
    })
    return res.json(videoInit);
}

const getListVideos = async (req, res) => {
    let limit = 10;
    if (req.params.limit) {
        limit = req.params.limit;
    }
    const data = await videos.findAll({
        limit: Number(limit),
    })
    return res.json(data);
}

const getVideoById = async (req, res) => {
    const data = await videos.findByPk(req.params.id);
    if (!data) {
        return res.status(403).json({ errorMessage: "Invalid id, please check and try again" });
    }
    return res.json(data);
}

const increaseLikeById = async (req, res) => {
    await videos.increment(
        { like: +1 },
        { where: { id: req.params.id } }
    );
    const data = await videos.findByPk(req.params.id)
    return res.json(data)
}

const reduceLikeById = async (req, res) => {
    await videos.increment(
        { like: -1 },
        { where: { id: req.params.id } }
    );
    const data = await videos.findByPk(req.params.id)
    return res.json(data)
}

module.exports = {
    helloworld,
    createVideo,
    getListVideos,
    getVideoById,
    increaseLikeById,
    reduceLikeById
}