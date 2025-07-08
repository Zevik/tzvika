import { useState } from 'react';
import { socialLinks } from '../../data';

export const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitStatus, setSubmitStatus] = useState<'idle' | 'success' | 'error'>('idle');

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    try {
      // Add your form submission logic here
      await new Promise(resolve => setTimeout(resolve, 1000)); // Simulated API call
      setSubmitStatus('success');
      setFormData({ name: '', email: '', message: '' });
    } catch (error) {
      setSubmitStatus('error');
    } finally {
      setIsSubmitting(false);
    }
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
  };

  return (
    <section id="contact" className="py-20">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          צור קשר
        </h2>

        <form onSubmit={handleSubmit} className="max-w-2xl mx-auto">
          <div className="mb-6">
            <label htmlFor="name" className="block text-sm font-medium mb-2">
              שם מלא
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
              className="form-input w-full"
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="email" className="block text-sm font-medium mb-2">
              דואר אלקטרוני
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
              className="form-input w-full"
              disabled={isSubmitting}
            />
          </div>

          <div className="mb-6">
            <label htmlFor="message" className="block text-sm font-medium mb-2">
              הודעה
            </label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows={5}
              className="form-textarea w-full"
              disabled={isSubmitting}
            />
          </div>

          <button
            type="submit"
            className={`
              w-full py-3 px-6 rounded-lg font-medium
              transition-all duration-300
              ${isSubmitting ? 'bg-gray-400 cursor-not-allowed' : 'bg-primary-color hover:bg-accent-color'}
              text-white
            `}
            disabled={isSubmitting}
          >
            {isSubmitting ? 'שולח...' : 'שלח הודעה'}
          </button>

          {submitStatus === 'success' && (
            <p className="mt-4 text-success-color text-center">
              ההודעה נשלחה בהצלחה!
            </p>
          )}

          {submitStatus === 'error' && (
            <p className="mt-4 text-error-color text-center">
              אירעה שגיאה בשליחת ההודעה. אנא נסה שוב.
            </p>
          )}
        </form>

        <div className="social-links mt-16">
          <p className="text-center mb-6">או צור קשר באמצעות:</p>
          <div className="flex justify-center space-x-6 space-x-reverse">
            {socialLinks.map(({ id, platform, url, icon: Icon }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link hover:text-primary-color transition-colors"
                aria-label={platform}
              >
                <Icon className="w-8 h-8" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 