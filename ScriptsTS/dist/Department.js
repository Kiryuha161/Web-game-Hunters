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
export { Department };
//# sourceMappingURL=Department.js.map