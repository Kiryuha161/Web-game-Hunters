var District = /** @class */ (function () {
    function District() {
        if (this.constructor === District) {
            throw new Error("Вы не можете вывызывать абстрактный класс района города");
        }
    }
    District.prototype.GetDangerRatio = function () {
        return this.dangerRatio;
    };
    District.prototype.SetDangerRatio = function (addRatio) {
        this.dangerRatio += addRatio;
    };
    District.prototype.GetInfo = function (info) {
        switch (info) {
            case "name":
                return this.name;
                break;
            case "description":
                return this.description;
                break;
            case "dangerRatio":
                return this.dangerRatio;
                break;
            default:
                return "Нет данных";
                break;
        }
    };
    return District;
}());
export { District };
//# sourceMappingURL=District.js.map