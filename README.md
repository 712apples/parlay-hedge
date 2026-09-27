# Parlay Hedge Calculator

Bet every leg of a parlay as a single, then place a smaller bet on the parlay itself. This calculator tells you how much to put on the parlay so that **if all but one leg hits, you still come out ahead**, and if every leg hits, the parlay pays out on top of your singles.

**[Open the app](https://YOUR-USERNAME.github.io/parlay-hedge/)**

## Example

Three legs at -110, $100 on each single:

| Outcome | Result |
| --- | --- |
| Recommended parlay stake | **$81** |
| All 3 legs hit | +$755.32 |
| 2 of 3 hit (any one leg misses) | +$0.82 |
| 1 of 3 hit | -$190.09 |
| 0 of 3 hit | -$381.00 |

The two winning singles cover both the losing single and the parlay stake, so a one-leg miss still finishes in the green.

## Features

- **American or decimal odds**, with a toggle that converts what you've already entered
- **2 to 12 legs**, with one stake for every single or a different stake per leg
- **Parlay boosts:** enter a profit boost % (with an optional cap on extra winnings) or the sportsbook's quoted parlay odds
- **Minimum profit:** guarantee at least a set amount when one leg misses, not just break-even
- **Stake rounding** to $0.01, $0.10, $1, or $5
- **Your actual stake:** enter the amount you'll really bet (e.g. a boost's max bet) and see the results at that amount
- **Warnings** when no parlay amount can work, with suggestions for fixing the setup
- **Outcome tables:** each single-leg miss, results grouped by legs hit, and every win/loss combination

## Install on your phone

It's a web app, so there's nothing to download from an app store.

- **iPhone:** open the link in Safari, tap **Share**, then **Add to Home Screen**.
- **Android:** open the link in Chrome, tap the **⋮** menu, then **Install app**.

It gets its own home-screen icon, opens full-screen, and works offline.

## How the math works

For each leg *i* with decimal odds *dᵢ* and single stake *Sᵢ*, if leg *j* is the only miss, the singles net:

```
sum of Sᵢ × (dᵢ − 1) for every leg except j,  minus Sⱼ
```

The parlay loses its stake *P* in that case, so *P* has to be smaller than that amount for **every** possible missed leg. The calculator finds the worst case, subtracts your minimum profit, and rounds down.

The leg that limits the parlay is usually your **longest-odds** leg, because its single would have paid the most. Pairing a long shot with heavy favorites leaves the least room for a parlay.

## Notes

- Pushes and voided legs aren't modeled.
- This strategy changes how your risk is spread across outcomes; it doesn't change the expected value of each bet.
- For entertainment and planning purposes only. Please bet responsibly.
