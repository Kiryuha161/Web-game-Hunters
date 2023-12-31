import { Area } from "./Area.js";
import { City } from "./City.js";
import { District } from "./District.js";
import { Territory } from "./Territory.js";
import { Utilits } from "./Utilits.js";
import { escapeLeadingUnderscores } from "./node_modules/typescript/lib/typescript.js";

export class Region {
    protected name: string;
    protected description: string;
    protected dangerRatio: number;
    protected territiories: Territory[];
    protected collectTerritories: Territory[] = [];
    protected collectAreas: Area[] = [];
    protected collectCities: City[] = [];
    protected collectDistricts: District[] = [];

    constructor() {
        if (this.constructor === Territory) {
            throw new Error("Вы не можете вывызывать абстрактный класс региона");
        }
    }

    public AssignRandomTerritory(): Territory {
        return this.territiories[Utilits.GetRandomNumber(0, this.territiories.length)];
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

    public GetTerritory(index: number): Territory;
    public GetTerritory(name: string): Territory;

    public GetTerritory(parameter: number | string): Territory {
        if (typeof parameter === "number") {
            return this.territiories[parameter];
        } else {
            return this.territiories.find(t => t.GetInfo("name") === parameter);
        }
    }

    public GetTerritories(): Territory[] {
        return this.territiories;
    }

    public CollectAreas() {
        for (let i = 0; i < this.collectTerritories.length; i++) {
            this.collectAreas.concat(this.collectTerritories[i].GetAreas());
            this.dangerRatio += this.collectTerritories[i].GetDangerRatio();
        }
    }

    public CollectCities() {
        for (let i = 0; i < this.collectAreas.length; i++) {
            this.collectCities.concat(this.collectAreas[i].GetCities());
            this.dangerRatio += this.collectAreas[i].GetDangerRatio();
        }
    }

    public CollectDistricts() {
        for (let i = 0; i < this.collectCities.length; i++) {
            this.collectDistricts.concat(this.collectCities[i].GetDistricts());
            this.dangerRatio += this.collectDistricts[i].GetDangerRatio();
        }
    }

    public CollectAllGeography() {
        this.CollectAreas();
        this.CollectCities();
        this.CollectDistricts();
    }

    public GetDangerRatio(): number {
        return this.dangerRatio;
    }
}



