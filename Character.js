//тест Character.js
//window.onload = function () {
    export class Character {
        constructor() {
            if (this.constructor === Character) {
                throw new Error("Вы не можете вывызывать абстрактный класс персонажа");
            }
        }
    }
    


