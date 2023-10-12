import { Utilits } from "./Utilits.js";
var Area = /** @class */ (function () {
    function Area() {
        this.collectCities = [];
        this.collectDistricts = [];
        if (this.constructor === Area) {
            throw new Error("Вы не можете вывызывать абстрактный класс района города");
        }
    }
    Area.prototype.GetDangerRatio = function () {
        /*for (let i = 0; i < this.cities.length; i++) {
            this.dangerRatio += this.cities[i].GetDangerRatio();
        }*/
        return this.dangerRatio;
    };
    Area.prototype.SetDangerRatio = function (addRatio) {
        this.dangerRatio += addRatio;
    };
    Area.prototype.AssignRandomCity = function () {
        return this.cities[Utilits.GetRandomNumber(0, this.cities.length)];
    };
    Area.prototype.GetInfo = function (info) {
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
    Area.prototype.GetCity = function (index) {
        return this.cities[index];
    };
    Area.prototype.GetCities = function () {
        return this.cities;
    };
    Area.prototype.CollectAllGeography = function () {
        for (var i = 0; i < this.collectCities.length; i++) {
            this.dangerRatio += this.collectCities[i].GetDangerRatio();
        }
    };
    return Area;
}());
export { Area };
//# sourceMappingURL=Area.js.map