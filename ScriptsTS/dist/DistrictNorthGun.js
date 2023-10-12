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
var DistrictNorthGun = /** @class */ (function (_super) {
    __extends(DistrictNorthGun, _super);
    function DistrictNorthGun() {
        var _this = _super.call(this) || this;
        _this.name = "Северная часть города Ган.";
        _this.description = "Ветренное поле, изредка разбавленное домами и промышленными зданиями. Немного разнообразия добавляет футбольный стадион";
        _this.dangerRatio = 0;
        _this.SetDangerRatio(Utilits.GetFloatRandomNumber(0, 0.9));
        return _this;
    }
    return DistrictNorthGun;
}(District));
export { DistrictNorthGun };
//# sourceMappingURL=DistrictNorthGun.js.map