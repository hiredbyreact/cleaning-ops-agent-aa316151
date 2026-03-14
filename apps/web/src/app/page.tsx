import { startupContent } from '../features/generated/startup-content';

export default function Page() {
  return (
    <main>
      <h1>{startupContent.productName}</h1>
      <p>{startupContent.tagline}</p>
      <p>{startupContent.summary}</p>
    </main>
  );
}
