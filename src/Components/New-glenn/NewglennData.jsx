import heroImage from '../../assets/newglenn/NewGlenn.jpg';
import section2Image from '../../assets/newglenn/newglenn_latestflight-ng1.jpg'; 
import section3Image1 from '../../assets/NewGlenn/newglenn_reusable-for-affordability.jpg'
import section3Image2 from '../../assets/NewGlenn/newglenn_twice-volume.jpg' 
import section3Image3 from '../../assets/NewGlenn/newglenn_single-configuration.jpg'
import section3Image4 from '../../assets/NewGlenn/newglenn_liquid-hydrogen-powered.jpg'
import section3Image5 from '../../assets/NewGlenn/ng_johnglenn-nasa.jpg'

const newGlennData = {
  hero: {
    title: "NEW GLENN",
    subtitle: "THE FOUNDATION FOR A NEW ERA",
    backgroundImage: heroImage,
  },
  section1: {
    heading: "New Glenn is our giant, reusable rocket built for bigger things.",
    button: "CONTACT SALES"
  },
  section2: {
    title1: "Latest Flight",
    title2: "NG-1",
    button: "WATCH THE REPLAY",
    image: section2Image,
    alt: "Reusable stage landing"
  },
  section3: [
    {
      id: 1,
      title: "Reusable for Affordability and Availability",
      text: "New Glenn's first stage is designed for a minimum of 25 flights. By operating like a commercial airliner (but with cleaner fuel), New Glenn will lead to significantly less waste and cost.",
      image: section3Image1
    },
    {
      id: 2,
      title:"Twice the Volume",
      text: "Seven meters. With twice the volume of smaller, five-meter class payload fairings, customers have more flexibility to package their payload in new ways.",
      image: section3Image2
    },
    {
      id: 3,
      title: "Single Configuration for Maximum Flexibility and Savings",
      text: "New Glenn is designed to accommodate a variety of payloads and destinations to meet the broadest range of customer needs, and significantly reduce cost per launch.",
      image: section3Image3
    },
    {
      id: 4,
      title: "Liquid Hydrogen-Powered Upper Stage Optimized for Performance",
      text: "New Glenn will launch payloads into high-energy orbits. It can carry more than 13 metric tons to geostationary transfer orbit (GTO) and 45 metric tons to low Earth orbit (LEO).",
      image: section3Image4
    },
    {
      id: 5,
      title: "First Step Toward Our Vision",
      text: "New Glenn is named after John Glenn, the first American to orbit Earth. The rocket is engineered with the safety and redundancy required to fly humans, and will enable our vision of building a road to space for the benefit of Earth.",
      image: section3Image5
    }
  ]
};

export default newGlennData;
