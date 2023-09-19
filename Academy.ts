import { Hunter } from "./Hunter";

export class Academy {
    protected name: string;
    protected capacityApplicant: number;
    protected capacityHunters: number;
    protected hunters: Hunter[];
    
    constructor() {
        if (this.constructor === Academy) {
            throw new Error("�� �� ������ ���������� ����������� ����� ��������");
        }
    }
}

