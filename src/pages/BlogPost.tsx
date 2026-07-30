import { Layout } from "@/components/Layout";
import { useParams, Link, Navigate } from "react-router-dom";
import { Button } from "@/components/ui/button";
import { ArrowLeft } from "lucide-react";
import { getBlogPosts } from "@/lib/blogData";
import { useSEO } from "@/hooks/useSEO";

export { getBlogPosts };

const BlogPost = () => {
  const { slug } = useParams();
  const post = getBlogPosts().find((p) => p.slug === slug || p.id === Number(slug));

  if (!post) {
    return <Navigate to="/blog" replace />;
  }

  useSEO({
    title: `${post.title} | Blog | Noemi Tomassetti`,
    description: post.excerpt,
    canonical: `https://www.noemitomassetti.it/blog/${post.slug || post.id}`,
    ogImage: post.image,
    ogType: "article",
    schema: [
      {
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
          },
          {
            "@type": "ListItem",
            "position": 3,
            "name": post.title,
            "item": `https://www.noemitomassetti.it/blog/${post.slug || post.id}`
          }
        ]
      },
      {
        "@context": "https://schema.org",
        "@type": "BlogPosting",
        "headline": post.title,
        "image": post.image,
        "datePublished": post.dateISO,
        "author": {
          "@type": "Person",
          "name": "Noemi Tomassetti",
          "url": "https://www.noemitomassetti.it",
          "jobTitle": "Assistente Virtuale per Professionisti",
          "description": "Assistente Virtuale e Segreteria Virtuale con oltre 25 anni di esperienza. Laureata in Mediazione Linguistica con 110 e lode e Master in Traduzione Specialistica."
        },
        "publisher": {
          "@type": "Organization",
          "name": "Noemi Tomassetti Virtual Assistant",
          "logo": {
            "@type": "ImageObject",
            "url": "https://www.noemitomassetti.it/favicon.png"
          }
        },
        "description": post.excerpt
      }
    ]
  });

  return (
    <Layout>
      <article className="container px-4 md:px-6 py-10 md:py-16 max-w-3xl mx-auto">
        <Button variant="ghost" asChild className="mb-8 -ml-4 text-foreground/70 hover:text-primary">
          <Link to="/blog">
            <ArrowLeft className="w-4 h-4 mr-2" />
            Torna al blog
          </Link>
        </Button>
        
        <div className="mb-10">
          <div className="flex items-center gap-4 mb-4">
            <span className="text-sm font-medium text-primary">{post.category}</span>
            <span className="text-sm text-muted-foreground">{post.date}</span>
          </div>
          <h1 className="text-3xl md:text-4xl font-bold text-primary leading-tight mb-6">
            {post.title}
          </h1>
          <p className="text-lg md:text-xl text-foreground/70 leading-relaxed mb-8">
            {post.excerpt}
          </p>
          <div className="w-full rounded-2xl overflow-hidden mb-10 shadow-lg border border-border/50 bg-muted/10 flex justify-center">
             <img src={post.image} alt={`Copertina articolo: ${post.title}`} width="800" height="500" loading="eager" fetchPriority="high" decoding="async" className="w-full max-h-[500px] h-auto object-contain" />
          </div>
        </div>

        <div 
          className="prose prose-invert prose-lg max-w-none text-foreground/90 
            prose-headings:text-primary prose-headings:font-bold 
            prose-h3:text-2xl prose-h3:mt-12 prose-h3:mb-6 
            prose-p:leading-relaxed prose-p:mb-8 
            prose-ul:list-disc prose-ul:pl-6 prose-ul:mb-8 
            prose-li:mb-3 prose-li:marker:text-primary prose-li:marker:font-bold prose-li:font-bold
            prose-strong:text-primary prose-strong:font-bold
            prose-a:text-primary prose-a:font-bold prose-a:no-underline hover:prose-a:underline"
          dangerouslySetInnerHTML={{ __html: post.content }}
        />

        <address rel="author" className="not-italic mt-16 p-6 md:p-8 bg-card border border-border/50 rounded-2xl flex flex-col sm:flex-row gap-6 items-center sm:items-start" itemScope itemType="https://schema.org/Person">
          <img src="https://vibe.filesafe.space/1776423224485175331/attachments/bbb7dfc5-9986-426b-b55f-1df8c6232a6b.jpg" alt="Foto di Noemi Tomassetti - Assistente Virtuale" width="100" height="100" loading="lazy" decoding="async" className="w-24 h-24 rounded-full object-cover border-2 border-primary/20 flex-shrink-0" itemProp="image" />
          <div className="text-center sm:text-left">
            <h2 className="text-xl font-bold text-primary mb-2" itemProp="name">Noemi Tomassetti</h2>
            <p className="text-sm text-primary/80 font-medium mb-3" itemProp="jobTitle">Assistente Virtuale per Professionisti</p>
            <p className="text-base text-foreground/80 leading-relaxed" itemProp="description">
              Con oltre 25 anni di esperienza, supporto liberi professionisti e piccole aziende nella gestione operativa, segreteria virtuale e back office. Laureata in Mediazione Linguistica (110 e lode) e specializzata in Traduzione, offro supporto multilingue (IT, EN, FR, ES) per ottimizzare il tuo tempo e l'organizzazione aziendale.
            </p>
          </div>
        </address>

        <div className="mt-16 pt-10 border-t border-border/50">
          <h2 className="text-2xl font-bold text-primary mb-6">Potrebbe interessarti anche...</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
            {getBlogPosts()
              .filter(p => p.id !== post.id && p.published !== false)
              .sort(() => 0.5 - Math.random())
              .slice(0, 2)
              .map(related => (
                <Link key={related.id} to={`/blog/${related.slug || related.id}`} className="group flex flex-col bg-card border border-border/50 rounded-xl overflow-hidden hover:border-primary/50 transition-all hover:shadow-md" aria-label={`Leggi l'articolo correlato: ${related.title}`}>
                  <div className="h-32 w-full bg-muted overflow-hidden">
                    <img src={related.image} alt={`Copertina articolo correlato: ${related.title}`} loading="lazy" decoding="async" width="400" height="200" className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" />
                  </div>
                  <div className="p-4">
                    <span className="text-xs font-medium text-primary mb-2 block">{related.category}</span>
                    <h3 className="text-base font-bold text-foreground group-hover:text-primary transition-colors line-clamp-2">{related.title}</h3>
                  </div>
                </Link>
              ))}
          </div>
        </div>
      </article>
    </Layout>
  );
};

export default BlogPost;
