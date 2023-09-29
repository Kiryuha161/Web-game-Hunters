"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Message = void 0;
var UIScript_1 = require("./UIScript");
var Message = /** @class */ (function () {
    function Message() {
        this.id = 0;
    }
    Message.prototype.PerformListMessageEvent = function (messageText, id, contentText, sender, hunters) {
        id++;
        if (hunters) {
            UIScript_1.UIScript.DisplayNewMessage(messageText + ". Отправитель - " + sender, id, contentText, hunters);
        }
        else {
            UIScript_1.UIScript.DisplayNewMessage(messageText + ". Отправитель - " + sender, id, contentText);
        }
    };
    Message.prototype.GetID = function () {
        return this.id;
    };
    return Message;
}());
exports.Message = Message;
