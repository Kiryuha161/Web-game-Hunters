"use strict";
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
Object.defineProperty(exports, "__esModule", { value: true });
exports.KeeperDepartment = void 0;
var Department_1 = require("./Department");
var KeeperDepartment = /** @class */ (function (_super) {
    __extends(KeeperDepartment, _super);
    function KeeperDepartment() {
        var _this = _super.call(this) || this;
        _this.name = "Департамент хранителей";
        _this.description = "Департамент хранителей - важный департамент, занимающийся внешней и внутренней разведкой, тайными операциями, переговорами с высшими существами";
        return _this;
    }
    return KeeperDepartment;
}(Department_1.Department));
exports.KeeperDepartment = KeeperDepartment;