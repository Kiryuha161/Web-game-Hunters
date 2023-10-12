import { District } from "./District.js";
import { Utilits } from "./Utilits.js";

export class DistrictNorthPleya extends District {
       constructor() {
        super();
        this.name = "Северная часть города Плея.";
        this.description = "Часть города Плея, которая неимоверно загружена пробками, в том числе и потому, что там расположена Академия.";
        this.dangerRatio = 0;
        this.SetDangerRatio(Utilits.GetFloatRandomNumber(0, 0.2));
       }
}