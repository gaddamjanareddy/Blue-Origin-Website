import heroImage from '../../assets/BlueMoon/BlueMoon_pagehero.jpg'; 
import section2Image1 from '../../assets/BlueMoon/BlueMoon_mk1.webp'
import section2Image2 from '../../assets/BlueMoon/BlueMoon_SLD-mooncity.jpg' 

const bluemoonData = {
  hero: {
    title: "LUNAR LANDERS",
    subtitle: "BLUE MOON",
    text: "Blue Moon lander variants provide low-cost, recurring access to the Moon for both cargo and crew.",
    backgroundImage: heroImage,
  },
  section1: {
    heading: "Blue Moon’s capability to provide precise and soft landings will enable a sustained human presence on the Moon.",
  },
  section2: [
    {
      id: 1,
      title: "Blue Moon Mark 1 (MK1)",
      text: "Blue Moon MK1 will provide cargo transport, leveraging the 7-meter fairing of the New Glenn launch vehicle, to deliver up to three metric tons anywhere on the lunar surface.",
      btn: "EXPLORE MK1",
      image: section2Image1
    },
    {
      id: 2,
      title:"SLD National Team",
      text: "Under NASA's NextSTEP-2 Appendix P Sustaining Lunar Development (SLD) contract, Blue Origin and its National Team partners will develop and fly the Blue Moon MK2 lunar lander that can make a precision landing anywhere on the Moon’s surface.",
      btn: "EXPLORE SLD NATIONAL TEAM",
      image: section2Image2
    }
  ]
};

export default bluemoonData;
