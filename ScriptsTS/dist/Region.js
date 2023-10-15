import { Territory } from "./Territory.js";
import { Utilits } from "./Utilits.js";
var Region = /** @class */ (function () {
    function Region() {
        this.collectTerritories = [];
        this.collectAreas = [];
        this.collectCities = [];
        this.collectDistricts = [];
        if (this.constructor === Territory) {
            throw new Error("Вы не можете вывызывать абстрактный класс региона");
        }
    }
    Region.prototype.AssignRandomTerritory = function () {
        return this.territiories[Utilits.GetRandomNumber(0, this.territiories.length)];
    };
    Region.prototype.GetInfo = function (info) {
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
    Region.prototype.GetTerritory = function (index) {
        /*for (let i = 0; i < this.territiories.length; i++) {
            this.dangerRatio += this.territiories[i].GetDangerRatio();
        }*/
        return this.territiories[index];
    };
    Region.prototype.GetTerritories = function () {
        /* for (let i = 0; i < this.territiories.length; i++) {
             this.dangerRatio += this.territiories[i].GetDangerRatio();
         }*/
        return this.territiories;
    };
    Region.prototype.CollectAreas = function () {
        for (var i = 0; i < this.collectTerritories.length; i++) {
            this.collectAreas.concat(this.collectTerritories[i].GetAreas());
        }
    };
    Region.prototype.CollectCities = function () {
        for (var i = 0; i < this.collectAreas.length; i++) {
            this.collectCities.concat(this.collectAreas[i].GetCities());
        }
    };
    Region.prototype.CollectDistricts = function () {
        for (var i = 0; i < this.collectCities.length; i++) {
            this.collectDistricts.concat(this.collectCities[i].GetDistricts());
            this.dangerRatio += this.collectDistricts[i].GetDangerRatio();
        }
    };
    Region.prototype.CollectAllGeography = function () {
        this.CollectAreas();
        this.CollectCities();
        this.CollectDistricts();
    };
    Region.prototype.GetDangerRatio = function () {
        for (var i = 0; i < this.territiories.length; i++) {
            this.dangerRatio += this.territiories[i].GetDangerRatio();
        }
        return this.dangerRatio;
    };
    return Region;
}());
export { Region };
//# sourceMappingURL=Region.js.map