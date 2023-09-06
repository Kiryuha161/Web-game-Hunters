import { Character } from './Character.js';
import { Hunter } from './Hunter.js';
import { Academy } from './Academy.js';
import { RuasAcademy } from './RuasAcademy.js';
import * as Utilits from './Utilits.js';
import * as UIScript from './UIScript.js';

window.onload = function () {
    let academy = new RuasAcademy();
    academy.setHunters();
    UIScript.DrawTable(academy.hunters);
    console.log("Количество охотников: ");
    console.log(academy.hunters.length);
    let hunter = academy.hunters[0];
    console.log("Сила" + hunter.characterStat.strength);

}


