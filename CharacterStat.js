import { GetRandomNumber } from "./Utilits.js";

export class CharacterStat {
    constructor(gender, age) {
        this.getStat = function() {
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
                this.endurance = GetRandomNumber(10, 41);
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
        }
        

}