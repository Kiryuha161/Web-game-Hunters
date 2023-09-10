import { Character } from './Character.js';
import { CharacterStat } from './CharacterStat.js';
import { PoltergeistStat} from './PoltergeistStat.js';

class Poltergeist extends Character {
    constructor(name, surname, age, gender) {
        super();
        this.type = "Нежить";
        this.activity = "Призрак";
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.characterStat = new PoltergeistStat(gender, age);
        this.characterStat.getStat();
    }
}