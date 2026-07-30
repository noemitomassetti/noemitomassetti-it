import { Layout } from "@/components/Layout";
import { Link } from "react-router-dom";
import { getBlogPosts } from "./BlogPost";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { useSEO } from "@/hooks/useSEO";

const Blog = () => {
  useSEO({
    title: "Blog Assistente Virtuale | Noemi Tomassetti",
    description: "Scopri guide pratiche, strumenti e consigli di un'Assistente Virtuale per gestire la tua attività, risparmiare tempo e ridurre lo stress.",
    canonical: "https://www.noemitomassetti.it/blog",
    schema: {
      "@context": "https://schema.org",
      "@type": "BreadcrumbList",
      "itemListElement": [
        {
          "@type": "ListItem",
          "position": 1,
          "name": "Home",
          "item": "https://www.noemitomassetti.it/"
        },
        {
          "@type": "ListItem",
          "position": 2,
          "name": "Blog",
          "item": "https://www.noemitomassetti.it/blog"
        }
      ]
    }
  });

  return (
    <Layout>
      <div className="container px-4 md:px-6 py-10 md:py-16">
        <div className="max-w-3xl mx-auto text-center mb-12">
          <h1 className="text-3xl sm:text-4xl md:text-5xl font-bold text-primary mb-4">
            Blog Assistente Virtuale: Risorse per Ottimizzare il Tuo Lavoro
          </h1>
          <p className="text-lg md:text-xl text-foreground/80">
            Scopri guide pratiche, strumenti e consigli di un'Assistente Virtuale per gestire la tua attività in modo più intelligente. Risparmia tempo, riduci lo stress e aumenta i tuoi margini.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {getBlogPosts()
            .filter(post => post.published !== false)
            .sort((a, b) => b.dateISO.localeCompare(a.dateISO))
            .map((post) => (
            <Card key={post.id} className="flex flex-col h-full bg-card border-border/50 hover:border-primary/50 transition-colors overflow-hidden">
              <div className="h-48 w-full bg-muted overflow-hidden">
                <img src={post.image} alt={post.title} className="w-full h-full object-contain bg-background opacity-90 transition-transform duration-500 hover:scale-105" />
              </div>
              <CardHeader className="pt-4">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-sm font-medium text-primary">{post.category}</span>
                  <span className="text-sm text-muted-foreground">{post.date}</span>
                </div>
                <h2 className="text-lg font-semibold tracking-tight text-primary leading-tight">{post.title}</h2>
              </CardHeader>
              <CardContent className="flex-grow flex flex-col justify-between">
                <CardDescription className="text-sm text-card-foreground/80 mb-5">
                  {post.excerpt}
                </CardDescription>
                <Button variant="outline" className="w-full mt-auto text-sm" asChild>
                  <Link to={`/blog/${post.slug || post.id}`}>Leggi di più</Link>
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </Layout>
  );
};

export default Blog;
