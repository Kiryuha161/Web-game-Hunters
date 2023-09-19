import { Department } from './Department.js';

export class MilitaryDepartment extends Department {
    constructor() {
        super();
        this.name = "Военный департамент";
        this.description = "Военный департамент - одно из приоритетных направлений в охоте. Занимаются тем, что патрулируют территорию, выполняют разведку, участвуют в активных и крупных боевых действиях";
    }
}