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
        return this.dangerRatio;
    }

    public SetDangerRatio(addRatio: number) {
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

    public GetArea(index: number): Area;
    public GetArea(name: string): Area;

    public GetArea(parameter: number | string): Area {
        if (typeof parameter === "number") {
            return this.areas[parameter];
        } else {
            return this.areas.find(t => t.GetInfo("name") === parameter);
        }
    }

    public GetAreas() : Area[] {
        return this.areas;
    }

    public CollectAllGeography() {
        for (let i = 0; i < this.collectAreas.length; i++) {
            this.dangerRatio += this.collectAreas[i].GetDangerRatio();
        }
    }


}