//тест Character.js
//window.onload = function () {
    export class Character {
        protected type: string;
        protected activity: string;
        protected name: string;
        protected surname: string;
        protected age: number;
        protected gender: string;
        
        constructor() {
            if (this.constructor === Character) {
                throw new Error("Вы не можете вывызывать абстрактный класс персонажа");
            }
        }
    }
    


