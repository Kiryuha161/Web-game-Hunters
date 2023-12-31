import { District } from "./District.js";
import { Utilits } from "./Utilits.js";

export class City {
    protected name: string;
    protected description: string;
    protected dangerRatio: number;
    protected districts: District[] = [];
    protected collectDistricts: District[] = [];

    constructor() {
        if (this.constructor === District) {
            throw new Error("Вы не можете вывызывать абстрактный класс района города");
        }
    }

    public GetDangerRatio() : number {
        /*for (let i = 0; i < this.districts.length; i++) {
            this.dangerRatio += this.districts[i].GetDangerRatio();
        }*/
       
        return this.dangerRatio;
    }

    public SetDangerRatio(addRatio: number) {
        this.dangerRatio += addRatio;
    }

    public AssignRandomDistrict(): District {
        return this.districts[Utilits.GetRandomNumber(0, this.districts.length)];
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

    public GetDistrict(index: number): District;
    public GetDistrict(name: string): District;

    public GetDistrict(parameter: number | string): District {
        if (typeof parameter === "number") {
            return this.districts[parameter];
        } else {
            return this.districts.find(t => t.GetInfo("name") === parameter);
        }
    }

    public GetDistricts() : District[] {
        return this.districts;
    }

    public CollectAllGeography() {
        for (let i = 0; i < this.collectDistricts.length; i++) {
            this.dangerRatio += this.collectDistricts[i].GetDangerRatio();
        }
    }
}