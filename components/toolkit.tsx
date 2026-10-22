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
      {expanded && !project && (
        <div className="tool-group-editorial">
          <h3>Research & evaluation</h3>
          <p>
            Research questions, study plans, synthesis, and usability tasks help
            connect design decisions to what needs to be learned.
          </p>
        </div>
      )}
    </div>
  );
}
