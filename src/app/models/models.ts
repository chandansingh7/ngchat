import { Data } from "@angular/router"

export interface Registeration {
    screenName: string,
    selectedChatRoom: string
}
export interface ChatModel {
    message: string,
    timestamp: Date,
    chatRoom: string,
    screenName: string
}