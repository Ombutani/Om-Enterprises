import { ThemeToggle } from './ThemeToggle';

export function Navbar() {
  return (
    <nav className="...">
      {/* ... existing navbar content ... */}
      <div className="flex items-center gap-4">
        <ThemeToggle />
        {/* ... other navbar items ... */}
      </div>
    </nav>
  );
} 