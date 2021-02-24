export interface TaskItemModel {
    id: string;
    taskGenerationId: string;
    generationName: string;
    sourceSentId: string;
    grammarPart: string;
    taskType: string;
    sentType: string;
    content: string;
}