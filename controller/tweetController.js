const tweetModel = require("../model/tweet")

async function tweetUpload(req, res) {

    try {
        const userId = req.user._id;
        const { description } = req.body;

        const tweet = await tweetModel.create({
            userId: userId,
            description: description
        })

        res.send({
            message: "Tweet uploaded successfully",
            data: tweet,
            status: true
        })
    } catch (error) {
        res.send({
            message: "Something went wrong",
            data: null,
            status: false
        })
    }

}

async function updateTweet(req, res) {
    try {
        const userId = req.user._id
        const id = req.params.id

        const updateData = await tweetModel.updateOne({ userId: userId, _id: id }, {
            $set: {
                description: req.body.description
            }
        })

        res.send({
            message: "Tweet updated successfully",
            data: updateData,
            status: true
        })
    } catch (err) {
        res.send({
            message: "Something went wrong",
            data: null,
            status: false
        })
    }
}

module.exports = {
    tweetUpload,
    updateTweet
}