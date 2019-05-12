import { DateModel } from './DateModel';
import { CompletedStatisticModel } from './CompletedStatisticModel';

export class GroupedCompletedStatisticModel {
    date: DateModel;
    completedStatistics: CompletedStatisticModel[];
}
