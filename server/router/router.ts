import spotifyController from "@s/router/spotify/controllers/spotify-controller"
import vkController from "@s/router/vk/controllers/vk-controller"
import express from "express"
const router = express.Router()

// router.get('/getSpotifyToken', spotifyController.getSpotifyToken)
router.get('/getSpotifyData/:params', spotifyController.getSpotifyData)
router.get('/getVkData/:params', vkController.getVkData)

export default router