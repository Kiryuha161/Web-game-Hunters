import { District } from "./District.js";
import { Utilits } from "./Utilits.js";

export class DistrictSouthMerra extends District {
       constructor() {
        super();
        this.name = "Южная часть города Мерра.";
        this.description = "Наиболее гористая часть Мерры";
        this.dangerRatio = 0;
        this.SetDangerRatio(Utilits.GetFloatRandomNumber(0, 0.9));
       }
}