import type { Club } from "./types";

export const otherClubs: Club[] = [
  {
    id: "berkeley-investment-group",
    name: "Berkeley Investment Group",
    abbreviation: "BIG",
    category: "Finance",
    website: "https://www.berkeleyinvestment.group",
    overview:
      "Student-run investment organization managing a real portfolio with deep-value and fundamental research. Long-running education pipeline with stock pitches, sector coverage, and alumni ties into asset management and finance recruiting.",
    selectivity: "Highly Selective",
    selectivityContext:
      "Competitive interviews with technical finance expectations; blind or structured application components vary by semester.",
    careerFocus: ["IB", "Hedge Funds", "Asset Management", "Equity Research", "General Finance"],
    culture:
      "Intellectually rigorous and collaborative; can be less social than some orgs because workload is real. Members bond over research quality and markets.",
    bestFor: [
      "Students who want live fund experience and technical depth",
      "People willing to invest serious hours in finance education",
    ],
    applicationProcess:
      "1) Application (may include pitch or writing components).\n2) Interviews with technical and behavioral elements.\n3) Education semester / return offer structure — confirm on official site.",
    insiderTips: [
      "Treat the stock pitch like a product: thesis, risks, and what would change your mind.",
      "If components are anonymous/blind, focus on clarity and logic over resume flexing.",
      "Ask what the education arc looks like before you commit — it is not a casual club.",
    ],
    approximateSize: "Manages a sizable student portfolio; cohort size varies",
    tier: "Finance",
    transferFriendly: null,
  },
  {
    id: "capital-investments-at-berkeley",
    name: "Capital Investments at Berkeley",
    abbreviation: "CIB",
    category: "Finance",
    website: "https://www.cibberkeley.com",
    overview:
      "Multi-strategy student investment fund with education across equities, macro, and quant-style work. Known for tight community and strong placement outcomes across finance and quant paths.",
    selectivity: "Highly Selective",
    selectivityContext:
      "Rigorous technical screens; looks for learning velocity and team fit alongside raw skill.",
    careerFocus: ["Quant", "Multi-strategy", "S&T", "VC", "General Finance"],
    culture:
      "More socially tight-knit than some pure research clubs; still intense on performance and accountability.",
    bestFor: [
      "Students exploring quant and multi-strategy investing",
      "People who want structured training with peer support",
    ],
    applicationProcess:
      "1) Application.\n2) Technical + behavioral interviews.\n3) Training semester — confirm return offer structure on site.",
    insiderTips: [
      "Brush up probability/stats intuition if you are targeting quant tracks.",
      "Ask which desks/tracks exist and how staffing works.",
      "Be honest about depth vs breadth — they will probe gaps.",
    ],
    approximateSize: "Unknown",
    tier: "Finance",
    transferFriendly: null,
  },
  {
    id: "undergraduate-finance-association",
    name: "Undergraduate Finance Association / UMCG",
    abbreviation: "UFA",
    category: "Finance",
    website: "https://www.ufaumcg.com",
    overview:
      "Alumni-forward finance organization focused on mentorship, interview prep, and placing members into competitive roles across IB, PE, HF, and consulting. Heavy emphasis on networking and mock interviews.",
    selectivity: "Moderately Selective",
    selectivityContext:
      "Can be tough for older students in some cycles — ask directly about junior/senior policies.",
    careerFocus: ["IB", "Consulting", "PE", "HF", "General Finance"],
    culture:
      "Career-driven and direct; engagement quality depends on how much you put into coffee chats and prep.",
    bestFor: [
      "Students who want structured finance recruiting support",
      "People comfortable with alumni-heavy models",
    ],
    applicationProcess:
      "1) Application.\n2) Rigorous interview process modeled on industry screens.\n3) Member onboarding — confirm timeline via official channels.",
    insiderTips: [
      "If you are a junior transfer, confirm eligibility before spending weeks prepping.",
      "Come prepared with technicals — interviews can mirror buyside/IB screens.",
      "Use alumni conversations for feedback, not performance.",
    ],
    approximateSize: "Unknown",
    tier: "Finance",
    transferFriendly: false,
  },
  {
    id: "undergraduate-finance-club",
    name: "Undergraduate Finance Club",
    abbreviation: "UFC",
    category: "Finance",
    website: "https://www.berkeleyfinanceclub.org",
    overview:
      "Finance community with a fraternity-like culture for some cohorts — emphasis on mutual support through recruiting cycles and technical prep. Strong IB placement culture for members who engage.",
    selectivity: "Moderately Selective",
    selectivityContext:
      "Social fit matters; process can include multiple rounds and group dynamics.",
    careerFocus: ["IB", "Finance", "General Business"],
    culture:
      "Tight-knit and mutual-support oriented; ask members candidly about time expectations and social norms.",
    bestFor: [
      "Students targeting IB who want peers to grind with",
      "People who thrive in high-trust group settings",
    ],
    applicationProcess:
      "1) Application.\n2) Interviews and social rounds (format varies).\n3) New member onboarding — confirm on official site.",
    insiderTips: [
      "Clarify whether you are joining for education vs purely social community.",
      "Ask how technical prep is structured week to week.",
      "If you are balancing multiple orgs, be upfront early.",
    ],
    approximateSize: "Unknown",
    tier: "Finance",
    transferFriendly: null,
  },
  {
    id: "blackskies-investments",
    name: "Blackskies Investments",
    abbreviation: "Blackskies",
    category: "Finance",
    website: "https://www.blackskies.me",
    overview:
      "Student-led investing group with a venture-focused direction in recent cycles. Newer org — treat as a learning community and verify outcomes with current members rather than assuming placements.",
    selectivity: "Open",
    selectivityContext:
      "More accessible; best for exploration and building fundamentals.",
    careerFocus: ["VC", "Tech", "General Finance"],
    culture:
      "Decentralized and evolving — leadership and project pipeline can shift year to year.",
    bestFor: [
      "Students curious about VC and early-stage investing",
      "People who want flexibility while exploring finance",
    ],
    applicationProcess:
      "1) Interest form / application.\n2) Interviews if needed.\n3) Team placement.",
    insiderTips: [
      "Ask what portfolio process looks like this semester specifically.",
      "If you need structured training, pair this with coursework or another org.",
      "Treat claims about AUM or outcomes as “verify with members.”",
    ],
    approximateSize: "Unknown",
    tier: "Finance",
    transferFriendly: null,
  },
  {
    id: "traders-at-berkeley",
    name: "Traders at Berkeley",
    abbreviation: "TAB",
    category: "Finance",
    website: "https://traders.berkeley.edu",
    overview:
      "Quantitative finance and trading community hosting competitions, education, and firm connections. Strong CS/stats/math skew; recruiting pathways often overlap with trading firms and quant research.",
    selectivity: "Highly Selective",
    selectivityContext:
      "Technical bar is real — math, probability, and coding comfort show up quickly.",
    careerFocus: ["Quant", "S&T", "Software Engineering"],
    culture:
      "Focused and technical; social life tends to be smaller but intense within cohorts.",
    bestFor: [
      "CS/stats students targeting trading and quant",
      "People who enjoy puzzles, markets, and fast feedback loops",
    ],
    applicationProcess:
      "1) Application.\n2) Technical screens.\n3) DeCal / program participation (confirm current structure).",
    insiderTips: [
      "Do not skip probability — it shows up everywhere.",
      "Competitions are a credential — treat them like serious projects.",
      "Ask which sponsors and pipelines are active in your graduation year.",
    ],
    approximateSize: "Unknown",
    tier: "Finance",
    transferFriendly: null,
  },
  {
    id: "undergraduate-business-group",
    name: "Undergraduate Business Group",
    abbreviation: "UBG",
    category: "Fraternity",
    website: "https://www.berkeleyubg.org",
    overview:
      "Professional business fraternity with a long history on campus. Extremely selective with a structured new-member process and strong finance/consulting recruiting culture. Research current member experiences directly — processes and culture evolve.",
    selectivity: "Very Highly Selective",
    selectivityContext:
      "Among the most competitive undergraduate business organizations; small pledge classes.",
    careerFocus: ["IB", "Consulting", "Finance", "General Business"],
    culture:
      "Insular and high-commitment for many members; social life often centers on the org. Ask candid questions about boundaries and time.",
    bestFor: [
      "Students seeking maximum finance/consulting pipeline density",
      "People who want a primary professional community on campus",
    ],
    applicationProcess:
      "1) Application and recruitment events.\n2) Interviews and social rounds.\n3) New member process — timelines vary; confirm via official channels only.",
    insiderTips: [
      "Do not romanticize outcomes — verify fit with multiple members across years.",
      "Ask bluntly about time, expectations, and conflict resolution norms.",
      "If you want academic-first semesters, calculate opportunity cost honestly.",
    ],
    approximateSize: "Small pledge classes; total active membership varies",
    tier: "Fraternity",
    transferFriendly: null,
  },
  {
    id: "alpha-kappa-psi",
    name: "Collegiate Business Association (CBA)",
    abbreviation: "CBA",
    category: "Fraternity",
    website: "https://www.berkeleycba.com",
    overview:
      "Professional business fraternity historically known as AKPsi at Berkeley. Strong placement culture across banks and consulting with structured training and alumni access. Culture varies — talk to multiple members before committing.",
    selectivity: "Highly Selective",
    selectivityContext:
      "Competitive process with social and professional evaluation components.",
    careerFocus: ["IB", "Consulting", "Finance", "General Business"],
    culture:
      "High-energy and network-heavy; overlap with other finance orgs is common for skill-building.",
    bestFor: [
      "Students targeting elite finance/consulting who want structured community",
      "People comfortable with intense org commitment",
    ],
    applicationProcess:
      "1) Recruitment events.\n2) Application + interviews.\n3) New member process — confirm details via official channels.",
    insiderTips: [
      "Ask how members balance coursework during peak recruiting.",
      "Clarify expectations around exclusivity with other orgs if that matters to you.",
      "Talk to alumni and current members — not just marketing materials.",
    ],
    approximateSize: "Unknown",
    tier: "Fraternity",
    transferFriendly: null,
  },
  {
    id: "beta-alpha-psi",
    name: "Beta Alpha Psi",
    abbreviation: "BAP",
    category: "Fraternity",
    website: "https://www.berkeleybap.org",
    overview:
      "Professional fraternity with a finance and accounting tilt and structured programming. Historically strong placement into banking and accounting paths; community makeup and culture vary by semester.",
    selectivity: "Highly Selective",
    selectivityContext:
      "Competitive; interviews and social rounds matter alongside technical preparation.",
    careerFocus: ["IB", "Finance", "Accounting"],
    culture:
      "Professional-first with social programming; ask members about norms and support systems.",
    bestFor: [
      "Students targeting IB/accounting with a fraternity-style community",
      "People who want structured professional development",
    ],
    applicationProcess:
      "1) Application.\n2) Interviews + social rounds.\n3) New member process — confirm timeline on site.",
    insiderTips: [
      "Technical accounting questions can show up — prep accordingly.",
      "Ask how mentorship is structured across cohorts.",
      "If diversity and inclusion matter to you, ask what concrete practices they use.",
    ],
    approximateSize: "Unknown",
    tier: "Fraternity",
    transferFriendly: null,
  },
  {
    id: "pi-sigma-epsilon",
    name: "Pi Sigma Epsilon",
    abbreviation: "PSE",
    category: "Fraternity",
    website: "https://www.berkeleypse.com",
    overview:
      "Professional fraternity with a consulting revenue arm and multidisciplinary placements across consulting, finance, and product. Generally described as less intense than the largest business fraternities — verify for your semester.",
    selectivity: "Moderately Selective",
    selectivityContext:
      "More accessible than the most selective business fraternities; still expects commitment.",
    careerFocus: ["Consulting", "Finance", "Product", "General Business"],
    culture:
      "Social + professional blend; international trips and consulting projects show up in many years.",
    bestFor: [
      "Students who want professional development without maximal toxicity risk",
      "Juniors and transfers seeking inclusion (confirm each cycle)",
    ],
    applicationProcess:
      "1) Application.\n2) Interviews.\n3) New member process — confirm details via official channels.",
    insiderTips: [
      "Ask how ZC Consulting projects are staffed alongside fraternity programming.",
      "Clarify dues, time, and travel expectations up front.",
      "Great option if you want a community with consulting + social life.",
    ],
    approximateSize: "Unknown",
    tier: "Fraternity",
    transferFriendly: true,
  },
  {
    id: "alpha-epsilon-zeta",
    name: "Alpha Epsilon Zeta",
    abbreviation: "AEZ",
    category: "Fraternity",
    website: "https://www.aezberkeley.org",
    overview:
      "All-male professional fraternity with social and professional programming and startup/VC events. Smaller national footprint; community ties matter. Confirm active status and culture with current members.",
    selectivity: "Open",
    selectivityContext:
      "More open than some national business fraternities; still has structured membership.",
    careerFocus: ["General Business", "Tech", "Finance"],
    culture:
      "Social-forward with professional overlays; ask about inclusivity practices and community norms directly.",
    bestFor: [
      "Students seeking a tight-knit social-professional blend",
      "Transfers and juniors (confirm eligibility)",
    ],
    applicationProcess:
      "1) Application.\n2) Interviews / social rounds.\n3) New member process.",
    insiderTips: [
      "Ask what professional programming is active vs aspirational this year.",
      "If you want consulting-only training, pair with a consulting org too.",
      "Clarify time commitments during recruiting season.",
    ],
    approximateSize: "Unknown",
    tier: "Fraternity",
    transferFriendly: true,
  },
  {
    id: "product-buds",
    name: "Product Buds",
    abbreviation: "PB",
    category: "Other",
    website: "https://productbuds.co",
    overview:
      "Product management community with product sense practice, teardowns, and peer mentorship. Designed for students exploring PM and tech paths without a single consulting-only focus.",
    selectivity: "Moderately Selective",
    selectivityContext:
      "Accessible compared to elite consulting clubs; values curiosity and communication.",
    careerFocus: ["Product", "Tech", "General Business"],
    culture:
      "Supportive and iterative; feedback-heavy and community-oriented.",
    bestFor: [
      "Non-CS majors exploring PM",
      "Students who want structured PM reps without maximal gatekeeping",
    ],
    applicationProcess:
      "1) Application.\n2) Behavioral interview(s).\n3) Member onboarding.",
    insiderTips: [
      "Bring one product teardown with a clear user and tradeoff story.",
      "Show how you think, not just buzzwords.",
      "Pair with real projects (clubs, internships) to strengthen your story.",
    ],
    approximateSize: "Unknown",
    tier: "Other",
    transferFriendly: null,
  },
  {
    id: "cal-hacks",
    name: "Cal Hacks",
    abbreviation: "CH",
    category: "Technical",
    website: "https://calhacks.org",
    overview:
      "Student team that runs Berkeley’s flagship hackathon and related builder programming. Strong fit for students who want operations, sponsorship, design, and engineering experience at scale.",
    selectivity: "Moderately Selective",
    selectivityContext:
      "Selective for organizer roles; event participation is broader.",
    careerFocus: ["Software Engineering", "Product", "Design"],
    culture:
      "Ships under real deadlines; community is social but execution-first.",
    bestFor: [
      "Builders who want to run large events and programs",
      "Students who want proof of reliability and teamwork",
    ],
    applicationProcess:
      "1) Organizer application.\n2) Interviews.\n3) Team placement by function.",
    insiderTips: [
      "Show you can own tasks end-to-end — hackathons are operations-heavy.",
      "Be clear about which team you want (sponsor, dev, design, ops).",
      "Expect crunch spikes near the main event.",
    ],
    approximateSize: "Unknown",
    tier: "Other",
    transferFriendly: null,
  },
  {
    id: "blockchain-at-berkeley",
    name: "Blockchain at Berkeley",
    abbreviation: "B@B",
    category: "Technical",
    website: "https://blockchain.studentorg.berkeley.edu",
    overview:
      "Blockchain education, research, and consulting-style client work for crypto and enterprise clients. Technical bar is high; projects can be fast-paced and globally connected.",
    selectivity: "Highly Selective",
    selectivityContext:
      "Technical screens and portfolio projects matter; competition for spots is real.",
    careerFocus: ["Blockchain", "Web3", "Software Engineering", "Consulting"],
    culture:
      "Ambitious and technical; travel and conferences show up for active members.",
    bestFor: [
      "Students with CS/crypto curiosity and willingness to learn fast",
      "People who want client-facing work with deep technical content",
    ],
    applicationProcess:
      "1) Application.\n2) Technical + behavioral interviews.\n3) Track placement — confirm on site.",
    insiderTips: [
      "Bring code or research artifacts, even if small.",
      "Be ready to explain consensus, wallets, and security basics at a high level.",
      "Ask which verticals (DeFi, infra, enterprise) are active.",
    ],
    approximateSize: "Unknown",
    tier: "Other",
    transferFriendly: null,
  },
  {
    id: "ai-entrepreneurs-berkeley",
    name: "AI Entrepreneurs at Berkeley",
    abbreviation: "AIEB",
    category: "Other",
    website: "https://aieb.studentorg.berkeley.edu",
    overview:
      "AI-focused accelerator incubator for student founders with mentorship and investor access. Best for builders who want to ship AI products and learn fundraising mechanics.",
    selectivity: "Moderately Selective",
    selectivityContext:
      "Selective for cohort slots; less about prestige than proof of execution.",
    careerFocus: ["AI", "Startups", "VC"],
    culture:
      "Builder-heavy; mentorship quality depends on cohort and mentors that semester.",
    bestFor: [
      "Founders building AI products",
      "Students who want VC exposure and demo day experience",
    ],
    applicationProcess:
      "1) Application.\n2) Interviews / pitch review.\n3) Program participation.",
    insiderTips: [
      "Show traction or a sharp technical demo — ideas alone are weak.",
      "Ask what funding and mentor access looked like last cohort.",
      "Pair with CS coursework if your implementation depth is thin.",
    ],
    approximateSize: "Cohort-based",
    tier: "Other",
    transferFriendly: null,
  },
  {
    id: "undergraduate-real-estate-club",
    name: "Undergraduate Real Estate Club",
    abbreviation: "UREC",
    category: "Other",
    website: "https://urec.berkeley.edu",
    overview:
      "Real estate education, networking, and project exposure for students interested in RE finance, development, and asset management. Welcoming community with cross-membership common.",
    selectivity: "Moderately Selective",
    selectivityContext:
      "Accessible relative to top consulting clubs; still expects professionalism.",
    careerFocus: ["Real Estate", "Finance", "PE"],
    culture:
      "Professional and community-minded; good for exploration without a single hyper-competitive path.",
    bestFor: [
      "Students targeting real estate finance or development",
      "People who want industry exposure without a consulting-only club",
    ],
    applicationProcess:
      "1) Application.\n2) Interviews (if any).\n3) Member onboarding.",
    insiderTips: [
      "Learn basic RE finance vocabulary early (Cap rates, NOI, LTV).",
      "Ask what project and site visit opportunities exist this year.",
      "Network with alumni intentionally — RE is relationship-heavy.",
    ],
    approximateSize: "Unknown",
    tier: "Other",
    transferFriendly: null,
  },
  {
    id: "free-ventures",
    name: "Free Ventures",
    abbreviation: "FreeV",
    category: "Other",
    website: "https://www.freeventures.org",
    overview:
      "Pre-seed startup accelerator for Berkeley student founders with mentorship and investor access. Focus is on building companies, not generic consulting club placement stats.",
    selectivity: "Moderately Selective",
    selectivityContext:
      "Selective for founders; programming is cohort-based.",
    careerFocus: ["Startups", "VC", "Entrepreneurship"],
    culture:
      "Supportive and mentor-driven; intensity depends on your startup stage.",
    bestFor: [
      "Student founders who want structure and cohort accountability",
      "People exploring venture-backed startups",
    ],
    applicationProcess:
      "1) Application.\n2) Interviews.\n3) Accelerator participation.",
    insiderTips: [
      "Show milestones, not just vision decks.",
      "Ask what investor intros realistically look like.",
      "If you are not a founder, look for partner roles instead.",
    ],
    approximateSize: "Cohort-based",
    tier: "Other",
    transferFriendly: null,
  },
  {
    id: "berkeley-venture-capital",
    name: "Berkeley Venture Capital",
    abbreviation: "BVC",
    category: "Other",
    website: "https://www.berkeleyvc.org",
    overview:
      "VC education and ecosystem club for students exploring investing, startups, and pitch competitions. Good entry point for learning VC mechanics without managing a fund solo.",
    selectivity: "Moderately Selective",
    selectivityContext:
      "Varies by semester; generally accessible for motivated students.",
    careerFocus: ["VC", "Startups", "General Business"],
    culture:
      "Curious and event-driven; community varies by leadership year.",
    bestFor: [
      "Students exploring VC careers",
      "People who want pitch and diligence exposure",
    ],
    applicationProcess:
      "1) Application.\n2) Interviews (if any).\n3) Member onboarding.",
    insiderTips: [
      "Write a mini investment memo on a company — it trains diligence fast.",
      "Ask which partners and founders engage with the club annually.",
      "Pair with a startup internship for real pattern recognition.",
    ],
    approximateSize: "Unknown",
    tier: "Other",
    transferFriendly: null,
  },
  {
    id: "women-on-wall-street",
    name: "Women on Wall Street",
    abbreviation: "WOWS",
    category: "Other",
    website: "http://www.wowatberkeley.com",
    overview:
      "Haas-affiliated community supporting women recruiting into high finance with workshops, mentorship, and recruiting support. Focused programming for a historically underrepresented demographic in finance.",
    selectivity: "Moderately Selective",
    selectivityContext:
      "Mission-aligned membership; confirm open events vs member-only tracks.",
    careerFocus: ["IB", "Finance", "Consulting"],
    culture:
      "Supportive and network-forward; emphasizes mentorship and candid recruiting talk.",
    bestFor: [
      "Women targeting competitive finance roles",
      "Students who want community alongside technical prep",
    ],
    applicationProcess:
      "1) Application.\n2) Interviews (if any).\n3) Member onboarding.",
    insiderTips: [
      "Ask what bank/coverage mentorship looks like each semester.",
      "Combine with technical prep — community helps, but interviews are still standardized.",
      "Use the network for mock behavioral and story polish.",
    ],
    approximateSize: "Unknown",
    tier: "Other",
    transferFriendly: null,
  },
  {
    id: "chinese-finance-club",
    name: "Chinese Finance Club",
    abbreviation: "CFC",
    category: "Other",
    website: "https://www.berkeley-cfc.com",
    overview:
      "Network-forward finance community for Chinese-speaking students and those recruiting with cross-border interests. Alumni and peer mentorship are central to the model.",
    selectivity: "Moderately Selective",
    selectivityContext:
      "Language and network alignment matter alongside technical prep.",
    careerFocus: ["IB", "Finance", "General Business"],
    culture:
      "Community-oriented; events and mentorship vary by cohort.",
    bestFor: [
      "Students with Mandarin/English fluency and finance targets",
      "People who want culturally aligned peer support",
    ],
    applicationProcess:
      "1) Application.\n2) Interviews.\n3) Member onboarding.",
    insiderTips: [
      "Clarify whether programming is language-specific or open.",
      "Ask about alumni coverage in your target regions.",
      "Still prep technicals to the same bar as any finance club.",
    ],
    approximateSize: "Unknown",
    tier: "Other",
    transferFriendly: null,
  },
  {
    id: "ascend-berkeley",
    name: "Ascend Berkeley",
    abbreviation: "Ascend",
    category: "Other",
    website: "https://ascendberkeley.org",
    overview:
      "Pan-Asian professional development organization with broad industry programming and community events. Haas-sponsored chapter with variable exits — treat as community + skills, not a single placement guarantee.",
    selectivity: "Open",
    selectivityContext:
      "Accessible entry; leadership tracks can be more selective.",
    careerFocus: ["General Business", "Tech", "Consulting"],
    culture:
      "Inclusive and event-heavy; great for networking across industries.",
    bestFor: [
      "AAPI students seeking professional community",
      "People exploring multiple industries early",
    ],
    applicationProcess:
      "1) Application / interest form.\n2) Member onboarding.",
    insiderTips: [
      "Show up consistently — value comes from relationships, not one-off events.",
      "Pair with a technical or consulting org if you need deeper reps.",
      "Ask what corporate partnerships are active this year.",
    ],
    approximateSize: "Large org; selective sub-teams",
    tier: "Other",
    transferFriendly: null,
  },
  {
    id: "scholars-of-finance",
    name: "Scholars of Finance",
    abbreviation: "SOF",
    category: "Other",
    website: "https://scholarsoffinance.org",
    overview:
      "National chapter focused on finance education, research, and small-group learning. Not a live fund-first club — best for learning foundations and community.",
    selectivity: "Open",
    selectivityContext:
      "Accessible; good for early exploration.",
    careerFocus: ["Finance", "Research"],
    culture:
      "Academic and discussion-oriented; lighter on client work than consulting clubs.",
    bestFor: [
      "Underclassmen building finance foundations",
      "Students who want reading groups and mentorship",
    ],
    applicationProcess:
      "1) Application.\n2) Onboarding.",
    insiderTips: [
      "Pair with a fund org if you want live portfolio experience.",
      "Use SOF for fluency and community — not as a placement shortcut.",
      "Ask what mentor access looks like each semester.",
    ],
    approximateSize: "Unknown",
    tier: "Other",
    transferFriendly: null,
  },
  {
    id: "microfinance-at-berkeley",
    name: "Microfinance at Berkeley",
    abbreviation: "MFB",
    category: "Other",
    website: "https://www.microfinanceberkeley.org",
    overview:
      "Pro bono consulting for small businesses with microfinance and community finance lens. Strong fit for impact-oriented students exploring business careers.",
    selectivity: "Open",
    selectivityContext:
      "Accessible; great for learning consulting basics with community clients.",
    careerFocus: ["Microfinance", "Social Impact", "Consulting"],
    culture:
      "Wholesome and collaborative; low ego relative to prestige-chasing clubs.",
    bestFor: [
      "Students exploring impact finance",
      "People who want client work without ultra-competitive gates",
    ],
    applicationProcess:
      "1) Application.\n2) Light interview / matching.\n3) Project onboarding.",
    insiderTips: [
      "Treat small business clients with the same rigor as corporate clients.",
      "Ask how projects are scoped and supported.",
      "Great training ground — pair with case prep separately if you want MBB.",
    ],
    approximateSize: "Unknown",
    tier: "Other",
    transferFriendly: null,
  },
  {
    id: "haas-business-student-association",
    name: "Haas Business Student Association",
    abbreviation: "HBSA",
    category: "Other",
    website: "https://www.hbsa.berkeley.edu",
    overview:
      "Haas undergraduate student government and programming body coordinating corporate relations, community initiatives, and campus-wide representation. Broad membership with selective leadership tracks.",
    selectivity: "Open",
    selectivityContext:
      "General membership is accessible; leadership and initiatives can be competitive.",
    careerFocus: ["General Business", "Leadership"],
    culture:
      "Inclusive and event-driven; great for building leadership experience.",
    bestFor: [
      "Haas students who want governance and programming experience",
      "People who want cross-club visibility",
    ],
    applicationProcess:
      "1) Application for general membership or leadership.\n2) Interviews for selective roles.",
    insiderTips: [
      "Clarify whether you want programming vs board leadership.",
      "Use HBSA to connect broadly — then specialize elsewhere.",
      "Time management matters — it stacks with recruiting fast.",
    ],
    approximateSize: "Large general body",
    tier: "Other",
    transferFriendly: null,
  },
];
