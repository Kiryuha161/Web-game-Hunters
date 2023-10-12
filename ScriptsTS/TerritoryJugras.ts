import { AreaGrand } from "./AreaGrand.js";
import { AreaOscar } from "./AreaOscar.js";
import { Territory } from "./Territory.js";

export class TerritoryJugras extends Territory {
    constructor() {
        super();
        this.name = "Юграс";
        this.description = "Территория в центре Юга, подконтрольного Руасской Академией Охоты, с умеренным климатом. Через её западную часть течёт величественная Акера. Регион максимально развитый, он является столицей Южной столицей региона. Все торговые пути пересекаются здесь, что аккумулирует развитие территории. В одной из областей Оскар, в городе Плея, расположилась Руасская Академия Охоты, готовая принять в свои ряды кандидатов в герои. Территория максимально урбанизирована и специализируется на торговле, производстве и услугах. Подконтрольна Руасской Академии Охоты."
        this.areas = [
            new AreaGrand(),
            new AreaOscar()
        ]

        this.dangerRatio = 0;

        this.collectAreas = this.areas;
        this.CollectAllGeography();

    }
}