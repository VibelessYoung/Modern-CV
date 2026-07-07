import { useState } from "react";
import { motion } from "framer-motion";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Mail, Github, Send } from "lucide-react";
import emailjs from "emailjs-com";
import { useToast } from "@/hooks/use-toast";

export function ContactSection() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const { toast } = useToast();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);

    try {
      await emailjs.send(
        "service_n7xix7t",
        "template_tlovqg7",
        {
          name: formData.name,
          email: formData.email,
          message: formData.message,
        },
        "Tarw5VCGRr3Tat9Xu",
      );

      toast({
        title: "Message Sent!",
        description:
          "Your message was sent successfully. I'll get back to you!",
      });

      setFormData({ name: "", email: "", message: "" });
    } catch (error) {
      console.error(error);

      toast({
        variant: "destructive",
        title: "Oops! Something went wrong",
        description: "Message failed to send. Please try again later.",
      });
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>,
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <section
      id="contact"
      className="relative py-32 overflow-hidden animate-section bg-neutral"
    >
      <div className="absolute inset-x-0 bottom-0 pointer-events-none h-1/3 bg-gradient-to-t from-blue-500/15 via-blue-400/5 to-transparent" />
      <div className="container px-8 mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8 }}
          viewport={{ once: true }}
          className="mb-16 text-center"
        >
          <h2
            className="mb-4 text-4xl font-bold leading-tight tracking-tight md:text-5xl font-heading text-foreground"
            style={{ letterSpacing: "-0.025em", lineHeight: "1.2" }}
          >
            Get In Touch
          </h2>
          <div className="w-24 h-1 mx-auto mb-6 rounded-full bg-gradient-1" />
          <p className="max-w-2xl mx-auto text-xl leading-relaxed text-muted-foreground">
            Have a project in mind or just want to chat? Feel free to reach out!
          </p>
        </motion.div>

        <div className="grid max-w-5xl gap-12 mx-auto md:grid-cols-2">
          {/* Contact Form */}
          <motion.div
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
          >
            <Card className="bg-card text-card-foreground border-border">
              <CardHeader>
                <CardTitle className="text-2xl font-bold font-heading text-card-foreground">
                  Send a Message
                </CardTitle>
                <CardDescription className="text-muted-foreground">
                  Fill out the form below and I'll get back to you as soon as
                  possible.
                </CardDescription>
              </CardHeader>
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  <div>
                    <label
                      htmlFor="name"
                      className="block mb-2 text-sm font-medium text-card-foreground"
                    >
                      Name
                    </label>
                    <Input
                      id="name"
                      name="name"
                      type="text"
                      required
                      value={formData.name}
                      onChange={handleChange}
                      className="bg-background text-foreground border-border focus:border-primary"
                      placeholder="Your name"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="email"
                      className="block mb-2 text-sm font-medium text-card-foreground"
                    >
                      Email
                    </label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      required
                      value={formData.email}
                      onChange={handleChange}
                      className="bg-background text-foreground border-border focus:border-primary"
                      placeholder="your.email@example.com"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="message"
                      className="block mb-2 text-sm font-medium text-card-foreground"
                    >
                      Message
                    </label>
                    <Textarea
                      id="message"
                      name="message"
                      required
                      value={formData.message}
                      onChange={handleChange}
                      className="bg-background text-foreground border-border focus:border-primary min-h-[150px]"
                      placeholder="Tell me about your project..."
                    />
                  </div>
                  <Button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full font-normal bg-primary text-primary-foreground hover:bg-primary/90"
                  >
                    {isSubmitting ? "Sending..." : "Send Message"}
                    <Send className="w-5 h-5 ml-2" />
                  </Button>
                </form>
              </CardContent>
            </Card>
          </motion.div>

          {/* Contact Info */}
          <motion.div
            initial={{ opacity: 0, x: 30 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
            viewport={{ once: true }}
            className="space-y-8"
          >
            <div>
              <h3 className="mb-6 text-2xl font-bold font-heading text-foreground">
                Connect With Me
              </h3>
              <div className="space-y-6">
                <a
                  href="mailto:vibelessyoung@gmail.com"
                  className="flex items-center gap-4 p-4 transition-colors border rounded-lg bg-card text-card-foreground border-border hover:border-primary group"
                >
                  <div className="p-3 transition-colors rounded-lg bg-primary/10 group-hover:bg-primary/20">
                    <Mail className="w-6 h-6 text-primary" strokeWidth={1.5} />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">Email</p>
                    <p className="font-medium text-card-foreground">
                      vibelessyoung@gmail.com
                    </p>
                  </div>
                </a>
                <a
                  href="https://github.com/VibelessYoung"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-4 p-4 transition-colors border rounded-lg bg-card text-card-foreground border-border hover:border-primary group"
                >
                  <div className="p-3 transition-colors rounded-lg bg-primary/10 group-hover:bg-primary/20">
                    <Github
                      className="w-6 h-6 text-primary"
                      strokeWidth={1.5}
                    />
                  </div>
                  <div>
                    <p className="text-sm text-muted-foreground">GitHub</p>
                    <p className="font-medium text-card-foreground">
                      View my repositories
                    </p>
                  </div>
                </a>
              </div>
            </div>

            <div className="p-8 border rounded-lg bg-card text-card-foreground border-border">
              <h4 className="mb-4 text-xl font-bold font-heading text-card-foreground">
                Let's Collaborate
              </h4>
              <p className="leading-relaxed text-card-foreground">
                I'm always interested in hearing about new projects and
                opportunities. Whether you have a question or just want to say
                hi, I'll do my best to get back to you!
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
