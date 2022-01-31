import { IMatchesDetail } from "./matches";

export interface IModal {
    show: boolean;
    onHide: () => void;
    className?: string;
    matchData?: IMatchesDetail;
}