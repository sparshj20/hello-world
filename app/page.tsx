import Link from "next/link";
import ExperienceItem from "@/components/ExperienceItem";

export default function HomePage() {
  return (
    <div className="max-w-2xl">
      <section className="mb-12">
        <p className="leading-relaxed" style={{ color: "var(--color-muted)" }}>
          Product Manager at{" "}
          <a href="https://blinkit.com" target="_blank" rel="noopener noreferrer" className="text-link">
            Blinkit
          </a>
          , working on supply chain — first mile, brand experience, and payments.
          Previously built fintech products at scale at PayU and Cashfree.
          I thrive at the intersection of strategy, people, and execution — bringing clarity to define what to build and the grit to see it through.
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
            years="2024 – now"
            role="Product Manager"
            company="Blinkit"
            description="Supply chain — first mile, brand experience and payments."
          />
          <ExperienceItem
            years="2023 – 2024"
            role="Senior Product Manager"
            company="PayU"
            description={<>Growth products processing $2Bn GTV annually — affordability, EMIs, pay later, credit lines, offers and loyalty. Led a team of PMs and analysts. See <Link href="/work/reorder-discovery" className="text-link">case study</Link>.</>}
          />
          <ExperienceItem
            years="2021 – 2023"
            role="Product Manager"
            company="PayU"
            description="Platform products for core transaction and refund processing — pioneered India's first certified 3DS SDK, split payments, and an in-house A/B platform."
          />
          <ExperienceItem
            years="2020 – 2021"
            role="Associate Product Manager"
            company="Cashfree Payments"
            description="Payouts, cross-border remittances, e-collect, and Banking as a Service — scaled systems to 1000 TPS and delivered India's first RBI-selected cross-border payments MVP."
          />
          <ExperienceItem
            years="2018"
            role="Summer Research Intern"
            company="ISCTE Business School, Lisbon"
            description="Research on e-commerce in India with Prof. Paulo Rita and Prof. Fernando Batista — comparative analysis of Amazon and Flipkart on consumer engagement and business strategy."
            isLast
          />
        </div>
      </section>
    </div>
  );
}
