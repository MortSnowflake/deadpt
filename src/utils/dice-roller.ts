import { RollType } from "../types/roll";

export const d = (edges: number) => Math.floor(Math.random() * edges + 1);

export function rollWithParameter (rollType: RollType, edges: number = 4) {
    let firstRoll = d(edges);
    let secondRoll = d(edges);
    let finalResult;
    switch(rollType) {
        case RollType.normal: 
            finalResult = firstRoll;
            return [null, finalResult, RollType.normal];
        case RollType.advantage: 
            finalResult = Math.max(firstRoll, secondRoll);
            return [`(${firstRoll}, ${secondRoll}) = `, finalResult, RollType.advantage];
        case RollType.interference: 
            finalResult = Math.min(firstRoll, secondRoll);
            return [`(${firstRoll}, ${secondRoll}) = `, finalResult, RollType.interference];
    }
}
