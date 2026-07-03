export function Footer() {
  return (
    <footer className="border-t border-white/5 py-8 bg-background">
      <div className="container mx-auto px-6 md:px-12 flex flex-col md:flex-row items-center justify-between gap-4 text-sm text-muted-foreground">
        <p>
          &copy; {new Date().getFullYear()} Andrew Narine. All rights reserved.
        </p>
        <p className="font-mono text-xs">
          AI &amp; Data Engineer &nbsp;·&nbsp; Barbados
        </p>
      </div>
    </footer>
  );
}
