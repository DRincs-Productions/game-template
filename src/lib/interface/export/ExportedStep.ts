import { LabelTagType } from "../../types/LabelTagType"
import { IHistoryLabelEvent } from "../IHistoryLabelEvent"
import { IHistoryStep } from "../IHistoryStep"

/**
 * Interface exported step data
 */
export interface ExportedStep {
    stepsHistory: (IHistoryLabelEvent | IHistoryStep)[]
    openedLabels: {
        label: LabelTagType,
        currentStepIndex: number,
        currentStepIsMenu: boolean,
    }[]
}
