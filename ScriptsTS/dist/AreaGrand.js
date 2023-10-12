var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
import { Area } from "./Area.js";
import { CityGun } from "./CityGun.js";
import { CityMerra } from "./CityMerra.js";
var AreaGrand = /** @class */ (function (_super) {
    __extends(AreaGrand, _super);
    function AreaGrand() {
        var _this = _super.call(this) || this;
        _this.name = "Гранд";
        _this.description = "Западная область центральной территории Юграс. Проходит по границе с Изомаром";
        _this.cities = [
            new CityGun(),
            new CityMerra()
        ];
        _this.dangerRatio = 0;
        _this.collectCities = _this.cities;
        _this.CollectAllGeography();
        return _this;
    }
    return AreaGrand;
}(Area));
export { AreaGrand };
//# sourceMappingURL=AreaGrand.js.map