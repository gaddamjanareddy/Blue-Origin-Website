import React, {} from 'react'
import "./Footer.css"
// import { useFont } from '../context/fontContext';
import { NavLink } from "react-router-dom";


const Footer = () => {
    // const { selectedFont, setSelectedFont } = useFont();
//   const [localFont, setLocalFont] = useState(selectedFont);

//   const handleChange = (e) => {
//     const selected = e.target.value;
//     setLocalFont(selected);            // local state for immediate UI response (optional)
//     // setSelectedFont(selected);         // global context update
//     localStorage.setItem('selectedFont', selected); // store in localStorage
//   };

//   useEffect(() => {
//     // Apply the font globally
//     switch (localFont) {
//       case 'atkinson-hyperlegible':
//         document.body.style.fontFamily = `'Atkinson Hyperlegible', sans-serif`;
//         break;
//       case 'open-dyslexic':
//         document.body.style.fontFamily = `'OpenDyslexic', sans-serif`;
//         break;
//       default:
//         document.body.style.fontFamily = `'Orbitron', sans-serif`;
//     }
//   }, [localFont]);

   
  return (
    <>
    <div className="footer">
        <section className="social-media-container">
            <p className='follow-text'>FOLLOW BLUE ORIGIN</p>
            
            <ul className='social-media'>
               <div className="list"><NavLink to='https://x.com/blueorigin'><li><i className="fa-brands fa-x-twitter fa-lg"></i></li></NavLink></div>
               <div className="list"><NavLink to='https://www.facebook.com/blueorigin'><li><i className="fa-brands fa-facebook fa-lg"></i></li></NavLink></div>
                <div className="list"><NavLink to='https://www.instagram.com/blueorigin/'><li><i className="fa-brands fa-instagram fa-lg"></i></li></NavLink></div>
                <div className="list"><NavLink to='https://www.youtube.com/@blueorigin'><li><i className="fa-brands fa-youtube fa-lg"></i></li></NavLink></div>
                <div className="list"><NavLink to='https://www.linkedin.com/company/blue-origin'><li><i className="fa-brands fa-linkedin fa-lg"></i></li></NavLink></div>
            </ul>
            
        </section>
        
    </div>
    <div className="footer-middle">
        {/* footer copyrights section */}
            <section className="footer-copy-rights">
            <img src="https://d1o72l87sylvqg.cloudfront.net/blue-origin/logo-feather-optimized.svg" alt="feather" className='feather' />

            <p className='footer-copy-rights-text'>© 2025 BLUE ORIGIN</p>
            <ul className='policy-text'>
                <li><a href="#" className='footer-copy-rights-text'>Privacy Policy </a></li>
                <li><a href="#" className='footer-copy-rights-text'>Terms of Use</a></li>  
            </ul>
            </section>

            {/* footer navigation pages section */}
            <section className='footer-navigation-pages-section'>
                <ul className='footer-navigation-pages'>
                    <li><a href="#">Careers</a></li>
                    <li><a href="#">Gallery</a></li>
                    <li><a href="#">Become an Astronaut</a></li>
                    <li><a href="#">Become a Supplier</a></li>
                    <li><a href="#">Media Inquiries</a></li>
                    <li><a href="#">Accessibility</a></li>
                    <li><a href="#">Cookie Settings</a></li>
                <div className="font-preference-container">
                    <a href="#">Font Preference</a>
                        <select   className='font-preference-btn'>
                            <option value="No Preference">No Preference (Default)</option>
                            <option value="atkinson-hyperlegible">Atkinson Hyperlegible</option>
                            <option value="open-dyslexic">Open Dyslexic</option>
                        </select>
                </div>

                </ul>
            </section>
    </div>

    <div className="footer-bottom">
        <section className="footer-bottom-section">
            <h2 className="subscribe"> Subscribe </h2>
            <form className="Form" id="6539497ca55826034abd1aaa" action="https://blueorigin.us9.list-manage.com/subscribe/post?u=ca4c14684ac1af3f1219b4382&id=561fc27e50" method="POST" target="_blank">
            
            <div className="subscribe-text">
                <p>Sign up to receive updates on Blue Origin's announcements, launches, and opportunities.</p>
                <p>* indicates a required field</p>
            </div>
            <label className="Form-email-label">
                <div className="email">
                    <strong>Email</strong>
                    <abbr className='requred-indicator' title="(required)"> *</abbr>
                </div>
                <input className="Form-textInput" type="email" autoComplete="email" required pattern=".+@.+\..+" name="EMAIL"></input>
            </label>
            <label className='form-checkbox-label'>
                <input type="checkbox" name="checkbox" id="checkbox" /> 
                <div className='privacy-policy-link-text'>
                    <p>Please click to confirm your consent to receive email updates from us. Note - you have the right to withdraw your consent at any time by contacting us at
                        <a href="mailto:privacy@blueorigin.com" className='privacy-policy-link'>privacy@blueorigin.com </a>
                        or by clicking the “unsubscribe” link in the emails we send to you. Please review our
                        <a href="https://www.blueorigin.com/privacy-policy" className='privacy-policy-link'> privacy policy</a>
                        for more information on how we process your data.
                    </p>
                </div>
                <abbr className='requred-indicator' title="(required)"> *</abbr>
            </label>
            <div className="submit-btn">
                <button type="submit">SUBMIT</button>
            </div>
            
            </form>
        </section>
    </div>
    

    </>
)
}

export default Footer
