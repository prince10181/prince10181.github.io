# CLAUDE.md — Prince Garg portfolio (GitHub Pages user site)

Purpose: a job-hunting portfolio. Tone: light, minimal, premium, credible — an experienced
enterprise consultant who also builds practical solutions. Not a student template.

## Hard rules (never break)
1. **Never invent** metrics, titles, dates, client names, contact details, URLs or outcomes.
   Use `[BRACKET_PLACEHOLDERS]` and record every one in `PLACEHOLDERS.md`.
2. **No secrets** in the repo or client-side code. Static site only; no API keys, ever.
   If a backend is ever needed: free tier, keys server-side, and ask the user first.
3. **Zero cost.** Ask before adding any paid service.
4. **Do not push, publish or enable GitHub Pages without asking.** Also do not commit
   until the user has previewed locally and said yes.
5. **No client names**, proprietary implementation details or customer data (NDA).

## Positioning
- Identity: *Decisioning & BFSI Technology Consultant | Business Rules | Enterprise
  Integrations | Applied AI.* AI is an added capability, not the whole identity.
- NOT: presales-only, sales, credit-risk manager, ML engineer/researcher, generic developer,
  or "beginner learning AI".
- Employer: FICO (user approved naming). Current role: Solution Consultant — exact title
  unconfirmed, keep `[JOB_TITLE]`.
- Experience: at FICO since 19 March 2019; ~1.5 years internship, then full-time (~6 yrs).
  Show "since 2019" + timeline; do not inflate. User may choose "7+ years" wording.

## Claims to avoid
No ML/data-scientist claims; no statistical credit-risk models; no deep Python claims;
no production-grade GenAI deployment; the AI project is a personal prototype, not
enterprise-ready; no Product Manager/Owner experience; don't say user authored Jira stories
(they worked on them); no enterprise cloud architecture claims; don't present all
banking/insurance/lending exposure as equally deep.
Unconfirmed numbers (e.g. "15–20 scorecards", BNPL/insurance depth) stay out until confirmed.

## Skills tiers (use this wording)
- Professional: Blaze Advisor, Decision Management Platform, Decision Modeler, business rules,
  BOM/mappings, REST integration, scorecard integration, SQL, requirements/discovery, demos, POCs.
- Working knowledge: Java (integration-level), Jira, Tableau (exposure).
- Building now: Python, Claude API, prompting, structured outputs, human-in-the-loop,
  RAG/embeddings (Voyage AI), LangChain, LangGraph.

## Projects (curated — do not list everything)
- **Featured:** AI-Enabled BFSI Business Rules Generation Platform. Streamlit app live on
  Streamlit Community Cloud; Claude API + Voyage AI embeddings/RAG; human-in-the-loop review.
  Personal prototype. Input: predefined structured policy format only (no arbitrary
  unstructured docs yet). **FastAPI backend is NOT built — say "Planned".**
- **Planned** (label clearly): AI decision engine testing & governance platform;
  AI-powered lending underwriting copilot.

## Technical decisions
- Static HTML/CSS/vanilla JS. No framework, no build step (free, nothing to leak, fast).
- Single page + one project case-study page. Self-host fonts (no Google Fonts requests).
- Contact: `mailto:` + LinkedIn; no form service.
- Accessibility: contrast, keyboard nav, reduced-motion. Mobile-first.
- Before publishing, no `[PLACEHOLDER]` text may remain on the live page.

## Workflow
Small steps → local preview (`python3 -m http.server 8000`) → user approves → commit.
Explain key decisions briefly. Final deliverable: placeholder checklist + publish steps.
Commits end with the attribution line required by the session reminder.

## Repo notes
Remote: github.com/prince10181/github.io. For a root Pages URL the repo must be named
`<username>.github.io` — confirm the username matches before publishing.
