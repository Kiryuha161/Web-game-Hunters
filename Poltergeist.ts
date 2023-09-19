import { Character } from './Character.js';
import { CharacterStat } from './CharacterStat.js';
import { PoltergeistStat} from './PoltergeistStat';

export class Poltergeist extends Character {
    protected poltergeistStat: PoltergeistStat;
  
    constructor(name, surname, age, gender) {
        super();
        this.type = "Нежить";
        this.activity = "Призрак";
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.poltergeistStat = new PoltergeistStat(gender, age);
    }
}