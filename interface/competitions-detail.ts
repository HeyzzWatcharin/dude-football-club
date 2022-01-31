import { IArea, ICompetitionDetail } from "./competition";
import { IawayTeam, IHomeTeam, IScore } from "./matches";

export interface ICompetitionDetailMatches {
    count: number;
    competition: ICompetition;
    matches: IMatches;
}

interface ICompetition {
    id: number;
    plan: string;
    name: string;
    lastUpdate: Date;
    code: string;
    area: IArea;
}

interface IMatches {
    awayTeam: IawayTeam;
    group: string;
    homeTeam: IHomeTeam;
    id: number;
    lastUpdated: Date;
    matchday: number;
    score: IScore;
    season: ISeason;
    stage:string;
    status:string;
    utcDate:Date;
}   

interface ISeason {
    currentMatchday:number;
    endDate:Date;
    id:number;
    stringDate:Date;
}