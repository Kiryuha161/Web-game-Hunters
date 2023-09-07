import { Department } from "./Department.js";

export class MagicDepartment extends Department {
    constructor() {
        super();
        this.name = "Департамент магии";
        this.description = "Департамент магии занимается изучением магии, артефактов, борется с магами. Магия требует большой силы воли, так как сводит с ума";
    }
}