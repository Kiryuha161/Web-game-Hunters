import { District } from "./District.js";
import { Utilits } from "./Utilits.js";
var City = /** @class */ (function () {
    function City() {
        this.districts = [];
        this.collectDistricts = [];
        if (this.constructor === District) {
            throw new Error("Вы не можете вывызывать абстрактный класс района города");
        }
    }
    City.prototype.GetDangerRatio = function () {
        /*for (let i = 0; i < this.districts.length; i++) {
            this.dangerRatio += this.districts[i].GetDangerRatio();
        }*/
        return this.dangerRatio;
    };
    City.prototype.SetDangerRatio = function (addRatio) {
        this.dangerRatio += addRatio;
    };
    City.prototype.AssignRandomDistrict = function () {
        return this.districts[Utilits.GetRandomNumber(0, this.districts.length)];
    };
    City.prototype.GetInfo = function (info) {
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
    City.prototype.GetDistrict = function (index) {
        return this.districts[index];
    };
    City.prototype.GetDistricts = function () {
        /*for (let i = 0; i < this.districts.length; i++) {
            this.dangerRatio += this.districts[i].GetDangerRatio();
        }*/
        return this.districts;
    };
    City.prototype.CollectAllGeography = function () {
        for (var i = 0; i < this.collectDistricts.length; i++) {
            this.dangerRatio += this.collectDistricts[i].GetDangerRatio();
        }
    };
    return City;
}());
export { City };
//# sourceMappingURL=City.js.map