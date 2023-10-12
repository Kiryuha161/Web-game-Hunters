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
import { CityPleya } from "./CityPleya.js";
var AreaOscar = /** @class */ (function (_super) {
    __extends(AreaOscar, _super);
    function AreaOscar() {
        var _this = _super.call(this) || this;
        _this.name = "Оскар";
        _this.description = "Самая крупная область Юграса, находящаяся по центру и граничащая с рекой Акера. Температура средняя, но холоднее, чем в области Гранд";
        _this.cities = [
            new CityPleya()
        ];
        _this.dangerRatio = 0;
        _this.collectCities = _this.cities;
        _this.CollectAllGeography();
        return _this;
    }
    return AreaOscar;
}(Area));
export { AreaOscar };
//# sourceMappingURL=AreaOscar.js.map