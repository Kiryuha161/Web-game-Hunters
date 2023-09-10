import { RuasRegion } from './RuasRegion.js';

class LightOperation {
    constructor() {
        this.name = "Операция лёгкой сложности";
        this.category = "E";
        this.description = "Операции лёгкой сложности можно доверить охотникам-новичкам. Они не содержат опасных существ и обстоятельств и как правило относительно безопасны, хотя может случиться всякое, что редкость."
        this.client;
        this.startOperationInfo;
        this.hunters;
        this.captainGroupHunters;
        this.viceCaptainHunters;
        this.region; //Добавить сюда случайный регион, территорию, область и населённый пункт в методе getOperation(), классы которых будут созданы позже;

        this.getOperation = function(client) {
            this.client = client;

            const region = new RuasRegion();
            this.startOperationInfo = `Вы получили заявку лёгкой операции Е-категории. Заказчик: ${client}. Регион: ${region}. Прошу назначить группу охотников, командира группы и заместителя командира группы для решения проблемы`;
        }
    }
}