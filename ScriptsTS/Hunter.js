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
exports.Hunter = void 0;
var Character_1 = require("./Character");
var HunterStat_1 = require("./HunterStat");
var InvestigationDepartment_1 = require("./InvestigationDepartment");
var MilitaryDepartment_1 = require("./MilitaryDepartment");
var KeeperDepartment_1 = require("./KeeperDepartment");
var ReserveDepartment_1 = require("./ReserveDepartment");
var MedicalDepartment_1 = require("./MedicalDepartment");
var BiologicalDepartment_1 = require("./BiologicalDepartment");
var EngineerDepartment_1 = require("./EngineerDepartment");
var SeekerDepartment_1 = require("./SeekerDepartment");
var MagicDepartment_1 = require("./MagicDepartment");
var Utilits_1 = require("./Utilits");
var Hunter = /** @class */ (function (_super) {
    __extends(Hunter, _super);
    function Hunter() {
        var _this = _super.call(this) || this;
        _this.type = "Человек";
        _this.activity = "Охотник";
        if (Utilits_1.Utilits.GetRandomNumber(0, 101) >= 35) {
            _this.gender = "Мужчина";
        }
        else {
            _this.gender = "Женщина";
        }
        _this.age = Utilits_1.Utilits.GetRandomNumber(18, 46);
        if (_this.gender === "Мужчина") {
            _this.name = Utilits_1.Utilits.GetName("rus", "male");
            _this.name = Utilits_1.Utilits.GetName("rus", "female");
        }
        else {
            _this.surname = Utilits_1.Utilits.GetSurname("rus", "male");
            _this.surname = Utilits_1.Utilits.GetSurname("rus", "female");
        }
        _this.stats = new HunterStat_1.HunterStat(_this.gender, _this.age);
        if (_this.stats.GetStats("strength") >= 35) {
            _this.department = new MilitaryDepartment_1.MilitaryDepartment();
        }
        else if (_this.stats.GetStats("attentivenes") >= 35) {
            _this.department = new InvestigationDepartment_1.InvestigationDepartment();
        }
        else if (_this.stats.GetStats("intellegence") >= 35) {
            _this.department = new KeeperDepartment_1.KeeperDepartment();
        }
        else if (_this.stats.GetStats("survivalSkill") >= 35) {
            _this.department = new MedicalDepartment_1.MedicalDepartment();
        }
        else if (_this.stats.GetStats("totalKnowledge") >= 35) {
            _this.department = new BiologicalDepartment_1.BiologicalDepartment();
        }
        else if (_this.stats.GetStats("technicalKnowledge") >= 35) {
            _this.department = new EngineerDepartment_1.EngineerDepartment();
        }
        else if (_this.stats.GetStats("magicEnergy") >= 3) {
            _this.department = new SeekerDepartment_1.SeekerDepartment();
        }
        else if (_this.stats.GetStats("magicEnergy") >= 3 && _this.stats.GetStats("willPower") >= 30) {
            _this.department = new MagicDepartment_1.MagicDepartment();
        }
        else {
            _this.department = new ReserveDepartment_1.ReserveDepartment();
        }
        return _this;
    }
    Hunter.prototype.GetInfo = function (info) {
        _super.prototype.GetInfo.call(this, info);
        if (info === "department") {
            return this.department.GetNameDepartment();
        }
        else {
            return "Нет данных";
        }
    };
    return Hunter;
}(Character_1.Character));
exports.Hunter = Hunter;
