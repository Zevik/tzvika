import { socialLinks } from '../../data';
import { cn } from '../../utils';

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

          <h2 className="text-xl md:text-2xl text-accent-color mb-8">
            יזם סדרתי ויועץ אסטרטגי
          </h2>

          <blockquote className="max-w-2xl mx-auto mb-12 text-lg">
            מוביל חברות וסטארטאפים לצמיחה והצלחה דרך חשיבה אסטרטגית וניסיון עשיר בעולם היזמות
          </blockquote>

          <div className="flex justify-center gap-6">
            {socialLinks.map(({ id, url, platform, icon: Icon }) => (
              <a
                key={id}
                href={url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={platform}
              >
                <Icon className="w-6 h-6" />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 