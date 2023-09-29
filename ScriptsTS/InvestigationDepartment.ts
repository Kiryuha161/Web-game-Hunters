import { Department } from './Department.js';

export class InvestigationDepartment extends Department {
    constructor() {
        super();
        this.name = "Департамент расследований";
        this.description = "Департамент расследований - одно из приоритетных направлений в охоте. Занимаются тем, что расследуют заявления населения, выполняют расследования при происшествиях, выполняют поручения департамента хранителей, в случае необходимости";
    }
}