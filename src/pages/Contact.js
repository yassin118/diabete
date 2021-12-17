import React from 'react';
const Contact = () =>{
  return (
       
        
    
    <div className='contact'>

<img 
      src="https://st.depositphotos.com/1570716/4101/i/600/depositphotos_41018917-stock-photo-businessman-push-to-contact-us.jpg" width="1520" height="400px"
      alt="Canvas Logo"
    />
    <br/>
      <input
    type="text"
    name="nom"
    value=""
    size="50"
    className="
      wpcf7-form-control wpcf7-text wpcf7-validates-as-required
      form-control
      g-bg-transparent g-bg-transparent--focus
      rounded-0
      g-pa-10-16
    "
    aria-required="true"
    aria-invalid="false"
    placeholder="Nom"
  />
  <input
    type="text"
    name="prenom"
    value=""
    size="50"
    className="
      wpcf7-form-control wpcf7-text wpcf7-validates-as-required
      form-control
      g-bg-transparent g-bg-transparent--focus
      rounded-0
      g-pa-10-16
    "
    aria-required="true"
    aria-invalid="false"
    placeholder="Prénom"
  />
  <input
    type="text"
    name="age"
    value=""
    size="50"
    className="
      wpcf7-form-control wpcf7-text wpcf7-validates-as-required
      form-control
      g-bg-transparent g-bg-transparent--focus
      rounded-0
      g-pa-10-16
    "
    aria-required="true"
    aria-invalid="false"
    placeholder="Age"
  />
  <input
    type="text"
    name="sex"
    value=""
    size="50"
    class="
      wpcf7-form-control wpcf7-text wpcf7-validates-as-required
      form-control
      g-bg-transparent g-bg-transparent--focus
      rounded-0
      g-pa-10-16
    "
    aria-required="true"
    aria-invalid="false"
    placeholder="Sex"
  />
 
    
  <input
    type="email"
    name="email"
    value=""
    size="50"
    className="
      wpcf7-form-control
      wpcf7-text
      wpcf7-email
      wpcf7-validates-as-required
      wpcf7-validates-as-email
      form-control
      g-bg-transparent g-bg-transparent--focus
      rounded-0
      g-pa-10-16
    "
    aria-required="true"
    aria-invalid="false"
    placeholder="Email"
  />
  <input
    type="tel"
    name="tel"
    value=""
    size="50"
    className="
      wpcf7-form-control wpcf7-text wpcf7-tel wpcf7-validates-as-tel
      form-control
      g-bg-transparent g-bg-transparent--focus
      rounded-0
      g-pa-10-16
    "
    aria-invalid="false"
    placeholder="Téléphone"
  />
  <textarea
    name="message"
    cols="50"
    rows="2"
    class="
      wpcf7-form-control wpcf7-textarea wpcf7-validates-as-required
      form-control
      g-resize-none g-bg-transparent g-bg-transparent--focus
      rounded-0
      g-pa-10-16
    "
    aria-required="true"
    aria-invalid="false"
    placeholder="Message..."
  ></textarea>
  <input
    type="submit"
    value="envoyer"
    className="pp "
  />
    </div>
  );
}
export default Contact;
