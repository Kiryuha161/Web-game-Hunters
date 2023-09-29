import { CharacterStat } from "./CharacterStat.js";

export class Character {
    protected type: string;
    protected activity: string;
    protected name: string;
    protected surname: string;
    protected gender: string;
    protected age: number;
    protected stats: CharacterStat;

    constructor() {
        if (this.constructor === Character) {
            throw new Error("Вы не можете вывызывать абстрактный класс персонажа");
        }
    }

    public GetAccessToStats() {
        return this.stats;
    }
 
    public GetInfo(info: string): string | number {
        switch (info) {
            case "type":
                return this.type;
                break;
            case "activity":
                return this.activity;
                break;
            case "name":
                return this.name;
                break;
            case "surname":
                return this.surname;
                break;
            case "gender":
                return this.gender;
                break;
            case "age":
                return this.age;
                break;
            default:
                return "Нет данных";
                break;
        }
    }

}




