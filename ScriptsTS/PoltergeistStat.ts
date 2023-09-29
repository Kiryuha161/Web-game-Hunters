import { CharacterStat } from "./CharacterStat.js";
import { Utilits } from "./Utilits.js";

export class PoltergeistStat extends CharacterStat {
    protected ageUp: number;

    constructor(gender, age) {
        super();
        this.ageUp = 60;

        if (age >= this.ageUp) {
            this.health = Utilits.GetRandomNumber(5, 21) + (Utilits.GetRandomNumber(0, 5) + (age - this.ageUp + 5));
        } else {
            this.health = Utilits.GetRandomNumber(5, 21) - Utilits.GetRandomNumber(0, 5);
        }

        if (age >= this.ageUp) {
            this.strength = Utilits.GetRandomNumber(5, 21) + (Utilits.GetRandomNumber(1, 5) + (age - this.ageUp + 5));
        } else {
            this.strength = Utilits.GetRandomNumber(5, 21);
        }

        this.endurance = Utilits.GetRandomNumber(5, 21);
        this.accuracy = Utilits.GetRandomNumber(5, 21);

        if (age >= 40) {
            this.intellegence = Utilits.GetRandomNumber(5, 21) + (Utilits.GetRandomNumber(0, 5) + (age - this.ageUp + 5));
        } else {
            this.intellegence = Utilits.GetRandomNumber(10, 41);
        }

        this.reaction = Utilits.GetRandomNumber(5, 21);
        this.speedAttack = Utilits.GetRandomNumber(5, 21);
        this.speedMove = Utilits.GetRandomNumber(5, 21);
        this.speedThinking = Utilits.GetRandomNumber(5, 21);
        this.charisma = Utilits.GetRandomNumber(5, 21);
        this.leadership = Utilits.GetRandomNumber(5, 21);
        this.willPower = Utilits.GetRandomNumber(5, 21);
        this.brave = Utilits.GetRandomNumber(5, 21);
        if (gender === "Женщина") {
            this.attentivenes = Utilits.GetRandomNumber(5, 21) + Utilits.GetRandomNumber(0, 5);
        } else {
            this.attentivenes = Utilits.GetRandomNumber(5, 21);
        }

        this.memory = Utilits.GetRandomNumber(5, 21);
        if (age >= 40) {
            this.totalKnowledge = Utilits.GetRandomNumber(5, 21) + (Utilits.GetRandomNumber(0, 5) + (age - this.ageUp + 5));
        } else {
            this.totalKnowledge = Utilits.GetRandomNumber(5, 21);
        }
        this.hunterKnowledge = Utilits.GetRandomNumber(0, 1);
        this.fortuna = Utilits.GetRandomNumber(5, 21);
        if (age >= 40) {
            this.magicEnergy = Utilits.GetRandomNumber(0, 6) + (Utilits.GetRandomNumber(0, 3) + (age - this.ageUp + 1));
            this.magicControl = Utilits.GetRandomNumber(0, 6) + (Utilits.GetRandomNumber(0, 3) + (age - this.ageUp + 1));
        }

        this.survivalSkill = Utilits.GetRandomNumber(5, 21);
        this.technicalKnowledge = Utilits.GetRandomNumber(5, 21);
    }

}


