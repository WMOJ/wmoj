import { Logo } from "@/components/Logo";

export default function MaintenancePage() {
  const currentYear = new Date().getFullYear();

  return (
    <main className="relative z-10 flex min-h-screen flex-col items-center justify-center p-6 text-center animate-fade-in">
      <div className="flex flex-col items-center gap-8 max-w-2xl">
        <Logo size="lg" href={null} withText={true} priority />
        
        <div className="space-y-4">
          <h1 className="font-mono text-3xl font-bold tracking-tight text-foreground sm:text-4xl md:text-5xl">
            System Maintenance
          </h1>
          <p className="text-lg text-text-muted leading-relaxed sm:text-xl">
            We're currently performing scheduled maintenance to improve your experience. 
            We'll be back shortly. Thank you for your patience.
          </p>
        </div>

        <div className="mt-8 flex items-center justify-center gap-4 text-sm font-mono text-brand-primary/60">
          <div className="h-2 w-2 animate-pulse rounded-full bg-brand-primary" />
          <span>SERVER STATUS: MAINTAINING</span>
        </div>
      </div>

      <footer className="absolute bottom-12 text-sm text-text-muted font-mono tracking-wide">
        &copy; {currentYear} WMOJ. All rights reserved.
      </footer>
    </main>
  );
}
