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
import { Operation } from './Operation.js';
var LightOperation = /** @class */ (function (_super) {
    __extends(LightOperation, _super);
    function LightOperation(client) {
        var _this = _super.call(this) || this;
        _this.name = "Операция лёгкой сложности";
        _this.category = "E";
        _this.description = "Операции лёгкой сложности можно доверить охотникам-новичкам. Они не содержат опасных существ и обстоятельств и как правило относительно безопасны, хотя может случиться всякое, что редкость.";
        _this.client = client;
        _this.startOperationInfo = "\u0412\u044B \u043F\u043E\u043B\u0443\u0447\u0438\u043B\u0438 \u0437\u0430\u044F\u0432\u043A\u0443 \u043B\u0451\u0433\u043A\u043E\u0439 \u043E\u043F\u0435\u0440\u0430\u0446\u0438\u0438 \u0415-\u043A\u0430\u0442\u0435\u0433\u043E\u0440\u0438\u0438. \u0417\u0430\u043A\u0430\u0437\u0447\u0438\u043A: ".concat(client, ". \u041F\u0440\u043E\u0448\u0443 \u043D\u0430\u0437\u043D\u0430\u0447\u0438\u0442\u044C \u0433\u0440\u0443\u043F\u043F\u0443 \u043E\u0445\u043E\u0442\u043D\u0438\u043A\u043E\u0432, \u043A\u043E\u043C\u0430\u043D\u0434\u0438\u0440\u0430 \u0433\u0440\u0443\u043F\u043F\u044B \u0438 \u0437\u0430\u043C\u0435\u0441\u0442\u0438\u0442\u0435\u043B\u044F \u043A\u043E\u043C\u0430\u043D\u0434\u0438\u0440\u0430 \u0433\u0440\u0443\u043F\u043F\u044B \u0434\u043B\u044F \u0440\u0435\u0448\u0435\u043D\u0438\u044F \u043F\u0440\u043E\u0431\u043B\u0435\u043C\u044B. \u0414\u043B\u044F \u0442\u0430\u043A\u043E\u0433\u043E \u0437\u0430\u0434\u0430\u043D\u0438\u044F \u0440\u0435\u043A\u043E\u043C\u0435\u043D\u0434\u0443\u0435\u043C \u0431\u0440\u0430\u0442\u044C \u043A\u043E\u043C\u0430\u043D\u0434\u0438\u0440\u0430 \u0438 \u043E\u0434\u043D\u043E\u0433\u043E \u043E\u0445\u043E\u0442\u043D\u0438\u043A\u0430. \u0411\u043E\u043B\u044C\u0448\u0435 \u0434\u043B\u044F \u0442\u0430\u043A\u0438\u0445 \u0437\u0430\u0434\u0430\u043D\u0438\u0439 \u0431\u0440\u0430\u0442\u044C \u043D\u0435 \u0438\u043C\u0435\u0435\u0442 \u0441\u043C\u044B\u0441\u043B\u0430.");
        return _this;
        //this.hunters;
        //this.captainGroupHunters;
        //this.region; //Добавить сюда случайный регион, территорию, область и населённый пункт в методе getOperation(), классы которых будут созданы позже;
    }
    LightOperation.prototype.AddHunterToTeam = function (hunter) {
        this.hunters.push(hunter);
    };
    LightOperation.prototype.AssignHunterToCaptain = function (hunter) {
        this.captainGroupHunters = hunter;
    };
    LightOperation.prototype.ShowStartOperationInfo = function () {
        return this.startOperationInfo;
    };
    return LightOperation;
}(Operation));
export { LightOperation };
//# sourceMappingURL=LightOperation.js.map