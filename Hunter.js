import { Character } from './Character.js';
import { CharacterStat } from './CharacterStat.js'
import { Department } from './Department.js';
import { InvestigationDepartment } from './InvestigationDepartment.js';
import { MilitaryDepartment } from './MilitaryDepartment.js';
import { KeeperDepartment } from './KeeperDepartment.js';
import { ReserveDepartment } from './ReserveDepartment.js';
import { MedicalDepartment } from './MedicalDepartment.js';
import { BiologicalDepartment } from './BiologicalDepartment.js';
import { EngineerDepartment} from './EngineerDepartment.js';
import { SeekerDepartment } from './SeekerDepartment.js';
import { MagicDepartment } from './MagicDepartment.js';

export class Hunter extends Character {
    constructor(name, surname, age, gender) {
        super();
        this.type = "Человек";
        this.activity = "Охотник";
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.characterStat = new CharacterStat(gender, age);
        this.characterStat.getStat();

        if (this.characterStat.strength >= 35) {
            this.department = new MilitaryDepartment();
        } else if (this.characterStat.attentivenes >= 35) {
            this.department = new InvestigationDepartment();
        } else if (this.characterStat.intellegence >= 35) {
            this.department = new KeeperDepartment();
        } else if (this.characterStat.survivalSkill >= 35) {
            this.department = new MedicalDepartment();
        } else if (this.characterStat.totalKnowledge >= 35) {
            this.department = new BiologicalDepartment();
        } else if (this.characterStat.technicalKnowledge >= 35) {
            this.department = new EngineerDepartment();
        } else if (this.characterStat.magicEnergy >= 3) {
            this.department = new SeekerDepartment();
        } else if (this.characterStat.magicEnergy >= 3 && this.characterStat.willPower >= 30) {
            this.department = new MagicDepartment();
        } else {
            this.department = new ReserveDepartment();
        }
    }
}