export interface Insight {
  id: string;
  slug: string;
  category: string;
  title: string;
  excerpt: string;
  image: string;
  date: string;
  readTime: string;
  featured: boolean;
  content: string[];
}

export const insights: Insight[] = [
  {
    id: "1",
    slug: "market-outlook-mumbai-investors-2026",
    category: "Investment Advisory",
    title: "What Mumbai Investors Should Watch in the Second Half of 2026",
    excerpt:
      "Interest rate shifts, sector rotation and where disciplined capital is heading as the year moves into its second half.",
    image: "/images/insights/wealth.jpg",
    date: "June 24, 2026",
    readTime: "6 min read",
    featured: true,
    content: [
      "The first half of 2026 has been defined by a cautious but steady recalibration across Indian equity and debt markets. For investors in Mumbai, where a large share of portfolios are held through a mix of direct equity, mutual funds and real estate, the second half of the year calls for a more deliberate approach than the momentum-driven strategies that worked earlier in the cycle.",
      "Interest rates remain the single biggest variable. Any further movement by the Reserve Bank of India will ripple through borrowing costs, corporate earnings and the relative appeal of fixed income versus equity. Investors holding long-duration debt instruments should review whether their current allocation still matches their time horizon, rather than assuming the environment that justified it six months ago still holds.",
      "Sector rotation is the second theme worth watching closely. Capital has been gradually shifting away from richly valued pockets of the market toward sectors with clearer earnings visibility, including select banking names, infrastructure-linked businesses and export-oriented manufacturers benefiting from global supply chain diversification. This is not a call to chase the rotation, but a reminder to check whether an existing portfolio has quietly become concentrated in yesterday's winners.",
      "For investors weighing new commitments, the more useful question is not 'where is the market headed' but 'does this allocation still serve my goals.' A portfolio built for a five-year horizon should not be adjusted based on a single quarter's headlines. Where adjustments are warranted, they are usually about rebalancing back to target allocations rather than making a fresh directional bet.",
      "As always, the right move depends on individual circumstances, existing exposure and time horizon. This is intended as a general market perspective, not personalised investment advice, and any changes to a portfolio should be discussed with an advisor familiar with your specific situation.",
    ],
  },
  {
    id: "2",
    slug: "building-a-wealth-management-plan",
    category: "Wealth Management",
    title: "Building a Wealth Plan That Survives Market Cycles",
    excerpt:
      "A framework for structuring assets across horizons, so short-term volatility never derails long-term goals.",
    image: "/images/insights/wealth.jpg",
    date: "June 18, 2026",
    readTime: "5 min read",
    featured: false,
    content: [
      "Most wealth plans fail not because the underlying investments were poorly chosen, but because the plan itself was never built to withstand a bad year. A genuinely durable plan separates money by purpose and time horizon, so that a downturn in one part of the portfolio does not force a decision about another.",
      "The starting point is a simple three-bucket structure. The first bucket covers near-term needs, typically the next one to two years of expenses, held in low-volatility instruments. The second covers medium-term goals, three to seven years out, where a moderate mix of equity and debt can absorb some volatility in exchange for better long-term returns. The third bucket is for long-term wealth creation, where equity exposure can be higher because the time horizon allows short-term drops to recover.",
      "The mistake we see most often is treating the entire portfolio as one undifferentiated pool. When markets fall, an investor without this structure looks at their total net worth dropping and reacts emotionally, often selling at the worst possible time. An investor with a bucketed plan can look at the same market fall and recognise that their near-term needs were never at risk in the first place.",
      "Rebalancing discipline matters as much as the initial structure. As equity markets rise, the long-term bucket naturally grows as a share of the total portfolio, which can quietly increase risk beyond what was originally intended. A periodic review, ideally annual, brings the allocation back in line with the original plan rather than letting market performance dictate risk exposure by accident.",
      "A wealth plan is not a one-time document. It should be revisited as income, goals and family circumstances change, but the underlying structure of separating money by purpose is what allows it to survive the market cycles that inevitably come.",
    ],
  },
  {
    id: "3",
    slug: "stock-picks-this-quarter",
    category: "Stock Picks",
    title: "Three Sectors Our Research Desk Is Watching This Quarter",
    excerpt:
      "Where our analysts are finding value, and the risks worth weighing before you act on them.",
    image: "/images/insights/stocks.jpg",
    date: "June 12, 2026",
    readTime: "4 min read",
    featured: false,
    content: [
      "Every quarter, our research desk reviews sector-level earnings trends, valuation multiples and forward guidance to identify where the risk-reward balance looks most attractive. This quarter, three sectors stand out, each for different reasons.",
      "Private sector banking continues to show resilient credit growth alongside improving asset quality, and valuations in several names have not fully caught up with the earnings trajectory. The risk here is largely macro: a sharper-than-expected rate move could pressure net interest margins in the near term.",
      "Infrastructure and capital goods companies tied to government capex cycles are showing strong order book visibility extending well into next year. The trade-off is execution risk, since order books converting into delivered, billed revenue on schedule has historically been the weak link in this sector.",
      "Export-oriented manufacturing, particularly in specialty chemicals and select engineering names, is benefiting from global supply chain diversification away from single-country dependence. Currency movements and global demand softness remain the key variables to track here.",
      "This overview reflects our desk's current thinking and is not a recommendation to buy or sell any specific stock. Sector views should be weighed against your own risk appetite, time horizon and existing portfolio concentration before acting.",
    ],
  },
  {
    id: "4",
    slug: "loan-against-property-explained",
    category: "Loans",
    title: "Loan Against Property: When It Makes Sense, and When It Doesn't",
    excerpt:
      "A clear look at rates, eligibility and the trade-offs before you leverage a property asset.",
    image: "/images/insights/loans.jpg",
    date: "June 6, 2026",
    readTime: "5 min read",
    featured: false,
    content: [
      "A loan against property lets you unlock liquidity from an owned residential or commercial asset without selling it, typically at meaningfully lower interest rates than an unsecured personal loan. But the lower rate comes with a real trade-off: the property itself is collateral, and that changes the risk calculus.",
      "It tends to make the most sense for larger, well-planned needs, business expansion, funding a child's education abroad, or consolidating higher-cost debt into a single lower-rate instrument. The loan tenure is usually longer than a personal loan, which keeps EMIs manageable, but also means a longer period during which the property carries a lien.",
      "It makes less sense as a source of funding for short-term or discretionary expenses. Using a long-tenure, asset-backed loan to cover a need that will resolve itself in a year or two often means paying processing costs and locking an asset for a mismatch far longer than the actual requirement.",
      "Eligibility is driven primarily by the property's market value, typically allowing a loan of 50 to 70 percent of that value, along with the usual income and credit history checks. It is worth getting an independent sense of the property's current valuation before assuming a certain loan amount, since bank valuations can differ from market expectations.",
      "The most important question before taking this route is not the rate, but the repayment plan. Because the collateral is a property, often a primary residence, the cost of a missed repayment schedule is considerably higher than with unsecured debt, and that risk should be weighed honestly against the benefit of the lower rate.",
    ],
  },
  {
    id: "5",
    slug: "insurance-planning-checklist",
    category: "Insurance",
    title: "The Insurance Checklist Most Portfolios Are Missing",
    excerpt:
      "Life, health and asset protection, reviewed as part of a wealth strategy rather than an afterthought.",
    image: "/images/insights/insurance.jpg",
    date: "May 29, 2026",
    readTime: "4 min read",
    featured: false,
    content: [
      "Insurance is often treated as a compliance checkbox rather than part of a wealth strategy, bought once and rarely revisited. That gap shows up most clearly during a life event, a new dependent, a home loan, a career change, when the coverage in place no longer matches the actual risk being carried.",
      "Term life coverage is the most commonly underestimated line item. A useful starting benchmark is coverage of ten to fifteen times annual income, adjusted for outstanding liabilities like a home loan and the number of years dependents will need support. Coverage bought a decade ago at an earlier income level rarely reflects this today.",
      "Health insurance deserves the same scrutiny. Employer-provided cover is rarely sufficient on its own, since it typically ends with the job and may not scale with rising healthcare costs or a growing family. A standalone family floater, sized appropriately for your city's hospital costs, closes this gap.",
      "The most overlooked category is asset protection, adequate cover for a home, its contents, and in some cases key person or professional liability cover for business owners. These are often the first policies people mean to buy and the last ones they actually purchase.",
      "A useful annual exercise is to lay out every policy currently held against every dependent, liability and asset that actually needs protecting, and look honestly at what is missing rather than what has simply been renewed out of habit.",
    ],
  },
  {
    id: "6",
    slug: "business-loans-for-growth-stage-founders",
    category: "Business Loans",
    title: "Financing Growth Without Diluting Ownership",
    excerpt:
      "How structured business loans compare to equity raises for founders scaling past their first crore in revenue.",
    image: "/images/insights/loans.jpg",
    date: "May 22, 2026",
    readTime: "6 min read",
    featured: false,
    content: [
      "Founders scaling past their first significant revenue milestone often default to raising equity as the obvious next step, largely because it is the most visible and widely discussed path. But equity is also the most expensive form of capital in the long run, since it permanently gives away a share of future upside in exchange for money today.",
      "A structured business loan is worth serious consideration whenever the capital is being used to fund something with a predictable, near-term return, inventory for a confirmed order pipeline, working capital for a seasonal cycle, or equipment that directly expands production capacity. In these cases, the business is effectively borrowing against its own near-term cash flow rather than against its long-term equity value.",
      "The calculation changes when the capital is being used for something genuinely uncertain, a new product line, entry into an unproven market, or a long R&D runway with no clear revenue timeline. Debt taken on for uncertain outcomes puts fixed repayment pressure on a business precisely when its cash flow is least predictable, which is a dangerous combination.",
      "Lenders evaluating growth-stage businesses typically look past the pitch deck and focus on operating history, existing cash flow and collateral, whether physical assets, receivables, or in some structures a promoter guarantee. Founders should walk into these conversations with clean, current financials rather than projections alone.",
      "The right answer is rarely all-debt or all-equity. Many growth-stage businesses are best served by using debt for the predictable, cash-flow-backed portion of their expansion, while reserving equity for the genuinely uncertain bets where a lender's fixed repayment structure would be the wrong fit.",
    ],
  },
  {
    id: "7",
    slug: "construction-finance-timelines",
    category: "Construction Finance",
    title: "Construction Finance: Matching Disbursement to Project Milestones",
    excerpt:
      "Why staggered disbursement structures protect both lenders and developers through a build cycle.",
    image: "/images/insights/loans.jpg",
    date: "May 15, 2026",
    readTime: "5 min read",
    featured: false,
    content: [
      "Construction finance differs from most other lending categories in one important respect: the asset being financed does not fully exist yet. That single fact shapes almost every structural decision in how these loans are disbursed and monitored.",
      "Rather than releasing the full sanctioned amount upfront, construction loans are typically disbursed in tranches tied to physical progress, foundation completion, structural milestones, and finishing stages. This staggered approach protects the lender from releasing capital against a project that stalls, and it protects the developer from carrying interest costs on funds not yet needed.",
      "For developers, the practical implication is that cash flow planning has to be built around the disbursement schedule, not just the overall sanctioned amount. A project that runs ahead of its milestone schedule can find itself waiting on the next tranche, while a project that falls behind schedule may need to fund a gap out of pocket before the next disbursement is released.",
      "Lenders typically require periodic site inspections or third-party progress certification before releasing each tranche, which adds a layer of process but also creates a built-in checkpoint system that benefits both sides when a project hits an unexpected delay.",
      "The projects that navigate this smoothly are almost always the ones where the disbursement schedule was negotiated realistically at the outset, matched to an achievable construction timeline rather than an optimistic one, with contingency built in for the delays that are close to inevitable in any build cycle.",
    ],
  },
  {
    id: "8",
    slug: "retirement-planning-early-starts",
    category: "Wealth Management",
    title: "Why Starting Ten Years Earlier Changes the Retirement Math",
    excerpt:
      "The compounding gap between a plan started at 30 and one started at 40, in real numbers.",
    image: "/images/insights/wealth.jpg",
    date: "May 8, 2026",
    readTime: "5 min read",
    featured: false,
    content: [
      "The single biggest lever in retirement planning is not the return an investor earns, it is the number of years their money has to compound. Two people investing the same monthly amount at the same rate of return, but starting ten years apart, end up with dramatically different outcomes, and the gap is almost entirely explained by time rather than skill or market timing.",
      "Consider two investors who both plan to retire at 60. One starts investing a fixed monthly amount at age 30, the other starts the same monthly amount at age 40. Even though the second investor eventually contributes for thirty years versus the first investor's full run, the ten-year head start on compounding means the first investor's corpus at retirement is typically well over double the second's, not because they invested more, but because their money had a decade longer to grow on itself.",
      "This is precisely why the advice to 'start early' is repeated so often, even though it rarely feels urgent in your early thirties when retirement is decades away and other financial priorities, a home, a family, career growth, feel more pressing. The cost of delay is invisible in the moment and only becomes obvious in hindsight, by which point it cannot be recovered.",
      "For those who did not start at 30, the practical response is not to panic but to recalibrate. A later start typically means a higher monthly contribution is needed to reach the same goal, or a longer working horizon, or some combination of both. What does not help is avoiding the math altogether, since the earlier a realistic contribution figure is known, the more time remains to adjust toward it.",
      "The specific numbers depend on individual income, expenses and retirement goals, but the underlying principle holds regardless of the amounts involved: time in the market is doing more of the work than most investors give it credit for.",
    ],
  },
  {
    id: "9",
    slug: "reading-a-mutual-fund-factsheet",
    category: "Stock Picks",
    title: "How to Actually Read a Mutual Fund Factsheet",
    excerpt:
      "The five numbers that matter more than the star rating, and what they're not telling you.",
    image: "/images/insights/stocks.jpg",
    date: "May 1, 2026",
    readTime: "4 min read",
    featured: false,
    content: [
      "Most investors glance at a mutual fund's star rating and recent one-year return, and stop there. Both numbers are backward-looking and neither says much about how the fund is likely to behave going forward, which is really the question that matters.",
      "Expense ratio is the first number worth checking properly. It is deducted from returns every single year regardless of performance, and a difference of even half a percentage point compounds into a meaningfully different outcome over a long holding period.",
      "Standard deviation and beta together tell you how much the fund moves relative to its own history and its benchmark. A fund with high standard deviation is not necessarily bad, but it does mean the investor needs a stomach for larger swings along the way, and a mismatch between fund volatility and investor temperament is one of the most common reasons people sell at the wrong time.",
      "Portfolio turnover ratio reveals how actively the fund manager trades. A very high turnover ratio often means higher transaction costs eating into returns, and can also signal a strategy that is more tactical than the fund's stated long-term mandate suggests.",
      "Finally, look at the fund manager's tenure and the consistency of the stated investment strategy over time. A fund that has changed managers or drifted from its original mandate in the last year deserves more scrutiny than its historical track record alone would suggest, since that track record was built under different stewardship.",
    ],
  },
];
