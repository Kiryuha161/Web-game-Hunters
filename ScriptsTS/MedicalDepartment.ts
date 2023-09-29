import { Department } from './Department.js';

export class MedicalDepartment extends Department {
    constructor() {
        super();
        this.name = "Медицинский департамент";
        this.description = "Медицинский департамент - департамент, занимающийся лечением пострадавших охотников и оказыванием медицинской поддержки во время операций";
    }
}