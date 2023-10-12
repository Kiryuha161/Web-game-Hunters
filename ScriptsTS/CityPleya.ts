import { City } from "./City.js";
import { DistrictSouthPleya } from "./DistrictSouthPleya.js";
import { DistrictNorthPleya } from "./DistrictNorthPleya.js";

export class CityPleya extends City {
    constructor() {
        super();
        this.name = "Плея";
        this.description = "Город, в котором находится академия. На въезде и выезде постоянные пробки из-за центрального расположения города, являющегося воротами в северную часть Руаса, единственно контролируемую Руасской Академией Охоты.";
        this.districts = [
            new DistrictNorthPleya(),
            new DistrictSouthPleya()
        ]
        
        this.dangerRatio = 0;
        
        this.collectDistricts = this.districts;
        this.CollectAllGeography();
    }
}