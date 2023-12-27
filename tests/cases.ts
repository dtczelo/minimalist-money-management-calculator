import { Strategy, Market } from "../src/types";

export const strategySamples: {[key: string]: Strategy} = {
    conservativeSmall: {
        initialBalance: 1000,
        riskPerPos: 1
    },
    aggressiveSmall: {
        initialBalance: 1000,
        riskPerPos: 2
    },
    conservativeMedium: {
        initialBalance: 5000,
        riskPerPos: 1
    },
    aggressiveMedium: {
        initialBalance: 5000,
        riskPerPos: 2
    },
    conservativeHigh: {
        initialBalance: 10000,
        riskPerPos: 1
    },
    aggressiveHigh: {
        initialBalance: 10000,
        riskPerPos: 2
    }
}

export const DAX40: Market = { unitPerLotStandard: 25, lotStep: 0.01 }
export const CAC40: Market = { unitPerLotStandard: 10, lotStep: 0.01 }
export const EURUSD: Market = { unitPerLotStandard: 12.5, lotStep: 0.01 }

// DAX40

export const testCasesDAXconservativeSmall: Array<Array<number | boolean>> = [
    [5, 0.08, false], 
    [10, 0.04, false],
    [15, 0.03, false],
    [20, 0.02, false], 
    [40, 0.01, false], 
    [50, 0.01, true], 
    [75, 0.01, true], 
    [100, 0.01, true], 
    [150, 0.01, true], 
    [200, 0.01, true], 
    [300, 0.01, true]
];

export const testCasesDAXaggressiveSmall: Array<Array<number | boolean>> = [
    [5, 0.16, false], 
    [10, 0.08, false],
    [15, 0.05, false],
    [20, 0.04, false], 
    [40, 0.02, false], 
    [50, 0.02, false], 
    [75, 0.01, false], 
    [100, 0.01, true], 
    [150, 0.01, true], 
    [200, 0.01, true], 
    [300, 0.01, true]
];

export const testCasesDAXconservativeMedium: Array<Array<number | boolean>> = [
    [5, 0.4, false], 
    [10, 0.2, false],
    [15, 0.13, false],
    [20, 0.1, false], 
    [40, 0.05, false], 
    [50, 0.04, false], 
    [75, 0.03, false], 
    [100, 0.02, false], 
    [150, 0.01, false], 
    [200, 0.01, false], 
    [300, 0.01, true]
];

export const testCasesDAXaggressiveMedium: Array<Array<number | boolean>> = [
    [5, 0.8, false], 
    [10, 0.4, false],
    [15, 0.27, false],
    [20, 0.2, false], 
    [40, 0.1, false], 
    [50, 0.08, false], 
    [75, 0.05, false], 
    [100, 0.04, false], 
    [150, 0.03, false], 
    [200, 0.02, false], 
    [300, 0.01, false]
];

export const testCasesDAXconservativeHigh: Array<Array<number | boolean>> = [
    [5, 0.8, false], 
    [10, 0.4, false],
    [15, 0.27, false],
    [20, 0.2, false], 
    [40, 0.1, false], 
    [50, 0.08, false], 
    [75, 0.05, false], 
    [100, 0.04, false], 
    [150, 0.03, false], 
    [200, 0.02, false], 
    [300, 0.01, false]
];

export const testCasesDAXaggressiveHigh: Array<Array<number | boolean>> = [
    [5, 1.6, false], 
    [10, 0.8, false],
    [15, 0.53, false],
    [20, 0.4, false], 
    [40, 0.2, false], 
    [50, 0.16, false], 
    [75, 0.11, false], 
    [100, 0.08, false], 
    [150, 0.05, false], 
    [200, 0.04, false], 
    [300, 0.03, false]
];

// CAC40

export const testCasesCAC40conservativeSmall: Array<Array<number | boolean>> = [
    [5, 0.2, false], 
    [10, 0.1, false],
    [15, 0.07, false],
    [20, 0.05, false], 
    [40, 0.03, false], 
    [50, 0.02, false], 
    [75, 0.01, false], 
    [100, 0.01, false], 
    [150, 0.01, true], 
    [200, 0.01, true], 
    [300, 0.01, true]
];