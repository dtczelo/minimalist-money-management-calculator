export interface Strategy {
    initialBalance: number;
    riskPerPos: number; // In percent
}

export interface Volume {
    lot: number;
    forcedToMinimum: boolean; // Position volume forced to minimum
}

export interface TradeInfo {
    stopDistance: number;
}

export interface Market {
    unitPerLotStandard: number; // Value of a standart contract (≃ 375000 for DAX40) / DAX40 current price (15000) => 25 (lot in euros per point)
    lotStep: 0.1 | 0.01; // Broker minimum contract subdivision, minilot or microlot
}