var CharacterStat = /** @class */ (function () {
    function CharacterStat() {
        if (this.constructor === CharacterStat) {
            throw new Error("Вы не можете вывызывать абстрактный класс статистики персонажа");
        }
    }
    CharacterStat.prototype.GetStats = function (stat) {
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
    };
    return CharacterStat;
}());
export { CharacterStat };
//# sourceMappingURL=CharacterStat.js.map