import { ThrowType } from "../types/throw";

export const d = (edges: number) => Math.floor(Math.random() * edges + 1);

export function rollWithParameter (rollType: ThrowType, edges: number = 4) {
    switch(rollType) {
        case ThrowType.normal: return d(edges);
        case ThrowType.advantage: return Math.max(d(edges), d(edges));
        case ThrowType.interference: return Math.min(d(edges), d(edges));
    }
}
