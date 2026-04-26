import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Toaster as Sonner } from "@/components/ui/sonner";
import { Toaster } from "@/components/ui/toaster";
import { TooltipProvider } from "@/components/ui/tooltip";
import Index from "./pages/Index.tsx";
import Installation from "./pages/Installation.tsx";
import QuickStart from "./pages/QuickStart.tsx";
import CliOverview from "./pages/CliOverview.tsx";
import CliScrape from "./pages/CliScrape.tsx";
import CliTransform from "./pages/CliTransform.tsx";
import Firecrawl from "./pages/Firecrawl.tsx";
import PythonApi from "./pages/PythonApi.tsx";
import ProjectStructure from "./pages/ProjectStructure.tsx";
import WebApp from "./pages/WebApp.tsx";
import Notes from "./pages/Notes.tsx";
import NotFound from "./pages/NotFound.tsx";

const queryClient = new QueryClient();

const App = () => (
  <QueryClientProvider client={queryClient}>
    <TooltipProvider>
      <Toaster />
      <Sonner />
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Index />} />
          <Route path="/installation" element={<Installation />} />
          <Route path="/quick-start" element={<QuickStart />} />
          <Route path="/cli" element={<CliOverview />} />
          <Route path="/cli/scrape" element={<CliScrape />} />
          <Route path="/cli/transform" element={<CliTransform />} />
          <Route path="/firecrawl" element={<Firecrawl />} />
          <Route path="/python-api" element={<PythonApi />} />
          <Route path="/project-structure" element={<ProjectStructure />} />
          <Route path="/web-app" element={<WebApp />} />
          <Route path="/notes" element={<Notes />} />
          {/* ADD ALL CUSTOM ROUTES ABOVE THE CATCH-ALL "*" ROUTE */}
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </TooltipProvider>
  </QueryClientProvider>
);

export default App;
