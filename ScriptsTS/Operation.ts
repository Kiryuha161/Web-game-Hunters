import { RuasRegion } from './RuasRegion.js';
import { Hunter } from './Hunter.js';

export class Operation {
    protected name: string;
    protected category: string;
    protected description: string;
    protected client: string;
    protected startOperationInfo: string;
    
    protected hunters: Hunter[];
    protected captainGroupHunters: Hunter;
    //private region: Region;
}