import type { Club } from "./types";

type ClubEnrichment = Partial<
  Pick<
    Club,
    | "overview"
    | "selectivityContext"
    | "culture"
    | "bestFor"
    | "applicationProcess"
    | "alumniOutcomes"
    | "insiderTips"
    | "timeCommitment"
    | "transferFriendly"
    | "transferNotes"
    | "websiteUrl"
    | "logoUrl"
  >
>;

export const CLUB_ENRICHMENTS: Partial<Record<Club["id"], ClubEnrichment>> = {
  "voyager-consulting": {
    overview:
      "Founded in 2012, Voyager runs 4-5 client projects each semester (10-12 weeks) and has completed 80+ projects for clients including Apple, Paramount, and Cartier. The club has 48 members across 18 majors, and members share governance in project selection, recruiting, and internal decisions.",
    selectivityContext:
      "Among the more selective consulting clubs: resume, transcript, and short response, then a 30-minute first-round interview, invite-only social round, and final one-hour interview. Cohort size is small relative to applicants each cycle.",
    culture:
      "Socially active with retreats, dinners, and regular hangouts. Membership is intentionally cross-major and not Haas-only. Externally viewed as strong on placements and community, with an intensity level that applicants should assess through coffee chats.",
    bestFor: [
      "Students seeking ownership on Fortune 500 projects from early on",
      "Non-business majors wanting a consulting org that recruits campus-wide",
      "Students targeting consulting, tech, or PM paths",
    ],
    applicationProcess:
      "Resume, transcript, and short written response; first-round behavioral/technical interview; social round; final one-hour interview. Case workshop offered pre-deadline each semester.",
    alumniOutcomes:
      "Bain, Deloitte, Google, Apple, Salesforce, Meta RPM, Morgan Stanley, Goldman Sachs, JP Morgan, Walmart.",
    insiderTips: [
      "The pre-deadline case workshop is high leverage since Voyager cases are written in-house.",
      "Treat the social round as evaluative; fit and collaboration matter as much as polish.",
      "In your why-club response, reference the member-governed decision model directly.",
    ],
    timeCommitment: "10-12 hours per week during project semester.",
    transferFriendly: true,
    transferNotes:
      "Fall 2025 included a junior transfer admit; recruiting-season DEI panel explicitly welcomes transfers.",
    websiteUrl: "https://www.voyagerconsulting.org",
    logoUrl:
      "https://static.wixstatic.com/media/9278e7_29a79ff9b06d4cad90562465d2cc0501~mv2.png",
  },
  "berkeley-business-society": {
    overview:
      "Founded in 2005, BBS is a student-run strategy consulting group with ~50-60 active members across five concentrations. Teams run with consultants, PMs, and advisors on clients including Google, Microsoft, Slack, and UNDP.",
    selectivityContext:
      "Competitive process with three rounds: individual case, combined case + market sizing + behavioral, then final round. Coffee chats are encouraged though not required.",
    culture:
      "Community-oriented with concentration-based small teams and active alumni mentorship. Workload is meaningful but generally manageable with planning.",
    bestFor: [
      "Students wanting structured development plus client work",
      "Applicants who value concentration-specific pathways",
      "Non-business majors seeking a welcoming consulting environment",
    ],
    applicationProcess:
      "Resume and short answers; round 1 individual case, round 2 case + market sizing + behavioral, final round. Pre-deadline case workshop and Diversity Night prep sessions.",
    alumniOutcomes:
      "McKinsey, Bain, Goldman Sachs, Apple, and roles across consulting, banking, PM, and engineering.",
    insiderTips: [
      "Coffee chats are typically limited; choose someone relevant to your concentration interests.",
      "Use the concentration model in your why-club narrative instead of generic consulting language.",
      "Attend the workshop because BBS interviews use internally written cases.",
    ],
    timeCommitment: "8-12 hours per week during active project semester.",
    transferFriendly: true,
    transferNotes:
      "Club messaging indicates applicants from all backgrounds and majors are welcome.",
    websiteUrl: "http://www.berkeleybusinesssociety.com",
  },
  "berkeley-consulting": {
    overview:
      "Founded in 1996, Berkeley Consulting is the oldest campus consulting org, serving Fortune 500s, startups, nonprofits, and government clients. New members complete a bootcamp, then join staffed engagements with advisor support.",
    selectivityContext:
      "Very selective with large applicant volume. Application includes resume, transcript, and two essays, then case interviews. Cases are bespoke each cycle; pre-deadline workshop is the best prep.",
    culture:
      "Strong internal community ('BC Love') with heavy alumni engagement and coaching sessions. External perception includes prestige-consciousness, while members describe collaborative internal teams.",
    bestFor: [
      "Students targeting top consulting pipelines",
      "Applicants who want a long-established brand and alumni network",
      "Non-business majors seeking broad problem-solving and career optionality",
    ],
    applicationProcess:
      "Resume, transcript, and two essays (company-change and personal passion prompts), followed by BC-format case interviews.",
    alumniOutcomes:
      "McKinsey, Bain, Goldman Sachs, 2 Sigma, JP Morgan, Morgan Stanley, Google, and top graduate programs.",
    insiderTips: [
      "The passion essay is weighted heavily; authenticity usually beats polished generic answers.",
      "For the company essay, avoid overused companies unless your analysis is truly distinctive.",
      "Workshop attendance materially helps because interview cases are internally authored.",
    ],
    timeCommitment: "10-15 hours per week during project semester.",
    transferFriendly: null,
    websiteUrl: "https://bc.studentorg.berkeley.edu",
  },
  "net-impact-berkeley": {
    overview:
      "Net Impact Berkeley is a social-impact consulting org serving nonprofits, social enterprises, and ESG-minded clients across sustainability, education, and community-focused work.",
    selectivityContext:
      "Moderately selective relative to top consulting clubs, with resume + short responses and behavioral interviews for selected applicants.",
    culture:
      "Warm, mission-driven, and mentorship-oriented ('big-little' dynamic), with a work-hard/play-hard cadence and broad cross-club social overlap.",
    bestFor: [
      "Students seeking impact-oriented consulting work",
      "Applicants exploring nonprofit strategy or ESG pathways",
      "Students building first-cycle consulting experience",
    ],
    applicationProcess:
      "Resume and written application; behavioral interview rounds for selected candidates in fall and spring cycles.",
    alumniOutcomes:
      "Consulting, nonprofit management, law, public-sector, and tech roles (including CVP Palo Alto).",
    insiderTips: [
      "Tie your application to recent client work, not generic impact language.",
      "Mission fit matters; the culture makes performative interest obvious.",
      "Common pathway: Net Impact experience first, then re-apply to more selective consulting clubs.",
    ],
    timeCommitment: "6-10 hours per week during project semester.",
    transferFriendly: true,
    websiteUrl: "https://nib.berkeley.edu",
  },
  "cmg-strategy-consulting": {
    overview:
      "CMG runs three client projects per semester with PMs, analysts, senior advisors, and MBA advisors. Work is research-heavy and quantitatively rigorous across tech, consumer, and strategy clients.",
    selectivityContext:
      "Moderately to highly selective with resume and interview rounds; analytical depth and curiosity are heavily weighted.",
    culture:
      "Ambitious but supportive, emphasizing rigorous analysis over presentation polish alone.",
    bestFor: [
      "Students seeking data-driven consulting experience",
      "Applicants who prefer research-heavy project methodology",
      "Students interested in tech/consumer strategy work",
    ],
    applicationProcess:
      "Resume and application, then interviews for selected candidates each semester.",
    alumniOutcomes:
      "Consulting, finance, tech, and product management roles across major firms.",
    insiderTips: [
      "Prepare for interpretation and quant reasoning, not only framework recitation.",
      "Advisor staffing (senior + MBA) can be a meaningful mentorship advantage.",
      "Reference concrete recent project examples to show specific fit.",
    ],
    timeCommitment: "8-12 hours per week during project semester.",
    transferFriendly: null,
    websiteUrl: "https://www.cmgstrategyconsulting.com",
  },
  "the-berkeley-group": {
    overview:
      "The Berkeley Group is a pro-bono nonprofit strategy organization delivering consulting work for mission-driven clients in social impact and public-sector-adjacent contexts.",
    selectivityContext:
      "Highly selective for its tier, with applicant quality and fit expectations that support strong career outcomes.",
    culture:
      "Driven but community-oriented, with active alumni participation and mission-centered membership.",
    bestFor: [
      "Students interested in social-impact consulting",
      "Applicants considering public-sector/nonprofit strategy careers",
      "Students seeking consulting rigor without corporate-only client focus",
    ],
    applicationProcess:
      "Resume + written application with interviews for selected candidates each cycle.",
    alumniOutcomes: "Consulting, finance, nonprofit, public sector, and tech roles.",
    insiderTips: [
      "Mission fit is evaluated substantively, not as surface-level branding.",
      "Career outcomes can exceed assumptions about nonprofit-focused clubs.",
      "Particularly strong fit for policy, health, and education-interested applicants.",
    ],
    timeCommitment: "8-10 hours per week during project semester.",
    transferFriendly: null,
  },
  "valley-consulting-group": {
    overview:
      "VCG is a tech-focused consulting org serving Silicon Valley clients on growth, GTM, product, data, and strategy engagements.",
    selectivityContext:
      "Moderately to highly selective, with emphasis on demonstrated interest in the technology industry and tech-strategy problem solving.",
    culture:
      "Tech-forward and personable, with members drawn to business + technology intersections and recurring client-facing exposure.",
    bestFor: [
      "Students targeting tech strategy and product-adjacent roles",
      "Applicants wanting tech-only client exposure",
      "Students exploring consulting paths outside traditional corporate sectors",
    ],
    applicationProcess:
      "Resume + optional cover letter; recruiting opens each semester with set deadlines and interview rounds.",
    alumniOutcomes:
      "Tech strategy, product strategy, business development, and consulting roles at tech firms.",
    insiderTips: [
      "Show explicit tech-industry interest; generic consulting motivation is weaker here.",
      "The optional cover letter is useful and often worth submitting.",
      "Research recent engagements so your coffee chats and interviews are concrete.",
    ],
    timeCommitment: "8-12 hours per week during project semester.",
    transferFriendly: true,
    transferNotes:
      "URM coffee chat slots and explicit encouragement for underrepresented applicants are highlighted in recruiting materials.",
    websiteUrl: "https://vcg.studentorg.berkeley.edu",
  },
  "180-degrees-consulting": {
    overview:
      "180 Degrees Consulting Berkeley is part of the global 180DC network and serves nonprofits/social enterprises with impact-focused strategy projects.",
    selectivityContext:
      "Moderately selective and generally more accessible than top-tier consulting clubs while maintaining quality screens.",
    culture:
      "Warm, mentorship-heavy, and social, with strong big-little support and consistent community events.",
    bestFor: [
      "Students interested in social-impact consulting",
      "Applicants from nontraditional majors seeking consulting entry",
      "Students who value mentorship and collaborative culture",
    ],
    applicationProcess:
      "Written application + resume, followed by interviews for selected applicants each semester.",
    alumniOutcomes: "Consulting, law, nonprofit leadership, public sector, and tech roles.",
    insiderTips: [
      "Big-little mentorship is core to the experience and often extends beyond one semester.",
      "Global chapter network can expand post-grad opportunities outside Berkeley.",
      "Strong fit for humanities/public policy/pre-law students developing consulting skills.",
    ],
    timeCommitment: "6-10 hours per week during project semester.",
    transferFriendly: true,
    websiteUrl: "https://180dc.org/branches/uc-berkeley",
  },
  "aba-consulting": {
    overview:
      "Berkeley ABA is a large undergraduate business organization with a selective consulting arm that offers structured training and client project work.",
    selectivityContext:
      "Consulting track is highly selective while broader organization membership is more accessible.",
    culture:
      "Large-community ecosystem with consulting as a tighter subset, creating both broad social reach and focused project teams.",
    bestFor: [
      "Students wanting consulting training plus a larger org network",
      "Applicants interested in multiple engagement tracks",
      "Students who prefer optionality beyond consulting-only programming",
    ],
    applicationProcess:
      "Resume + written application with multiple rounds for consulting-track selection.",
    alumniOutcomes: "Consulting, finance, tech, and general business roles.",
    insiderTips: [
      "Specify consulting-track intent explicitly; expectations differ from general membership.",
      "Large-org structure can broaden networking beyond project teams.",
      "Cross-membership overlap with fraternities and other business orgs is common.",
    ],
    timeCommitment: "8-12 hours per week for consulting-track members.",
    transferFriendly: null,
  },
  "venture-strategy-solutions": {
    overview:
      "Venture Strategy Solutions works with startup and growth-stage clients on GTM, growth, and business development strategy in high-ambiguity contexts.",
    selectivityContext:
      "Moderately selective, with emphasis on entrepreneurial thinking and comfort with ambiguity.",
    culture:
      "Entrepreneurial and fast-moving relative to traditional consulting clubs.",
    bestFor: [
      "Students interested in startups or VC-adjacent careers",
      "Applicants who prefer dynamic client environments",
      "Students exploring PM, strategy, or business development paths",
    ],
    applicationProcess:
      "Resume + written application followed by interviews for selected candidates.",
    alumniOutcomes: "Startups, VC, product management, business development, consulting.",
    insiderTips: [
      "Expect shifting scopes and fast iteration versus Fortune 500-style structure.",
      "Useful signal for entrepreneurship and VC-oriented applications.",
      "Alumni network skews toward startup/VC ecosystems.",
    ],
    timeCommitment: "8-12 hours per week during project semester.",
    transferFriendly: null,
  },
  diversatech: {
    overview:
      "DiversaTech is an interdisciplinary consulting org combining business strategy with technical perspectives for tech-forward and cross-sector clients.",
    selectivityContext:
      "Moderately selective; technical/quant exposure helps but is not strictly required.",
    culture:
      "Collaborative cross-major culture spanning CS, engineering, and business backgrounds.",
    bestFor: [
      "Students wanting technical-business bridge work",
      "CS/engineering majors exploring consulting",
      "Applicants targeting PM and tech strategy pathways",
    ],
    applicationProcess:
      "Resume + written application and interview rounds for selected candidates.",
    alumniOutcomes:
      "Tech consulting, product management, software engineering, and business development.",
    insiderTips: [
      "Technical background is treated as a core asset, not a side note.",
      "Project work often resembles PM-style tradeoff decisions.",
      "Major diversity materially changes team dynamics compared with Haas-heavy clubs.",
    ],
    timeCommitment: "8-12 hours per week during project semester.",
    transferFriendly: null,
  },
  "phoenix-consulting-group": {
    overview:
      "Phoenix Consulting Group focuses on healthcare consulting across strategy, operations, and market analysis with health-adjacent clients.",
    selectivityContext:
      "Moderately selective with stronger outcomes for applicants showing genuine healthcare-sector interest.",
    culture:
      "Mission-driven and interdisciplinary, drawing business, biology, and public health backgrounds.",
    bestFor: [
      "Students targeting healthcare consulting or biotech business roles",
      "Pre-med/public-health majors exploring business careers",
      "Applicants interested in healthcare industry strategy work",
    ],
    applicationProcess: "Resume + written application with interview rounds for selected candidates.",
    alumniOutcomes: "Healthcare consulting, biotech, public health, and general consulting roles.",
    insiderTips: [
      "Health-sector familiarity from coursework can be a differentiator.",
      "Domain-specific client exposure is a key advantage vs generalist clubs.",
      "Useful pathway for health-focused consulting practice recruiting.",
    ],
    timeCommitment: "6-10 hours per week during project semester.",
    transferFriendly: null,
  },
  "next-gen-consulting": {
    overview:
      "Next Gen Consulting is a generalist strategy club that combines client work with structured member-development programming.",
    selectivityContext:
      "Moderately selective and open to applicants across majors and class years.",
    culture:
      "Community-oriented with deliberate emphasis on growth and training alongside deliverables.",
    bestFor: [
      "Students seeking structured consulting entry points",
      "Applicants prioritizing skill-building support",
      "Early-stage consultants wanting practical reps before top-tier cycles",
    ],
    applicationProcess:
      "Resume + written application with interviews for selected candidates.",
    alumniOutcomes: "Consulting, business, finance, and tech roles.",
    insiderTips: [
      "Training programs are a meaningful part of the value proposition, not just side programming.",
      "Good bridge club before re-applying to more selective organizations.",
      "Project variety can change notably semester to semester.",
    ],
    timeCommitment: "8-10 hours per week during project semester.",
    transferFriendly: null,
  },
  "healthcare-consulting-group": {
    overview:
      "Healthcare Consulting Group provides strategy and operations consulting for healthcare-focused clients and organizations.",
    selectivityContext:
      "Moderately selective with clear preference for healthcare interest and domain familiarity.",
    culture:
      "Collaborative and purpose-driven around healthcare application of consulting tools.",
    bestFor: [
      "Students targeting healthcare consulting and biotech pathways",
      "Pre-med/health students interested in management-side careers",
      "Applicants motivated by healthcare industry problem solving",
    ],
    applicationProcess:
      "Resume + written application with interviews for selected candidates.",
    alumniOutcomes:
      "Healthcare consulting, biotech, hospital systems, and health-adjacent business roles.",
    insiderTips: [
      "Frame health-related coursework or work explicitly in your fit story.",
      "Sector-specific client exposure is a practical edge vs generalist orgs.",
      "Strong prep base for healthcare practices at major consulting firms.",
    ],
    timeCommitment: "6-10 hours per week during project semester.",
    transferFriendly: null,
  },
  "entrepreneurs-at-berkeley": {
    overview:
      "Entrepreneurs at Berkeley is a large entrepreneurship community with consulting-style sub-teams, startup events, and ecosystem programming.",
    selectivityContext:
      "General membership is relatively open, while consulting and selective sub-teams have separate and more competitive processes.",
    culture:
      "High-energy startup-oriented culture at scale, with smaller sub-communities creating depth.",
    bestFor: [
      "Students wanting entrepreneurship community + structured sub-team work",
      "Applicants exploring startup and VC-adjacent ecosystems",
      "Students who prefer flexible involvement across tracks",
    ],
    applicationProcess:
      "Varies by sub-team; selective consulting tracks recruit separately from general community participation.",
    alumniOutcomes: "Startups, VC, consulting, tech, and business development roles.",
    insiderTips: [
      "Be intentional about specific sub-team targets; experience quality varies by track.",
      "Event programming can be valuable even before project placement.",
      "Consulting-track applications are separate and should be framed accordingly.",
    ],
    timeCommitment: "Varies by team and involvement level.",
    transferFriendly: true,
  },
  "business-careers-in-entertainment": {
    overview:
      "BCEC is an entertainment/media-focused consulting club covering strategy, marketing, and business development work for creative-industry clients.",
    selectivityContext:
      "Moderately selective with stronger outcomes for applicants showing clear entertainment/media interest.",
    culture:
      "Industry-niche and creative-sector oriented, with a different social/professional dynamic from generalist clubs.",
    bestFor: [
      "Students targeting entertainment, media, or sports business careers",
      "Applicants interested in creative-industry strategy/marketing",
      "Students wanting niche-industry client exposure",
    ],
    applicationProcess:
      "Resume + written application with interview rounds for selected candidates.",
    alumniOutcomes: "Entertainment, media, sports-business, marketing, and business roles.",
    insiderTips: [
      "Sector motivation often matters more than generic consulting polish.",
      "Industry network access can be as valuable as project work itself.",
      "Strong option for consulting-style experience in entertainment-specific contexts.",
    ],
    timeCommitment: "6-10 hours per week during project semester.",
    transferFriendly: null,
  },
  "nova-consulting": {
    overview:
      "Nova Consulting is a newer strategy/tech-adjacent consulting org focused on member development and client outcomes.",
    selectivityContext:
      "Moderately selective, generally more accessible than longest-established clubs while maintaining quality thresholds.",
    culture:
      "Entrepreneurial and growth-stage; members can help shape process and identity.",
    bestFor: [
      "Students wanting consulting reps in a developing organization",
      "Applicants interested in early leadership opportunities",
      "Students comfortable with evolving project pipelines",
    ],
    applicationProcess:
      "Resume + written application and interview rounds for selected candidates.",
    alumniOutcomes: "Strategy, tech consulting, and general business roles.",
    insiderTips: [
      "Newer orgs can offer faster leadership growth and ownership.",
      "Project mix may shift more semester to semester.",
      "Club-building work is part of the value for many members.",
    ],
    timeCommitment: "8-10 hours per week during project semester.",
    transferFriendly: null,
  },
  "upsync-consulting": {
    overview:
      "Upsync is a tech-forward consulting club focused on strategy and digital/technology projects.",
    selectivityContext:
      "Moderately selective; quantitative and tech comfort is valued but not mandatory.",
    culture:
      "Business + technology oriented with stronger emphasis on data-supported recommendations.",
    bestFor: [
      "Students targeting tech strategy and product-adjacent roles",
      "Applicants wanting consulting exposure with technical context",
      "CS/engineering students exploring business pathways",
    ],
    applicationProcess:
      "Resume + written application followed by interview rounds.",
    alumniOutcomes: "Tech consulting, product strategy, and business development roles.",
    insiderTips: [
      "Analytical rigor is more important here than pure narrative polish.",
      "Strong fit for students wanting tech-industry exposure without coding-only roles.",
      "Projects often include heavier quant components than typical strategy clubs.",
    ],
    timeCommitment: "8-12 hours per week during project semester.",
    transferFriendly: null,
  },
  "global-research-and-consulting": {
    overview:
      "Global Research and Consulting serves nonprofit and smaller commercial clients with an approachable, skills-first consulting environment.",
    selectivityContext:
      "Lower selectivity than top-tier clubs, with stronger accessibility for early-cycle and non-business applicants.",
    culture:
      "Collaborative and less prestige-centered, with community-oriented member experience.",
    bestFor: [
      "Students exploring consulting in a lower-pressure setting",
      "Early-year applicants building foundational project experience",
      "Students from nontraditional backgrounds seeking accessible entry",
    ],
    applicationProcess: "Resume + written application with interview rounds.",
    alumniOutcomes: "General business, nonprofit, consulting, and public-sector roles.",
    insiderTips: [
      "Common stepping-stone club before reapplying to higher-selectivity orgs.",
      "Leadership opportunities can be more accessible due to org structure.",
      "Generally transfer-friendly reputation among peer organizations.",
    ],
    timeCommitment: "6-8 hours per week during project semester.",
    transferFriendly: true,
  },
  "phi-beta-lambda": {
    overview:
      "Phi Beta Lambda is the collegiate FBLA chapter focused on business education and state/national competitive events.",
    selectivityContext:
      "More open than project-heavy consulting clubs, with lower barrier to entry and emphasis on participation.",
    culture:
      "Competition-and-learning oriented with structured professional development programming.",
    bestFor: [
      "Students interested in business case competitions",
      "Applicants seeking skill-building without high project load",
      "Students early in business exploration",
    ],
    applicationProcess: "Application with resume and interest statement.",
    alumniOutcomes:
      "General business, finance, consulting, and entrepreneurship roles.",
    insiderTips: [
      "Case competition experience can be a strong early resume signal.",
      "National events broaden peer networks beyond Berkeley.",
      "Useful skills path without intensive consulting-club workload.",
    ],
    timeCommitment: "4-6 hours per week.",
    transferFriendly: true,
  },
  "consult-your-community": {
    overview:
      "Consult Your Community Berkeley provides pro-bono consulting to small businesses and underserved entrepreneurs in local communities.",
    selectivityContext:
      "Moderately selective with strong emphasis on mission alignment and service orientation.",
    culture:
      "Mission-driven and community-first, with lower prestige emphasis than corporate-focused consulting orgs.",
    bestFor: [
      "Students motivated by community impact + consulting skill-building",
      "Applicants interested in small business and local economic development",
      "Students seeking socially grounded client work",
    ],
    applicationProcess:
      "Resume + written application with interview rounds emphasizing mission fit.",
    alumniOutcomes:
      "Consulting, nonprofit, community development, and general business roles.",
    insiderTips: [
      "Client challenges are highly operational and immediate versus enterprise strategy style.",
      "National chapter network can support geographic mobility post-graduation.",
      "Mission motivation is weighted more heavily than prior consulting pedigree.",
    ],
    timeCommitment: "6-8 hours per week during project semester.",
    transferFriendly: true,
  },
  "berkeley-investment-group": {
    overview:
      "Founded in 1997, BIG is the oldest Berkeley investment club, managing a live long-short equity portfolio (~$250k AUM) with deep-value fundamentals. The intern program is the core training path into officer roles.",
    selectivityContext:
      "Highly selective but explicitly open to candidates without prior finance coursework; aptitude, rigor, and learning speed matter most.",
    culture:
      "Intellectually rigorous, performance-oriented, and alumni-engaged, with collaborative internal training despite high standards.",
    bestFor: [
      "Students serious about buy-side investing careers",
      "Applicants interested in live-fund decision making",
      "Quantitative students applying analytical skills to markets",
    ],
    applicationProcess:
      "Semester intern-program application and interview process; intern-to-officer progression based on demonstrated performance.",
    alumniOutcomes:
      "Citadel, Point72, Evercore, JP Morgan, Goldman Sachs, Morgan Stanley, McKinsey, Millennium, Warburg Pincus, and more.",
    insiderTips: [
      "No-prior-finance policy is real; evidence of analytical rigor is more important than vocabulary.",
      "Deep-value orientation rewards true business understanding over memorized ratio lists.",
      "Point72 sponsorship offers uncommon undergrad exposure to hedge-fund workflows.",
    ],
    timeCommitment: "10-15 hours/week as officer; lighter during initial intern phase.",
    transferFriendly: null,
    websiteUrl: "https://www.berkeleyinvestment.group",
    logoUrl:
      "https://images.squarespace-cdn.com/content/v1/5f396ef857f6923b8d5be40b/78382c3b-2d1e-4eef-8321-29a6c85ad2ff/big+logo+white+%281%29.png",
  },
  "capital-investments-at-berkeley": {
    overview:
      "Founded in 2012, CIB is Berkeley's multi-strategy hedge fund club (long-short equity, macro, and quant) with partner exposure across top quant and trading firms.",
    selectivityContext:
      "Highly selective with stronger preference for quantitative profiles and technical analytical readiness.",
    culture:
      "Data-driven and performance-focused, with strategy specialization options by member interest and skillset.",
    bestFor: [
      "Students targeting quant/trading or multi-strategy investing paths",
      "CS/math/stats/physics applicants exploring finance",
      "Candidates seeking highly technical finance training environments",
    ],
    applicationProcess:
      "Resume + interview process including technical and analytical evaluation.",
    alumniOutcomes:
      "Citadel, Jane Street, Jump, Optiver, DRW, Point72, BlackRock, Blackstone, Lazard, Bain, and related roles.",
    insiderTips: [
      "Quant prep (probability/stats/programming) has outsized value in interviews.",
      "Multi-strategy structure allows fit by method rather than one fixed investment style.",
      "Partner-firm ecosystem creates rare direct pipelines for undergraduates.",
    ],
    timeCommitment: "10-15 hours per week.",
    transferFriendly: null,
    websiteUrl: "https://www.cibberkeley.com",
  },
  "traders-at-berkeley": {
    overview:
      "Traders at Berkeley is the core quant-finance community on campus, running BTC and the Intro to Quant Finance DeCal as major recruiting/onramp channels.",
    selectivityContext:
      "Highly selective with strong quant background expectations. Most successful applicants are from CS/stats/math/physics tracks and have completed relevant DeCal prep.",
    culture:
      "Technically rigorous and recruiting-focused, with less social emphasis than consulting orgs.",
    bestFor: [
      "Students targeting quant trading/research roles",
      "Applicants with strong math/programming foundations",
      "Candidates pursuing trading-firm software paths",
    ],
    applicationProcess:
      "Recruiting flows primarily through DeCal participation and follow-on application/interview evaluation.",
    alumniOutcomes: "Citadel, Jane Street, Jump, Optiver, DRW, Two Sigma, and related quant roles.",
    insiderTips: [
      "DeCal participation is the typical and most effective entry path.",
      "BTC is both a competition and visibility channel with partner firms.",
      "Best fit for students already committed to quant rather than exploratory interest.",
    ],
    timeCommitment: "10-15 hours per week.",
    transferFriendly: null,
    websiteUrl: "https://traders.berkeley.edu",
  },
  "undergraduate-finance-association": {
    overview:
      "UFA/UMCG is a network-first finance/consulting organization centered on alumni access and interview-readiness for competitive recruiting tracks.",
    selectivityContext:
      "Perceived as highly exclusive with interview standards modeled after real finance/consulting hiring processes.",
    culture:
      "Alumni-connection heavy; value is concentrated in relationship depth and recruiting support.",
    bestFor: [
      "Students with clear banking/consulting targets",
      "Applicants prioritizing referral-network leverage",
      "Candidates already committed to interview-intensive recruiting pathways",
    ],
    applicationProcess:
      "Application and highly competitive interview process aligned to real hiring formats.",
    alumniOutcomes:
      "Bulge-bracket banking, top consulting firms, elite boutiques, and broad finance placements.",
    insiderTips: [
      "Primary value is alumni network quality, not project programming.",
      "Treat interviews like actual recruiting rounds from day one.",
      "Cross-membership with other top finance orgs is common and often strategic.",
    ],
    timeCommitment: "Moderate; network-event and prep focused rather than project-heavy.",
    transferFriendly: null,
  },
  "undergraduate-finance-club": {
    overview:
      "Undergraduate Finance Club has a fraternal-style community with strong emphasis on helping members through banking recruiting via training and peer support.",
    selectivityContext:
      "Moderately selective with a social/fraternal component and class-year targeting that often favors juniors.",
    culture:
      "Community-led and recruiting-oriented, with high peer support through interview cycles.",
    bestFor: [
      "Students targeting investment banking with team-based prep culture",
      "Applicants wanting finance training in a social-fraternal environment",
      "Juniors seeking focused recruiting support",
    ],
    applicationProcess:
      "Pledge-oriented process with interviews/social rounds; class-year preferences may vary by cycle.",
    alumniOutcomes: "Investment banking and broader finance roles.",
    insiderTips: [
      "Junior-focused recruiting can affect application timing strategy.",
      "Relationship-building quality can directly affect recruiting support value.",
      "Commonly paired with other finance/business memberships.",
    ],
    timeCommitment: "Moderate; social and recruiting-event focused.",
    transferFriendly: null,
  },
  "blackskies-investments": {
    overview:
      "Blackskies is a student-run investing org that has increasingly emphasized venture-oriented education and exploratory investing development.",
    selectivityContext:
      "Lower selectivity than top live-fund clubs, with stronger educational and exploratory orientation.",
    culture:
      "Learning-focused and less performance-intensive than highly competitive fund-management organizations.",
    bestFor: [
      "Students exploring VC and investing fundamentals",
      "Applicants wanting lower-barrier finance entry",
      "Students building base knowledge before more selective cycles",
    ],
    applicationProcess: "Accessible application with resume + interest statement.",
    alumniOutcomes: "VC-adjacent, tech investing, and general finance roles.",
    insiderTips: [
      "Most useful as exploration/training, not primary placement pipeline.",
      "Good pre-step before applying to higher-selectivity investing clubs.",
      "Semester-to-semester experience can vary with leadership structure.",
    ],
    timeCommitment: "4-6 hours per week.",
    transferFriendly: true,
  },
  "women-on-wall-street": {
    overview:
      "Women on Wall Street is a Haas-sponsored organization supporting women and non-binary students pursuing high-finance and consulting careers.",
    selectivityContext:
      "Identity/community-focused rather than high-admit-rate screening in the style of project clubs.",
    culture:
      "Supportive mentorship-driven environment focused on representation and recruiting support.",
    bestFor: [
      "Women/non-binary students targeting finance or consulting",
      "Applicants seeking mentorship in underrepresented career tracks",
      "Students wanting structured support alongside technical prep",
    ],
    applicationProcess:
      "Accessible application with resume + interest statement and programming participation.",
    alumniOutcomes: "Investment banking, consulting, and broader finance/corporate roles.",
    insiderTips: [
      "Haas sponsorship provides stable resources and institutional support.",
      "Alumni network can be especially valuable for navigating representation gaps.",
      "Programming often includes direct alumni access at major firms.",
    ],
    timeCommitment: "Moderate; event/programming focused.",
    transferFriendly: true,
  },
  "chinese-finance-club": {
    overview:
      "Chinese Finance Club is a community and network-focused organization supporting Chinese students pursuing finance and business careers.",
    selectivityContext:
      "Network and community oriented with lower admissions intensity than top placement-focused clubs.",
    culture:
      "Relationship-driven with strong culturally aligned peer/alumni support.",
    bestFor: [
      "Chinese students building finance networks and community",
      "Applicants seeking culturally aligned mentorship",
      "Students supplementing technical prep with network depth",
    ],
    applicationProcess: "Accessible application via resume + interest statement.",
    alumniOutcomes: "Investment banking, finance, and general business roles.",
    insiderTips: [
      "Main value is network/community rather than formal training curriculum.",
      "Alumni support can be strong for students from similar backgrounds.",
      "Works best as complement to a more technical/project-based org.",
    ],
    timeCommitment: "Moderate; events/networking focused.",
    transferFriendly: true,
  },
  "ascend-berkeley": {
    overview:
      "Ascend Berkeley is a Haas-sponsored Pan-Asian professional community focused on belonging, networking, and broad career development.",
    selectivityContext:
      "More open than most consulting/finance clubs, with emphasis on community participation over competitive screening.",
    culture:
      "Warm AAPI-centered community with professional development and mentorship programming.",
    bestFor: [
      "AAPI students seeking professional community + career support",
      "Applicants wanting broad multi-industry network access",
      "Students pairing community membership with specialized clubs",
    ],
    applicationProcess: "Accessible application with resume + interest statement.",
    alumniOutcomes: "Consulting, finance, tech, and general business placements.",
    insiderTips: [
      "Best used as a community/network layer alongside technical clubs.",
      "Haas sponsorship improves event quality and continuity.",
      "Long-term AAPI professional network value extends beyond undergrad recruiting.",
    ],
    timeCommitment: "Moderate; event and programming based.",
    transferFriendly: true,
    websiteUrl: "https://ascendleadership.org",
  },
  "scholars-of-finance": {
    overview:
      "Scholars of Finance is a national chapter focused on finance education and research-oriented programming rather than live-fund management.",
    selectivityContext:
      "Lower selectivity than top investing funds and generally more accessible for exploratory learning.",
    culture:
      "Academic and research-oriented with lower pressure than performance-tracked fund clubs.",
    bestFor: [
      "Students building foundational finance literacy",
      "Applicants interested in research/analysis over trading execution",
      "Students preparing for later entry into higher-intensity finance clubs",
    ],
    applicationProcess: "Accessible resume + interest statement process.",
    alumniOutcomes: "Finance research, investment, and general finance roles.",
    insiderTips: [
      "Useful foundation before pursuing top fund-management clubs.",
      "Research orientation builds analytical writing and investment reasoning.",
      "Lower time demand allows parallel commitments.",
    ],
    timeCommitment: "4-6 hours per week.",
    transferFriendly: true,
  },
  "microfinance-at-berkeley": {
    overview:
      "Microfinance at Berkeley provides pro-bono support to underserved entrepreneurs and small businesses with focus on local economic empowerment.",
    selectivityContext:
      "Moderately open with stronger emphasis on mission fit than prior finance credentials.",
    culture:
      "Community-focused and impact-driven, with practical client needs and direct outcomes.",
    bestFor: [
      "Students interested in impact finance/community development",
      "Applicants motivated by mission-oriented consulting work",
      "Students exploring microfinance and small-business advisory",
    ],
    applicationProcess:
      "Resume + written application emphasizing commitment to mission.",
    alumniOutcomes: "Impact investing, nonprofit finance, community development, and business roles.",
    insiderTips: [
      "Client work is operational and immediate versus abstract strategy deliverables.",
      "Strong fit for students exploring community development finance.",
      "Mission alignment often outweighs technical finance background.",
    ],
    timeCommitment: "6-8 hours per week.",
    transferFriendly: true,
  },
  "haas-business-student-association": {
    overview:
      "HBSA is the undergraduate Haas student government organization managing community initiatives, sponsorship relationships, and student representation.",
    selectivityContext:
      "General membership is open to Haas students; leadership/committee roles are meaningfully more competitive.",
    culture:
      "Institutionally connected and community-facing, with direct interaction with Haas administration and partners.",
    bestFor: [
      "Students interested in campus leadership/governance",
      "Applicants seeking broad Haas community impact",
      "Students wanting institutional relationship-building experience",
    ],
    applicationProcess:
      "Open general membership; separate competitive applications for leadership/committee positions.",
    alumniOutcomes: "Consulting, finance, and broad leadership/business pathways.",
    insiderTips: [
      "Most value comes from leadership depth, not passive membership.",
      "Administrative visibility can be meaningful for leadership trajectories.",
      "Often best paired with specialized professional clubs for skill depth.",
    ],
    timeCommitment:
      "Varies by role; light for general members and substantial for active leadership.",
    transferFriendly: true,
  },
  "blockchain-at-berkeley": {
    overview:
      "Founded in 2016, Blockchain at Berkeley is a globally recognized org across consulting, education, research, and design. It is known for enterprise projects, major educational content, and a strong startup/alumni ecosystem.",
    selectivityContext:
      "Highly selective with written application, blockchain fundamentals quiz, and department-specific interviews/technical assessments.",
    culture:
      "Technically rigorous and innovation-heavy with conference presence and startup-oriented execution culture.",
    bestFor: [
      "Students serious about blockchain/Web3 careers",
      "Applicants wanting technical + strategic crypto experience",
      "Candidates seeking globally recognized undergraduate blockchain credentials",
    ],
    applicationProcess:
      "General written application and fundamentals quiz, then department-specific interviews and possible technical assignments.",
    alumniOutcomes:
      "Crypto startup founders, blockchain engineering/consulting roles, crypto VC, and adjacent tech paths.",
    insiderTips: [
      "Study fundamentals for the quiz regardless of target department.",
      "Department choice materially changes day-to-day work and required skill set.",
      "Brand credibility in crypto ecosystems is notably strong for an undergrad org.",
    ],
    timeCommitment: "10-15 hours/week including meetings and project execution.",
    transferFriendly: null,
    websiteUrl: "https://blockchain.berkeley.edu",
    logoUrl: "https://blockchain.berkeley.edu/wp-content/uploads/2021/10/BaB_Logo_White.png",
  },
  "free-ventures": {
    overview:
      "Free Ventures is Berkeley's student-run pre-seed accelerator supporting founder teams with mentorship, programming, and ecosystem access.",
    selectivityContext:
      "Highly selective and team-based; strongest fit for applicants with active startup work rather than exploratory interest.",
    culture:
      "Founder-first and build-oriented, with practical startup execution emphasis.",
    bestFor: [
      "Students actively building startups",
      "Founders seeking structured early-stage support",
      "Teams pursuing fundraising and product launch acceleration",
    ],
    applicationProcess:
      "Team-based accelerator application requiring substantive startup concept/progress.",
    alumniOutcomes: "Venture-backed startups, entrepreneurship, VC, and product roles.",
    insiderTips: [
      "Best fit for active builders, not passive startup-curious applicants.",
      "Bay Area mentor/investor access is a meaningful differentiator.",
      "Alumni with real fundraising outcomes strengthen cohort network utility.",
    ],
    timeCommitment: "High during accelerator semester.",
    transferFriendly: true,
    websiteUrl: "https://www.freeventures.org",
  },
  "berkeley-venture-capital": {
    overview:
      "Berkeley Venture Capital focuses on VC education, pitch and diligence activities, and ecosystem networking with founders and investors.",
    selectivityContext:
      "Moderately selective with emphasis on venture curiosity and startup ecosystem fluency.",
    culture:
      "VC- and network-oriented, with investing-side focus versus operating-side startup work.",
    bestFor: [
      "Students targeting VC and startup investing careers",
      "Applicants seeking practical diligence and investment judgment reps",
      "Students building investor-side Bay Area networks",
    ],
    applicationProcess:
      "Resume + interest statement, followed by interviews for selected candidates.",
    alumniOutcomes: "VC, startup investing, tech, and general business roles.",
    insiderTips: [
      "Pitch and memo work can materially improve investment communication skills.",
      "Investor-network access is stronger here than in most general business clubs.",
      "Useful complement to consulting/finance memberships for VC-focused applicants.",
    ],
    timeCommitment: "6-10 hours per week.",
    transferFriendly: true,
  },
  "ai-entrepreneurs-berkeley": {
    overview:
      "AI Entrepreneurs at Berkeley is an AI-focused accelerator/incubator supporting student founders with mentorship and investor connections.",
    selectivityContext:
      "Competitive cohort selection focused on teams with concrete AI product concepts or early traction.",
    culture:
      "Builder-first and AI-specific, centered on execution rather than general startup interest.",
    bestFor: [
      "Students building AI products/startups",
      "Founders pursuing AI-focused mentorship and capital pathways",
      "Applicants aiming for AI ecosystem network depth",
    ],
    applicationProcess:
      "Team-based accelerator application requiring a defined AI startup concept.",
    alumniOutcomes: "AI startup founders, AI product roles, and venture-backed teams.",
    insiderTips: [
      "General startup interest is insufficient; evidence of AI product work matters.",
      "Network is strongest with AI-specialized investors/funds.",
      "Previous fundraising outcomes create practical precedent for new cohorts.",
    ],
    timeCommitment: "High during accelerator semester.",
    transferFriendly: true,
  },
  "undergraduate-real-estate-club": {
    overview:
      "UREC provides education, networking, and career development for students pursuing real estate investment, development, and finance pathways.",
    selectivityContext:
      "Relatively open and welcoming regardless of prior real-estate knowledge.",
    culture:
      "Educational and inclusive, with common overlap into finance and consulting communities.",
    bestFor: [
      "Students exploring RE investment/development paths",
      "Applicants wanting real-estate literacy and network access",
      "Students from non-Haas majors interested in property/finance crossover",
    ],
    applicationProcess: "Accessible application process with resume + interest statement.",
    alumniOutcomes: "Real estate investment, development, private equity, and finance roles.",
    insiderTips: [
      "UREC is especially accessible for nontraditional entrants to real estate.",
      "RE careers often overlap strongly with finance/private equity trajectories.",
      "Strong foundational club for students evaluating real estate as a long-term path.",
    ],
    timeCommitment: "4-6 hours per week.",
    transferFriendly: true,
  },
  "alpha-kappa-psi": {
    overview:
      "Alpha Kappa Psi is a long-standing co-ed professional business fraternity with deep chapter tradition at Berkeley and broad national alumni reach.",
    selectivityContext:
      "Selective rush + pledge process with small pledge cohorts and multiple rounds of events/interviews.",
    culture:
      "Professional + social fraternity model with strong internal support and relationship-based recruiting assistance.",
    bestFor: [
      "Students wanting fraternity-based professional development",
      "Applicants targeting IB/consulting/tech with alumni advocacy",
      "Students seeking a long-horizon national network beyond Berkeley",
    ],
    applicationProcess:
      "Semester rush with events, coffee chats, and interviews before bids; followed by pledge program.",
    alumniOutcomes:
      "Major banking, consulting, and technology placements across geographies (including strong East Coast outcomes).",
    insiderTips: [
      "National network benefits often extend beyond Berkeley-only alumni contacts.",
      "Fraternity commitment includes significant social/time components, not only recruiting upside.",
      "Assess whether full fraternity model fits your priorities before rushing.",
    ],
    timeCommitment: "Substantial during pledge semester; ongoing chapter commitment.",
    transferFriendly: null,
    websiteUrl: "https://akpsi.org",
  },
  "beta-alpha-psi": {
    overview:
      "Beta Alpha Psi (Lambda Chapter) is an accounting/finance honors fraternity with strong Big Four and financial-services pipelines.",
    selectivityContext:
      "Selective with academic/GPA expectations alongside rush and pledge processes.",
    culture:
      "Academically rigorous and professionally oriented with active alumni mentorship.",
    bestFor: [
      "Students pursuing accounting, audit, and finance tracks",
      "Applicants targeting Big Four pathways",
      "Students wanting honors-fraternity structure with career outcomes",
    ],
    applicationProcess:
      "Rush + pledge process with academic qualification requirements and professional standards.",
    alumniOutcomes:
      "Deloitte, PwC, EY, KPMG, banking, and finance roles across major markets.",
    insiderTips: [
      "Big Four access is a standout strength in this chapter's network.",
      "Global alumni footprint can help students targeting non-Bay Area paths.",
      "Academic standards are a real ongoing requirement, not a one-time filter.",
    ],
    timeCommitment:
      "Substantial across chapter events, professional development, and recruiting support programming.",
    transferFriendly: null,
    websiteUrl: "https://www.berkeleybap.org",
  },
};
