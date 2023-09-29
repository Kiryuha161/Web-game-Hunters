"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Character = void 0;
var Character = /** @class */ (function () {
    function Character() {
        if (this.constructor === Character) {
            throw new Error("Вы не можете вывызывать абстрактный класс персонажа");
        }
    }
    Character.prototype.GetAccessToStats = function () {
        return this.stats;
    };
    Character.prototype.GetInfo = function (info) {
        switch (info) {
            case "type":
                return this.type;
                break;
            case "activity":
                return this.activity;
                break;
            case "name":
                return this.name;
                break;
            case "surname":
                return this.surname;
                break;
            case "gender":
                return this.gender;
                break;
            default:
                return "Нет данных";
                break;
        }
    };
    return Character;
}());
exports.Character = Character;
