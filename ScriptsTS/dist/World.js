import { LightOperation } from "./LightOperation.js";
import { Utilits } from "./Utilits.js";
import { RegionRuas } from "./RegionRuas.js";
var World = /** @class */ (function () {
    function World() {
        this.lightOperations = [];
        this.regions = [];
        this.gameDate = new Date(2014, 0, 10);
        this.lastGetNewEOperation = new Date(2014, 0, 10);
        this.regions = [new RegionRuas()];
    }
    World.prototype.TranslateToString = function () {
        return this.gameDate.toISOString();
    };
    World.prototype.GetRegion = function (index) {
        return this.regions[index];
    };
    World.prototype.AddDay = function () {
        this.gameDate.setDate(this.gameDate.getDate() + 1);
    };
    World.prototype.GetDate = function () {
        return this.gameDate;
    };
    World.prototype.GetFullDate = function () {
        return this.GetDate().getFullYear() + "/" + (this.GetDate().getMonth() + 1) + "/" + (this.GetDate().getDate() - 1);
    };
    World.prototype.GetEOperation = function (message, date, region) {
        var daysSinceLastEOperation = Math.floor((this.gameDate.getTime() - this.lastGetNewEOperation.getTime()) / (1000 * 3600 * 24));
        if (daysSinceLastEOperation >= Utilits.GetRandomNumber(2, 5)) {
            var lightOperation = new LightOperation(Utilits.GetName("rus", "male") + " " + Utilits.GetSurname("rus", "male"), region);
            this.lightOperations.push(lightOperation);
            var idEOperation = this.lightOperations.length - 1;
            message.PerformListMessageEvent("Вы получили новое задание E-категории", this.lightOperations[idEOperation].ShowStartOperationInfo(), "Бюро заявок", this.GetFullDate());
            this.lastGetNewEOperation.setTime(this.gameDate.getTime());
        }
    };
    return World;
}());
export { World };
//# sourceMappingURL=World.js.map