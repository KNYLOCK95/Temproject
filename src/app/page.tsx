export default function Home() {
  return (
    <main className="container" style={{ minHeight: '100vh', display: 'flex', flexDirection: 'column', justifyContent: 'center', alignItems: 'flex-start', paddingBottom: '4rem' }}>
      <div style={{ maxWidth: '600px' }}>
        <h1 style={{ fontSize: '3rem', fontWeight: 700, letterSpacing: '-0.02em', marginBottom: '1rem', lineHeight: 1.2 }}>
          Event Management. <br />
          Built on Reputation.
        </h1>
        <p style={{ fontSize: '1.25rem', color: 'var(--muted-foreground)', marginBottom: '2rem' }}>
          Join the exclusive community. RSVP to high-profile events. Flake, and your reputation drops. Attend, and gain priority access.
        </p>
        <div style={{ display: 'flex', gap: '1rem' }}>
          <button className="btn btn-primary" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem' }}>Get Started</button>
          <button className="btn" style={{ padding: '0.75rem 1.5rem', fontSize: '1rem', backgroundColor: 'var(--muted)', color: 'var(--foreground)' }}>Learn More</button>
        </div>
      </div>
    </main>
  );
}
