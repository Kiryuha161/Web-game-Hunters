import { Hunter } from "./Hunter.js";
import { Region } from "./Region.js";
import { Area } from './Area.js';
import { City } from './City.js';
import { District } from './District.js';
import { Territory } from "./Territory.js";

export class Academy {
    protected name: string;
    protected capacityApplicants: number;
    protected capacityHunters: number;
    protected region: Region;
    protected territories: Territory[]; 
    protected territory: Territory;
    protected area: Area;
    protected city: City;
    protected district: District;
    protected hunters: Hunter[];
    
    constructor() {
        if (this.constructor === Academy) {
            throw new Error("Вы не можете вывызывать абстрактный класс академии");
        }
    }
}

