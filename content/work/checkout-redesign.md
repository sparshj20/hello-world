---
title: "Checkout Redesign on Blinkit"
summary: "Simplified a 6-step checkout to 2 taps, lifting conversion by 11%."
role: "Product Manager"
year: 2022
cover: "/work/checkout-redesign/cover.jpg"
order: 2
draft: false
---

## Problem

Blinkit's checkout had accumulated 6 steps over 3 years — address confirmation, delivery slot, coupon, wallet, payment method, and final confirmation. Each step had been added for a reason, but together they created a funnel that dropped 34% of users before payment.

![Checkout funnel drop-off — 34% abandoned before payment](/work/checkout-redesign/funnel.svg)

## Insight

Most drop-off happened on step 3 (coupon) and step 5 (payment method). Users weren't abandoning because they changed their minds — they were abandoning because the process felt longer than the actual delivery would take.

For a 10-minute grocery app, a 2-minute checkout is a broken promise. The [Fogg Behavior Model](https://behaviormodel.org/) frames this well: motivation was high (people wanted their groceries), but we were killing ability with unnecessary steps.

## What We Built

We collapsed the 6 steps into a single summary screen with smart defaults:

- **Saved address** pre-selected (editable inline)
- **Best available coupon** auto-applied with a "remove" option
- **Last-used payment method** pre-selected
- Slot selection moved to post-order (we notify when the rider is assigned)

The only required action: confirm. Everything else defaults to the best option.

![Redesigned checkout — single screen with smart defaults](/work/checkout-redesign/after.svg)

## Results

- **+11%** checkout conversion (primary metric)
- **−58%** median time-to-order (from 2m 10s to 54s)
- **+4 pts** CSAT for the checkout flow
- Coupon usage actually increased by 9% — surfacing it automatically worked better than requiring users to seek it out

## What I Learned

Defaults are product decisions. Every field we removed was a decision we made on the user's behalf — and users trusted us. The hardest part wasn't the design; it was convincing stakeholders that removing explicit confirmation steps wouldn't increase errors. It didn't. Error rates stayed flat. A good read on this: [The Paradox of Choice](https://www.goodreads.com/book/show/10639.The_Paradox_of_Choice) by Barry Schwartz.
