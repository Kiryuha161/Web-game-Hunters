import { Department } from "./Department.js";

export class SeekerDepartment extends Department {
    constructor() {
        super();
        this.name = "Департамент искателей";
        this.description = "Департамент искателей занимается поиском магических артефактов и их исследованием. Курируется хранителями";
    }
}