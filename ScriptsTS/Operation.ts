import { Region } from './Region.js';
import { Hunter } from './Hunter.js';
import { Area } from './Area.js';
import { City } from './City.js';
import { District } from './District.js';
import { Territory } from './Territory.js';

export class Operation {
    protected name: string;
    protected category: string;
    protected description: string;
    protected client: string;
    protected startOperationInfo: string;
    
    protected hunters: Hunter[];
    protected captainGroupHunters: Hunter;
    protected region: Region;
    protected territory: Territory;
    protected area: Area;
    protected city: City;
    protected district: District;
}