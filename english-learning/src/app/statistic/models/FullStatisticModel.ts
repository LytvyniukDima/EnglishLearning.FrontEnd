import { GroupedCompletedStatisticModel } from './GroupedCompletedStatisticModel';
import { PerDayStatisticModel } from './PerDayStatisticModel';
import { PerLevelStatisticModel } from './PerLevelStatisticModel';
import { PerMultimediaContentTypeStatisticModel } from './PerMultimediaContentTypeStatisticModel';
import { TasksCorrectnessStatisticModel } from './TasksCorrectnessStatisticModel';

export class FullStatisticModel {
    groupedCompletedStatistic: GroupedCompletedStatisticModel[];
    perDayStatistic: PerDayStatisticModel[];

    perTasksEnglishLevelsStatistic: PerLevelStatisticModel[];
    perMultimediaEnglishLevelsStatistic: PerLevelStatisticModel[];

    perTextTypeStatistic: PerMultimediaContentTypeStatisticModel[];
    perVideoTypeStatistic: PerMultimediaContentTypeStatisticModel[];

    tasksCorrectnessStatistic: TasksCorrectnessStatisticModel;
}