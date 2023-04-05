import { HintsInterface } from './../types/hintsInterface';
import { RollType } from "../types/roll";

export const d = (edges: number) => Math.floor(Math.random() * edges + 1);

function rollWithParameter (rollType: RollType, edges: number = 4): string[] {
    let firstRoll = d(edges);
    let secondRoll = d(edges);
    switch(rollType) {
        case RollType.normal: 
            return ['', firstRoll.toString(), RollType.normal];
        case RollType.advantage:
            return [
                `(${firstRoll}, ${secondRoll}) =`, 
                Math.max(firstRoll, secondRoll).toString(), 
                RollType.advantage
            ];
        case RollType.interference: 
            return [
                `(${firstRoll}, ${secondRoll}) =`, 
                Math.min(firstRoll, secondRoll).toString(), 
                RollType.interference
            ];
    }
}

const hints: HintsInterface = {
    failRus: "Провал!",
    partialRus: "Частичный успех",
    successRus: "Успех!",
    failEng: "Fail!",
    partialEng: "Partial success",
    successEng: "Success!"
}

export function rollWithHint (rollType: RollType) {
    let diceRoll: string[] = rollWithParameter(rollType);
    switch(diceRoll[1]) {
        case '1': return [...diceRoll, hints.failRus];
        case '2':
        case '3': return [...diceRoll, hints.partialRus];
        case '4': return [...diceRoll, hints.successRus];
        default: return []
    }          
}
