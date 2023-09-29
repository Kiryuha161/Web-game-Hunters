export class Department {
    protected name: string;
    protected description: string;
    
    constructor() {
        if (this.constructor === Department) {
            throw new Error("Вы не можете вывызывать абстрактный класс департамента");
        }
    }

    public GetNameDepartment() {
            return this.name;
    }

    public GetDescriptionDepartment() {
            return this.description;
    }
}