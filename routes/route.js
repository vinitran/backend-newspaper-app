const news = require('../controller/news')
const videos = require('../controller/videos')

const router = (app) => {
    app.get("/", async (req, res, next) => {
        videos.helloworld(req, res);
    });

    /**
    * @typedef news
    * @property {string} time.required -
    * @property {string} title.required -
    * @property {string} imageUrl.required -
    * @property {string} description.required -
    * @property {number} like.required -
    */
    /**
     * Create new News 
     * @route POST /post/news
     * @param {news.model} point.body.required - the new point
     * @group News
     * @returns {object} 200 - id, title, imageUrl, time, like, description
     * @returns {Error}  default - Unexpected error
     */

    app.post("/post/news", async (req, res, next) => {
        news.createNews(req, res);
    });

    app.get("/post/news/list", async (req, res, next) => {
        news.upgradeNews(req, res);
    });

    /**
     * \Get news by id
     * @route GET /get/news/id/{id}
     * @group News
     * @param {number}  id.path.required - Id of news
     * @returns {object} 200 - id, imageUrl, title, time
     * @returns {Error}  default - Unexpected error
     */

    app.get("/get/news/id/:id", async (req, res, next) => {
        news.getNewsById(req, res);
    });

    /**
     * Get news list by limit
     * @route GET /get/news/list/{limit}
     * @group News
     * @param {number}  limit.path.required - Limit of news list
     * @returns {object} 200 - id, imageUrl, title, time
     * @returns {Error}  default - Unexpected error
     */

    app.get("/get/news/list/:limit", async (req, res, next) => {
        news.getListNews(req, res);
    });

    /**
     * Get news list by default limit
     * @route GET /get/news/list
     * @group News
     * @returns {object} 200 - id, imageUrl, title, time
     * @returns {Error}  default - Unexpected error
     */

    app.get("/get/news/list", async (req, res, next) => {
        news.getListNews(req, res);
    });

    /**
     * Get detail news by id
     * @route GET /get/newsDetail/{id}
     * @group News
     * @param {number}  id.path.required - Id of detail news
     * @returns {object} 200 - id, imageUrl, title, time, description, like
     * @returns {Error}  default - Unexpected error
     */

    app.get("/get/newsDetail/:id", async (req, res, next) => {
        news.getNewsDetailById(req, res);
    });

    //videos.get

    /**
     * @typedef videos
     * @property {string} channelName.required -
     * @property {string} uri.required -
     * @property {string} caption.required -
     * @property {string} musicName.required -
     * @property {number} like.required -
     * @property {number} comments.required -
     * @property {string} avatarUri.required -
     */
    /**
     * Create new Video 
     * @route POST /post/video
     * @param {videos.model} point.body.required - the new point
     * @group Videos
     * @returns {object} 200 - id, videoUrl, title, time, thumbnail
     * @returns {Error}  default - Unexpected error
     */

    app.post("/post/video", async (req, res, next) => {
        videos.createVideo(req, res);
    });

    /**
     * Get video list by limit
     * @route GET /get/videos/list/{limit}
     * @group Videos
     * @param {number}  limit.path.required - Limit of video list
     * @returns {object} 200 - id, videoUrl, title, thumbnail, time
     * @returns {Error}  default - Unexpected error
     */

    app.get("/get/videos/list/:limit", async (req, res, next) => {
        videos.getListVideos(req, res);
    });

    /**
     * Get video list by default limit 
     * @route GET /get/videos/list/
     * @group Videos
     * @returns {object} 200 - id, videoUrl, title, thumbnail, time
     * @returns {Error}  default - Unexpected error
     */

    app.get("/get/videos/list/", async (req, res, next) => {
        videos.getListVideos(req, res);
    });

    /**
     * Get video by id
     * @route GET /get/video/id/{id}
     * @group Videos
     * @param {number}  id.path.required - Id of video
     * @returns {object} 200 - id, videoUrl, title, thumbnail, time
     * @returns {Error}  default - Unexpected error
     */

    app.get("/get/video/id/:id", async (req, res, next) => {
        videos.getVideoById(req, res);
    });

    /**
     * Get video by id
     * @route POST /post/like/increase/{id}
     * @group Videos
     * @param {number}  id.path.required - Id of video
     * @returns {object} 200 - id, videoUrl, title, thumbnail, time
     * @returns {Error}  default - Unexpected error
     */

    app.post("/post/like/increase/:id", async (req, res, next) => {
        videos.increaseLikeById(req, res);
    });

}


module.exports = router;