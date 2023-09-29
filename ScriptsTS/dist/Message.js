import { UIScript } from "./UIScript.js";
var Message = /** @class */ (function () {
    function Message() {
        this.id = 0;
    }
    Message.prototype.PerformListMessageEvent = function (messageText, contentText, sender, date, hunters) {
        this.id++;
        if (hunters) {
            UIScript.DisplayNewMessage(messageText + ". Отправитель - " + sender + ". Дата - " + date, this.id, contentText, hunters);
        }
        else {
            UIScript.DisplayNewMessage(messageText + ". Отправитель - " + sender + ". Дата - " + date, this.id, contentText + "<br><br>" + date);
        }
    };
    Message.prototype.GetID = function () {
        return this.id;
    };
    return Message;
}());
export { Message };
//# sourceMappingURL=Message.js.map