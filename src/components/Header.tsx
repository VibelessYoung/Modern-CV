import { useState, useEffect } from "react";
import { Button } from "@/components/ui/button";
import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
} from "@/components/ui/navigation-menu";
import { Menu, X } from "lucide-react";

export function Header() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("hero");

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);

      const sections = [
        "hero",
        "about",
        "portfolio",
        "skills",
        "experience",
        "contact",
      ];
      const scrollPosition = window.scrollY + 200;

      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const offsetTop = element.offsetTop;
          const offsetHeight = element.offsetHeight;
          if (
            scrollPosition >= offsetTop &&
            scrollPosition < offsetTop + offsetHeight
          ) {
            setActiveSection(section);
            break;
          }
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToSection = (sectionId: string) => {
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: "smooth" });
      setIsMobileMenuOpen(false);
    }
  };

  const navItems = [
    { id: "about", label: "About" },
    { id: "skills", label: "Skills" },
    { id: "portfolio", label: "Portfolio" },
    { id: "experience", label: "Experience" },
    { id: "contact", label: "Contact" },
  ];

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        isScrolled
          ? "bg-background/95 backdrop-blur-sm border-b border-border"
          : "bg-transparent"
      }`}
      style={{ minHeight: "64px" }}
    >
      <div className="container mx-auto px-8 py-4 flex items-center justify-between">
        <button
          onClick={() => scrollToSection("hero")}
          className="text-2xl font-heading font-bold text-navbar-text hover:text-primary transition-colors cursor-pointer"
        >
          Portfolio
        </button>

        {/* Desktop Navigation */}
        <nav className="hidden md:block">
          <NavigationMenu>
            <NavigationMenuList className="flex gap-2">
              {navItems.map((item) => (
                <NavigationMenuItem key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={`px-4 py-2 text-navbar-text hover:text-primary transition-colors cursor-pointer font-normal relative group ${
                      activeSection === item.id ? "text-primary" : ""
                    }`}
                  >
                    {item.label}
                    <span
                      className={`absolute bottom-0 left-0 w-full h-0.5 bg-primary transform origin-left transition-transform duration-300 ${
                        activeSection === item.id
                          ? "scale-x-100"
                          : "scale-x-0 group-hover:scale-x-100"
                      }`}
                    />
                  </button>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
        </nav>

        {/* Mobile Menu Button */}
        <Button
          variant="ghost"
          size="icon"
          className="md:hidden bg-transparent text-navbar-text hover:bg-accent hover:text-accent-foreground"
          onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
        >
          {isMobileMenuOpen ? (
            <X className="w-6 h-6" />
          ) : (
            <Menu className="w-6 h-6" />
          )}
        </Button>
      </div>

      {/* Mobile Navigation */}
      {isMobileMenuOpen && (
        <div className="md:hidden bg-background border-t border-border">
          <nav className="container mx-auto px-8 py-6">
            <NavigationMenu orientation="vertical" className="w-full">
              <NavigationMenuList className="flex flex-col gap-2 w-full">
                {navItems.map((item) => (
                  <NavigationMenuItem key={item.id} className="w-full">
                    <button
                      onClick={() => scrollToSection(item.id)}
                      className={`w-full text-left px-4 py-3 text-navbar-text hover:text-primary hover:bg-accent rounded-lg transition-colors cursor-pointer font-normal ${
                        activeSection === item.id
                          ? "text-primary bg-accent"
                          : ""
                      }`}
                    >
                      {item.label}
                    </button>
                  </NavigationMenuItem>
                ))}
              </NavigationMenuList>
            </NavigationMenu>
          </nav>
        </div>
      )}
    </header>
  );
}
