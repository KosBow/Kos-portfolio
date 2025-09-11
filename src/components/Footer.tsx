import { ArrowUp } from "lucide-react";

export const Footer = () => (
  <footer className="py-12 px-4 bg-card relative border-t border-border">
    <p className="text-sm text-muted-foreground absolute bottom-4 left-6">
      &copy; {new Date().getFullYear()} KosBow.co. All rights reserved.
    </p>

    <a
      href="#hero"
      className="fixed bottom-6 right-6 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-white shadow-lg hover:bg-primary/90 transition-colors"
    >
      <ArrowUp size={20} />
    </a>
  </footer>
);
