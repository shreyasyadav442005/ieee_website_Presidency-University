
import { ReactNode, useEffect } from "react";
import { useLocation } from "react-router-dom";
import Navigation from "./Navigation";
import Footer from "./Footer";
import AIAssistant from "./AIAssistant";

interface LayoutProps {
  children: ReactNode;
}

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const isHomePage = location.pathname === "/";

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex flex-col">
      <Navigation />
      <main className={`flex-1 ${isHomePage ? 'pt-32 sm:pt-36' : 'pt-16'}`}>
        {children}
      </main>
      <Footer />
      <AIAssistant />
    </div>
  );
};

export default Layout;
