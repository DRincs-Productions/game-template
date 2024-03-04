import { UPDATE_PRIORITY } from "pixi.js";
import { TickerArgsType } from "../classes/ticker/TickerBase";
import { TickerTagType } from "../types/TickerTagType";

/**
 * IClassWithArgsHistory is a class that contains the name of a class and the arguments that were used to create it.
 */
export interface IClassWithArgsHistory<TArgs extends TickerArgsType> {
    fn: (dt: number) => void | undefined,
    className: TickerTagType,
    args: TArgs
    childTags: string[],
    priority?: UPDATE_PRIORITY,
}