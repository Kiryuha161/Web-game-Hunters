import { RuasRegion } from './RuasRegion.js';

export class LightOperation {
    constructor(client) {
        this.name = "Операция лёгкой сложности";
        this.category = "E";
        this.description = "Операции лёгкой сложности можно доверить охотникам-новичкам. Они не содержат опасных существ и обстоятельств и как правило относительно безопасны, хотя может случиться всякое, что редкость."
        this.client = client;
        this.startOperationInfo = `Вы получили заявку лёгкой операции Е-категории. Заказчик: ${client}. Прошу назначить группу охотников, командира группы и заместителя командира группы для решения проблемы. Для такого задания рекомендуем брать командира и одного охотника. Больше для таких заданий брать не имеет смысла.`;
        this.hunters;
        this.captainGroupHunters;
        this.viceCaptainHunters;
        this.region; //Добавить сюда случайный регион, территорию, область и населённый пункт в методе getOperation(), классы которых будут созданы позже;
    }
}