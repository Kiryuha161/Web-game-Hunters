import { Character } from './Character.js';
import { CharacterStat } from './CharacterStat.js'

export class Hunter extends Character {
    constructor(name, surname, age, gender, department) {
        super();
        this.type = "Человек";
        this.activity = "Охотник";
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.department = department;
        this.characterStat = new CharacterStat(gender, age);
        this.characterStat.getStat();
    }

}