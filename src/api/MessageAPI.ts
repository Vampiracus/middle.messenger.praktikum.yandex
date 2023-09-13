export default class MessageAPI {
    private _ws: WebSocket;

    private _chat: Chat;

    private _user: User;

    private _token: string;

    constructor(chat: Chat, token: string, user: User) {
        this._chat = chat;
        this._token = token;
        this._user = user;
        this._ws = new WebSocket(`wss://ya-praktikum.tech/ws/chats/${this._user.id}/${this._chat.id}/${this._token}`);
        this._ws.addEventListener('open', this._ping.bind(this));
        this._ws.onerror = e => { console.log(e); };
    }

    private _ping() {
        if (this._ws.readyState >= 2) return;
        this._ws.send(JSON.stringify({ type: 'ping' }));
        setTimeout(this._ping.bind(this), 10000);
    }

    sendMessage(content: string) {
        this._ws.send(JSON.stringify({
            type: 'message',
            content,
        }));
    }

    getOldMessages(offset: number) {
        this._ws.send(JSON.stringify({
            content: offset.toString(),
            type: 'get old',
        }));
    }

    addOnOpen(callback: (e: Event) => void) {
        this._ws.addEventListener('open', callback);
    }

    addOnMessage(callback: (e: MessageEvent) => void) {
        this._ws.addEventListener('message', callback);
    }

    addOnClose(callback: (e: CloseEvent) => void) {
        this._ws.addEventListener('close', callback);
    }

    close() {
        this._ws.close();
    }

    get status() {
        return this._ws.readyState;
    }
}
