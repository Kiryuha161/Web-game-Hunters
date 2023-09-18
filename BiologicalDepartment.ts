import { Department } from './Department.js';

export class BiologicalDepartment extends Department {
    constructor() {
        super();
        this.name = "Биологический департамент";
        this.description = "Биологический департамент - департамент, занимается исследованием существ, сбором, изучением и выращиванием трав, изучением климата и так далее";
    }

    public GetName(): string {
         return this.name;
    }

    public GetDescription(): string {
        return this.description;
    }
}
  
    