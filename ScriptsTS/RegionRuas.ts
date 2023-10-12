import { Area } from "./Area.js";
import { City } from "./City.js";
import { District } from "./District.js";
import { Region } from "./Region.js";
import { Territory } from "./Territory.js";
import { TerritoryJugras } from "./TerritoryJugras.js";

export class RegionRuas extends Region {
    
    constructor() {
        super();
        this.name = "Руас";
        this.description = "Руас - обширнейший регион, где обитатель может встретить как снежные пустыни в одной части, так и жаркие оазисы на другой. Северная сторона походит на полуостров, с трёх строно, омываемая морем иэта часть самая морозная из всех. Южное же направление переходит от умеренного климата к тёплым районам. Богат Руас на природные искапаемые как классической, так и сверхъестественной природы. Проходит по центру лишь одна крупная река Акера (входит в тройку крупнейших), соединяющая два моря с двух сторон, из тех, что контролируют из Руасской Академии Охоты. Другие же контролирует Гомранская Академя Охоты. Через неё можно войти в море региона Тонг. Остальные водоёмы весьма мелки и на них не проходят пути сообщения между областями региона, а также охота.";
        this.territiories = [
            new TerritoryJugras()
        ]

        this.dangerRatio = 0;

        this.collectTerritories = this.GetTerritories();
        this.collectAreas = [];
        this.collectCities = [];
        this.collectDistricts = [];
        
        this.CollectAllGeography();
    }

    
}

