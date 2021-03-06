import { SentTokenModel } from "./sent-token.model";

export interface ParsedSentModel {
    id: string;
    analyseId: string;
    sent: string;
    sentType: string;
    englishLevel: string;
    tokens: SentTokenModel[];
}