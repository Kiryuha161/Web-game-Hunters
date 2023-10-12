import { District } from "./District.js";
import { Utilits } from "./Utilits.js";

export class DistrictSouthPleya extends District {
       constructor() {
        super();
        this.name = "Южная часть города Плея.";
        this.description = "Граничащая с областью Марка, представляет собой менее развитую часть города. При этом она менее нагружена.";
        this.dangerRatio = 0;
        this.SetDangerRatio(Utilits.GetFloatRandomNumber(0, 0.5));
       }
}