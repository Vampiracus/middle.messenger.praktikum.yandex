/* eslint-disable no-unused-vars */
export {};

declare global {

    // Main page
    type Chat = {
        name: string,
        message: string,
        iSentLast: boolean,
        lastMessageDate: string,
        toBeRead: number
    };

    type Message = {
        sentStatus: MessageSentStatus,
        text?: string,
        imgLink?: string,
        time: string,
    };

    type UserInfo = {
        name: string,
        email: string,
        login: string,
        firstName: string,
        secondName: string,
        phone: string,
    }
}
