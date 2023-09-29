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
import { Region } from "./Region.js";
var RuasRegion = /** @class */ (function (_super) {
    __extends(RuasRegion, _super);
    function RuasRegion() {
        var _this = _super.call(this) || this;
        _this.name = "Руас";
        _this.description = "Руас - обширнейший регион, где обитатель может встретить как снежные пустыни в одной части, так и жаркие оазисы на другой. Северная сторона походит на полуостров, с трёх строно, омываемая морем и " +
            "эта часть самая морозная из всех. Южное же направление переходит от умеренного климата к тёплым районам. Богат Руас на природные искапаемые как классической, так и сверхъестественной природы. Проходит по " +
            "центру лишь одна крупная река Акера (входит в тройку крупнейших), соединяющая два моря с двух сторон, из тех, что контролируют из Руасской Академии Охоты. Другие же контролирует Гомранская Академя Охоты. " +
            "Через неё можно войти в море региона Тонг. Остальные водоёмы весьма мелки и на них не проходят пути сообщения между областями региона, а также охота.";
        return _this;
        //this.territories = ["Логос", "Фронтир"]; //добавить сюда список территорий, класс которых будет создан позже;
    }
    return RuasRegion;
}(Region));
export { RuasRegion };
//# sourceMappingURL=RuasRegion.js.map