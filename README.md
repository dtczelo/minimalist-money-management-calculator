# Minimalist money management calculator
 
Minimalist utility for index(DAX40, CAC40, etc..) position calculation with [bunjs](https://bun.sh)



## Background

Bun is the lastest and arguably the fastest runtime environment for javascript, similar to node and deno. Bun uses JSC (JavaScriptCore) engine unlike node and 
deno which is the part of the reason why it's faster than node and deno.

Bun is written in a low-level manual memory management programming language called [ZIG](https://ziglang.org).

Bun supports ~90% of the native nodejs APIs including `fs`, `path` etc. and also distribute it's packages using [npm](https://npmjs.com) hence both `yarn` and `npm` are supported in bun.

## DevNote:
Although this version is actively still under development so also is [bunjs](https://bun.sh) and might contain some bugs, hence, not ideal for a production app. 

## Disclaimer
This software is for educational purposes only. Do not risk money which you are afraid to lose. USE THE SOFTWARE AT YOUR OWN RISK. THE AUTHORS AND ALL AFFILIATES ASSUME NO RESPONSIBILITY FOR YOUR TRADING RESULTS.

Always start by running your trading bot in Dry-run and do not engage money before you understand how it works and what profit/loss you should expect.

## Prerequisite
🐎 *Bun* - Bun needs to be installed locally on your development machine.


## Installation

💻  To install bun head over to the [offical website](https://bun.sh) and follow the installation instructions.

🧑‍💻  To install run 

```bash
$ bun add minimalist-money-management-calculator
```
#### _NOTE_
_Although this library is distributed under npm, this library is only available for bun, node and deno are not currently supported._

## Usage

Importing into the application

```typescript
import { Risk } from "minimalist-money-management-calculator";

// initializing strategy 
const strategy = new Risk({
    initialBalance: 1000,
    riskPerPos: 1
})

// get trading volume for one trade
const tradeVolume = strategy.volume({ unitPerLotStandard: 25, lotStep: 0.01 }, { stopDistance: 5 })

```

## Contribute
PRs for features, enhancements and bug fixes are welcomed. ✨ You can also look at the [todo](todo.md) file for feature contributions.

## License
This software is distributed under the [MIT](LICENSE.md) license.

