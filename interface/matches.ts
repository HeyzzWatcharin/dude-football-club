export interface IMatchesDetail {
    awayTeam: IawayTeam;
    competition: ICompetition;
    homeTeam: IHomeTeam;
    id: number;
    matchDay: number;
    score: IScore;
    stage: string;
    status: string;
    utcDate: Date;
}

export interface IScore {
    duration: string;
    extraTime: IExtraTime;
    fullTime: IFullTime;
    halfTime: IHalfTime;
    penalties: IPenalties;
    winner: string;
}

export interface IExtraTime {
    awayTeam: number;
    homeTeam: number;
}

export interface IFullTime {
    awayTeam: number;
    homeTeam: number;
}

export interface IHalfTime {
    awayTeam: number;
    homeTeam: number;
}

export interface IPenalties {
    awayTeam: number;
    homeTeam: number;
}

export interface IMatchesDetailFilter {
    dateFrom: Date;
    dateTo: Date;
    permission: string;
}

export interface IawayTeam {
    id: number;
    name: string;
}

export interface IHomeTeam {
    id: number;
    name: string;
}

export interface IAreaMatches {
    code: string;
    ensignUrl: string;
    name: string;
}

export interface ICompetition {
    area: IAreaMatches[];
    id: number;
    name: string
}

export interface IMatchesDetailData {
    matchDetail?: IMatchesDetail;
    matchDate?: IMatchesDetailFilter;
}
