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
      {/* Outer year span — same width and style as ExperienceItem */}
      <span className="text-sm w-24 shrink-0 pt-0.5" style={{ color: "var(--color-muted)" }}>
        {years}
      </span>

      {/* Right: company name + inner role timeline */}
      <div className="flex-1 min-w-0">
        <p className="font-medium mb-3" style={{ color: "var(--color-ink)" }}>
          {company}
        </p>

        <div className="flex flex-col gap-4">
          {roles.map((role, i) => (
            <div key={i} className="flex gap-3">
              {/* Left: thin vertical line + dot */}
              <div className="flex flex-col items-center" style={{ width: "12px", flexShrink: 0 }}>
                <div
                  style={{
                    width: "7px",
                    height: "7px",
                    borderRadius: "50%",
                    background: "var(--color-border)",
                    border: "1.5px solid var(--color-muted)",
                    flexShrink: 0,
                    marginTop: "4px",
                  }}
                />
                {i < roles.length - 1 && (
                  <div
                    style={{
                      width: "1px",
                      flex: 1,
                      background: "var(--color-border)",
                      marginTop: "4px",
                    }}
                  />
                )}
              </div>

              {/* Right: role content */}
              <div className="pb-1" style={{ flex: 1, minWidth: 0 }}>
                <p className="text-sm font-medium" style={{ color: "var(--color-ink)", lineHeight: "1.4" }}>
                  {role.title}
                  <span
                    className="font-normal ml-2"
                    style={{ color: "var(--color-muted)", fontSize: "0.8125rem" }}
                  >
                    {role.years}
                  </span>
                </p>
                <p className="text-sm mt-1" style={{ color: "var(--color-muted)", lineHeight: "1.55" }}>
                  {role.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
