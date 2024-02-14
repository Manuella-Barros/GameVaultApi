export interface CommentEntity {
    id: string
    text: string
    likes: number
    dislikes: number
    gameID: number
    userID: string
    createdAt: Date
    updatedAt: Date
}