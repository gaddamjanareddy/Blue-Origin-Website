import React, { useEffect, useState } from "react";
import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import "./Flytospace.css";
import Arrow from "../../assets/icons/arrow-2.png";
import { useForm } from "react-hook-form";
import AOS from "aos";
import "aos/dist/aos.css";


const Flytospace = () => {
  useEffect(() => {
    AOS.init({
      duration: 3000,  
      once: true        
    });
  },[])
  const {
    register,
    handleSubmit,
    watch,
    formState: { errors, isSubmitting },
  } = useForm();

  const [isSubmitted, setIsSubmitted] = useState(false);
  const [aboutLength, setAboutLength] = useState(0);

  async function onSubmit(data) {
    await new Promise((resolve) => setTimeout(resolve, 3000));
    console.log("form submitted successfully", data);
    setIsSubmitted(true)
  }

  console.log(watch("aboutYourself", ""));
  console.log(watch("firstName"));
  console.log(watch("lastName"));

  return (
    <>
      <header>
        <Navbar />
      </header>
      <main className="flytospace-main">
        <section className="flyTo-space-section">
          <div className="flyTo-space-container">
            <div className="flyTo-space-content-top" data-aos="fade-up">
              <h1 className="flyTo-space-title">BOOK YOUR FLIGHT</h1>
              <div className="flyTo-space-title2">
                <p>Purchase a window seat on a life-changing spaceflight</p>
              </div>
            </div>
            <div className="down-arrow">
              <img src={Arrow} alt="DownArrow" />
            </div>
          </div>
        </section>

        <section className="booking-section">
          {!isSubmitted ? (
          <div className="booking-container">
            <div className="customer-information-container">
              <legend className="customer-information-title">
                Customer Information
              </legend>
              <div className="required-field-container"> 
              <p className="required-field">* indicates a required field</p>
              </div> 
            </div>
            
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="booking-form-container">
                {/* Full Name */}
                <div className="left-right-input-container" id="full-name-container">
                {/* First Name */}
                <div className="double-input-container" id="first-name-container">
                  <label>
                    First Name{" "}
                    <abbr className="required-star" title="Required">
                      {" "}
                      *{" "}
                    </abbr>
                  </label>
                  <abbr title="please fill out this field">
                    <input
                      className={errors.firstName ? "error-input" : ""}
                      {...register("firstName", {
                        required: "First Name is required",
                        pattern: {
                          value: /^[A-Za-z\s]{2,}$/,
                          message: "First name must contain at least 2 letters",
                        },
                      })}
                    />
                  </abbr>
                  {errors.firstName && (
                    <p className="error-msg">{errors.firstName.message}</p>
                  )}
                </div>
                {/* Last Name */}
                <div className="double-input-container" id="last-name-container">
                  <label>
                    Last Name{" "}
                    <abbr className="required-star" title="Required">
                      {" "}
                      *{" "}
                    </abbr>{" "}
                  </label>
                  <abbr title="please fill out this field">
                    <input
                      className={errors.lastName ? "error-input" : ""}
                      {...register("lastName", {
                        required: "last Name is required",
                        pattern: {
                          value: /^[A-Za-z\s]{2,}$/,
                          message: "Last name must contain at least 2 letters",
                        },
                      })}
                    />
                  </abbr>
                  {errors.lastName && (
                    <p className="error-msg">{errors.lastName.message}</p>
                  )}
                </div>
                
                </div>

                {/* Email */}
                <div className="input-container" id="email-container">
                  <label>
                    Email
                    <abbr className="required-star" title="Required">
                      {" "}
                      *{" "}
                    </abbr>{" "}
                  </label>
                  <abbr title="please fill out this field">
                    <input
                      type="email"
                      {...register("email", {
                        required: "Email is required",
                        pattern: {
                          value: /^\S+@\S+\.\S+$/,
                          message: "Invalid email address",
                        },
                      })}
                    />
                  </abbr>
                  {errors.email && <p>{errors.email.message}</p>}
                </div>

                {/* Phone Number */}
                <div className="input-container" id="phone-container">
                  <label>Phone Number <abbr className="required-star" title="Required">
                      {" "}
                      *{" "}
                    </abbr>{" "}</label>
                  <input
                    type="tel"
                    maxLength={10}
                    {...register("phone", {
                      required: "Phone Number is required",
                      pattern: {
                        value: /^[6-9]\d{9}$/,
                        message:
                          "Phone number must be exactly 10 digits starting with 6-9",
                      },
                    })}
                    onInput={(e) => {
                      e.target.value = e.target.value
                        .replace(/\D/g, "")
                        .slice(0, 10);
                    }}
                  />
                  {errors.phone && <p>{errors.phone.message}</p>}
                </div>

                {/* Address 1 */}
                <div className="input-container" id="address1-container">
                  <label>
                    Address 1{" "}
                    <abbr className="required-star" title="Required">
                      {" "}
                      *{" "}
                    </abbr>{" "}
                  </label>
                  <abbr title="please fill out this field">
                    <input
                      {...register("address1", {
                        required: "Address 1 is required",
                      })}
                    />
                  </abbr>
                  {errors.address1 && <p>{errors.address1.message}</p>}
                </div>

                {/* Address 2 (optional) */}
                <div className="input-container" id="address2-container">
                  <label>Address 2</label>
                  <input {...register("address2")} />
                </div>

                {/* City State */}
                <div className="left-right-input-container" id="city-state-container">
                  {/* City */}
                <div className="double-input-container" id="city-container">
                  <label>
                    City{" "}
                    <abbr className="required-star" title="Required">
                      {" "}
                      *{" "}
                    </abbr>{" "}
                  </label>
                  <abbr title="please fill out this field">
                    <input
                      {...register("city", {
                        required: "City is required",
                      })}
                    />
                  </abbr>
                  {errors.city && <p>{errors.city.message}</p>}
                </div>
                {/* State/Province */}
                <div className="double-input-container" id="state-container">
                  <label>State/Province</label>
                  <input {...register("state")} />
                </div>
                </div>

                {/* Zip Country  */}
                <div className="left-right-input-container" id="zip-country-container">
                {/* Zip/Postal Code */}
                <div className="double-input-container" id="zip-container">
                  <label>Zip/Postal Code</label>
                  <input
                    {...register("zip", {
                      pattern: {
                        value: /^\d{5,6}$/,
                        message: "Zip code must be 5 or 6 digits",
                      },
                    })}
                  />
                  {errors.zip && <p>{errors.zip.message}</p>}
                </div>
                {/* Country */}
                <div className="double-input-container" id="country-container">
                  <label>
                    Country{" "}
                    <abbr className="required-star" title="Required">
                      {" "}
                      *{" "}
                    </abbr>{" "}
                  </label>
                  <abbr title="please fill out this field">
                    <input
                      {...register("country", {
                        required: "Country is required",
                      })}
                    />
                  </abbr>
                  {errors.country && <p>{errors.country.message}</p>}
                </div>
                </div>

                {/* Month Year */}
                <div className="left-right-input-container" id="month-year-container">
                {/* Month of Birth */}
                <div className="double-input-container" id="month-container">
                  <label>
                    Month of Birth{" "}
                    <abbr className="required-star" title="Required">
                      {" "}
                      *{" "}
                    </abbr>{" "}
                  </label>
                  <select
                    {...register("month", { required: "Month is required" })}
                  >
                    <option value="">Select Month</option>
                    {[
                      "January",
                      "February",
                      "March",
                      "April",
                      "May",
                      "June",
                      "July",
                      "August",
                      "September",
                      "October",
                      "November",
                      "December",
                    ].map((month) => (
                      <option key={month} value={month}>
                        {month}
                      </option>
                    ))}
                  </select>
                  {errors.month && <p>{errors.month.message}</p>}
                </div>
                {/* Year of Birth */}
                <div className="double-input-container" id="year-container">
                  <label>
                    Year of Birth{" "}
                    <abbr className="required-star" title="Required">
                      {" "}
                      *{" "}
                    </abbr>{" "}
                  </label>
                  <input
                    type="number"
                    {...register("year", {
                      required: "Year is required",
                      min: {
                        value: 1900,
                        message: "Year must be after 1900",
                      },
                      max: {
                        value: new Date().getFullYear(),
                        message: `Year must not be in future`,
                      },
                    })}
                  />
                  {errors.year && <p>{errors.year.message}</p>}
                </div>
                </div>
                <div className="month-p"><p>Due to federal regulation, you must be 18 years old or older to fly with us.</p></div>

                {/* Tell Us About You */}
                <div className="tell-us-about-you-container">
                  <legend className="tell-us-title">Tell Us About You</legend>
                {/* here about and more details   */}
                <div className="tell-us-about-you-content"> 
                <div className="left-right-input-container" id="here-about-more-details-container">  
                {/* How Did You Here About Us */}
                <div className="double-input-container" id="how-did-you-hear-about-us-container">
                  <label>How did you hear about us? {" "}
                    <abbr className="required-star" title="Required">
                      {" "}
                      *{" "}
                    </abbr> 
                    </label>
                  <select
                    {...register("referral", {
                      required: "Please select how you heard about us",
                    })} 
                  >
                    <option value="Select an option">Select an option</option>
                    <option value="Google">Google</option>
                    <option value="LinkedIn">LinkedIn</option>
                    <option value="Friend">Friend</option>
                    <option value="Event">Event</option>
                    <option value="Other">Other</option>
                  </select>
                  {errors.referral && <p>{errors.referral.message}</p>}
                </div>
                {/* More details (optional) */}
                <div className="double-input-container" id="more-details-container">
                  <label>More details</label>
                  <input
                    type="text"
                    placeholder="Add more details"
                    {...register("referralDetails")}
                  />
                </div>
                </div>

                {/* Tell us about yourself */}
                <div className="input-container" id="tell-us-about-you-container">
                  <label>
                    In a few words, tell us about yourself (500 characters or
                    less). 
                    {" "}
                    <abbr className="required-star" title="Required">
                      {" "}
                      *{" "}
                    </abbr>
                  </label>
                  
                  <textarea
                    rows={4}
                    maxLength={400}
                    {...register("aboutYourself", {
                      required: "Please tell us about yourself",
                      maxLength: {
                        value: 500,
                        message: "Maximum 500 characters allowed",
                      },
                    })}
                    onChange={(e) => setAboutLength(e.target.value.length)}
                  />
                  <p>{500 - aboutLength} characters remaining</p>
                  {errors.aboutYourself && (
                    <p>{errors.aboutYourself.message}</p>
                  )}
                </div>
                </div>

                </div>
                </div>
                <div className="accept-condition-container">
                <label className='form-checkbox-label'>
                <input type="checkbox" name="checkbox" id="checkbox" /> 
                <div className='privacy-policy-link-text-container'>
                    <div className="privacy-policy-text"> 
                    <p>I acknowledge Blue Origin will collect a $150,000 USD deposit to begin the order process.</p>
                    <p>All deposits are fully refundable. (You will not be charged at this step.)</p>
                    </div>
                    <div className="privacy-policy-required-container">
                    <abbr className='requred-indicator' title="(required)"> *</abbr>
                    </div>
                </div>
                
                </label>

                <label className='form-checkbox-label'>
                <input type="checkbox" name="checkbox" id="checkbox" /> 
                <div className='privacy-policy-link-text-container'>
                  <div className="privacy-policy-text">
                    <p>Please click to confirm your consent to our Privacy Policy.</p>
                    <p>Note - you have the right to withdraw your consent at any time by contacting us at privacy@blueorigin.com. Please review our privacy policy for more information on how we process your data.</p>
                    <p>Filling out this form does not guarantee you a seat on a future New Shepard flight.</p>
                  </div>
                  <div className="privacy-policy-required-container">
                  <abbr className='requred-indicator' title="(required)"> *</abbr>
                  </div>  
                </div>
                
                </label>
                </div>
                <div className="submit-container">
                <input
                type="submit"
                disabled={isSubmitting}
                value={isSubmitting ? "Submitting..." : "Submit"}
          />
                </div>
            </form>  
            
          </div> ) : 
           (
          <div className="thankyou-title-container"> 
          <h1>Thank You For Your Submission</h1>
          </div>
          )}
        </section>
      </main>
      <footer>
        <Footer />
      </footer>
    </>
  );
};

export default Flytospace;
