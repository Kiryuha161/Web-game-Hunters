import { Area } from "./Area.js";
import { CityGun } from "./CityGun.js";
import { CityMerra } from "./CityMerra.js";

export class AreaGrand extends Area {
    constructor() {
        super();
        this.name = "Гранд";
        this.description = "Западная область центральной территории Юграс. Проходит по границе с Изомаром";
        this.cities = [
            new CityGun(),
            new CityMerra()
        ]

        this.dangerRatio = 0;
        this.collectCities = this.cities;

        this.CollectAllGeography();

    }
}