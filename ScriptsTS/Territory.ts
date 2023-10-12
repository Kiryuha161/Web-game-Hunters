import { Area } from "./Area.js"
import { Utilits } from "./Utilits.js";
import { City } from "./City.js";
import { District } from "./District.js";

export class Territory {
    protected name: string;
    protected description: string;
    protected dangerRatio: number;
    protected areas: Area[];
    protected collectAreas: Area[] = [];
    protected collectCities: City[] = [];
    protected collectDistricts: District[] = [];

    constructor() {
        if (this.constructor === Territory) {
            throw new Error("Вы не можете вывызывать абстрактный класс района города");
        }
    }

    public GetDangerRatio() : number {
        for (let i = 0; i < this.areas.length; i++) {
            this.dangerRatio += this.areas[i].GetDangerRatio();
        }
        
        return this.dangerRatio;
    }

    public SetDangerRatio(addRatio) {
        this.dangerRatio += addRatio;
    }

    public AssignRandomArea(): Area {
        return this.areas[Utilits.GetRandomNumber(0, this.areas.length)];
    }

    public GetInfo(info): string | number {
        switch (info) {
            case "name":
                return this.name;
                break;
            case "description":
                return this.description;
                break;
            case "dangerRatio":
                return this.dangerRatio;
                break;
            default:
                return "Нет данных";
                break;
        }
    }

    public GetArea(index: number): Area {
        return this.areas[index];
    }

    public GetAreas() : Area[] {
       /* for (let i = 0; i < this.areas.length; i++) {
            this.dangerRatio += this.areas[i].GetDangerRatio();
        }*/
        
        return this.areas;
    }

    public CollectAllGeography() {
        for (let i = 0; i < this.collectAreas.length; i++) {
            this.dangerRatio += this.collectAreas[i].GetDangerRatio();
        }
    }


}