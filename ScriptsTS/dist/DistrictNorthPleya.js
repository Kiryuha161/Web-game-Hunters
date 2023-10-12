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
import { District } from "./District.js";
import { Utilits } from "./Utilits.js";
var DistrictNorthPleya = /** @class */ (function (_super) {
    __extends(DistrictNorthPleya, _super);
    function DistrictNorthPleya() {
        var _this = _super.call(this) || this;
        _this.name = "Северная часть города Плея.";
        _this.description = "Часть города Плея, которая неимоверно загружена пробками, в том числе и потому, что там расположена Академия.";
        _this.dangerRatio = 0;
        _this.SetDangerRatio(Utilits.GetFloatRandomNumber(0, 0.2));
        return _this;
    }
    return DistrictNorthPleya;
}(District));
export { DistrictNorthPleya };
//# sourceMappingURL=DistrictNorthPleya.js.map