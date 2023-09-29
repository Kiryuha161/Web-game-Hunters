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
var PoltergeistStat = /** @class */ (function (_super) {
    __extends(PoltergeistStat, _super);
    function PoltergeistStat(gender, age) {
        var _this = _super.call(this) || this;
        _this.ageUp = 60;
        if (age >= _this.ageUp) {
            _this.health = Utilits.GetRandomNumber(5, 21) + (Utilits.GetRandomNumber(0, 5) + (age - _this.ageUp + 5));
        }
        else {
            _this.health = Utilits.GetRandomNumber(5, 21) - Utilits.GetRandomNumber(0, 5);
        }
        if (age >= _this.ageUp) {
            _this.strength = Utilits.GetRandomNumber(5, 21) + (Utilits.GetRandomNumber(1, 5) + (age - _this.ageUp + 5));
        }
        else {
            _this.strength = Utilits.GetRandomNumber(5, 21);
        }
        _this.endurance = Utilits.GetRandomNumber(5, 21);
        _this.accuracy = Utilits.GetRandomNumber(5, 21);
        if (age >= 40) {
            _this.intellegence = Utilits.GetRandomNumber(5, 21) + (Utilits.GetRandomNumber(0, 5) + (age - _this.ageUp + 5));
        }
        else {
            _this.intellegence = Utilits.GetRandomNumber(10, 41);
        }
        _this.reaction = Utilits.GetRandomNumber(5, 21);
        _this.speedAttack = Utilits.GetRandomNumber(5, 21);
        _this.speedMove = Utilits.GetRandomNumber(5, 21);
        _this.speedThinking = Utilits.GetRandomNumber(5, 21);
        _this.charisma = Utilits.GetRandomNumber(5, 21);
        _this.leadership = Utilits.GetRandomNumber(5, 21);
        _this.willPower = Utilits.GetRandomNumber(5, 21);
        _this.brave = Utilits.GetRandomNumber(5, 21);
        if (gender === "Женщина") {
            _this.attentivenes = Utilits.GetRandomNumber(5, 21) + Utilits.GetRandomNumber(0, 5);
        }
        else {
            _this.attentivenes = Utilits.GetRandomNumber(5, 21);
        }
        _this.memory = Utilits.GetRandomNumber(5, 21);
        if (age >= 40) {
            _this.totalKnowledge = Utilits.GetRandomNumber(5, 21) + (Utilits.GetRandomNumber(0, 5) + (age - _this.ageUp + 5));
        }
        else {
            _this.totalKnowledge = Utilits.GetRandomNumber(5, 21);
        }
        _this.hunterKnowledge = Utilits.GetRandomNumber(0, 1);
        _this.fortuna = Utilits.GetRandomNumber(5, 21);
        if (age >= 40) {
            _this.magicEnergy = Utilits.GetRandomNumber(0, 6) + (Utilits.GetRandomNumber(0, 3) + (age - _this.ageUp + 1));
            _this.magicControl = Utilits.GetRandomNumber(0, 6) + (Utilits.GetRandomNumber(0, 3) + (age - _this.ageUp + 1));
        }
        _this.survivalSkill = Utilits.GetRandomNumber(5, 21);
        _this.technicalKnowledge = Utilits.GetRandomNumber(5, 21);
        return _this;
    }
    return PoltergeistStat;
}(CharacterStat));
export { PoltergeistStat };
//# sourceMappingURL=PoltergeistStat.js.map