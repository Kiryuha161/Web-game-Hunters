import { District } from "./District.js";
import { Utilits } from "./Utilits.js";

export class DistrictNorthGun extends District {
       constructor() {
        super();
        this.name = "Северная часть города Ган.";
        this.description = "Ветренное поле, изредка разбавленное домами и промышленными зданиями. Немного разнообразия добавляет футбольный стадион";
        this.dangerRatio = 0;
        this.SetDangerRatio(Utilits.GetFloatRandomNumber(0, 0.9));
       }
}