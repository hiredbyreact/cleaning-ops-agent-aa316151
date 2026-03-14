import { startupContent } from '../../features/generated/startup-content';

export default function Dashboard() {
  return (
    <main>
      <h1>Dashboard</h1>
      <ul>
        {startupContent.modules.map((module) => (
          <li key={module}>{module}</li>
        ))}
      </ul>
    </main>
  );
}
