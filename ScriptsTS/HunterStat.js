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
exports.HunterStat = void 0;
var CharacterStat_1 = require("./CharacterStat");
var Utilits_1 = require("./Utilits");
var HunterStat = /** @class */ (function (_super) {
    __extends(HunterStat, _super);
    function HunterStat(gender, age) {
        var _this = _super.call(this) || this;
        if (age >= 40) {
            _this.health = Utilits_1.Utilits.GetRandomNumber(10, 41);
        }
        else {
            _this.health = Utilits_1.Utilits.GetRandomNumber(10, 41) - Utilits_1.Utilits.GetRandomNumber(0, 11);
        }
        if (gender === "Мужчина") {
            _this.strength = Utilits_1.Utilits.GetRandomNumber(10, 41);
        }
        else {
            _this.strength = Utilits_1.Utilits.GetRandomNumber(10, 41) - Utilits_1.Utilits.GetRandomNumber(0, 11);
        }
        if (age >= 40) {
            _this.endurance = Utilits_1.Utilits.GetRandomNumber(10, 41) - Utilits_1.Utilits.GetRandomNumber(0, 11);
        }
        else {
            _this.endurance = Utilits_1.Utilits.GetRandomNumber(10, 41);
        }
        _this.accuracy = Utilits_1.Utilits.GetRandomNumber(10, 41);
        if (age >= 40) {
            _this.intellegence = Utilits_1.Utilits.GetRandomNumber(10, 41) + Utilits_1.Utilits.GetRandomNumber(0, 11);
        }
        else {
            _this.intellegence = Utilits_1.Utilits.GetRandomNumber(10, 41);
        }
        _this.reaction = Utilits_1.Utilits.GetRandomNumber(10, 41);
        _this.speedAttack = Utilits_1.Utilits.GetRandomNumber(10, 41);
        _this.speedMove = Utilits_1.Utilits.GetRandomNumber(10, 41);
        _this.speedThinking = Utilits_1.Utilits.GetRandomNumber(10, 41);
        _this.charisma = Utilits_1.Utilits.GetRandomNumber(10, 41);
        _this.leadership = Utilits_1.Utilits.GetRandomNumber(10, 41);
        _this.willPower = Utilits_1.Utilits.GetRandomNumber(10, 41);
        _this.brave = Utilits_1.Utilits.GetRandomNumber(10, 41);
        if (gender === "Женщина") {
            _this.attentivenes = Utilits_1.Utilits.GetRandomNumber(10, 41) + Utilits_1.Utilits.GetRandomNumber(0, 11);
        }
        else {
            _this.attentivenes = Utilits_1.Utilits.GetRandomNumber(10, 41);
        }
        _this.memory = Utilits_1.Utilits.GetRandomNumber(10, 41);
        if (age >= 40) {
            _this.totalKnowledge = Utilits_1.Utilits.GetRandomNumber(10, 41) + Utilits_1.Utilits.GetRandomNumber(0, 11);
        }
        else {
            _this.totalKnowledge = Utilits_1.Utilits.GetRandomNumber(10, 41);
        }
        _this.hunterKnowledge = Utilits_1.Utilits.GetRandomNumber(1, 10);
        _this.fortuna = Utilits_1.Utilits.GetRandomNumber(10, 41);
        _this.magicEnergy = Utilits_1.Utilits.GetRandomNumber(0, 11);
        _this.magicControl = Utilits_1.Utilits.GetRandomNumber(0, 11);
        _this.survivalSkill = Utilits_1.Utilits.GetRandomNumber(10, 41);
        _this.technicalKnowledge = Utilits_1.Utilits.GetRandomNumber(10, 41);
        return _this;
    }
    return HunterStat;
}(CharacterStat_1.CharacterStat));
exports.HunterStat = HunterStat;
