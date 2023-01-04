import { OpeningSchedule } from "./OpeningSchedule";

export class Shop {

    id: number;
    name : string;
    closed: boolean;
    creationDate: Date;
    productCount: number;
    categoryCount: number;
    schedule: OpeningSchedule;
}
