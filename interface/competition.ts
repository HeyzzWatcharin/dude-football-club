export interface ICompetitions {
    count: number;
    competitions: ICompetitionDetail[];
}

export interface IArea {
    countryCode: string;
    ensignUrl: string;
    id: number;
    name: string;
}

export interface ICurrentSeason {
    currentMatchday: number;
    endDate: Date;
    id: number
    startDate: Date
    winner: string | null;
}

export interface ICompetitionDetail {
    area: IArea;
    code: string;
    currentSeason: ICurrentSeason;
    emblemUrl: string;
    id: number;
    lastUpdated: Date;
    name: string;
    numberOfAvailableSeasons: number
    plan: string;
}
