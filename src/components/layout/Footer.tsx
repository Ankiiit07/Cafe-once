
export default function Footer() {
  return (
    <footer className="bg-secondary text-secondary-foreground py-8 mt-auto">
      <div className="container mx-auto px-4 text-center">
        <p className="text-sm">&copy; {new Date().getFullYear()} CafeAtOnce. All rights reserved.</p>
        <p className="text-xs mt-1">CafeAtOnce: Perfect coffee, effortlessly.</p>
      </div>
    </footer>
  );
}
