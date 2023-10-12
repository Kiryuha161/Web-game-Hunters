import { City } from "./City.js";
import { DistrictNorthMerra } from "./DiscrictNorthMerra.js";
import { DistrictSouthMerra } from "./DistrictSouthMerra.js";

export class CityMerra extends City {
    constructor() {
        super();
        this.name = "Мерра";
        this.description = "Город, представляющий собой равнинную местность, обрамлённую горами с юга.";
        this.districts = [
            new DistrictNorthMerra(),
            new DistrictSouthMerra()
        ]
        
        this.dangerRatio = 0;
        
        this.collectDistricts = this.districts;
        this.CollectAllGeography();
    }
}