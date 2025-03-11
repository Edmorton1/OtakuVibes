class SpotifyModel {
    async getSpotifyToken() {
        const response = await fetch('https://accounts.spotify.com/api/token', {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: new URLSearchParams({
                "grant_type": "client_credentials",
                "client_id": process.env.CLIENT_ID,
                "client_secret": process.env.CLIENT_SECRET
            })
        })
        const data = await response.json()
        console.log(data)
    }
}

export default new SpotifyModel()