import { missionStatements } from '@/data/missionStatements';
import useScrollAnimation from '@/hooks/useScrollAnimation';

const MissionStatements = () => {
  // Using the custom hook to animate the mission statements
  const assignRef = useScrollAnimation([], { duration: 0.8, delay: 0.1 });

  return (
    <>
      <section className='mission-statements py-16 px-4 bg-heroWhite'>
        <div className='container mx-auto text-center'>
          <h2 className='text-3xl font-bold mb-8'>Our Mission</h2>
          <div className='space-y-6'>
            {missionStatements.map((statement, index) => (
              <p
                key={index}
                ref={el => assignRef(el, index)} // Assign ref to each mission statement
                className='text-lg max-w-xl mx-auto opacity-0 transform translate-y-6' // Initial opacity 0 and y-offset
              >
                {statement}
              </p>
            ))}
          </div>
        </div>
      </section>

      <section className='signature pb-16 px-4 bg-heroWhite'>
        <div className='container mx-auto text-center'>
          <h3 className='text-2xl font-semibold mb-4'>
            A Commitment to our Clients
          </h3>
          <p className='mt-4 text-lg text-gray-500'>
            John Barsell, Owner & Founder
          </p>
        </div>
      </section>
    </>
  );
};

export default MissionStatements;
