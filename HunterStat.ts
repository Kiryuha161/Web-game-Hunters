import { CharacterStat } from "./CharacterStat";
import { GetRandomNumber } from "./Utilits.js";

export class HunterStat extends CharacterStat {
    constructor(gender, age) {
        super();
        if (age >= 40) {
            this.health = GetRandomNumber(10, 41);
        } else {
            this.health = GetRandomNumber(10, 41) - GetRandomNumber(0, 11);
        }

        if (gender === "Мужчина") {
            this.strength = GetRandomNumber(10, 41);
        } else {
            this.strength = GetRandomNumber(10, 41) - GetRandomNumber(0, 11);
        }

        if (age >= 40) {
            this.endurance = GetRandomNumber(10, 41) - GetRandomNumber(0, 11);
        } else {
            this.endurance = GetRandomNumber(10, 41);
        }

        this.accuracy = GetRandomNumber(10, 41);

        if (age >= 40) {
            this.intellegence = GetRandomNumber(10, 41) + GetRandomNumber(0, 11);
        } else {
            this.intellegence = GetRandomNumber(10, 41);
        }

        this.reaction = GetRandomNumber(10, 41);
        this.speedAttack = GetRandomNumber(10, 41);
        this.speedMove = GetRandomNumber(10, 41);
        this.speedThinking = GetRandomNumber(10, 41);
        this.charisma = GetRandomNumber(10, 41);
        this.leadership = GetRandomNumber(10, 41);
        this.willPower = GetRandomNumber(10, 41);
        this.brave = GetRandomNumber(10, 41);
        if (gender === "Женщина") {
            this.attentivenes = GetRandomNumber(10, 41) + GetRandomNumber(0, 11);
        } else {
            this.attentivenes = GetRandomNumber(10, 41);
        }

        this.memory = GetRandomNumber(10, 41);
        if (age >= 40) {
            this.totalKnowledge = GetRandomNumber(10, 41) + GetRandomNumber(0, 11);
        } else {
            this.totalKnowledge = GetRandomNumber(10, 41);
        }
        this.hunterKnowledge = GetRandomNumber(1, 10);
        this.fortuna = GetRandomNumber(10, 41);
        this.magicEnergy = GetRandomNumber(0, 11);
        this.magicControl = GetRandomNumber(0, 11);
        this.survivalSkill = GetRandomNumber(10, 41);
        this.technicalKnowledge = GetRandomNumber(10, 41);

    }

    public GetStats(stat: string): number {
        switch (stat) {
            case "health":
                return this.health;
                break;
            case "strength":
                return this.strength;
                break;
            case "endurance":
                return this.endurance;
                break;
            case "accuracy":
                return this.accuracy;
                break;
            case "intellegence":
                return this.intellegence;
                break;
            case "reaction":
                return this.reaction;
                break;
            case "speedAttack":
                return this.speedAttack;
                break;
            case "speedMove":
                return this.speedMove;
                break;
            case "speedThinking":
                return this.speedThinking;
                break;
            case "charisma":
                return this.charisma;
                break;
            case "leadership":
                return this.leadership;
                break;
            case "willPower":
                return this.willPower;
                break;
            case "brave":
                return this.brave;
                break;
            case "attentivenes":
                return this.attentivenes;
                break;
            case "memory":
                return this.memory;
                break;
            case "totalKnowledge":
                return this.totalKnowledge;
                break;
            case "hunterKnowledge":
                return this.hunterKnowledge;
                break;
            case "fortuna":
                return this.fortuna;
                break;
            case "magicEnergy":
                return this.magicEnergy;
                break;
            case "magicControl":
                return this.magicControl;
                break;
            case "survivalSkill":
                return this.survivalSkill;
                break;
            case "technicalKnowledge":
                return this.technicalKnowledge;
                break;
            default:
                return 0;
                break;
        }
    }
}