export interface UserEntity {
    id: string,
    name: string,
    email: string,
    password: string,
    favGenre1: number,
    favGenre2: number,
    favGame: string,
    createdAt: Date,
    updatedAt: Date,
}