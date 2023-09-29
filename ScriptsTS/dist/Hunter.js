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
import { HunterStat } from './HunterStat.js';
import { InvestigationDepartment } from './InvestigationDepartment.js';
import { MilitaryDepartment } from './MilitaryDepartment.js';
import { KeeperDepartment } from './KeeperDepartment.js';
import { ReserveDepartment } from './ReserveDepartment.js';
import { MedicalDepartment } from './MedicalDepartment.js';
import { BiologicalDepartment } from './BiologicalDepartment.js';
import { EngineerDepartment } from './EngineerDepartment.js';
import { SeekerDepartment } from './SeekerDepartment.js';
import { MagicDepartment } from './MagicDepartment.js';
import { Utilits } from './Utilits.js';
var Hunter = /** @class */ (function (_super) {
    __extends(Hunter, _super);
    function Hunter() {
        var _this = _super.call(this) || this;
        _this.type = "Человек";
        _this.activity = "Охотник";
        var randomGenderCount = Utilits.GetRandomNumber(0, 101);
        if (randomGenderCount >= 35) {
            _this.gender = "Мужчина";
        }
        else {
            _this.gender = "Женщина";
        }
        _this.age = Utilits.GetRandomNumber(18, 46);
        if (_this.gender === "Мужчина") {
            _this.name = Utilits.GetName("rus", "male");
            _this.surname = Utilits.GetSurname("rus", "male");
        }
        else {
            _this.name = Utilits.GetName("rus", "female");
            _this.surname = Utilits.GetSurname("rus", "female");
        }
        _this.stats = new HunterStat(_this.gender, _this.age);
        if (_this.stats.GetStats("strength") >= 35) {
            _this.department = new MilitaryDepartment();
        }
        else if (_this.stats.GetStats("attentivenes") >= 35) {
            _this.department = new InvestigationDepartment();
        }
        else if (_this.stats.GetStats("intellegence") >= 35) {
            _this.department = new KeeperDepartment();
        }
        else if (_this.stats.GetStats("survivalSkill") >= 35) {
            _this.department = new MedicalDepartment();
        }
        else if (_this.stats.GetStats("totalKnowledge") >= 35) {
            _this.department = new BiologicalDepartment();
        }
        else if (_this.stats.GetStats("technicalKnowledge") >= 35) {
            _this.department = new EngineerDepartment();
        }
        else if (_this.stats.GetStats("magicEnergy") >= 3) {
            _this.department = new SeekerDepartment();
        }
        else if (_this.stats.GetStats("magicEnergy") >= 3 && _this.stats.GetStats("willPower") >= 30) {
            _this.department = new MagicDepartment();
        }
        else {
            _this.department = new ReserveDepartment();
        }
        return _this;
    }
    Hunter.prototype.GetInfo = function (info) {
        if (info === "department") {
            return this.department.GetNameDepartment();
        }
        else {
            return _super.prototype.GetInfo.call(this, info);
        }
    };
    return Hunter;
}(Character));
export { Hunter };
//# sourceMappingURL=Hunter.js.map