import { Layout } from "@/components/Layout";
import { NoeTomWorkspace } from "@/components/NoeTomWorkspace";
import { getLanguageFromPath } from "@/lib/i18n";
import { useLocation } from "react-router-dom";

export default function WorkspacePage() {
  const location = useLocation();
  const lang = getLanguageFromPath(location.pathname);

  return (
    <Layout lang={lang}>
      <div className="container max-w-6xl px-4 py-8 md:py-12">
        <NoeTomWorkspace />
      </div>
    </Layout>
  );
}
