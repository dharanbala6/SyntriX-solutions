import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import webPortfolio from '@/assets/web-portfolio.jpg';
import { 
  CheckCircle, 
  ArrowRight, 
  Globe, 
  Smartphone, 
  Zap, 
  Search,
  ShoppingCart,
  Palette,
  Code,
  Users,
  Clock,
  Star
} from 'lucide-react';

const WebDevelopment = () => {
  const services = [
    {
      icon: <Globe className="h-6 w-6" />,
      title: "Custom Website Development",
      description: "Tailored websites built from scratch to match your brand identity and business objectives."
    },
    {
      icon: <ShoppingCart className="h-6 w-6" />,
      title: "E-commerce Solutions",
      description: "Complete online stores with payment processing, inventory management, and customer analytics."
    },
    {
      icon: <Smartphone className="h-6 w-6" />,
      title: "Mobile-Responsive Design",
      description: "Websites that look and function perfectly on all devices, from desktop to mobile."
    },
    {
      icon: <Search className="h-6 w-6" />,
      title: "SEO Optimization",
      description: "Built-in SEO best practices to help your website rank higher in search results."
    },
    {
      icon: <Zap className="h-6 w-6" />,
      title: "Performance Optimization",
      description: "Lightning-fast loading times and optimized user experience for better conversions."
    },
    {
      icon: <Palette className="h-6 w-6" />,
      title: "UI/UX Design",
      description: "Beautiful, intuitive designs that engage your visitors and drive business results."
    }
  ];

  const portfolioExamples = [
    {
      title: "Restaurant Website",
      description: "Modern restaurant site with online reservations and menu showcase",
      features: ["Online Reservations", "Digital Menu", "Customer Reviews"]
    },
    {
      title: "E-commerce Store",
      description: "Complete online shopping experience with secure payment processing",
      features: ["Product Catalog", "Secure Payments", "Order Management"]
    },
    {
      title: "Corporate Website",
      description: "Professional business presence with company information and services",
      features: ["Company Profile", "Service Showcase", "Contact Forms"]
    },
    {
      title: "Portfolio Website",
      description: "Creative showcase for artists, photographers, and professionals",
      features: ["Image Gallery", "Project Showcase", "Client Testimonials"]
    }
  ];

  const benefits = [
    "Increase online visibility and brand awareness",
    "Generate more leads and convert visitors to customers",
    "Provide 24/7 accessibility to your business information",
    "Compete effectively in the digital marketplace",
    "Reduce operational costs with automated processes",
    "Scale your business reach beyond geographical limits"
  ];

  const process = [
    {
      step: "1",
      title: "Discovery & Planning",
      description: "We understand your business goals, target audience, and project requirements."
    },
    {
      step: "2",
      title: "Design & Prototyping",
      description: "Create wireframes and designs that align with your brand and user expectations."
    },
    {
      step: "3",
      title: "Development & Testing",
      description: "Build your website with clean code, test thoroughly, and ensure optimal performance."
    },
    {
      step: "4",
      title: "Launch & Support",
      description: "Deploy your website and provide ongoing maintenance and support services."
    }
  ];

  return (
    <div className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="py-20 bg-gradient-hero">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-6xl font-bold text-foreground mb-6">
                Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Web Development</span>
              </h1>
              <p className="text-xl text-muted-foreground mb-8">
                Transform your business with a stunning, high-performance website that drives results. 
                From concept to launch, we create digital experiences that engage your audience and grow your business.
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                  Get Your Business a Web
                  <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="professional" size="lg" className="text-lg px-8 py-4">
                  View Portfolio
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="bg-white rounded-2xl shadow-professional p-4">
                <img 
                  src={webPortfolio} 
                  alt="Web Development Portfolio" 
                  className="w-full h-auto rounded-lg"
                />
              </div>
              <div className="absolute -top-4 -right-4 bg-secondary text-secondary-foreground px-4 py-2 rounded-full font-semibold">
                Custom Designs
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Complete Web Development Services
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              From simple business websites to complex e-commerce platforms, 
              we provide end-to-end web development solutions tailored to your needs.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {services.map((service, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center text-primary-foreground mb-4">
                    {service.icon}
                  </div>
                  <CardTitle className="text-xl">{service.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {service.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Portfolio Examples */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Portfolio Examples
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover the variety of websites we've created for businesses across different industries.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {portfolioExamples.map((example, index) => (
              <Card key={index} className="shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <CardTitle className="text-xl text-secondary">{example.title}</CardTitle>
                  <CardDescription className="text-base">
                    {example.description}
                  </CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-2">
                    {example.features.map((feature, featureIndex) => (
                      <div key={featureIndex} className="flex items-center space-x-2">
                        <CheckCircle className="h-4 w-4 text-secondary flex-shrink-0" />
                        <span className="text-sm text-muted-foreground">{feature}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <div>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-8">
                Why Your Business Needs a Professional Website
              </h2>
              <div className="space-y-4">
                {benefits.map((benefit, index) => (
                  <div key={index} className="flex items-start space-x-3">
                    <CheckCircle className="h-6 w-6 text-secondary flex-shrink-0 mt-0.5" />
                    <span className="text-muted-foreground text-lg">{benefit}</span>
                  </div>
                ))}
              </div>
            </div>
            <div className="bg-gradient-card rounded-2xl p-8 shadow-professional">
              <div className="text-center mb-6">
                <Globe className="h-12 w-12 text-secondary mx-auto mb-4" />
                <h3 className="text-2xl font-bold text-foreground mb-2">Global Reach</h3>
                <p className="text-muted-foreground">
                  Expand your business presence and reach customers worldwide
                </p>
              </div>
              <div className="grid grid-cols-2 gap-4 text-center">
                <div>
                  <div className="text-3xl font-bold text-secondary">90%</div>
                  <div className="text-sm text-muted-foreground">Mobile Users</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">3s</div>
                  <div className="text-sm text-muted-foreground">Load Time</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">24/7</div>
                  <div className="text-sm text-muted-foreground">Availability</div>
                </div>
                <div>
                  <div className="text-3xl font-bold text-secondary">100+</div>
                  <div className="text-sm text-muted-foreground">Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Process Section */}
      <section className="py-20 bg-muted/30">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Our Development Process
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              We follow a proven methodology to ensure your project is delivered on time, 
              within budget, and exceeds your expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {process.map((step, index) => (
              <Card key={index} className="text-center shadow-card hover:shadow-hover transition-all duration-300 hover:-translate-y-2">
                <CardHeader>
                  <div className="w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground text-2xl font-bold mx-auto mb-4">
                    {step.step}
                  </div>
                  <CardTitle className="text-xl">{step.title}</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base">
                    {step.description}
                  </CardDescription>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <div className="bg-gradient-card rounded-2xl p-12 shadow-professional">
            <h2 className="text-3xl md:text-5xl font-bold text-foreground mb-6">
              Ready to Get Your Business Online?
            </h2>
            <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
              Let's discuss your project and create a website that drives real business results. 
              Our team is ready to bring your vision to life.
            </p>
            
            <div className="flex items-center justify-center space-x-1 mb-6">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-5 w-5 text-secondary fill-current" />
              ))}
              <span className="ml-2 text-muted-foreground">4.9/5 from 200+ clients</span>
            </div>

            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button variant="hero" size="lg" className="text-lg px-8 py-4">
                Start Your Web Project
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
              <div className="flex items-center space-x-4 text-muted-foreground">
                <div className="flex items-center space-x-1">
                  <Clock className="h-4 w-4" />
                  <span className="text-sm">2-4 weeks delivery</span>
                </div>
                <div className="flex items-center space-x-1">
                  <Users className="h-4 w-4" />
                  <span className="text-sm">Dedicated team</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default WebDevelopment;