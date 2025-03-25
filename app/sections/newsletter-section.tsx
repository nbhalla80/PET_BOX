import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogDescription, DialogClose } from '@/components/ui/dialog';

const NewsletterSection = () => {
  const [email, setEmail] = useState('');
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    
    // Basic email validation
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      alert('Please enter a valid email address');
      return;
    }

    // Here you would typically send the email to your backend
    // For this example, we'll just open the modal
    setIsModalOpen(true);
  };

  return (
    <>
      <section className="py-16 bg-primary-teal text-white">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4">Join Our Pack</h2>
          <p className="text-lg mb-8 max-w-2xl mx-auto">
            Subscribe to our newsletter for exclusive offers, pet care tips, and updates on new box themes.
          </p>
          <form 
            onSubmit={handleSubscribe} 
            className="flex flex-col sm:flex-row max-w-md mx-auto gap-4"
          >
            <Input
              type="email"
              placeholder="Your email address"
              className="bg-white text-dark-text"
              aria-label="Email address"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              required
            />
            <Button 
              type="submit" 
              className="bg-golden-yellow hover:bg-golden-yellow/90 text-dark-text"
            >
              Subscribe
            </Button>
          </form>
        </div>
      </section>

      <Dialog open={isModalOpen} onOpenChange={setIsModalOpen}>
        <DialogContent className="sm:max-w-md">
          <DialogHeader>
            <DialogTitle>Thank You for Subscribing!</DialogTitle>
            <DialogDescription>
              You've successfully joined our pack. Get ready for exclusive pet care tips, offers, and exciting box themes delivered straight to your inbox!
            </DialogDescription>
          </DialogHeader>
          <div className="flex justify-end">
            <DialogClose asChild>
              <Button type="button" variant="secondary">
                Close
              </Button>
            </DialogClose>
          </div>
        </DialogContent>
      </Dialog>
    </>
  );
};

export default NewsletterSection;