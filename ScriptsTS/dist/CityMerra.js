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
import { DistrictNorthMerra } from "./DiscrictNorthMerra.js";
import { DistrictSouthMerra } from "./DistrictSouthMerra.js";
var CityMerra = /** @class */ (function (_super) {
    __extends(CityMerra, _super);
    function CityMerra() {
        var _this = _super.call(this) || this;
        _this.name = "Мерра";
        _this.description = "Город, представляющий собой равнинную местность, обрамлённую горами с юга.";
        _this.districts = [
            new DistrictNorthMerra(),
            new DistrictSouthMerra()
        ];
        _this.dangerRatio = 0;
        _this.collectDistricts = _this.districts;
        _this.CollectAllGeography();
        return _this;
    }
    return CityMerra;
}(City));
export { CityMerra };
//# sourceMappingURL=CityMerra.js.map