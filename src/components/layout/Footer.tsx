import { socialLinks } from '../../data';

export const Footer = () => {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="py-8 bg-glass-bg backdrop-blur-md">
      <div className="container mx-auto px-4">
        <div className="flex flex-col md:flex-row justify-between items-center">
          <div className="text-center md:text-right mb-4 md:mb-0">
            <p className="text-sm">
              © {currentYear} צביקה אבנרי. כל הזכויות שמורות.
            </p>
          </div>

          <div className="flex space-x-4 space-x-reverse">
            {socialLinks.map(link => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-primary-color transition-colors"
                aria-label={link.platform}
              >
                <i className={`icon-${link.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </footer>
  );
}; 