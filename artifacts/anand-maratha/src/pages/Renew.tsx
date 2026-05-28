import { PageLayout, PageHero } from "@/components/layout/PageLayout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Sparkles, CheckCircle2 } from "lucide-react";

export default function Renew() {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
  };

  return (
    <PageLayout>
      <PageHero title="Renew Your Membership" subtitle="Continue your search with premium benefits" />
      
      <div className="container mx-auto px-4 py-12 max-w-4xl">
        <div className="bg-gradient-to-r from-primary/10 to-secondary/20 rounded-xl p-4 mb-8 text-center border border-primary/20 flex items-center justify-center gap-3">
          <Sparkles className="text-primary w-5 h-5" />
          <p className="text-primary font-medium text-sm md:text-base">Stay active and visible to new members joining every year</p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-5 gap-8">
          
          <div className="lg:col-span-3 space-y-8">
            <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
              <h2 className="text-xl font-serif font-bold text-primary mb-6 border-b border-border pb-2">Profile Details</h2>
              <form onSubmit={handleSubmit} className="space-y-5">
                <div className="space-y-2">
                  <Label htmlFor="memberId">Member ID</Label>
                  <Input id="memberId" required placeholder="e.g. MM148975" data-testid="input-renew-id" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="name">Full Name</Label>
                  <Input id="name" required placeholder="Name on profile" data-testid="input-renew-name" />
                </div>
                <div className="space-y-2">
                  <Label htmlFor="mobile">Registered Mobile Number</Label>
                  <Input id="mobile" required placeholder="+91" data-testid="input-renew-mobile" />
                </div>
              </form>
            </div>

            <div className="bg-card rounded-2xl shadow-sm border border-border p-6 md:p-8">
              <h2 className="text-xl font-serif font-bold text-primary mb-6 border-b border-border pb-2">Payment Details</h2>
              
              <div className="bg-primary/5 border border-primary/20 rounded-xl p-5 mb-6 text-center">
                <p className="text-lg font-bold text-primary mb-1">Annual Renewal Plan</p>
                <p className="text-2xl font-serif font-bold text-secondary">₹2,000 <span className="text-sm font-sans text-foreground/60 font-normal">/ year</span></p>
                <p className="text-xs text-foreground/60 mt-2 line-through">Regular price ₹2,999</p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                <div className="border border-border rounded-lg p-4 bg-muted/30">
                  <p className="font-medium text-sm mb-2 text-primary">UPI Transfer</p>
                  <p className="text-sm text-foreground/80 mb-1">UPI ID: <span className="font-bold">marathamangal@sbi</span></p>
                  <div className="mt-3 aspect-square w-32 mx-auto bg-white border border-border rounded flex items-center justify-center text-xs text-muted-foreground">
                    QR Placeholder
                  </div>
                </div>
                <div className="border border-border rounded-lg p-4 bg-muted/30">
                  <p className="font-medium text-sm mb-2 text-primary">Bank Transfer</p>
                  <p className="text-xs text-foreground/80 mb-1">Bank: State Bank of India</p>
                  <p className="text-xs text-foreground/80 mb-1">Name: Maratha Mangal</p>
                  <p className="text-xs text-foreground/80 mb-1">A/c No: 34567890123</p>
                  <p className="text-xs text-foreground/80">IFSC: SBIN0001234</p>
                </div>
              </div>

              <Button type="submit" size="lg" className="w-full bg-primary text-white hover:bg-accent font-bold" data-testid="button-submit-renew">
                Confirm Renewal Payment
              </Button>
            </div>
          </div>

          <div className="lg:col-span-2 space-y-6">
            <div className="bg-primary text-white rounded-2xl p-6 border border-primary shadow-md">
              <h3 className="font-serif font-bold text-lg mb-4 text-white border-b border-white/30 pb-2">Status Check</h3>
              <p className="text-sm opacity-90 leading-relaxed mb-4">
                Not sure if your membership has expired? Enter your details on the left, and our system will verify your status.
              </p>
              <div className="bg-black/20 rounded-lg p-4 text-center">
                <p className="text-xs text-white/70 mb-1">Example Status</p>
                <p className="text-sm font-medium text-white">Your membership expires on 31 Dec 2025</p>
              </div>
            </div>

            <div className="bg-card rounded-2xl border border-border p-6 shadow-sm">
              <h3 className="font-serif font-bold text-lg mb-4 text-primary">Renewal Benefits</h3>
              <ul className="space-y-3">
                <li className="flex gap-2 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> 1 Year Validity</li>
                <li className="flex gap-2 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> Express Interests to Unlimited Profiles</li>
                <li className="flex gap-2 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> Access to Unlimited Profiles</li>
                <li className="flex gap-2 text-sm text-foreground/80"><CheckCircle2 className="w-4 h-4 text-primary flex-shrink-0" /> View Additional Profile Information</li>
              </ul>
            </div>

            <div className="text-center text-sm text-foreground/70 p-4">
              Need help? Contact <a href="mailto:info@marathamangal.com" className="text-primary hover:underline">info@marathamangal.com</a> or <a href="tel:+917888036366" className="text-primary hover:underline">+91 7888036366</a>
            </div>
          </div>

        </div>
      </div>
    </PageLayout>
  );
}
