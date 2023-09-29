import { Character } from './Character.js';
import { HunterStat } from './HunterStat.js';
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
import { Utilits } from './Utilits.js';

export class Hunter extends Character {
    protected department: Department;

    constructor() {
        super();
        this.type = "Человек";
        this.activity = "Охотник";
        
        let randomGenderCount = Utilits.GetRandomNumber(0, 101);
        if (randomGenderCount >= 35) {
            this.gender = "Мужчина";
        } else {
            this.gender = "Женщина";
        }
        
        this.age = Utilits.GetRandomNumber(18, 46);

        if (this.gender === "Мужчина") {
            this.name = Utilits.GetName("rus", "male");
            this.surname = Utilits.GetSurname("rus", "male");
        } else {
            this.name = Utilits.GetName("rus", "female");
            this.surname = Utilits.GetSurname("rus", "female");
        }

        this.stats = new HunterStat(this.gender, this.age);
        

        if (this.stats.GetStats("strength") >= 35) {
            this.department = new MilitaryDepartment();
        } else if (this.stats.GetStats("attentivenes") >= 35) {
            this.department = new InvestigationDepartment();
        } else if (this.stats.GetStats("intellegence") >= 35) {
            this.department = new KeeperDepartment();
        } else if (this.stats.GetStats("survivalSkill") >= 35) {
            this.department = new MedicalDepartment();
        } else if (this.stats.GetStats("totalKnowledge") >= 35) {
            this.department = new BiologicalDepartment();
        } else if (this.stats.GetStats("technicalKnowledge") >= 35) {
            this.department = new EngineerDepartment();
        } else if (this.stats.GetStats("magicEnergy") >= 3) {
            this.department = new SeekerDepartment();
        } else if (this.stats.GetStats("magicEnergy") >= 3 && this.stats.GetStats("willPower") >= 30) {
            this.department = new MagicDepartment();
        } else {
            this.department = new ReserveDepartment();
        }
    }

    override GetInfo(info: string): string | number {
        if (info === "department") {
            return this.department.GetNameDepartment();
        } else {
            return super.GetInfo(info);
        }
    }    
}