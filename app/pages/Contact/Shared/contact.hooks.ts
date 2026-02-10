import { useState, type FormEvent } from 'react';

export const useContactForm = () => {
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [agreed, setAgreed] = useState(false);

  const handleSubmit = (e: FormEvent) => {
    e.preventDefault();
    if (!agreed) return;

    setIsLoading(true);
    // Simulate form submission
    setTimeout(() => {
      setIsLoading(false);
      setIsSubmitted(true);
    }, 1000);
  };

  const resetForm = () => {
    setIsSubmitted(false);
    setAgreed(false);
  };

  return {
    isSubmitted,
    isLoading,
    agreed,
    setAgreed,
    handleSubmit,
    resetForm
  };
};
