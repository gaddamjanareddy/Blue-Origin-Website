import heroImage from '../../assets/Destinations/leo-destinations_hero.jpg';
import section2Image from '../../assets/Destinations/destinations_orbital-reef-under-coralteal.jpg'; 
import section3Image1 from '../../assets/Destinations/destinations_orbital-reef-exterior.jpg'
import section3Image2 from '../../assets/Destinations/destinations_Reef-Sunset.jpg'


const DestinationsData = {
  hero: {
    title: "LEO DESTINATIONS",
    backgroundImage: heroImage,
  },
  section1: {
    heading: "Living and Working in Space",
    text1: "Commercial destinations in LEO (low Earth orbit) are a key focus for NASA to ensure a smooth transition from the International Space Station.",
    text2: "An enormous amount of work and innovation is required to build mixed-use destinations for commerce, research, tourism, and more. Blue Origin is working with NASA, innovative businesses, and universities to make this vision a reality.",
    text3: "Our first commercial destination concept was revealed in late 2021. Called “Orbital Reef,” it is architected as a mixed-use business park 250 miles above Earth. Blue Origin continues to achieve milestones for NASA’s Commercial LEO Development program, referred to as CLD Phase 1."
  },
  section2: {
    image: section2Image,
  },
  section3: [
    {
      id: 1,
      title: "Your Address, in Orbit",
      text: "Reducing the costs associated with living and working in space is paramount to a vibrant future for the benefit of Earth. Blue Origin is focused on services, technical support, transportation, payload delivery, security, standardization, and delivering the best return on investment for NASA and future residents.",
      image: section3Image1
    },
    {
      id: 2,
      title:"The Experience",
      text: "Think spacious modules with large windows to view Earth, our blue origin, while experiencing the thrill of weightlessness in complete comfort. Distinct quarters will be designed for personal and business use, and large hatches create a safe and inspiring environment. We aim to provide a truly extraordinary experience, whether you are in orbit for research, logistics, tourism, or other applications.",
      image: section3Image2
    }
    
  ]
};

export default DestinationsData;
