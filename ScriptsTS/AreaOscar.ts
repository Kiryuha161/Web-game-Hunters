import { Area } from "./Area.js";
import { CityGun } from "./CityGun.js";
import { CityMerra } from "./CityMerra.js";
import { CityPleya } from "./CityPleya.js";

export class AreaOscar extends Area {
    constructor() {
        super();
        this.name = "Оскар";
        this.description = "Самая крупная область Юграса, находящаяся по центру и граничащая с рекой Акера. Температура средняя, но холоднее, чем в области Гранд";
        this.cities = [
            new CityPleya()
        ]


        this.dangerRatio = 0;
        this.collectCities = this.cities;
        this.CollectAllGeography();
    }
}
        
       