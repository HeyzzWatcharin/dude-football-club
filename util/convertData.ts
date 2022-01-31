import { statusType } from "../interface/status";
import { TierType } from "../interface/tier-type";

export const convertStatusToText = (data?: string) => {
    switch (data) {
        case data = statusType.SCHEDULER: {
            return 'Scheduler';
        }
        case data = statusType.POSTPONED: {
            return 'Positponed';
        }
        case data = statusType.CANCELED: {
            return 'Canceled';
        }
        case data = statusType.SUSPENDED: {
            return 'Suspended';
        }
        case data = statusType.IN_PLAY: {
            return 'In play';
        }
        case data = statusType.PAUSED: {
            return 'Pasued';
        }
        case data = statusType.AWARDED: {
            return 'Awarded';
        }
        case data = statusType.FINISHED: {
            return 'Finished';
        }
        default: {
            return 'Unknown status';
        }
    }
}

export const convertTierToText = (data?: string) => {
    switch (data) {
        case data = TierType.Tier_One: {
            return 'Football League Tier Level 1';
        }
        case data = TierType.Tier_Two: {
            return 'Football League Tier Level 2';
        }
        case data = TierType.Tier_Three: {
            return 'Football League Tier Level 3';
        }
        case data = TierType.Tier_Four: {
            return 'Football League Tier Level 4';
        }
        default: {
            return 'Unknown Tier';
        }
    }
}
