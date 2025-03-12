import axios from 'axios'

const $vk = axios.create({
    baseURL: "https://api.vk.com/method",
    params: {
        "v": "5.199"
    },
})

$vk.interceptors.request.use(
    (config) => {
        console.log(config.params)
        config.params['access_token'] = process.env.VK_CLIENT_SECRET
        return config
    }
)

export default $vk