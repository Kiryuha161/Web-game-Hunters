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
import { CharacterStat } from "./CharacterStat.js";
import { Utilits } from "./Utilits.js";
var HunterStat = /** @class */ (function (_super) {
    __extends(HunterStat, _super);
    function HunterStat(gender, age) {
        var _this = _super.call(this) || this;
        if (age >= 40) {
            _this.health = Utilits.GetRandomNumber(10, 41);
        }
        else {
            _this.health = Utilits.GetRandomNumber(10, 41) - Utilits.GetRandomNumber(0, 11);
        }
        if (gender === "Мужчина") {
            _this.strength = Utilits.GetRandomNumber(10, 41);
        }
        else {
            _this.strength = Utilits.GetRandomNumber(10, 41) - Utilits.GetRandomNumber(0, 11);
        }
        if (age >= 40) {
            _this.endurance = Utilits.GetRandomNumber(10, 41) - Utilits.GetRandomNumber(0, 11);
        }
        else {
            _this.endurance = Utilits.GetRandomNumber(10, 41);
        }
        _this.accuracy = Utilits.GetRandomNumber(10, 41);
        if (age >= 40) {
            _this.intellegence = Utilits.GetRandomNumber(10, 41) + Utilits.GetRandomNumber(0, 11);
        }
        else {
            _this.intellegence = Utilits.GetRandomNumber(10, 41);
        }
        _this.reaction = Utilits.GetRandomNumber(10, 41);
        _this.speedAttack = Utilits.GetRandomNumber(10, 41);
        _this.speedMove = Utilits.GetRandomNumber(10, 41);
        _this.speedThinking = Utilits.GetRandomNumber(10, 41);
        _this.charisma = Utilits.GetRandomNumber(10, 41);
        _this.leadership = Utilits.GetRandomNumber(10, 41);
        _this.willPower = Utilits.GetRandomNumber(10, 41);
        _this.brave = Utilits.GetRandomNumber(10, 41);
        if (gender === "Женщина") {
            _this.attentivenes = Utilits.GetRandomNumber(10, 41) + Utilits.GetRandomNumber(0, 11);
        }
        else {
            _this.attentivenes = Utilits.GetRandomNumber(10, 41);
        }
        _this.memory = Utilits.GetRandomNumber(10, 41);
        if (age >= 40) {
            _this.totalKnowledge = Utilits.GetRandomNumber(10, 41) + Utilits.GetRandomNumber(0, 11);
        }
        else {
            _this.totalKnowledge = Utilits.GetRandomNumber(10, 41);
        }
        _this.hunterKnowledge = Utilits.GetRandomNumber(1, 10);
        _this.fortuna = Utilits.GetRandomNumber(10, 41);
        _this.magicEnergy = Utilits.GetRandomNumber(0, 11);
        _this.magicControl = Utilits.GetRandomNumber(0, 11);
        _this.survivalSkill = Utilits.GetRandomNumber(10, 41);
        _this.technicalKnowledge = Utilits.GetRandomNumber(10, 41);
        return _this;
    }
    return HunterStat;
}(CharacterStat));
export { HunterStat };
//# sourceMappingURL=HunterStat.js.map