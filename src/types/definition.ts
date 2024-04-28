export type CharactersType = {
    id: string,
    name: string,
    image: string,
    species: string,
}


export type EpisodesType = {
    id: string,
    name: string,
    created: string,
}

export type CharacterDetailsType = {
    id: string,
    name: string,
    image: string,
    species: string,
    gender: string,
    status: string,
    location: {
        name: string,
        dimension: string,
        type: string
    },
    episode: EpisodesType[]
}
