/* eslint-disable no-unused-vars */
export {};

declare global {

    // Main page
    type Chat = {
        name: string, // Имя чата
        message: string, // Последнего сообщения
        iSentLast: boolean, // Я отправил последнее сообщение?
        lastMessageDate: string, // Дата (время) последнего сообщения
        toBeRead: number, // Сколько у меня непрочитанных сообщений с этого чата
        isActive: boolean // Активен ли чат
    };

    type Message = {
        sentStatus: MessageSentStatus,
        text?: string,
        imgLink?: string,
        time: string,
    };

    type UserInfo = {
        email: string,
        login: string,
        firstName: string,
        secondName: string,
        displayName: string,
        phone: string,
    }
}
