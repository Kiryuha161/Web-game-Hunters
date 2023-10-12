import { Academy } from './Academy.js';
import { Hunter } from './Hunter.js';
import { Utilits } from './Utilits.js';
import { Message } from './Message.js';
import { World } from './World.js';
import { Region } from './Region.js';

export class RuasAcademy extends Academy {

    constructor(region: Region) {
        super();
        this.name = "Руасская академия охоты";
        this.capacityApplicants = 30;
        this.capacityHunters = Math.ceil(this.capacityApplicants * (Utilits.GetRandomNumber(60, 80) / 100));
        this.hunters = new Array();
        this.region = region;
        this.territory = this.region.GetTerritory(0);
        this.area = this.territory.GetArea(1);
        this.city = this.area.GetCity(0);
        this.district = this.city.GetDistrict(0);
    }

    public SetHunters() {
        for (let i = 0; i < this.capacityHunters; i++) {
            let newHunter = new Hunter();
            this.AddHunterToList(newHunter);
        }
    }

    public ShowListHunters(): Hunter[] {
        return this.hunters;
    }

    public AddHunterToList(hunter: Hunter): void {
        this.hunters.push(hunter);
    }

    public AddHuntersToList(hunters: Hunter[]): void {
        this.hunters.push(...hunters);
    }

    public ListGraduate(message: Message, world: World, date: string){
        message.PerformListMessageEvent(`Список выпускников ${world.GetDate().getFullYear()} года`, "", "Академия", date, this.ShowListHunters());
    }

    public GreetingMessage(message: Message, world: World, academy: RuasAcademy, date: string) {
        message.PerformListMessageEvent(`Добро пожаловать в РАО`, `Добро пожаловать на должность ректора РАО (Руаской Академии Охоты). Совет ассоциации охотников надеется, что вы сможете оправдать наши ожидания, ожидания правительства и населения. Вы, как человек, принимающий только что построенную академию берёте на себя тяжёлый крест, но мы верим, что вы с этим крестом справитесь. В этом вам поможет наш совет и другие академии, с которыми мы настоятельно рекомендуем сотрудничать. <br><br>Сейчас вы принимаете академию, которая открыла дорогу в жизнь своим первым выпускникам, в количестве ${academy.ShowListHunters().length} человек. Вы получите отчёт следующим сообщением о том, куда ваши бойцы распределились. Кроме того, у вас есть по одному отделу в каждом департаменте из более опытных охотников и академий-партнёров, согласившихся на трансфер. Более подробно с ними вы можете ознакомиться в соответствующей вкладке. <br><br><br>`, "Совет Ассоциации Охотников", date);
    }

    public StartMessage(message, world, academy, date) {
        this.GreetingMessage(message, world, academy, date);
        this.ListGraduate(message, world, date);
    }

    public RaportAboutDangerRatio(message: Message, region: Region, date: string): void {
        message.PerformListMessageEvent(`Отчёт о состоянии региона`, `В настоящий момент, мы наблюдаем следующую картину: коэффициент опасности региона - ${Number(region.GetDangerRatio().toFixed(2))}`, "Академия", date);
    }

    public GetInfo(info): string | number {
        switch(info) {
            case "name":
                return this.name;
                break;
            case "capacityHunters":
                return this.capacityHunters;
                break;
            case "capacityApplicants":
                return this.capacityApplicants;
                break;
            case "region":
                return this.region.GetInfo("name");
                break;
            case "territory":
                return this.territory.GetInfo("name");
                break;
            case "area":
                return this.area.GetInfo("name");
                break;
            case "city":
                return this.city.GetInfo("name");
                break;
            case "district":
                return this.district.GetInfo("name");
                break;
            default:
                return "Нет данных";
                break;
        }
    }
}


