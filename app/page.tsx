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
          With hands-on experience across quick-commerce and fintech, I thrive at the
          intersection of strategy, people, and execution — bringing clarity to define
          what to build and the grit to see it through.
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
            description="Building supply chain products — first mile operations, brand experience, and merchant payments."
          />

          <ExperienceItem
            years="2021 – 2024"
            role="Senior Product Manager"
            company="PayU"
            description={
              <>
                Led growth products processing $2Bn GTV annually — affordability, EMIs, pay later,
                credit lines, offers and loyalty. Pioneered India's first certified 3DS SDK — piloted
                with Swiggy and CRED, improving card success rates by 200 bps, and spearheaded 3DS
                Server certification across Visa and Mastercard. Built split payments module and an
                in-house A/B platform. Reduced refund TAT from 2 hours to 5 minutes at peak 200 QPS.
                See{" "}
                <Link href="/work/reorder-discovery" className="text-link">
                  case study
                </Link>
                .
              </>
            }
          />

          <ExperienceItem
            years="2020 – 2021"
            role="Associate Product Manager"
            company="Cashfree Payments"
            description="Scaled payouts to 99.5% success rate and 1000 TPS. Conceptualised and delivered India's first RBI-selected cross-border payments MVP (RBI 2nd Cohort). Built fraud detection and AML checks for e-collect, and launched Banking as a Service — Accounts Suite."
          />

          <ExperienceItem
            years="2018"
            role="Summer Research Intern"
            company="ISCTE Business School, Lisbon"
            description={
              <>
                Research on Indian e-commerce with{" "}
                <a
                  href="https://www.linkedin.com/in/paulo-rita/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Prof. Paulo Rita
                </a>{" "}
                and{" "}
                <a
                  href="https://www.linkedin.com/in/fernando-batista-a26a78b/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-link"
                >
                  Prof. Fernando Batista
                </a>{" "}
                — comparative analysis of Amazon and Flipkart on consumer engagement,
                social media strategy, and business models.
              </>
            }
            isLast
          />
        </div>
      </section>
    </div>
  );
}
