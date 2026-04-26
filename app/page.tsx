import Link from "next/link";
import ExperienceItem from "@/components/ExperienceItem";
import ExperienceGroup from "@/components/ExperienceGroup";

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

          <ExperienceGroup
            years="2021 – 2024"
            company="PayU"
            roles={[
              {
                title: "Senior Product Manager",
                years: "2023 – 2024",
                description: (
                  <>
                    Led growth products processing $2Bn GTV annually — affordability, EMIs,
                    pay later, credit lines, offers and loyalty. Managed a team of PMs and analysts.
                    See{" "}
                    <Link href="/work/reorder-discovery" className="text-link">
                      case study
                    </Link>
                    .
                  </>
                ),
              },
              {
                title: "Product Manager",
                years: "2021 – 2023",
                description:
                  "Pioneered India's first certified 3DS SDK — piloted with Swiggy and CRED, improving card success rates by 200 bps. Spearheaded 3DS Server certification across Visa and Mastercard. Built split payments module and an in-house A/B platform. Reduced refund TAT from 2 hours to 5 minutes at peak 200 QPS.",
              },
            ]}
          />

          <ExperienceGroup
            years="2020 – 2021"
            company="Cashfree Payments"
            roles={[
              {
                title: "Associate Product Manager",
                years: "Oct 2020 – Sep 2021",
                description:
                  "Scaled payouts to 99.5% success rate and 1000 TPS. Conceptualised and delivered India's first RBI-selected cross-border payments MVP (RBI 2nd Cohort). Built fraud detection and AML checks for e-collect, and launched Banking as a Service — Accounts Suite.",
              },
              {
                title: "Product Analyst",
                years: "Feb – Sep 2020",
                description:
                  "Analytics and product instrumentation across payout rails — set up dashboards, KPIs, and worked with the data team to instrument metrics for user behaviour analysis.",
              },
            ]}
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
