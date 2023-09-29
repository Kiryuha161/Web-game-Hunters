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
var MilitaryDepartment = /** @class */ (function (_super) {
    __extends(MilitaryDepartment, _super);
    function MilitaryDepartment() {
        var _this = _super.call(this) || this;
        _this.name = "Военный департамент";
        _this.description = "Военный департамент - одно из приоритетных направлений в охоте. Занимаются тем, что патрулируют территорию, выполняют разведку, участвуют в активных и крупных боевых действиях";
        return _this;
    }
    return MilitaryDepartment;
}(Department));
export { MilitaryDepartment };
//# sourceMappingURL=MilitaryDepartment.js.map