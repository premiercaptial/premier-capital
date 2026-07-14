import Image from "next/image";
import Link from "next/link";

type Props = {
  insight: any;
  variant?: "featured" | "sidebar" | "grid";
};

export function InsightCard({ insight, variant = "featured" }: Props) {
  const isFeatured = variant === "featured";

  return (
    <Link
      href={`/insights/${insight.slug}`}
      className="group block overflow-hidden border border-[#E8E4DC] bg-white"
    >
      {/* IMAGE */}
      <div
        className={`relative w-full overflow-hidden ${
          isFeatured ? "h-[380px]" : "h-[200px]"
        }`}
      >
        <Image
          src={insight.image}
          alt={insight.title}
          fill
          className="object-cover transition-transform duration-700 group-hover:scale-105"
        />
      </div>

      {/* CONTENT */}
      <div className="p-5">
        <p className="text-xs uppercase tracking-[0.2em] text-[#C6A15B]">
          {insight.category}
        </p>

        <h3
          className={`mt-2 text-[#0B1F3A] ${
            isFeatured ? "text-2xl" : "text-base"
          }`}
        >
          {insight.title}
        </h3>

        <p className="mt-3 text-sm leading-relaxed text-[#4A5568]">
          {insight.excerpt}
        </p>

        <span className="mt-4 inline-flex text-sm font-medium text-[#0B1F3A] group-hover:text-[#C6A15B]">
          Read more →
        </span>
      </div>
    </Link>
  );
}