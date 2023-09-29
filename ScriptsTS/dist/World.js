import { LightOperation } from "./LightOperation.js";
import { Utilits } from "./Utilits.js";
var World = /** @class */ (function () {
    function World() {
        this.lightOperations = [];
        this.gameDate = new Date(2014, 0, 10);
        this.lastGetNewEOperation = new Date(2014, 0, 10);
    }
    World.prototype.TranslateToString = function () {
        return this.gameDate.toISOString();
    };
    World.prototype.AddDay = function () {
        this.gameDate.setDate(this.gameDate.getDate() + 1);
    };
    World.prototype.GetDate = function () {
        return this.gameDate;
    };
    World.prototype.GetEOperation = function (message, date) {
        var daysSinceLastEOperation = Math.floor((this.gameDate.getTime() - this.lastGetNewEOperation.getTime()) / (1000 * 3600 * 24));
        if (daysSinceLastEOperation >= Utilits.GetRandomNumber(2, 5)) {
            console.log("Игровая дата - " + this.gameDate.toLocaleDateString());
            console.log("Последнее событие - " + this.lastGetNewEOperation.toLocaleDateString());
            var lightOperation = new LightOperation(Utilits.GetName("rus", "male") + " " + Utilits.GetSurname("rus", "male"));
            this.lightOperations.push(lightOperation);
            var idEOperation = this.lightOperations.length - 1;
            message.PerformListMessageEvent("Вы получили новое задание E-категории", this.lightOperations[idEOperation].ShowStartOperationInfo(), "Бюро заявок", this.gameDate.getFullYear() + "/" + (this.gameDate.getMonth() + 1) + "/" + (this.gameDate.getDate() - 1));
            this.lastGetNewEOperation.setTime(this.gameDate.getTime());
        }
    };
    return World;
}());
export { World };
//# sourceMappingURL=World.js.map