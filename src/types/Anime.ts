export interface Anime {
    mal_id: number
    title: string
    episodes: number
    rating: string
    synopsis: string
    studios: Array<{ name: string }>
    producers: Array<{ name: string }>
    score: number
    images: {
        jpg: {
            large_image_url: string
        }
    }
    genres: { mal_id: number; name: string }[]
}