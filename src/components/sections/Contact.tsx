import { useState } from 'react';
import { FaPaperPlane } from 'react-icons/fa';
import type { IconType } from 'react-icons';
import { socialLinks } from '../../data';

interface ContactIconProps {
  Icon: IconType;
  className?: string;
}

const ContactIcon = ({ Icon, className = '' }: ContactIconProps) => (
  <Icon className={className} />
);

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
    <section id="contact" className="py-20 bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          צור קשר
        </h2>
        <div className="max-w-2xl mx-auto">
          <form onSubmit={handleSubmit} className="space-y-6">
            <div>
              <label htmlFor="name" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                שם מלא
              </label>
              <input
                type="text"
                id="name"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="email" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                דוא"ל
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div>
              <label htmlFor="message" className="block text-sm font-medium text-gray-700 dark:text-gray-300 mb-1">
                הודעה
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={4}
                className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-700 dark:border-gray-600 dark:text-white"
              />
            </div>
            <div className="text-center">
              <button
                type="submit"
                disabled={isSubmitting}
                className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-blue-600 hover:bg-blue-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 dark:bg-blue-500 dark:hover:bg-blue-600"
              >
                <span>{isSubmitting ? 'שולח...' : 'שלח הודעה'}</span>
                <ContactIcon Icon={FaPaperPlane} className="mr-2 rtl:ml-2 rtl:mr-0 h-5 w-5" />
              </button>
            </div>

            {submitStatus === 'success' && (
              <p className="text-green-600 text-center">ההודעה נשלחה בהצלחה!</p>
            )}
            {submitStatus === 'error' && (
              <p className="text-red-600 text-center">אירעה שגיאה בשליחת ההודעה. נסה שוב מאוחר יותר.</p>
            )}
          </form>

          <div className="mt-12">
            <h3 className="text-xl font-bold text-center mb-6">
              או צור קשר באמצעות
            </h3>
            <div className="flex justify-center space-x-6 space-x-reverse">
              {socialLinks.map(({ id, platform, url, icon: Icon }) => (
                <a
                  key={id}
                  href={url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-text-muted hover:text-primary-color transition-colors"
                  aria-label={platform}
                >
                  <Icon className="w-8 h-8" />
                </a>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}; 