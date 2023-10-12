import { City } from "./City.js";
import { DistrictNorthMerra } from "./DiscrictNorthMerra.js";
import { DistrictSouthMerra } from "./DistrictSouthMerra.js";
import { DistrictNorthGun } from "./DistrictNorthGun.js";
import { DistrictSouthGun} from "./DistrictSouthGun.js";

export class CityGun extends City {
    constructor() {
        super();
        this.name = "Ган";
        this.description = "Город, представляющий собой большое равнинное поле, которое изредка разбавляют дома, промышленные здания, магазины и стадион";
        this.districts = [
            new DistrictNorthGun(),
            new DistrictSouthGun()
        ]
        
        this.dangerRatio = 0;

        this.collectDistricts = this.districts;
        this.CollectAllGeography();
    }
}