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
import { DistrictNorthGun } from "./DistrictNorthGun.js";
import { DistrictSouthGun } from "./DistrictSouthGun.js";
var CityGun = /** @class */ (function (_super) {
    __extends(CityGun, _super);
    function CityGun() {
        var _this = _super.call(this) || this;
        _this.name = "Ган";
        _this.description = "Город, представляющий собой большое равнинное поле, которое изредка разбавляют дома, промышленные здания, магазины и стадион";
        _this.districts = [
            new DistrictNorthGun(),
            new DistrictSouthGun()
        ];
        _this.dangerRatio = 0;
        _this.collectDistricts = _this.districts;
        _this.CollectAllGeography();
        return _this;
    }
    return CityGun;
}(City));
export { CityGun };
//# sourceMappingURL=CityGun.js.map