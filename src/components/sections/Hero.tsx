import { socialLinks } from '../../data';
import { IconType } from 'react-icons';

interface SocialIconProps {
  Icon: IconType;
  className?: string;
}

const SocialIcon = ({ Icon, className = '' }: SocialIconProps) => (
  <Icon className={className} />
);

const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center bg-gray-50 dark:bg-gray-900">
      <div className="container mx-auto px-4 py-16 text-center">
        <h1 className="text-5xl md:text-6xl font-bold mb-6 text-gray-900 dark:text-white">
          צביקה ישראלי
        </h1>
        <p className="text-xl md:text-2xl mb-8 text-gray-600 dark:text-gray-300">
          יועץ אסטרטגי ומנטור לסטארטאפים
        </p>
        <div className="flex justify-center space-x-6 rtl:space-x-reverse">
          {socialLinks.map(({ id, url, icon: Icon }) => (
            <a
              key={id}
              href={url}
              target="_blank"
              rel="noopener noreferrer"
              className="text-gray-600 hover:text-gray-900 dark:text-gray-400 dark:hover:text-white transition-colors"
            >
              <SocialIcon Icon={Icon} className="w-8 h-8" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Hero; 