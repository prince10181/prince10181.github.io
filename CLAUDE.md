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
- Identity (user decision, latest 2026-11-25): eyebrow, `<title>` and meta use
  "Decisioning & Business Rules Consultant | Applied AI for BFSI". Keep the h1 "I turn lending and
  insurance policy into decisions that run inside enterprise systems." Specialty line (hero + About):
  "Depth in unsecured lending and motor insurance." Earlier headline ideas are superseded.
  No "also open to" secondary-role line; vary the resume per track instead.
- Private, never on the site: compensation, notice period, company shortlist, application history.
- NOT: presales-only, sales, credit-risk manager, ML engineer/researcher, generic developer,
  or "beginner learning AI".
- Employer: FICO (user approved naming). Exact title (user confirmed): "Lead Engineer, Solution Engineering".
- Experience: at FICO since 19 March 2019; ~1.5 years internship, then full-time (~6 yrs).
  Show "since 2019" + timeline; do not inflate. User may choose "7+ years" wording.

## Claims to avoid
No ML/data-scientist claims; no statistical credit-risk models; no deep Python claims;
no production-grade GenAI deployment or agents; the AI project is a personal prototype; no accuracy
figures; no Product Manager/Owner experience; don't say user authored Jira stories; no enterprise cloud
architecture claims; no client names; no home address; phone number is allowed (user does not mind it in the resume), but keep it off the web page itself; never name specific
bureaus (say "credit bureau data").
Scorecards (user decision): "Implemented and operationalized 20+ credit scorecards for personal loans
and credit cards". NOTE: the user's resume still says "approximately 15-20 ... contributed to". The
resume must be updated to match before it is published, or the two will disagree.

## Skills (no level labels such as "working knowledge", "integration level", "POC contribution")
Four groups: Decisioning & Rules; Lending & Insurance (incl. IFRS 9 ECL, no qualifier); Integration &
Delivery; Applied AI. LangChain/LangGraph/Tableau are deliberately not listed (not used in shipped work).

## Projects (curated — do not list everything)
- **Featured: RuleLoom** — heading "RuleLoom: AI-assisted policy-to-rules workbench". Use ONLY this
  name (the old long "AI-Enabled BFSI Business Rules Generation Platform" name is retired).
  Streamlit app live on Streamlit Community Cloud (https://bfsi-workbench-prince.streamlit.app/,
  passcode-gated, passcode never published). Project repo is PRIVATE: no source-code link.
  Claude API + Voyage AI embeddings/RAG; human-in-the-loop review. Personal prototype on synthetic
  data. Input: predefined .txt policy format only. **FastAPI backend is NOT built: say "Planned".**
  Allowed facts (user-supplied): 124 automated tests; built with Claude Code and the code is reviewed.
- No "Planned project" cards (removed by user). One line only: "Next: testing and governance
  tooling for AI decision systems."
- "How I work with AI" section: AI drafts / named human approves / deterministic code decides;
  outputs validated by code; numbers in explanations checked; 124 tests; synthetic data, prototype.
  Add nothing beyond user-supplied facts.

## Technical decisions
- Static HTML/CSS/vanilla JS. No framework, no build step (free, nothing to leak, fast).
- Fonts self-hosted in assets/fonts (woff2) via css/fonts.css. No Google Fonts requests.
- Screenshots: WebP with PNG fallback, width/height set. OG image: assets/og-image.png (1200x630).
- Resume: assets/Prince_Garg_Resume.pdf. Until it exists the buttons show "coming soon"; script.js
  upgrades them to links automatically. Resume PDF must not name clients (Prince's own NDA rule) before it is published; it is held out of git until he confirms.
- SEO: canonical/OG/Twitter tags, robots.txt, sitemap.xml, base URL https://prince10181.github.io/.
- Accessibility: skip link, :focus-visible, --text-muted #55657A (5.4:1 on #F1F5F9).
- Pages excludes working notes via _config.yml (CLAUDE.md, PLACEHOLDERS.md, README.md, PORTFOLIO_STATUS.md).
- Single page + one project case-study page. 
- Contact: "Email me" button + copy button; address is assembled in script.js (not in page source,
  light scraper protection only). LinkedIn alongside. No form service.
- Accessibility: contrast, keyboard nav, reduced-motion. Mobile-first.
- Before publishing, no `[PLACEHOLDER]` text may remain on the live page.

## Workflow
Small steps → local preview (`python3 -m http.server 8000`) → user approves → commit.
Explain key decisions briefly. Final deliverable: placeholder checklist + publish steps.
Commits end with the attribution line required by the session reminder.

## Repo notes
Remote: github.com/prince10181/prince10181.github.io (renamed; root Pages URL works).
