import { City } from "./City.js";
import { District } from "./District.js";
import { Utilits } from "./Utilits.js";

export class Area {
    protected name: string;
    protected description: string;
    protected dangerRatio: number;
    protected cities: City[];
    protected collectCities: City[] = [];
    protected collectDistricts: District[] = [];

    constructor() {
        if (this.constructor === Area) {
            throw new Error("Вы не можете вывызывать абстрактный класс района города");
        }
    }

    public GetDangerRatio() : number {
        /*for (let i = 0; i < this.cities.length; i++) {
            this.dangerRatio += this.cities[i].GetDangerRatio();
        }*/
        
        return this.dangerRatio;
    }


    public SetDangerRatio(addRatio) {
        this.dangerRatio += addRatio;
    }

    public AssignRandomCity(): City {
        return this.cities[Utilits.GetRandomNumber(0, this.cities.length)];
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

    public GetCity(index: number): City {
        return this.cities[index];
    }

    public GetCities() : City[] {
        return this.cities;
    }

    public CollectAllGeography() {
        for (let i = 0; i < this.collectCities.length; i++) {
            this.dangerRatio += this.collectCities[i].GetDangerRatio();
        }
    }
}