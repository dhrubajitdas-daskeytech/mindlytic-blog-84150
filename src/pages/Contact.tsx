import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("Thank you for your message! We'll get back to you soon.");
  };

  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="container mx-auto px-4 py-12">
        <div className="max-w-2xl mx-auto">
          <h1 className="text-4xl font-bold text-foreground mb-6">Contact Us</h1>
          <p className="text-muted-foreground mb-8">
            Have questions, suggestions, or feedback? We'd love to hear from you. Fill out the form below and we'll get back to you as soon as possible.
          </p>
          
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-foreground mb-2">
                Name
              </label>
              <Input 
                id="name" 
                type="text" 
                placeholder="Your name" 
                required 
                className="bg-card border-border"
              />
            </div>
            
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-foreground mb-2">
                Email
              </label>
              <Input 
                id="email" 
                type="email" 
                placeholder="you@example.com" 
                required 
                className="bg-card border-border"
              />
            </div>
            
            <div>
              <label htmlFor="subject" className="block text-sm font-medium text-foreground mb-2">
                Subject
              </label>
              <Input 
                id="subject" 
                type="text" 
                placeholder="What's this about?" 
                required 
                className="bg-card border-border"
              />
            </div>
            
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-foreground mb-2">
                Message
              </label>
              <Textarea 
                id="message" 
                placeholder="Your message..." 
                required 
                rows={6}
                className="bg-card border-border"
              />
            </div>
            
            <Button 
              type="submit" 
              className="bg-gradient-to-r from-primary to-[#ffb86b] text-primary-foreground hover:opacity-90 shadow-lg w-full"
            >
              Send Message
            </Button>
          </form>
        </div>
      </main>
      <Footer />
    </div>
  );
};

export default Contact;
