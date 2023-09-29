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
import { Department } from './Department.js';
var BiologicalDepartment = /** @class */ (function (_super) {
    __extends(BiologicalDepartment, _super);
    function BiologicalDepartment() {
        var _this = _super.call(this) || this;
        _this.name = "Биологический департамент";
        _this.description = "Биологический департамент - департамент, занимается исследованием существ, сбором, изучением и выращиванием трав, изучением климата и так далее";
        return _this;
    }
    BiologicalDepartment.prototype.GetName = function () {
        return this.name;
    };
    BiologicalDepartment.prototype.GetDescription = function () {
        return this.description;
    };
    return BiologicalDepartment;
}(Department));
export { BiologicalDepartment };
//# sourceMappingURL=BiologicalDepartment.js.map