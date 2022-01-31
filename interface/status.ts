
export enum statusType {
    SCHEDULER = "SCHEDULED",
    POSTPONED = "POSTPONED",
    CANCELED = "CANCELED",
    IN_PLAY = "IN_PLAY",
    SUSPENDED = "SUSPENDED",
    PAUSED = "PAUSED",
    AWARDED = "AWARDED",
    FINISHED = "FINISHED",
}

export interface IStatus {
    teamName: string;
    score: number;
    status?: number;
}