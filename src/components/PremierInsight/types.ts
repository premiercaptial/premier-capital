// ─────────────────────────────────────────────
// Premierinsight — Type Definitions
// ─────────────────────────────────────────────

export interface Insight {
   slug: string;
  id: string;
  category: string;
  question: string;
  answer: string;
  readTime: string;
}

export interface BubbleTeaser {
  emoji: string;
  label: string;
}

export type FeedbackType = "helpful" | "not-helpful" | null;
