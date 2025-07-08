import { services } from '../../data';

export const Services = () => {
  return (
    <section id="services" className="py-20 bg-pattern">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-12">
          השירותים שלי
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(service => (
            <div key={service.id} className="card">
              <div className="mb-6">
                <i className={`icon-${service.icon} text-4xl text-primary-color`} />
              </div>
              
              <h3 className="text-xl font-bold mb-4">
                {service.title}
              </h3>
              
              <p className="text-gray-600 dark:text-gray-300">
                {service.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}; 