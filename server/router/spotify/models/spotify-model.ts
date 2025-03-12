import $spotify from "@s/router/spotify/$spotify";
// https://api.spotify.com/v1/search?q=morgen&type=album&limit=1
// https://api.spotify.com/v1/users/Weekend
// https://api.spotify.com/v1/users/weekend/playlists
// https://api.spotify.com/v1/search?q=il vento d'oro&type=track&limit=1

class SpotifyModel {
  async getSpotifyData(params: string) {
    const request = (await $spotify.get(`https://api.spotify.com/v1/search?q=il vento d'oro&type=track&limit=1`)).data
    return request
  }

}

export default new SpotifyModel();