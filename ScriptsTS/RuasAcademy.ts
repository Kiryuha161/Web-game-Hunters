import { Academy } from './Academy.js';
import { Hunter } from './Hunter.js';
import { Utilits } from './Utilits.js';
import { Message } from './Message.js';
import { World } from './World.js';

export class RuasAcademy extends Academy {

    constructor() {
        super();
        this.name = "Руасская академия охоты";
        this.capacityApplicant = 30;
        this.capacityHunters = Math.ceil(this.capacityApplicant * (Utilits.GetRandomNumber(60, 80) / 100));
        this.hunters = new Array();
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
}


