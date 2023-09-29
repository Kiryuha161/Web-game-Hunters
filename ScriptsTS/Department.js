"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Department = void 0;
var Department = /** @class */ (function () {
    function Department() {
        if (this.constructor === Department) {
            throw new Error("Вы не можете вывызывать абстрактный класс департамента");
        }
    }
    Department.prototype.GetNameDepartment = function () {
        return this.name;
    };
    Department.prototype.GetDescriptionDepartment = function () {
        return this.description;
    };
    return Department;
}());
exports.Department = Department;
