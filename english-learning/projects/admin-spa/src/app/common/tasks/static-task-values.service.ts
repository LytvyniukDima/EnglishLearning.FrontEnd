import { Injectable } from "@angular/core";

@Injectable({
    providedIn: 'root',
})
export class StaticTaskValuesService {
    public getAllGrammaprParts(): string[] {
        return [
            "Present Simple",
            "Present Continuous",
            'All Sentences',
            'Test',
            'Present Simple and Present Continuous',
            "Future Plans",
            "Question Tags",
            "Possessive Adjectives",
            "Suffixes",
            "Present Perfect"
        ];
    }

    public getAllTaskTypes(): string[] {
        return [
            "SimpleBrackets",
            "WordsFromBox",
            "CorrectAlternative",
            "CorrectOrder",
            "DivisionBySlash",
            "CorrectOption",
        ];
    }

    public getAllEnglishLevelsWithoutNone(): string[] {
        return [
            "Elementary",
            "PreIntermediate",
            'Intermediate',
            'UpperIntermediate',
            'Advanced'
        ];
    }

    public parseTaskType(taskType: string): string {
        switch (taskType) {
            case 'SimpleBrackets': {
                return 'Put into the correct form'
            }
            case 'WordsFromBox': {
                return 'WordsFromBox';
            }
            case 'CorrectAlternative': {
                return 'Choose correct alternative'
            }
            case 'CorrectOrder': {
                return 'CorrectOrder'
            }
            case 'DivisionBySlash': {
                return 'Choose correct alternative';
            }
            case 'CorrectOption': {
                return 'Choose correct option';
            }
            default: {
                return taskType;
            }
        }
    }

    public get taskTypeMap() {
        return [
            { key: "SimpleBrackets", value: 'Put into the correct form' },
            { key: "WordsFromBox", value: 'WordsFromBox' },
            { key: "CorrectAlternative", value: 'Choose correct alternative' },
            { key: "CorrectOrder", value: 'CorrectOrder' },
            { key: "DivisionBySlash", value: 'Choose correct alternative' },
            { key: "CorrectOption", value: 'Choose correct option' },
        ]
    }
}