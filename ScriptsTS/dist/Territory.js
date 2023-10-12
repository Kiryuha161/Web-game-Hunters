import { Utilits } from "./Utilits.js";
var Territory = /** @class */ (function () {
    function Territory() {
        this.collectAreas = [];
        this.collectCities = [];
        this.collectDistricts = [];
        if (this.constructor === Territory) {
            throw new Error("Вы не можете вывызывать абстрактный класс района города");
        }
    }
    Territory.prototype.GetDangerRatio = function () {
        for (var i = 0; i < this.areas.length; i++) {
            this.dangerRatio += this.areas[i].GetDangerRatio();
        }
        return this.dangerRatio;
    };
    Territory.prototype.SetDangerRatio = function (addRatio) {
        this.dangerRatio += addRatio;
    };
    Territory.prototype.AssignRandomArea = function () {
        return this.areas[Utilits.GetRandomNumber(0, this.areas.length)];
    };
    Territory.prototype.GetInfo = function (info) {
        switch (info) {
            case "name":
                return this.name;
                break;
            case "description":
                return this.description;
                break;
            case "dangerRatio":
                return this.dangerRatio;
                break;
            default:
                return "Нет данных";
                break;
        }
    };
    Territory.prototype.GetArea = function (index) {
        return this.areas[index];
    };
    Territory.prototype.GetAreas = function () {
        /* for (let i = 0; i < this.areas.length; i++) {
             this.dangerRatio += this.areas[i].GetDangerRatio();
         }*/
        return this.areas;
    };
    Territory.prototype.CollectAllGeography = function () {
        for (var i = 0; i < this.collectAreas.length; i++) {
            this.dangerRatio += this.collectAreas[i].GetDangerRatio();
        }
    };
    return Territory;
}());
export { Territory };
//# sourceMappingURL=Territory.js.map