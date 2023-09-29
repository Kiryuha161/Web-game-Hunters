import { Department } from './Department.js';

export class ReserveDepartment extends Department {
    constructor() {
        super();
        this.name = "Департамент резерва";
        this.description = "Департамент резерва - департамент, включающий охотников, не прошедших отбор в другие департаменты. Здесь они выступают на подмоге к другим департаменам и развиваются.";
    }
}