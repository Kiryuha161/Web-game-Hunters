import { District } from "./District.js";
import { Utilits } from "./Utilits.js";

export class DistrictNorthMerra extends District {
       constructor() {
        super();
        this.name = "Северная часть города Мерра.";
        this.description = "Наиболее равнинная часть Мерры";
        this.dangerRatio = 0;
        this.SetDangerRatio(Utilits.GetFloatRandomNumber(0, 0.9));
       }
}