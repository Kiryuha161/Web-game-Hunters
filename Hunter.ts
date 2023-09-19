import { Character } from './Character.js';
import { CharacterStat } from './CharacterStat.js'
import { HunterStat } from './HunterStat';
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
   
    protected hunterStat: HunterStat;
    protected department: Department;

    constructor(name, surname, age, gender) {
        super();
        this.type = "Человек";
        this.activity = "Охотник";
        this.name = name;
        this.surname = surname;
        this.age = age;
        this.gender = gender;
        this.hunterStat = new HunterStat(gender, age);

        if (this.hunterStat.GetStats("strength") >= 35) {
            this.department = new MilitaryDepartment();
        } else if (this.hunterStat.GetStats("attentivenes") >= 35) {
            this.department = new InvestigationDepartment();
        } else if (this.hunterStat.GetStats("intellegence") >= 35) {
            this.department = new KeeperDepartment();
        } else if (this.hunterStat.GetStats("survivalSkill") >= 35) {
            this.department = new MedicalDepartment();
        } else if (this.hunterStat.GetStats("totalKnowledge") >= 35) {
            this.department = new BiologicalDepartment();
        } else if (this.hunterStat.GetStats("technicalKnowledge") >= 35) {
            this.department = new EngineerDepartment();
        } else if (this.hunterStat.GetStats("magicEnergy") >= 3) {
            this.department = new SeekerDepartment();
        } else if (this.hunterStat.GetStats("magicEnergy") >= 3 && this.hunterStat.GetStats("willPower") >= 30) {
            this.department = new MagicDepartment();
        } else {
            this.department = new ReserveDepartment();
        }
    }
}