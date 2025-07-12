import heroImage from '../../assets/Engines/BE-4Engine_Home-Hero.jpg'; 
import section2Image1 from '../../assets/Engines/BlueOrigin_NewShepard_BoosterLandingAlternate3.jpg'
import section2Image2 from '../../assets/Engines/be3u_hardware_2023.jpg'
import section2Image3 from '../../assets/Engines/be4_flight1_horizontal.jpg'
import section2Image4 from '../../assets/Engines/Engines_FirstBE-7.webp' 

const EnginesData = {
  hero: {
    title: "BLUE ORIGIN ENGINES",
    subtitle: "ROCKET ENGINES DESIGNED FOR REUSE",
    btn: "WATCH BE-4 HOTFIRES",
    backgroundImage: heroImage,
  },
  section1: {
    heading: "BLUE ORIGIN ENGINES",
    subheading: "Our Approach to Engines",
    text1: "Operationally reusable rockets demand high-performance engines capable of deep throttling for soft landings. Built for multiple uses, our family of engines is powering the next generation of rockets for commercial, civil, national security, and human spaceflight.",
    text2: "Blue Origin engines are designed and developed at our headquarters in Kent, WA. We produce the BE-4, BE-3U, and BE-7 engines in Huntsville, AL. Our engines and propulsion subsystems are thoroughly tested and qualified near Van Horn, TX and at Test Stand 4670 in Huntsville, AL."
  },
  section2: [
    {
      id: 1,
      title: "ENGINE",
      subtitle: "BE-3PM",
      text: "The BE-3PM was the first new liquid hydrogen-fueled rocket engine to be developed for production in America in over a decade.",
      btn: "EXPLORE BE-3PM",
      image: section2Image1
    },
    {
      id: 2,
      title: "ENGINE",
      subtitle:"BE-3U",
      text: "Optimized to operate in the vacuum of space, the BE-3U powers the New Glenn upper stage.",
      btn: "EXPLORE BE-3U",
      image: section2Image2
    },
    {
      id: 3,
      title: "ENGINE",
      subtitle:"BE-4",
      text: "The first oxygen-rich staged combustion engine designed and manufactured in the U.S. powers the next generation of American orbital rockets, including New Glenn.",
      btn: "EXPLORE BE-4",
      image: section2Image3
    },
    {
      id: 4,
      title: "ENGINE",
      subtitle:"BE-7",
      text: "BE-7 is a high-performance, dual-expander cycle engine that generates 10,000 lbf (44.5 kN) vacuum thrust in space.",
      btn: "EXPLORE BE-7",
      image: section2Image4
    }
  ]
};

export default EnginesData;
