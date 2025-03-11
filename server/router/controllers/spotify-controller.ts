import { Request, Response } from "express"
import spotifyModel from "../models/spotify-model"


class SpotifyController {
    async getSpotifyToken(req: Request, res: Response) {
        const model = await spotifyModel.getSpotifyToken()
        res.json(model)
    }
}

export default new SpotifyController()