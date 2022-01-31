import { IArea } from "./competition";
import { IPlayer } from "./player";

export interface ITeamDetail {
    email: string;
    crestUrl: string;
    founded: number;
    id: number;
    lastUpdated: Date;
    name: string;
    phone: string;
    shortName: string;
    tla: string;
    venue: string;
    website: string;
    squad: IPlayer[];
    area: IArea;
    clubColors: string;
    address: string;
}