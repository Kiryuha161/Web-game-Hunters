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
import { AreaGrand } from "./AreaGrand.js";
import { AreaOscar } from "./AreaOscar.js";
import { Territory } from "./Territory.js";
var TerritoryJugras = /** @class */ (function (_super) {
    __extends(TerritoryJugras, _super);
    function TerritoryJugras() {
        var _this = _super.call(this) || this;
        _this.name = "Юграс";
        _this.description = "Территория в центре Юга, подконтрольного Руасской Академией Охоты, с умеренным климатом. Через её западную часть течёт величественная Акера. Регион максимально развитый, он является столицей Южной столицей региона. Все торговые пути пересекаются здесь, что аккумулирует развитие территории. В одной из областей Оскар, в городе Плея, расположилась Руасская Академия Охоты, готовая принять в свои ряды кандидатов в герои. Территория максимально урбанизирована и специализируется на торговле, производстве и услугах. Подконтрольна Руасской Академии Охоты.";
        _this.areas = [
            new AreaGrand(),
            new AreaOscar()
        ];
        _this.dangerRatio = 0;
        _this.collectAreas = _this.areas;
        _this.CollectAllGeography();
        return _this;
    }
    return TerritoryJugras;
}(Territory));
export { TerritoryJugras };
//# sourceMappingURL=TerritoryJugras.js.map