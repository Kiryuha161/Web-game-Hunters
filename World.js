import { DisplayDate, DisplayNewMessage, DisplayNewTextMessage, DrawTable, DrawTableInContentMessage } from "./UIScript.js";
import { GetRandomNumber, GetName, GetSurname } from "./Utilits.js";
import { LightOperation } from "./LightOperation.js";
import { Academy } from './Academy.js';
import { RuasAcademy } from './RuasAcademy.js';
import { Character } from './Character.js';
import { Hunter } from './Hunter.js';
import * as Utilits from './Utilits.js';

class World {
    constructor() {
        this.gameDate = new Date(2014, 0, 10);
        this.lastGetNewLastOperation = new Date(2014, 0, 10);

        this.translateToString = function () {
            return this.gameDate.toISOString();
        };

        this.addDay = function () {
            this.gameDate.setDate(this.gameDate.getDate() + 1);
        };

        this.lightOperations = [];
    }
}

window.onload = function () {
    const world = new World();
    let academy = new RuasAcademy();
    academy.setHunters();

    PerformListMessageEvent(academy.getListMessage("Добро пожаловать в РАО"), id, academy.getTextMessage("Добро пожаловать на должность ректора РАО (Руаской Академии Охоты). Совет ассоциации охотников надеется, что вы сможете оправдать наши ожидания, ожидания правительства и населения. Вы, как человек, принимающий только что построенную академию берёте на себя тяжёлый крест, но мы верим, что вы с этим крестом справитесь. В этом вам поможет наш совет и другие академии, с которыми мы настоятельно рекомендуем сотрудничать. \nСейчас вы принимаете академию, которая открыла дорогу в жизнь своим первым выпускникам, в количестве 30 человек. Вы получите отчёт следующим сообщением о том, куда ваши бойцы распределились. Кроме того, у вас есть по одному отделу в каждом департаменте из более опытных охотников и академий-партнёров, согласившихся на трансфер. Более подробно с ними вы можете ознакомиться в соответствующей вкладке.", "greeting", academy.hunters));
    PerformListMessageEvent(academy.getListMessage("Список выпускников 2014 года"), id, "", "table", academy.hunters);
    //DrawTableInContentMessage(academy.hunters);

    DisplayDate(world.translateToString());





    const nextDayButton = document.querySelector(".next-day-button");
    nextDayButton.onclick = function () {
        world.addDay();
        DisplayDate(world.translateToString());
        GetEOperation(world, academy);
    }


};

let id = 0;

export function PerformListMessageEvent(messageText, id, contentText, messageType, hunters) {
    id++;
    const message = messageText;
    DisplayNewMessage(message, id, contentText, messageType, hunters);
}

export function GetEOperation(world, academy) {
    if (world.gameDate.getDate() - world.lastGetNewLastOperation.getDate() >= GetRandomNumber(1, 4)) {
        const lightOperation = new LightOperation(GetName("rus", "male") + " " + GetSurname("rus", "male"));
        world.lightOperations.push(lightOperation);

        let idEOperation = world.lightOperations.length - 1;

        PerformListMessageEvent("Вы получили новое задание E-категории", id, world.lightOperations[idEOperation].startOperationInfo, "operation", academy.hunters);

        world.lastGetNewLastOperation = new Date(world.gameDate);
    }
}



