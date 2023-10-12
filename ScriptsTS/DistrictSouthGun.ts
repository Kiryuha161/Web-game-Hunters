import { District } from "./District.js";
import { Utilits } from "./Utilits.js";

export class DistrictSouthGun extends District {
       constructor() {
        super();
        this.name = "Южная часть города Ган.";
        this.description = "Ветренное поле, изредка разбавленное домами и промышленными зданиями ";
        this.dangerRatio = 0;
        this.SetDangerRatio(Utilits.GetFloatRandomNumber(0, 0.9));
       }
}