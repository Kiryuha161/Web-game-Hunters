import { Department } from './Department.js';

export class KeeperDepartment extends Department {
    constructor() {
        super();
        this.name = "Департамент хранителей";
        this.description = "Департамент хранителей - важный департамент, занимающийся внешней и внутренней разведкой, тайными операциями, переговорами с высшими существами";
    }
}