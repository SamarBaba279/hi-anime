import { Helmet } from "react-helmet-async";
import { Link } from "react-router-dom";
import { Mail, MessageCircle } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

const DOMAIN = "https://hi-anime.lovable.app";

const ContactPage = () => (
  <>
    <Helmet>
      <title>Contact Hi Anime - Get in Touch</title>
      <meta name="description" content="Contact Hi Anime for support, feedback, or business inquiries. We'd love to hear from you." />
      <link rel="canonical" href={`${DOMAIN}/contact`} />
      <meta name="robots" content="index, follow" />
    </Helmet>

    <Navbar />
    <main className="container py-12 max-w-2xl">
      <nav className="text-xs text-muted-foreground mb-6 flex items-center gap-1" aria-label="Breadcrumb">
        <Link to="/" className="hover:text-primary">Home</Link> <span>/</span>
        <span className="text-foreground">Contact</span>
      </nav>

      <h1 className="font-heading text-3xl md:text-4xl font-extrabold mb-6">
        Contact <span className="text-gradient-pink">Us</span>
      </h1>

      <p className="text-muted-foreground mb-8">
        Have a question, feedback, or suggestion? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
      </p>

      <form className="space-y-4" onSubmit={e => { e.preventDefault(); alert("Thank you for your message!"); }}>
        <div>
          <label htmlFor="name" className="block text-sm font-medium mb-1">Name</label>
          <input id="name" type="text" required className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="Your name" />
        </div>
        <div>
          <label htmlFor="email" className="block text-sm font-medium mb-1">Email</label>
          <input id="email" type="email" required className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="your@email.com" />
        </div>
        <div>
          <label htmlFor="subject" className="block text-sm font-medium mb-1">Subject</label>
          <input id="subject" type="text" required className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50" placeholder="How can we help?" />
        </div>
        <div>
          <label htmlFor="message" className="block text-sm font-medium mb-1">Message</label>
          <textarea id="message" required rows={5} className="w-full bg-card border border-border rounded-xl px-4 py-3 text-sm text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-primary/50 resize-none" placeholder="Tell us what's on your mind..." />
        </div>
        <button type="submit" className="bg-primary hover:bg-primary/90 text-primary-foreground font-heading font-semibold px-8 py-3 rounded-xl transition-colors glow-pink">
          Send Message
        </button>
      </form>

      <div className="mt-12 grid sm:grid-cols-2 gap-4">
        <div className="bg-card border border-border rounded-xl p-6 text-center">
          <Mail className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="font-heading font-semibold mb-1">Email Support</h3>
          <p className="text-sm text-muted-foreground">support@hi-anime.lovable.app</p>
        </div>
        <div className="bg-card border border-border rounded-xl p-6 text-center">
          <MessageCircle className="w-8 h-8 text-primary mx-auto mb-3" />
          <h3 className="font-heading font-semibold mb-1">Community</h3>
          <p className="text-sm text-muted-foreground">Join our community for updates</p>
        </div>
      </div>
    </main>
    <Footer />
  </>
);

export default ContactPage;
