import { Activity, Cpu, Code2, Bot, Terminal, Wrench, BarChart3, Music, Mail, ExternalLink } from "lucide-react";
import "./App.css";

/* ─── Section label ─── */
function SectionLabel({ text }) {
  return <div className="section-label">{text}</div>;
}

/* ─── Skill chip ─── */
function SkillChip({ name, primary }) {
  return (
    <span className={`skill-chip ${primary ? "primary" : ""}`}>
      {name}
    </span>
  );
}

/* ─── Project card ─── */
function ProjectCard({ title, desc, techs, status, icon: Icon }) {
  return (
    <div className="project-card">
      <div className="project-header">
        <div className="project-title-row">
          {Icon && <Icon size={18} className="project-icon" />}
          <span className="project-name">{title}</span>
        </div>
        <span className={`project-status ${status === "shipped" ? "status-done" : "status-wip"}`}>
          {status}
        </span>
      </div>
      <p className="project-desc">{desc}</p>
      <div className="project-tech">
        {techs.map((t) => (
          <span key={t} className="tech-tag">{t}</span>
        ))}
      </div>
    </div>
  );
}

/* ─── Main app ─── */
export default function App() {
  return (
    <div className="site-wrapper">
      <div className="site">

        {/* ── HERO ── */}
        <header className="hero">
          <h1 className="hero-name">Lin Tz-Xiang (Tzvi)</h1>
          <span className="hero-tag">SI Engineer × Tool Builder</span>
          <p className="hero-desc">
            Solving real hardware engineering pain points with Python and frontend tools.
            <br />
            If it can be automated, it should be.
          </p>
        </header>

        {/* ── ABOUT ── */}
        <section className="section">
          <SectionLabel text="about" />
          <p className="about-text">
            什麼都想拆開看看怎麼動的。電機碩士，白天做 PCIe 高速訊號完整性分析（HFSS / ADS），
            下班自幹 Python 自動化工具和街機控制器。相信好的工具應該讓工程師少開會、多做事。
          </p>
        </section>

        {/* ── SKILLS ── */}
        <section className="section">
          <SectionLabel text="skills" />
          <div className="skills-group">
            <div className="skills-row">
              <SkillChip name="Python" primary />
              <SkillChip name="HFSS / ADS" primary />
              <SkillChip name="S-parameter" primary />
            </div>
            <div className="skills-row">
              <SkillChip name="tkinter" />
              <SkillChip name="matplotlib" />
              <SkillChip name="openpyxl" />
              <SkillChip name="React" />
              <SkillChip name="Discord Bot" />
              <SkillChip name="Linux / Docker" />
            </div>
          </div>
        </section>

        {/* ── PROJECTS ── */}
        <section className="section">
          <SectionLabel text="projects" />

          <ProjectCard
            title="PCIe SI Analysis Dashboard"
            desc="讀取 Touchstone 檔，自動比對 PCIe 6/7/8 規格，一鍵產出 pass/fail 報告與頻率響應圖表。"
            techs={["Python", "tkinter", "matplotlib", "openpyxl"]}
            status="shipped"
            icon={BarChart3}
          />

          <ProjectCard
            title="Engineering Progress Tracker"
            desc="取代無效會議，工程師自主更新任務狀態，所有操作自動記錄工號，主管即時看板追蹤。"
            techs={["React", "Node.js", "SQLite"]}
            status="in progress"
            icon={Cpu}
          />

          <ProjectCard
            title="Arcade Controller Integration"
            desc="自建 43 吋直立街機環境，包含 segatools 整合、隔音工程與噪音量測優化。"
            techs={["Hardware", "Acoustic design", "segatools"]}
            status="shipped"
            icon={Music}
          />

          <ProjectCard
            title="Discord Automation Bot"
            desc="自動化排程與重複性操作，減少手動介入的個人效率工具。"
            techs={["Python", "Discord API"]}
            status="shipped"
            icon={Bot}
          />
        </section>

        {/* ── CONTACT ── */}
        <section className="section">
          <SectionLabel text="contact" />
          <div className="contact-grid">
            <div className="contact-item">
              <Mail size={16} className="contact-icon" />
              <a href="mailto:aa3388997@gmail.com">aa3388997@gmail.com</a>
            </div>
            <div className="contact-item">
              <ExternalLink size={16} className="contact-icon" />
              <a
                href="https://www.linkedin.com/in/tzxia-lin-910b92384"
                target="_blank"
                rel="noopener noreferrer"
              >
                TzXia Lin
              </a>
            </div>
          </div>
        </section>

        {/* ── FOOTER ── */}
        <footer className="footer">
          <span>Built with curiosity. Last updated 2026.</span>
        </footer>
      </div>
    </div>
  );
}