import { expect, test } from 'bun:test';
import { 
    strategySamples, 
    DAX40, 
    CAC40,
    EURUSD, 
    testCasesDAXconservativeSmall,
    testCasesDAXaggressiveSmall,
    testCasesDAXconservativeMedium,
    testCasesDAXaggressiveMedium,
    testCasesDAXconservativeHigh,
    testCasesDAXaggressiveHigh,
    testCasesCAC40conservativeSmall
} from './cases';

import { Risk } from '../src/index';

// STRATEGIES

const conservativeSmall = new Risk(strategySamples.conservativeSmall);
const aggressiveSmall = new Risk(strategySamples.aggressiveSmall);
const conservativeMedium = new Risk(strategySamples.conservativeMedium);
const aggressiveMedium = new Risk(strategySamples.aggressiveMedium);
const conservativeHigh = new Risk(strategySamples.conservativeHigh);
const aggressiveHigh = new Risk(strategySamples.aggressiveHigh);

// DAX40

test.each(testCasesDAXconservativeSmall)("Conservative small strategy on DAX40, stop: %i", (stop, volume, forced) => {
    expect(conservativeSmall.volume(DAX40, { stopDistance: stop as number })).toEqual({ lot: volume as number, forcedToMinimum: forced as boolean });
});

test.each(testCasesDAXaggressiveSmall)("Aggressive small strategy on DAX40, stop: %i", (stop, volume, forced) => {
    expect(aggressiveSmall.volume(DAX40, { stopDistance: stop as number })).toEqual({ lot: volume as number, forcedToMinimum: forced as boolean });
});

test.each(testCasesDAXconservativeMedium)("Conservative medium strategy on DAX40, stop: %i", (stop, volume, forced) => {
    expect(conservativeMedium.volume(DAX40, { stopDistance: stop as number })).toEqual({ lot: volume as number, forcedToMinimum: forced as boolean });
});

test.each(testCasesDAXaggressiveMedium)("Aggressive medium strategy on DAX40, stop: %i", (stop, volume, forced) => {
    expect(aggressiveMedium.volume(DAX40, { stopDistance: stop as number })).toEqual({ lot: volume as number, forcedToMinimum: forced as boolean });
});

test.each(testCasesDAXconservativeHigh)("Conservative high strategy on DAX40, stop: %i", (stop, volume, forced) => {
    expect(conservativeHigh.volume(DAX40, { stopDistance: stop as number })).toEqual({ lot: volume as number, forcedToMinimum: forced as boolean });
});

test.each(testCasesDAXaggressiveHigh)("Aggressive high strategy on DAX40, stop: %i", (stop, volume, forced) => {
    expect(aggressiveHigh.volume(DAX40, { stopDistance: stop as number })).toEqual({ lot: volume as number, forcedToMinimum: forced as boolean });
});

// CAC40

test.each(testCasesCAC40conservativeSmall)("Aggressive high strategy on CAC40, stop: %i", (stop, volume, forced) => {
    expect(conservativeSmall.volume(CAC40, { stopDistance: stop as number })).toEqual({ lot: volume as number, forcedToMinimum: forced as boolean });
});

// EDGES CASES ON DAX40

test('Volume should throw an error for invalid stopDistance', () => {
    expect(conservativeSmall.volume(DAX40, { stopDistance: 0 })).toBeInstanceOf(Error);
    expect(conservativeSmall.volume(DAX40, { stopDistance: -1 })).toBeInstanceOf(Error);
    expect(conservativeSmall.volume(DAX40, { stopDistance: 0.1 })).toBeInstanceOf(Error);
    expect(conservativeSmall.volume(DAX40, { stopDistance: 0.666 })).toBeInstanceOf(Error);
});

