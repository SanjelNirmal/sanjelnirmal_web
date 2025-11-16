import { Card, CardHeader, CardTitle, CardContent } from "@/components/ui/card";

const Terms = () => {
  return (
    <div className="min-h-screen pt-24 pb-20 px-4 sm:px-6 lg:px-8">
      <div className="container mx-auto max-w-4xl">

        {/* Header */}
        <div className="text-center mb-14 animate-fade-in-up">
          <h1 className="font-heading text-4xl sm:text-5xl font-bold mb-4">
            Privacy Policy & Terms
          </h1>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Please read these policies carefully. Your presence in this devotional space 
            is deeply respected. 🙏
          </p>
        </div>

        {/* Content */}
        <Card className="shadow-devotional animate-fade-in-up">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">
              Privacy Policy
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="font-heading text-xl mb-2 text-primary">1. Information Collection</h2>
              <p>
                This website may collect your name, email address, and message when you submit 
                a contact form. No other personal data is collected without your consent.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl mb-2 text-primary">2. How Your Data Is Used</h2>
              <p>
                Your information is used solely for communication purposes, such as responding 
                to inquiries or collaboration requests. Your data is never sold, shared, or 
                used for advertising.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl mb-2 text-primary">3. Cookies</h2>
              <p>
                This site may use basic cookies for improving user experience (like dark/light 
                mode) but does not track personal behavior or store sensitive data.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl mb-2 text-primary">4. Data Protection</h2>
              <p>
                Your information is handled with utmost care. If you request deletion of your 
                data, it will be removed permanently from the system.
              </p>
            </section>

          </CardContent>
        </Card>

        {/* Terms Section */}
        <Card className="shadow-devotional animate-fade-in-up mt-12">
          <CardHeader>
            <CardTitle className="font-heading text-2xl">
              Terms & Conditions
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6 text-muted-foreground leading-relaxed">

            <section>
              <h2 className="font-heading text-xl mb-2 text-primary">1. Use of Website</h2>
              <p>
                This website is meant for devotional, artistic, and personal portfolio 
                purposes. Users agree not to misuse any content or perform unlawful actions.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl mb-2 text-primary">2. Content Ownership</h2>
              <p>
                All artworks, photos, graphics, and content on this website are the intellectual 
                property of <span className="font-semibold">Nirmal Sanjel</span>.
                Unauthorized reproduction, distribution, or commercial use is prohibited.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl mb-2 text-primary">3. External Links</h2>
              <p>
                External social links (Instagram, Facebook, etc.) are not controlled by this site. 
                Visiting them is at your own discretion.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl mb-2 text-primary">4. Limitation of Liability</h2>
              <p>
                The owner is not responsible for any damages or losses caused by misuse, 
                technical issues, or unauthorized actions.
              </p>
            </section>

            <section>
              <h2 className="font-heading text-xl mb-2 text-primary">5. Copyright Notice</h2>
              <p>
                © {new Date().getFullYear()} <span className="font-semibold">Nirmal Sanjel</span> —  
                All Rights Reserved.
              </p>
            </section>

          </CardContent>
        </Card>

        {/* Footer Note */}
        <p className="text-center mt-10 text-sm text-muted-foreground italic animate-fade-in-up">
          "With devotion and respect, these terms are presented in the spirit of transparency.  
          Radhe Radhe 🙏"
        </p>

      </div>
    </div>
  );
};

export default Terms;
