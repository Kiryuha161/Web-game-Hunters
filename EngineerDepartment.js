import { Department } from "./Department.js";

export class EngineerDepartment extends Department {
    constructor() {
        super();
        this.name = "Инженерный департамент";
        this.description = "Инженерный департамент занимается производством, хранением, обслуживанием, проектированием технической части, а также выступает поддержкой во время операций";
    }
}