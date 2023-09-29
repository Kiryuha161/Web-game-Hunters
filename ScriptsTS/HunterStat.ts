import { CharacterStat } from "./CharacterStat.js";
import { Utilits } from "./Utilits.js";

export class HunterStat extends CharacterStat {
    constructor(gender, age) {
        super();
        if (age >= 40) {
            this.health = Utilits.GetRandomNumber(10, 41);
        } else {
            this.health = Utilits.GetRandomNumber(10, 41) - Utilits.GetRandomNumber(0, 11);
        }

        if (gender === "Мужчина") {
            this.strength = Utilits.GetRandomNumber(10, 41);
        } else {
            this.strength = Utilits.GetRandomNumber(10, 41) - Utilits.GetRandomNumber(0, 11);
        }

        if (age >= 40) {
            this.endurance = Utilits.GetRandomNumber(10, 41) - Utilits.GetRandomNumber(0, 11);
        } else {
            this.endurance = Utilits.GetRandomNumber(10, 41);
        }

        this.accuracy = Utilits.GetRandomNumber(10, 41);

        if (age >= 40) {
            this.intellegence = Utilits.GetRandomNumber(10, 41) + Utilits.GetRandomNumber(0, 11);
        } else {
            this.intellegence = Utilits.GetRandomNumber(10, 41);
        }

        this.reaction = Utilits.GetRandomNumber(10, 41);
        this.speedAttack = Utilits.GetRandomNumber(10, 41);
        this.speedMove = Utilits.GetRandomNumber(10, 41);
        this.speedThinking = Utilits.GetRandomNumber(10, 41);
        this.charisma = Utilits.GetRandomNumber(10, 41);
        this.leadership = Utilits.GetRandomNumber(10, 41);
        this.willPower = Utilits.GetRandomNumber(10, 41);
        this.brave = Utilits.GetRandomNumber(10, 41);
        if (gender === "Женщина") {
            this.attentivenes = Utilits.GetRandomNumber(10, 41) + Utilits.GetRandomNumber(0, 11);
        } else {
            this.attentivenes = Utilits.GetRandomNumber(10, 41);
        }

        this.memory = Utilits.GetRandomNumber(10, 41);
        if (age >= 40) {
            this.totalKnowledge = Utilits.GetRandomNumber(10, 41) + Utilits.GetRandomNumber(0, 11);
        } else {
            this.totalKnowledge = Utilits.GetRandomNumber(10, 41);
        }
        this.hunterKnowledge = Utilits.GetRandomNumber(1, 10);
        this.fortuna = Utilits.GetRandomNumber(10, 41);
        this.magicEnergy = Utilits.GetRandomNumber(0, 11);
        this.magicControl = Utilits.GetRandomNumber(0, 11);
        this.survivalSkill = Utilits.GetRandomNumber(10, 41);
        this.technicalKnowledge = Utilits.GetRandomNumber(10, 41);

    }
}