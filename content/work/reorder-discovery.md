---
title: "Reorder Discovery on Blinkit"
summary: "Reduced reorder friction and increased repeat purchase rate by 6%."
role: "Lead PM"
year: 2024
cover: "/work/reorder-discovery/cover.jpg"
order: 1
draft: false
---

## Problem

Blinkit's repeat buyers were spending 40+ seconds finding items they'd previously ordered. The home screen showed [algorithmic recommendations](https://blinkit.com) that often missed the mark for habitual shoppers — surfacing trending items instead of the user's personal staples.

![Reorder surface before redesign — algorithmic feed with no reorder shortcut](/work/reorder-discovery/before.svg)

## Insight

Users who reorder within 7 days of their last order have 3× the LTV of one-time buyers. Yet the reorder path required 4 taps minimum — search → product page → add to cart → checkout. We were losing them to friction, not preference.

The insight came from a session recording review: users were typing their own previous order items into the search bar. The feature to help them already existed (order history), but it lived two taps deep in the profile section.

## What We Built

A dedicated reorder surface on the home screen: the last 3 orders, surfaced front-and-center, with one-tap re-add for each item. No search, no scroll.

We also added a "missed items" prompt — if something from a previous order was out of stock, we showed an alternative inline rather than silently dropping it.

![Reorder surface after redesign — last 3 orders front and center](/work/reorder-discovery/after.svg)

## Results

- **+6%** repeat purchase rate (primary metric)
- **−38%** time-to-checkout for returning users
- **+2.1 pts** NPS among users who saw the surface

## What I Learned

The best discovery is remembering, not recommending. For habitual purchases, getting out of the way and surfacing history beats any algorithm. Read more about this pattern in [Nielsen Norman Group's research on recognition vs. recall](https://www.nngroup.com/articles/recognition-and-recall/).
