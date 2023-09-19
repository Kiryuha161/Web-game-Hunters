import { CharacterStat } from "./CharacterStat.js";
import { GetRandomNumber } from "./Utilits.js";

export class PoltergeistStat extends CharacterStat {
    protected ageUp: number;

    constructor(gender, age) {
        super();
        this.ageUp = 60;

        if (age >= this.ageUp) {
            this.health = GetRandomNumber(5, 21) + (GetRandomNumber(0, 5) + (age - this.ageUp + 5));
        } else {
            this.health = GetRandomNumber(5, 21) - GetRandomNumber(0, 5);
        }

        if (age >= this.ageUp) {
            this.strength = GetRandomNumber(5, 21) + (GetRandomNumber(1, 5) + (age - this.ageUp + 5));
        } else {
            this.strength = GetRandomNumber(5, 21);
        }

        this.endurance = GetRandomNumber(5, 21);
        this.accuracy = GetRandomNumber(5, 21);

        if (age >= 40) {
            this.intellegence = GetRandomNumber(5, 21) + (GetRandomNumber(0, 5) + (age - this.ageUp + 5));
        } else {
            this.intellegence = GetRandomNumber(10, 41);
        }

        this.reaction = GetRandomNumber(5, 21);
        this.speedAttack = GetRandomNumber(5, 21);
        this.speedMove = GetRandomNumber(5, 21);
        this.speedThinking = GetRandomNumber(5, 21);
        this.charisma = GetRandomNumber(5, 21);
        this.leadership = GetRandomNumber(5, 21);
        this.willPower = GetRandomNumber(5, 21);
        this.brave = GetRandomNumber(5, 21);
        if (gender === "Женщина") {
            this.attentivenes = GetRandomNumber(5, 21) + GetRandomNumber(0, 5);
        } else {
            this.attentivenes = GetRandomNumber(5, 21);
        }

        this.memory = GetRandomNumber(5, 21);
        if (age >= 40) {
            this.totalKnowledge = GetRandomNumber(5, 21) + (GetRandomNumber(0, 5) + (age - this.ageUp + 5));
        } else {
            this.totalKnowledge = GetRandomNumber(5, 21);
        }
        this.hunterKnowledge = GetRandomNumber(0, 1);
        this.fortuna = GetRandomNumber(5, 21);
        if (age >= 40) {
            this.magicEnergy = GetRandomNumber(0, 6) + (GetRandomNumber(0, 3) + (age - this.ageUp + 1));
            this.magicControl = GetRandomNumber(0, 6) + (GetRandomNumber(0, 3) + (age - this.ageUp + 1));
        }

        this.survivalSkill = GetRandomNumber(5, 21);
        this.technicalKnowledge = GetRandomNumber(5, 21);
    }

}


