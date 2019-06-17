import { GroupedCompletedStatisticModel } from './GroupedCompletedStatisticModel';
import { PerDayStatisticModel } from './PerDayStatisticModel';
import { PerLevelStatisticModel } from './PerLevelStatisticModel';
import { PerMultimediaContentTypeStatisticModel } from './PerMultimediaContentTypeStatisticModel';
import { TasksCorrectnessStatisticModel } from './TasksCorrectnessStatisticModel';

export class FullStatisticModel {
    groupedCompletedStatistic: GroupedCompletedStatisticModel[];
    perDayStatistic: PerDayStatisticModel[];

    perTasksLevelsStatistic: PerLevelStatisticModel[];
    perMultimediaLevelsStatistic: PerLevelStatisticModel[];

    perTextTypeStatistic: PerMultimediaContentTypeStatisticModel[];
    perVideoTypeStatistic: PerMultimediaContentTypeStatisticModel[];

    tasksCorrectnessStatistic: TasksCorrectnessStatisticModel;
}