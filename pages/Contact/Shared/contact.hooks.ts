import { useState } from 'react';

export const useContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => setIsSubmitted(false);

  return {
    isSubmitted,
    isLoading,
    handleSubmit,
    resetForm
  };
};
