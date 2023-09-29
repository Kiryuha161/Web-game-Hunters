import { RuasRegion } from './RuasRegion.js';
import { Hunter } from './Hunter.js';
import { Operation } from './Operation.js';

export class LightOperation extends Operation {
    constructor(client) {
        super();
        this.name = "Операция лёгкой сложности";
        this.category = "E";
        this.description = "Операции лёгкой сложности можно доверить охотникам-новичкам. Они не содержат опасных существ и обстоятельств и как правило относительно безопасны, хотя может случиться всякое, что редкость."
        this.client = client;
        this.startOperationInfo = `Вы получили заявку лёгкой операции Е-категории. Заказчик: ${client}. Прошу назначить группу охотников, командира группы и заместителя командира группы для решения проблемы. Для такого задания рекомендуем брать командира и одного охотника. Больше для таких заданий брать не имеет смысла.`;
        //this.hunters;
        //this.captainGroupHunters;
        //this.region; //Добавить сюда случайный регион, территорию, область и населённый пункт в методе getOperation(), классы которых будут созданы позже;
    }

    public AddHunterToTeam(hunter: Hunter): void {
         this.hunters.push(hunter);
    }

    public AssignHunterToCaptain(hunter: Hunter): void {
        this.captainGroupHunters = hunter;
    }

    public ShowStartOperationInfo(): string {
        return this.startOperationInfo;
    }
}