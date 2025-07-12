import heroImage from '../../assets/BlueRing/bluering01-1.jpg';
import section2Image from '../../assets/BlueRing/blue-ring-spacecraft.jpg'; 
import section3Image1 from '../../assets/BlueRing/blue-ring-closeup.jpg'


const blueringData = {
  hero: {
    title: "SPACE MOBILITY",
    subtitle1: "BLUE",
    subtitle2: "RING",
    backgroundImage: heroImage,
  },
  section1: {
    heading: "Multi-Mission, Multi-Orbit Mobility",
    text: "Blue Ring can support a variety of missions in medium Earth orbit out to the cislunar region. With unprecedented delta-V capabilities, customers can easily maneuver Blue Ring and access critical data to ensure a successful mission."
  },
  section2: {
    image: section2Image,
  },
  section3: [
    {
      id: 1,
      title: "In-Space Computing",
      text: "Blue Ring provides end-to-end services that span hosting, transportation, refueling, data relay, and logistics, including an “in-space” edge computing capability.",
      image: section3Image1
    },
    {
      id: 2,
      title:"Payload Capabilities",
      text: "Blue Ring can host payloads of more than 3,000 kg for commercial and government customers to deploy a variety of missions.",
      image: heroImage
    }
    
  ]
};

export default blueringData;
