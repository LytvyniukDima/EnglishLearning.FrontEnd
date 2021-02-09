import { GrammarFileAnalysedModel } from "./grammar-file-analyzed.model";

export interface GrammarAnalyseGridItemModel {
    id: string;
    name: string;
    path: string[];
    sentCount: number;
    originalItem: GrammarFileAnalysedModel;
}
