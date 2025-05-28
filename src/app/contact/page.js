import { Mail, Phone, Facebook, Linkedin, MapPin } from 'lucide-react';

const ContactPage = () => {
  return (
    <div className='contact-page text-neutral'>
      {/* Hero */}
      <section className='hero bg-cover bg-center text-white p-4 sm:p-12 section-margin-top'>
        <div className='container mx-auto text-center flex flex-col items-center py-32'>
          <h1 className='sm:text-4xl text-2xl font-semibold mb-4 text-shadow-md'>
            Contact Us
          </h1>
          <p className='text-lg mb-6 text-shadow-md'>
            For inquiries, quotes, or to discuss your project, please reach out
            to us using the contact information below
          </p>
        </div>
      </section>

      {/* Stacked Contact Section */}
      <section className='container mx-auto px-4 sm:px-8 py-16 flex flex-col items-center gap-4'>
        <ContactCard
          icon={<Phone className='w-6 h-6' />}
          title='Call or Text'
          value='925-260-4331'
          href='tel:+19252604331'
        />

        <ContactCard
          icon={<Mail className='w-6 h-6' />}
          title='Email'
          value='johnbarsell@yahoo.com'
          href='mailto:johnbarsell@yahoo.com'
        />

        <ContactCard
          icon={<Linkedin className='w-6 h-6' />}
          title='LinkedIn'
          value='john-barsell'
          href='https://www.linkedin.com/in/john-barsell-1601891b/'
        />

        <ContactCard
          icon={<Facebook className='w-6 h-6' />}
          title='Facebook'
          value='Visit Page'
          href='https://www.facebook.com/BarsellConstruction/'
        />

        <ContactCard
          icon={<MapPin className='w-6 h-6' />}
          title='Location'
          value='Alamo, CA'
          href='https://maps.google.com?q=Alamo,+CA'
        />

        {/* Map */}
        <div className='rounded-xl overflow-hidden shadow-md h-[300px] w-full max-w-md'>
          <iframe
            title='Map of Alamo CA'
            className='w-full h-full'
            loading='lazy'
            allowFullScreen
            src='https://www.google.com/maps/embed/v1/place?key=AIzaSyAEM9yxS-4KUJ_TMWma817QnlirkhK6hzg&q=Alamo,CA'
          />
        </div>
      </section>
    </div>
  );
};

const ContactCard = ({ icon, title, value, href }) => (
  <a
    href={href}
    target='_blank'
    rel='noopener noreferrer'
    className='w-full max-w-md flex items-center gap-4 p-4 rounded-xl shadow-sm transition-all bg-lightWhite hover:bg-nav group'
  >
    <div className='p-2 bg-primary/10 rounded-full text-primary text-lg'>
      {icon}
    </div>
    <div className='text-shadow-md'>
      <p className='font-semibold'>{title}</p>
      <p className='text-base group-hover:underline text-shadow-md'>{value}</p>
    </div>
  </a>
);

export default ContactPage;
