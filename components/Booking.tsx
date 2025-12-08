import React, { useState } from 'react';
import { MessageSquare, Mail, ArrowRight, Clock, CheckCircle2, MessageCircle, Loader2, Check } from 'lucide-react';

const Booking: React.FC = () => {
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSuccess, setIsSuccess] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    const formData = new FormData(e.currentTarget);
    
    try {
        const response = await fetch("https://api.web3forms.com/submit", {
            method: "POST",
            body: formData
        });
        
        if (response.ok) {
            setIsSuccess(true);
        }
    } catch (error) {
        console.error("Form submission error", error);
    } finally {
        setIsSubmitting(false);
    }
  };

  return (
    <section id="booking" className="py-24 px-6 bg-neutral-900 text-white relative overflow-hidden">
      {/* Decorative background elements */}
      <div className="absolute top-0 left-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl -translate-x-1/2 -translate-y-1/2"></div>
      <div className="absolute bottom-0 right-0 w-96 h-96 bg-indigo-500/10 rounded-full blur-3xl translate-x-1/2 translate-y-1/2"></div>

      <div className="max-w-7xl mx-auto relative z-10">
        <div className="relative overflow-hidden ring-1 ring-white/10 bg-white/5 rounded-3xl backdrop-blur-xl">

          {/* Content */}
          <div className="relative z-10 md:p-12 lg:p-16 pt-8 pr-8 pb-8 pl-8">
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
              
              {/* Form card (Left) */}
              <div className="lg:col-span-5">
                <div className="ring-1 ring-white/20 bg-white/95 rounded-2xl pt-6 pr-6 pb-6 pl-6 shadow-lg backdrop-blur">
                  <div className="flex items-center justify-between">
                    <div className="">
                      <p className="text-[11px] text-neutral-500 font-sans uppercase tracking-wider">Clinton Agency</p>
                      <h3 className="mt-1 text-2xl sm:text-3xl font-semibold tracking-tight text-neutral-900 font-serif">
                        Start Your Project
                      </h3>
                    </div>
                    <div className="h-9 w-9 rounded-lg bg-neutral-900 text-white flex items-center justify-center">
                      <MessageSquare className="h-4 w-4" />
                    </div>
                  </div>

                  {isSuccess ? (
                    <div className="mt-6 py-12 flex flex-col items-center text-center animate-fade-in">
                        <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mb-4 text-green-600">
                            <Check size={32} />
                        </div>
                        <h4 className="text-xl font-bold text-neutral-900 mb-2">Application Received</h4>
                        <p className="text-sm text-neutral-500">We'll analyze your request and reply within 24 hours.</p>
                        <button onClick={() => setIsSuccess(false)} className="mt-6 text-xs text-indigo-500 font-semibold hover:underline">Send another message</button>
                    </div>
                  ) : (
                    <form onSubmit={handleSubmit} className="mt-6 space-y-4">
                        
                        {/* INSTRUCTIONS: Get your free Access Key from https://web3forms.com/ and paste it below */}
                        <input type="hidden" name="access_key" value="97bec017-c917-43a4-a023-5a33f0b24916" />
                        
                        <div className="">
                        <label htmlFor="ct-name" className="block text-xs text-neutral-600 font-sans dark:text-neutral-500">Your name<span className="text-neutral-400"> *</span></label>
                        <input id="ct-name" name="name" type="text" required placeholder="Jane Doe" className="mt-1 w-full pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white text-neutral-900 placeholder:text-neutral-400 font-sans" />
                        </div>
                        <div className="">
                        <label htmlFor="ct-email" className="block text-xs text-neutral-600 font-sans dark:text-neutral-500">Email<span className="text-neutral-400"> *</span></label>
                        <div className="relative mt-1">
                            <Mail className="h-4 w-4 text-neutral-400 absolute left-3 top-1/2 -translate-y-1/2" />
                            <input id="ct-email" name="email" type="email" required placeholder="you@example.com" className="w-full pl-9 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white text-neutral-900 placeholder:text-neutral-400 font-sans" />
                        </div>
                        </div>
                        <div className="">
                        <label htmlFor="ct-msg" className="block text-xs text-neutral-600 font-sans dark:text-neutral-500">Message</label>
                        <textarea id="ct-msg" name="message" rows={4} placeholder="Tell us about your brand goals..." className="mt-1 w-full resize-y pl-3 pr-3 py-2.5 text-sm rounded-xl ring-1 ring-black/10 focus:ring-2 focus:ring-neutral-900 outline-none bg-white text-neutral-900 placeholder:text-neutral-400 font-sans"></textarea>
                        </div>
                        <button 
                            type="submit" 
                            disabled={isSubmitting}
                            className="w-full inline-flex items-center justify-center rounded-xl bg-neutral-900 text-white px-4 py-3 text-sm font-semibold hover:bg-neutral-800 transition-colors font-sans disabled:opacity-70 disabled:cursor-not-allowed"
                        >
                        {isSubmitting ? (
                            <>
                                <Loader2 className="animate-spin h-4 w-4 mr-2" />
                                Sending...
                            </>
                        ) : (
                            <>
                                Submit Application
                                <ArrowRight className="h-4 w-4 ml-2" />
                            </>
                        )}
                        </button>
                        <p className="text-[11px] text-neutral-500 font-sans">By submitting, you agree to our Terms and Privacy Policy.</p>
                    </form>
                  )}
                </div>
              </div>

              {/* Copy + highlights (Right) */}
              <div className="lg:col-span-7">
                <h2 className="text-4xl sm:text-5xl lg:text-6xl leading-[1.05] font-semibold text-white tracking-tight font-serif">Dominance Starts Here.</h2>
                <p className="text-base sm:text-lg max-w-2xl text-white/80 mt-4 font-sans font-light">
                  Ready to stop competing and start leading? Tell us about your project. We analyze your current position and reply with a strategic roadmap within 24 hours.
                </p>

                <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-6">
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-white/90">
                      <Clock className="h-4 w-4" />
                    </div>
                    <div className="">
                      <p className="text-white font-semibold text-sm font-sans">24h Analysis</p>
                      <p className="text-white/70 text-xs font-sans">Our strategists review applications daily.</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="h-9 w-9 rounded-lg bg-white/10 backdrop-blur ring-1 ring-white/15 flex items-center justify-center text-white/90">
                      <CheckCircle2 className="h-4 w-4" />
                    </div>
                    <div className="">
                      <p className="text-white font-semibold text-sm font-sans">Selective Intake</p>
                      <p className="text-white/70 text-xs font-sans">We only work with brands ready to scale.</p>
                    </div>
                  </div>
                </div>

                {/* Direct contact card */}
                <div className="mt-8">
                  <div className="inline-flex gap-3 ring-1 ring-white/20 bg-white/95 rounded-2xl px-3 py-3 shadow-lg backdrop-blur items-center">
                    <img src="https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=200&auto=format&fit=crop" alt="Strategy Lead" className="h-12 w-12 rounded-xl object-cover grayscale" />
                    <div className="min-w-0">
                      <p className="text-[11px] text-neutral-500 leading-none font-sans uppercase tracking-wider">Strategy Lead</p>
                      <p className="text-neutral-900 font-semibold tracking-tight truncate font-sans">Max Clinton</p>
                    </div>
                    <a href="mailto:consult@clintonagency.com" className="ml-1 inline-flex items-center gap-2 rounded-xl bg-neutral-900 text-white px-3 py-2 text-xs font-semibold hover:bg-neutral-800 transition-colors font-sans">
                      Email Directly
                      <MessageCircle className="h-3.5 w-3.5" />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Booking;