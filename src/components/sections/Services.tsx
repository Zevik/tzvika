import { services } from '../../data';

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-pattern">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          השירותים שלי
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ id, title, description, icon: Icon }) => (
            <div key={id} className="bg-white dark:bg-gray-800 rounded-lg p-6 shadow-lg">
              <div className="mb-6">
                <Icon className="w-12 h-12 text-primary-color" />
              </div>
              
              <h3 className="text-xl font-bold mb-4">
                {title}
              </h3>
              
              <p className="text-text-muted">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 