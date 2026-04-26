import Link from "next/link";
import ExperienceItem from "@/components/ExperienceItem";

export default function HomePage() {
  return (
    <div className="max-w-2xl">
      <section className="mb-12">
        <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
          Lead PM at{" "}
          <a href="https://blinkit.com" target="_blank" rel="noopener noreferrer" className="text-link">
            Blinkit (Zomato)
          </a>
          , working on growth and consumer experience.
          Previously built products at scale across quick-commerce and fintech.
          I care about shipping things that measurably move people.
        </p>
      </section>

      <section>
        <h2
          className="text-sm font-semibold uppercase tracking-wider mb-4"
          style={{ color: "var(--color-muted)" }}
        >
          Experience
        </h2>
        <div>
          <ExperienceItem
            years="2022 – now"
            role="Lead Product Manager"
            company="Blinkit (Zomato)"
            description={<>Growth and consumer experience — <Link href="/work/reorder-discovery" className="text-link">reorder</Link>, discovery, retention.</>}
          />
          <ExperienceItem
            years="2020 – 2022"
            role="Product Manager"
            company="Blinkit"
            description="Consumer checkout and payments; launched split-pay and wallet."
          />
          <ExperienceItem
            years="2019 – 2020"
            role="Associate PM"
            company="Grofers"
            description="Onboarding and activation; cut drop-off by 30% in first 90 days."
            isLast
          />
        </div>
      </section>
    </div>
  );
}
