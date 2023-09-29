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
import { Department } from "./Department.js";
var MagicDepartment = /** @class */ (function (_super) {
    __extends(MagicDepartment, _super);
    function MagicDepartment() {
        var _this = _super.call(this) || this;
        _this.name = "Департамент магии";
        _this.description = "Департамент магии занимается изучением магии, артефактов, борется с магами. Магия требует большой силы воли, так как сводит с ума";
        return _this;
    }
    return MagicDepartment;
}(Department));
export { MagicDepartment };
//# sourceMappingURL=MagicDepartment.js.map