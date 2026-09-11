import { toolkit, projectTools } from '@/data/toolkit';
export function Toolkit({
  project,
  expanded = false,
}: {
  project?: string;
  expanded?: boolean;
}) {
  const groups = project ? projectTools[project] : toolkit;
  return (
    <div className={`toolkit ${project ? 'project-toolkit' : ''}`}>
      {groups.map((group) => (
        <div className="tool-group-editorial" key={group.label}>
          <h3>{group.label}</h3>
          <ul>
            {group.tools.map((tool) => (
              <li key={tool}>{tool}</li>
            ))}
          </ul>
          {(expanded || !project) && group.note && <p>{group.note}</p>}
        </div>
      ))}
      {project && (
        <p className="caption tool-provenance">
          Project tools confirmed by source configuration. Figma, Sketch, and
          Adobe XD belong to my overall toolkit; their use on this specific
          project has not yet been documented.
        </p>
      )}
      {expanded && !project && (
        <div className="tool-group-editorial">
          <h3>Research & evaluation</h3>
          <p>
            Research planning and synthesis are represented through the work. No
            commercial research platform is attributed without confirmed usage.
          </p>
        </div>
      )}
    </div>
  );
}
