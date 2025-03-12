import SpotifyModel from "@s/router/spotify/models/spotify-model"
import { Request, Response } from "express"

class SpotifyController {
    async getSpotifyData(req: Request, res: Response) {
        // console.log(req.params.params)
        const response = await SpotifyModel.getSpotifyData(req.params.params)
        console.log(response)
        res.json(response)
    }
}

export default new SpotifyController()