import spotifyController from "@s/router/controllers/spotify-controller"
import express from "express"
const router = express.Router()

// router.get('/getSpotifyToken', spotifyController.getSpotifyToken)
router.get('/getSpotifyData/:params', spotifyController.getSpotifyData)

export default router