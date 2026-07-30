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
          "url": "https://www.noemitomassetti.it"
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
             <img src={post.image} alt={post.title} className="w-full max-h-[500px] h-auto object-contain" />
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
      </article>
    </Layout>
  );
};

export default BlogPost;
