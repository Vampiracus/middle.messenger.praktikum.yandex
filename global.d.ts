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

    type User = {
        id: number;
        first_name: string;
        second_name: string;
        display_name: string,
        login: string;
        email: string;
        phone: string;
        avatar: string;
    }

    type UserWithoutIdAndAvatar = Omit<Omit<User, 'id'>, 'avatar'>;

    type SignupData = {
        first_name: string;
        second_name: string;
        login: string;
        email: string;
        password: string;
        phone: string;
    }
}
