import { GetRandomNumber } from "./Utilits.js";

export class CharacterStat {
    protected health: number;
    protected strength: number;
    protected endurance: number;
    protected accuracy: number;
    protected intellegence: number;
    protected reaction: number;
    protected speedAttack: number;
    protected speedMove: number;
    protected speedThinking: number;
    protected charisma: number;
    protected leadership: number;
    protected willPower: number;
    protected brave: number;
    protected attentivenes: number;
    protected memory: number;
    protected totalKnowledge: number;
    protected hunterKnowledge: number;
    protected fortuna: number;
    protected magicEnergy: number;
    protected magicControl: number;
    protected survivalSkill: number;
    protected technicalKnowledge: number;
    protected age: number;
    protected gender: string;

    constructor() {
        if (this.constructor === CharacterStat) {
            throw new Error("Вы не можете вывызывать абстрактный класс статистики персонажа");
        }
    }
}