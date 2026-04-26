import { ReactNode } from "react";

interface Role {
  years: string;
  title: string;
  description: ReactNode;
}

interface ExperienceGroupProps {
  years: string;
  company: string;
  roles: Role[];
  isLast?: boolean;
}

export default function ExperienceGroup({ years, company, roles, isLast }: ExperienceGroupProps) {
  return (
    <div
      className="flex gap-8 py-4"
      style={{ borderBottom: isLast ? "none" : "1px solid var(--color-border)" }}
    >
      {/* Outer year span */}
      <span className="text-sm w-24 shrink-0 pt-0.5" style={{ color: "var(--color-muted)" }}>
        {years}
      </span>

      {/* Company + inner timeline */}
      <div className="flex-1 min-w-0">
        <p className="font-medium mb-3" style={{ color: "var(--color-ink)" }}>
          {company}
        </p>

        <div style={{ borderLeft: "1px solid var(--color-border)", paddingLeft: "1rem" }}>
          {roles.map((role, i) => (
            <div
              key={i}
              style={{
                position: "relative",
                marginBottom: i < roles.length - 1 ? "1rem" : 0,
              }}
            >
              {/* Timeline dot */}
              <span
                style={{
                  position: "absolute",
                  left: "-1.35rem",
                  top: "5px",
                  width: "7px",
                  height: "7px",
                  borderRadius: "50%",
                  background: "var(--color-muted)",
                  display: "inline-block",
                }}
              />
              <p className="text-sm font-medium" style={{ color: "var(--color-ink)" }}>
                {role.title}{" "}
                <span className="font-normal" style={{ color: "var(--color-muted)" }}>
                  · {role.years}
                </span>
              </p>
              <p className="text-sm mt-0.5" style={{ color: "var(--color-muted)" }}>
                {role.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
