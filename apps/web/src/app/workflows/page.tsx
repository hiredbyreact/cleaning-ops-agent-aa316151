import { startupContent } from '../../features/generated/startup-content';

export default function Workflows() {
  return (
    <main>
      <h1>Workflow</h1>
      <p>{startupContent.workflowFocus}</p>
      <button>Run workflow</button>
    </main>
  );
}
