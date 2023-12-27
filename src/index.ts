import { Strategy, Market, TradeInfo, Volume } from './types';


export class Risk {
    private readonly CURRENCY_DECIMALS = 2;

    constructor(private readonly strategy: Strategy) {}

    /**
	 * Volume for one trade
     * @param market Market
     * @param tradeInfo TradeInfo 
     * @param floor boolean, default false, Volume are rounds to the neariest volume possible by your broker (Market.lotStep), pass true for the lowest
     * @returns Volume,
	 * @example
	 * 20 stop points,
	 * 1000E balance,
	 * 1% de risk,
	 * Minimum volume,
	 * 
	 * 1% of 1000 => 10$,
	 * 10/20 => 0.5$ per point,
	 * Value of a standart contract (≃ 375000 for DAX40) / DAX40 current price (15000) => 25 (lot in euros per point),
	 * 0.5 / 25 (lot in euros per point) => 0.02 lot
     */
    public volume(market: Market, tradeInfo: TradeInfo, floor: boolean = false): Volume | Error {
		
		if (!Number.isInteger(tradeInfo.stopDistance) || tradeInfo.stopDistance < 1) {
			return new Error('StopDistance has to be integrer, minimum 1 !');	
		}
		
		const riskMaxPerPos: number 		 = this.strategy.initialBalance * (this.strategy.riskPerPos / 100); // In euros
		const riskPerPoint: number 			 = riskMaxPerPos / tradeInfo.stopDistance; // In euros
		const currencyPerPipPerLot: number 	 = market.unitPerLotStandard; // In euros for one full contract
		const volumePerPipPerLotStep: number = currencyPerPipPerLot * market.lotStep;
		const posVolume: number 			 = riskPerPoint / currencyPerPipPerLot;

		if ((volumePerPipPerLotStep * (posVolume / market.lotStep)).toFixed(this.CURRENCY_DECIMALS) === riskPerPoint.toFixed(this.CURRENCY_DECIMALS)) {
			const forcedToMinimum = posVolume < market.lotStep;			
			const finalVol = floor ? parseFloat(Math.floor(posVolume).toFixed(this.CURRENCY_DECIMALS)) : parseFloat(posVolume.toFixed(this.CURRENCY_DECIMALS));
			
			if (posVolume < market.lotStep) {
				return {
					lot: market.lotStep,
                    forcedToMinimum: forcedToMinimum
                };
			}

			return {
                lot: finalVol,
                forcedToMinimum: forcedToMinimum
            };
		} else {
			return new Error('Something went wrong when try to calcul volume');
		}
    }

}