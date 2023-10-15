import { RegionRuas } from './RegionRuas.js';
import { Hunter } from './Hunter.js';
import { Operation } from './Operation.js';

export class LightOperation extends Operation {
    constructor(client, region) {
        super();
        this.name = "Операция лёгкой сложности";
        this.category = "E";
        this.description = "Операции лёгкой сложности можно доверить охотникам-новичкам. Они не содержат опасных существ и обстоятельств и как правило относительно безопасны, хотя может случиться всякое, что редкость."
        this.region = region;
        this.territory = region.AssignRandomTerritory();
        this.area = this.territory.AssignRandomArea();
        this.city = this.area.AssignRandomCity();
        this.district = this.city.AssignRandomDistrict();
        this.client = client;
        this.startOperationInfo = `Вы получили заявку лёгкой операции Е-категории. <br>Заказчик: ${client}.<br>География заявки - регион ${this.region.GetInfo("name")}/территория ${this.territory.GetInfo("name")}/область ${this.area.GetInfo("name")}/город ${this.city.GetInfo("name")}/район ${this.district.GetInfo("name")} <br>Прошу назначить группу охотников, командира группы и заместителя командира группы для решения проблемы. Для такого задания рекомендуем брать командира и одного охотника. Больше для таких заданий брать не имеет смысла. <br>Показатели региона - ${Number(this.region.GetDangerRatio().toFixed(2))}, показатели территории - ${Number(this.territory.GetDangerRatio().toFixed(2))}, показатель области - ${Number(this.area.GetDangerRatio().toFixed(2))}, показатель города - ${Number(this.city.GetDangerRatio().toFixed(2))}, показатель района - ${Number(this.district.GetDangerRatio().toFixed(2))}`;
        //this.hunters;
        //this.captainGroupHunters;
        
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

    public GetGeoInfo(): string {
        return
    }
}