# Marketing site brief (create-prd + product-strategy)

## Problem
Engineering students in India freeze in their first proctored online hiring test, and colleges can't see who is ready before hiring season. The site must turn that worry into a free signup (students) or a demo booking (colleges).

## Goals and metrics
| Goal | Primary metric | Guardrail |
|---|---|---|
| Students start practising | Visitor → free signup click (`Start practising free`) | LCP < 2.5 s on 4G mobile |
| Colleges talk to sales | `/colleges` → demo form submit | Form completion > 40% of starts |
| Contest drives return visits | Contest page → Register click | No CLS from countdown |

## Audiences (in priority order)
1. Final- and pre-final-year engineering students, mostly on mobile, preparing for mass recruiters (Infosys, Wipro, Capgemini…).
2. Placement officers (TPOs) and HODs comparing assessment platforms.

## What each page must answer in 5 seconds
What is it, who is it for, what does it cost (free to start), what happens when I click.

## Principles
- One primary action per screen; students → app, colleges → demo.
- Show the real product (practice question, proctored window, CTC Score), never stock art.
- Proof must be real before launch (`content/dummy.ts` lists everything that is not).
- Motion explains, never decorates; everything works without JS and with reduced motion.

## Out of scope for this draft
Real form backend, analytics vendor, real photos (see README "Known limits").
