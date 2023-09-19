import { Academy } from './Academy.js';
import { Character } from './Character.js';
import { Hunter } from './Hunter.js';
import { GetRandomNumber, GetName, GetSurname } from './Utilits.js';
import { DisplayDate, DisplayNewMessage, DisplayNewTextMessage } from "./UIScript.js";
import { PerformListMessageEvent } from './World.js';
//import { PerformListMessageEvent, World } from './World.js';


export class RuasAcademy extends Academy {

    constructor() {
        super();
        this.name = "Руасская академия охоты";
        this.capacityApplicant = 30;
        this.capacityHunters = Math.ceil(this.capacityApplicant * (GetRandomNumber(60, 80) / 100));
        this.hunters = new Array();
    }

    public SetHunters() {
        for (let i = 0; i < this.capacityHunters; i++) {
            if (GetRandomNumber(0, 101) > 35) {
                this.hunters[i] = new Hunter(GetName("rus", "male"), GetSurname("rus", "male"), GetRandomNumber(18, 46), "Мужчина"); //Добавить департаменты
            }
            else {
                this.hunters[i] = new Hunter(GetName("rus", "female"), GetSurname("rus", "female"), GetRandomNumber(18, 46), "Женщина");
            }
        }
    }
}


