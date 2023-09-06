/* eslint-disable no-unused-vars */
export {};

declare global {

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

    type Message = {
        user: User,
        time: string,
        content: string,
    };

    // Main page
    type Chat = {
        id: number,
        title: string,
        avatar: string,
        unread_count: number, // Сколько у меня непрочитанных сообщений с этого чата
        created_by: number,
        last_message: Message,
    };

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
