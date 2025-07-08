import { services } from '../../data';
import { IconType } from 'react-icons';

interface ServiceIconProps {
  Icon: IconType;
  className?: string;
}

const ServiceIcon = ({ Icon, className = '' }: ServiceIconProps) => (
  <Icon className={className} />
);

const Services = () => {
  return (
    <section id="services" className="py-20 bg-white dark:bg-gray-800">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-12 text-gray-900 dark:text-white">
          השירותים שלי
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map(({ id, title, description, icon: Icon }) => (
            <div
              key={id}
              className="p-6 bg-gray-50 dark:bg-gray-700 rounded-lg shadow-lg hover:shadow-xl transition-shadow"
            >
              <div className="flex items-center justify-center mb-4">
                <ServiceIcon Icon={Icon} className="w-12 h-12 text-blue-600 dark:text-blue-400" />
              </div>
              <h3 className="text-xl font-semibold mb-3 text-center text-gray-900 dark:text-white">
                {title}
              </h3>
              <p className="text-gray-600 dark:text-gray-300 text-center">
                {description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Services; 