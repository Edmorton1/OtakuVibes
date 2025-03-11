import express from "express"
import spotifyController from "./controllers/spotify-controller"
const router = express.Router()

router.get('/getSpotifyToken', spotifyController.getSpotifyToken)

export default router