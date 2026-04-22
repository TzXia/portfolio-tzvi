import { Cpu, Activity, Code2, Bot, Terminal } from "lucide-react";

// 🔹 標題元件
function SectionTitle({ title }) {
  return (
    <div style={{ textAlign: "center", marginBottom: "30px" }}>
      <h2 style={{ margin: 0 }}>{title}</h2>
      <div
        style={{
          width: "40px",
          height: "3px",
          background: "#58a6ff",
          margin: "8px auto 0",
          borderRadius: "999px",
        }}
      />
    </div>
  );
}

// 🔹 專案卡片
function ProjectCard({ title, desc, icon: Icon }) {
  return (
    <div
      style={{
        background: "#161b22",
        padding: "24px",
        borderRadius: "14px",
        border: "1px solid #30363d",
        transition: "all 0.3s ease",
        cursor: "pointer",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.border = "1px solid #58a6ff";
        e.currentTarget.style.boxShadow = "0 0 20px rgba(88,166,255,0.25)";
        e.currentTarget.style.transform = "translateY(-4px)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.border = "1px solid #30363d";
        e.currentTarget.style.boxShadow = "none";
        e.currentTarget.style.transform = "translateY(0)";
      }}
    >
      {/* icon */}
      <div
        style={{
          marginBottom: "12px",
          color: "#58a6ff",
        }}
      >
        {Icon && <Icon size={20} />}
      </div>

      {/* title */}
      <h3 style={{ margin: "0 0 10px 0" }}>{title}</h3>

      {/* desc */}
      <p style={{ color: "#8b949e", marginBottom: "12px" }}>
        {desc}
      </p>

      {/* fake link */}
      <span
        style={{
          color: "#58a6ff",
          fontSize: "14px",
        }}
      >
        View Details →
      </span>
    </div>
  );
}

// 🔹 主頁
export default function App() {
  return (
    <div
      style={{
        background: "#0b1220",
        color: "#c9d1d9",
        minHeight: "100vh",
        fontFamily: "system-ui, sans-serif",
        padding: "40px 20px",
      }}
    >
      <div style={{ maxWidth: "1100px", margin: "0 auto" }}>
        
        {/* HERO */}
        <section style={{ textAlign: "center", marginBottom: "72px" }}>
          <h1 style={{ fontSize: "48px", margin: 0 }}>
            Lin Tz-Xiang (Tzvi)
          </h1>
          <h3 style={{ color: "#58a6ff", marginTop: "10px" }}>
            SI Engineer × Tool Builder
          </h3>
          <p style={{ color: "#8b949e" }}>
            Solving real hardware engineering pain points with Python and frontend tools
          </p>
        </section>

        {/* ABOUT */}
        <section style={{ marginBottom: "72px" }}>
          <SectionTitle title="About" />
          <p style={{ textAlign: "center", maxWidth: "700px", margin: "0 auto", color: "#8b949e" }}>
            M.S. in Electrical Engineering, specializing in high-speed Signal Integrity (PCIe / HFSS / ADS).
            I build automation tools and custom arcade systems in my free time.
          </p>
        </section>

        {/* SKILLS */}
        <section style={{ marginBottom: "72px" }}>
          <SectionTitle title="Skills" />
          <div style={{ display: "flex", justifyContent: "center", flexWrap: "wrap", gap: "12px" }}>
            {[
  { name: "Python", icon: Cpu },
  { name: "HFSS / ADS", icon: Activity },
  { name: "React", icon: Code2 },
  { name: "Discord Bot", icon: Bot },
  { name: "Linux / Docker", icon: Terminal },
]
.map((skill) => (
  <div
    key={skill.name}
    style={{
      background: "#161b22",
      padding: "10px 16px",
      borderRadius: "10px",
      border: "1px solid #30363d",
      display: "flex",
      alignItems: "center",
      gap: "6px",
      transition: "all 0.25s ease",
      cursor: "default",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.border = "1px solid #58a6ff";
      e.currentTarget.style.boxShadow = "0 0 12px rgba(88,166,255,0.25)";
      e.currentTarget.style.transform = "translateY(-2px)";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.border = "1px solid #30363d";
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.transform = "translateY(0)";
    }}
  >
    <skill.icon size={16} />
    <span>{skill.name}</span>
  </div>
))}
          </div>
        </section>

        {/* PROJECTS */}
        <section style={{ marginBottom: "72px" }}>
          <SectionTitle title="Projects" />
          <div
  style={{
    display: "grid",
    gridTemplateColumns: "repeat(auto-fit, minmax(280px, 320px))",
    gap: "24px",
    justifyContent: "center",
  }}
>
           <ProjectCard
  title="PCIe SI Analysis Dashboard"
  desc="S-parameter analysis + PCIe compliance + visualization"
  icon={Activity}
/>

<ProjectCard
  title="Engineering Progress Tracker"
  desc="Real-time engineering tracking dashboard with audit logs"
  icon={Cpu}
/>

<ProjectCard
  title="Arcade Controller Integration"
  desc="Custom arcade setup with hardware + acoustic design"
  icon={Terminal}
/>

<div style={{ gridColumn: "1 / -1", display: "flex", justifyContent: "center" }}>
  <div style={{ width: "320px" }}>
    <ProjectCard
      title="Discord Automation Bot"
      desc="Automation bot for scheduling and repetitive workflows"
      icon={Bot}
    />
  </div>
</div>
          </div>
        </section>

        {/* CONTACT */}
        <section style={{ textAlign: "center", marginTop: "80px" }}>
  <SectionTitle title="Contact" />

  <p style={{ color: "#8b949e", marginBottom: "20px" }}>
    aa3388997@gmail.com
  </p>

  <a
    href="https://www.linkedin.com/in/tzxia-lin-910b92384"
    target="_blank"
    rel="noopener noreferrer"
    style={{
      display: "inline-flex",
      alignItems: "center",
      gap: "8px",
      padding: "10px 20px",
      borderRadius: "10px",
      border: "1px solid #30363d",
      color: "#58a6ff",
      textDecoration: "none",
      transition: "all 0.25s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.background = "rgba(88,166,255,0.1)";
      e.currentTarget.style.boxShadow = "0 0 12px rgba(88,166,255,0.25)";
      e.currentTarget.style.border = "1px solid #58a6ff";
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.background = "transparent";
      e.currentTarget.style.boxShadow = "none";
      e.currentTarget.style.border = "1px solid #30363d";
    }}
  >
    <span style={{ fontWeight: "500" }}>LinkedIn</span>
    <span>→</span>
  </a>
</section>

      </div>
    </div>
  );
}