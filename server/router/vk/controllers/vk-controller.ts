import $vk from "@s/router/vk/$vk"
import { Request, Response } from "express"

class VkController {
    async getVkData(req: Request, res: Response) {
        const data = (await $vk.get('/audio.get?user_ids=aaaaaaaaaaaaaaaaaaaaaaaaaaaaaa98')).data
        console.log(data)
        res.json(data)
    }   
}

export default new VkController()