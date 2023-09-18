export class Academy {
    constructor() {
        if (this.constructor === Academy) {
            throw new Error("Вы не можете вывызывать абстрактный класс академии");
        }
    }
}

