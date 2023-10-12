import { Utilits } from "./Utilits.js";

export class District {
    protected name: string;
    protected description: string;
    protected dangerRatio: number;

    constructor() {
        if (this.constructor === District) {
            throw new Error("Вы не можете вывызывать абстрактный класс района города");
        }
    }

    public GetDangerRatio() : number {
        return this.dangerRatio;
    }

    public SetDangerRatio(addRatio) {
        this.dangerRatio += addRatio;
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
}