# Stakeholder Decisions — Open Questions (v2.0)

Status: **Approved for Phase 1 development** with documented defaults. Replace placeholders when merchant confirms.

| # | Question | Phase 1 Decision | Config key |
|---|----------|------------------|------------|
| 1 | Daily production capacity | `confirmed on enquiry` (profile field empty) | `merchant.dailyCapacity` |
| 2 | Sampling / bulk lead times | `confirmed on enquiry` for 500/1000/5000 pcs | `merchant.leadTimes` |
| 3 | Primary enquiry channel | **WhatsApp** (fallback: email) | `channels.primary` |
| 4 | Size stock ownership | Merchant ops team, weekly sync | `inventory.owner` |
| 5 | Marketplace asset license | Approved for standalone use at 350px+ | `assets.marketplaceApproved` |
| 6 | Launch locale | **English only** (12 languages phase 2) | `locale.default` |

Response time published: **within one business day**.
