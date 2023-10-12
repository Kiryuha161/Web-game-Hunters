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
import { City } from "./City.js";
import { DistrictSouthPleya } from "./DistrictSouthPleya.js";
import { DistrictNorthPleya } from "./DistrictNorthPleya.js";
var CityPleya = /** @class */ (function (_super) {
    __extends(CityPleya, _super);
    function CityPleya() {
        var _this = _super.call(this) || this;
        _this.name = "Плея";
        _this.description = "Город, в котором находится академия. На въезде и выезде постоянные пробки из-за центрального расположения города, являющегося воротами в северную часть Руаса, единственно контролируемую Руасской Академией Охоты.";
        _this.districts = [
            new DistrictNorthPleya(),
            new DistrictSouthPleya()
        ];
        _this.dangerRatio = 0;
        _this.collectDistricts = _this.districts;
        _this.CollectAllGeography();
        return _this;
    }
    return CityPleya;
}(City));
export { CityPleya };
//# sourceMappingURL=CityPleya.js.map