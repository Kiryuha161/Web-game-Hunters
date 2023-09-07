export class Department {
    constructor() {
        if (this.constructor === Department) {
            throw new Error("Вы не можете вывызывать абстрактный класс департамента");
        }
    }
}