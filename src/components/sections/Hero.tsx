import { socialLinks } from '../../data';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient-rotate" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="profile-pic-container mb-8">
            <div className="w-40 h-40 bg-gradient-primary rounded-full mx-auto flex items-center justify-center text-4xl text-white">
              צ"א
            </div>
          </div>

          <h1 className="text-4xl md:text-6xl font-bold mb-4">
            צביקה אבנרי
          </h1>

          <h2 className="text-xl md:text-2xl text-text-muted mb-8">
            יועץ אסטרטגי ומלווה סטארטאפים
          </h2>

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
    </section>
  );
}; 