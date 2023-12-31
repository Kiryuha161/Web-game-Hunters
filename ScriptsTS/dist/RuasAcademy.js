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
import { Academy } from './Academy.js';
import { Hunter } from './Hunter.js';
import { Utilits } from './Utilits.js';
var RuasAcademy = /** @class */ (function (_super) {
    __extends(RuasAcademy, _super);
    function RuasAcademy(region) {
        var _this = _super.call(this) || this;
        _this.name = "Руасская академия охоты";
        _this.capacityApplicants = 30;
        _this.capacityHunters = Math.ceil(_this.capacityApplicants * (Utilits.GetRandomNumber(60, 80) / 100));
        _this.hunters = new Array();
        _this.region = region;
        _this.territory = _this.region.GetTerritory(0);
        _this.area = _this.territory.GetArea(1);
        _this.city = _this.area.GetCity(0);
        _this.district = _this.city.GetDistrict(0);
        return _this;
    }
    RuasAcademy.prototype.SetHunters = function () {
        for (var i = 0; i < this.capacityHunters; i++) {
            var newHunter = new Hunter();
            this.AddHunterToList(newHunter);
        }
    };
    RuasAcademy.prototype.ShowListHunters = function () {
        return this.hunters;
    };
    RuasAcademy.prototype.AddHunterToList = function (hunter) {
        this.hunters.push(hunter);
    };
    RuasAcademy.prototype.AddHuntersToList = function (hunters) {
        var _a;
        (_a = this.hunters).push.apply(_a, hunters);
    };
    RuasAcademy.prototype.ListGraduate = function (message, world, date) {
        message.PerformListMessageEvent("\u0421\u043F\u0438\u0441\u043E\u043A \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u043E\u0432 ".concat(world.GetDate().getFullYear(), " \u0433\u043E\u0434\u0430"), "", "Академия", date, this.ShowListHunters());
    };
    RuasAcademy.prototype.GreetingMessage = function (message, world, academy, date) {
        message.PerformListMessageEvent("\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u0432 \u0420\u0410\u041E", "\u0414\u043E\u0431\u0440\u043E \u043F\u043E\u0436\u0430\u043B\u043E\u0432\u0430\u0442\u044C \u043D\u0430 \u0434\u043E\u043B\u0436\u043D\u043E\u0441\u0442\u044C \u0440\u0435\u043A\u0442\u043E\u0440\u0430 \u0420\u0410\u041E (\u0420\u0443\u0430\u0441\u043A\u043E\u0439 \u0410\u043A\u0430\u0434\u0435\u043C\u0438\u0438 \u041E\u0445\u043E\u0442\u044B). \u0421\u043E\u0432\u0435\u0442 \u0430\u0441\u0441\u043E\u0446\u0438\u0430\u0446\u0438\u0438 \u043E\u0445\u043E\u0442\u043D\u0438\u043A\u043E\u0432 \u043D\u0430\u0434\u0435\u0435\u0442\u0441\u044F, \u0447\u0442\u043E \u0432\u044B \u0441\u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u043F\u0440\u0430\u0432\u0434\u0430\u0442\u044C \u043D\u0430\u0448\u0438 \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F, \u043E\u0436\u0438\u0434\u0430\u043D\u0438\u044F \u043F\u0440\u0430\u0432\u0438\u0442\u0435\u043B\u044C\u0441\u0442\u0432\u0430 \u0438 \u043D\u0430\u0441\u0435\u043B\u0435\u043D\u0438\u044F. \u0412\u044B, \u043A\u0430\u043A \u0447\u0435\u043B\u043E\u0432\u0435\u043A, \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u044E\u0449\u0438\u0439 \u0442\u043E\u043B\u044C\u043A\u043E \u0447\u0442\u043E \u043F\u043E\u0441\u0442\u0440\u043E\u0435\u043D\u043D\u0443\u044E \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u044E \u0431\u0435\u0440\u0451\u0442\u0435 \u043D\u0430 \u0441\u0435\u0431\u044F \u0442\u044F\u0436\u0451\u043B\u044B\u0439 \u043A\u0440\u0435\u0441\u0442, \u043D\u043E \u043C\u044B \u0432\u0435\u0440\u0438\u043C, \u0447\u0442\u043E \u0432\u044B \u0441 \u044D\u0442\u0438\u043C \u043A\u0440\u0435\u0441\u0442\u043E\u043C \u0441\u043F\u0440\u0430\u0432\u0438\u0442\u0435\u0441\u044C. \u0412 \u044D\u0442\u043E\u043C \u0432\u0430\u043C \u043F\u043E\u043C\u043E\u0436\u0435\u0442 \u043D\u0430\u0448 \u0441\u043E\u0432\u0435\u0442 \u0438 \u0434\u0440\u0443\u0433\u0438\u0435 \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u0438, \u0441 \u043A\u043E\u0442\u043E\u0440\u044B\u043C\u0438 \u043C\u044B \u043D\u0430\u0441\u0442\u043E\u044F\u0442\u0435\u043B\u044C\u043D\u043E \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0441\u043E\u0442\u0440\u0443\u0434\u043D\u0438\u0447\u0430\u0442\u044C. <br><br>\u0421\u0435\u0439\u0447\u0430\u0441 \u0432\u044B \u043F\u0440\u0438\u043D\u0438\u043C\u0430\u0435\u0442\u0435 \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u044E, \u043A\u043E\u0442\u043E\u0440\u0430\u044F \u043E\u0442\u043A\u0440\u044B\u043B\u0430 \u0434\u043E\u0440\u043E\u0433\u0443 \u0432 \u0436\u0438\u0437\u043D\u044C \u0441\u0432\u043E\u0438\u043C \u043F\u0435\u0440\u0432\u044B\u043C \u0432\u044B\u043F\u0443\u0441\u043A\u043D\u0438\u043A\u0430\u043C, \u0432 \u043A\u043E\u043B\u0438\u0447\u0435\u0441\u0442\u0432\u0435 ".concat(academy.ShowListHunters().length, " \u0447\u0435\u043B\u043E\u0432\u0435\u043A. \u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u0442\u0435 \u043E\u0442\u0447\u0451\u0442 \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0438\u043C \u0441\u043E\u043E\u0431\u0449\u0435\u043D\u0438\u0435\u043C \u043E \u0442\u043E\u043C, \u043A\u0443\u0434\u0430 \u0432\u0430\u0448\u0438 \u0431\u043E\u0439\u0446\u044B \u0440\u0430\u0441\u043F\u0440\u0435\u0434\u0435\u043B\u0438\u043B\u0438\u0441\u044C. \u041A\u0440\u043E\u043C\u0435 \u0442\u043E\u0433\u043E, \u0443 \u0432\u0430\u0441 \u0435\u0441\u0442\u044C \u043F\u043E \u043E\u0434\u043D\u043E\u043C\u0443 \u043E\u0442\u0434\u0435\u043B\u0443 \u0432 \u043A\u0430\u0436\u0434\u043E\u043C \u0434\u0435\u043F\u0430\u0440\u0442\u0430\u043C\u0435\u043D\u0442\u0435 \u0438\u0437 \u0431\u043E\u043B\u0435\u0435 \u043E\u043F\u044B\u0442\u043D\u044B\u0445 \u043E\u0445\u043E\u0442\u043D\u0438\u043A\u043E\u0432 \u0438 \u0430\u043A\u0430\u0434\u0435\u043C\u0438\u0439-\u043F\u0430\u0440\u0442\u043D\u0451\u0440\u043E\u0432, \u0441\u043E\u0433\u043B\u0430\u0441\u0438\u0432\u0448\u0438\u0445\u0441\u044F \u043D\u0430 \u0442\u0440\u0430\u043D\u0441\u0444\u0435\u0440. \u0411\u043E\u043B\u0435\u0435 \u043F\u043E\u0434\u0440\u043E\u0431\u043D\u043E \u0441 \u043D\u0438\u043C\u0438 \u0432\u044B \u043C\u043E\u0436\u0435\u0442\u0435 \u043E\u0437\u043D\u0430\u043A\u043E\u043C\u0438\u0442\u044C\u0441\u044F \u0432 \u0441\u043E\u043E\u0442\u0432\u0435\u0442\u0441\u0442\u0432\u0443\u044E\u0449\u0435\u0439 \u0432\u043A\u043B\u0430\u0434\u043A\u0435. <br><br><br>"), "Совет Ассоциации Охотников", date);
    };
    RuasAcademy.prototype.StartMessage = function (message, world, academy, date) {
        this.GreetingMessage(message, world, academy, date);
        this.ListGraduate(message, world, date);
    };
    RuasAcademy.prototype.RaportAboutDangerRatio = function (message, region, date) {
        message.PerformListMessageEvent("\u041E\u0442\u0447\u0451\u0442 \u043E \u0441\u043E\u0441\u0442\u043E\u044F\u043D\u0438\u0438 \u0440\u0435\u0433\u0438\u043E\u043D\u0430", "\u0412 \u043D\u0430\u0441\u0442\u043E\u044F\u0449\u0438\u0439 \u043C\u043E\u043C\u0435\u043D\u0442, \u043C\u044B \u043D\u0430\u0431\u043B\u044E\u0434\u0430\u0435\u043C \u0441\u043B\u0435\u0434\u0443\u044E\u0449\u0443\u044E \u043A\u0430\u0440\u0442\u0438\u043D\u0443: \u043A\u043E\u044D\u0444\u0444\u0438\u0446\u0438\u0435\u043D\u0442 \u043E\u043F\u0430\u0441\u043D\u043E\u0441\u0442\u0438 \u0440\u0435\u0433\u0438\u043E\u043D\u0430 - ".concat(Number(region.GetDangerRatio().toFixed(2))), "Академия", date);
    };
    RuasAcademy.prototype.GetInfo = function (info) {
        switch (info) {
            case "name":
                return this.name;
                break;
            case "capacityHunters":
                return this.capacityHunters;
                break;
            case "capacityApplicants":
                return this.capacityApplicants;
                break;
            case "region":
                return this.region.GetInfo("name");
                break;
            case "territory":
                return this.territory.GetInfo("name");
                break;
            case "area":
                return this.area.GetInfo("name");
                break;
            case "city":
                return this.city.GetInfo("name");
                break;
            case "district":
                return this.district.GetInfo("name");
                break;
            default:
                return "Нет данных";
                break;
        }
    };
    return RuasAcademy;
}(Academy));
export { RuasAcademy };
//# sourceMappingURL=RuasAcademy.js.map