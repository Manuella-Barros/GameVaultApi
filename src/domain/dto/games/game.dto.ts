export interface GameDto {
    id: number,
    cover: ICover,
    name: string,
    first_release_date: string,
    genres: IIdName[],
    platforms: IIdName[],
    summary?: string,
}

interface ICover {
    id: string,
    url: string
}

interface IIdName {
    id: string,
    name: string
}