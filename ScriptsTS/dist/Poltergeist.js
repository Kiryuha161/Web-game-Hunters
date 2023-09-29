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
import { Character } from './Character.js';
import { PoltergeistStat } from './PoltergeistStat.js';
var Poltergeist = /** @class */ (function (_super) {
    __extends(Poltergeist, _super);
    function Poltergeist(name, surname, age, gender) {
        var _this = _super.call(this) || this;
        _this.type = "Нежить";
        _this.activity = "Призрак";
        _this.name = name;
        _this.surname = surname;
        _this.age = age;
        _this.gender = gender;
        _this.poltergeistStat = new PoltergeistStat(gender, age);
        return _this;
    }
    return Poltergeist;
}(Character));
export { Poltergeist };
//# sourceMappingURL=Poltergeist.js.map