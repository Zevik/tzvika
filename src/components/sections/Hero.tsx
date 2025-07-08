import { socialLinks } from '../../data';

export const Hero = () => {
  return (
    <section id="home" className="min-h-screen flex items-center relative overflow-hidden">
      {/* Gradient Overlay */}
      <div className="absolute inset-0 bg-gradient-hero animate-gradient-rotate" />
      
      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center">
          <div className="profile-pic-container mb-8">
            <img
              src="/images/profile.jpg"
              alt="צביקה אבנרי"
              className="profile-pic mx-auto"
            />
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

          <div className="flex justify-center space-x-6 space-x-reverse">
            {socialLinks.map(link => (
              <a
                key={link.id}
                href={link.url}
                target="_blank"
                rel="noopener noreferrer"
                className="social-link"
                aria-label={link.platform}
              >
                <i className={`icon-${link.icon}`} />
              </a>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}; 