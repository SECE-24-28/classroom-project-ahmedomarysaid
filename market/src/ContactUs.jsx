
import "./Contact.css";


function ContactUs() {
  return (
    <div className="contact-page">
      {/* Top hero with background image */}
      <section className="contact-hero">
        <div className="contact-hero-overlay">
          <h1 className="contact-title">CONTACT US</h1>
          <div className="dots">••••••</div>
          <p className="contact-subtitle">
            Need an expert? You are more than welcome to leave your contact info
            and we will be in touch shortly.
          </p>
        </div>
      </section>

      {/* Bottom white block with three cards */}
      <section className="contact-info">
        <div className="contact-card">
          <div className="icon-circle">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <polygon points="12 3 2 12 4.5 12 4.5 21 9.5 21 9.5 15 14.5 15 14.5 21 19.5 21 19.5 12 22 12 12 3" />
            </svg>
          </div>
          <h3 className="card-title">VISIT US</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis.
          </p>
          <p className="card-highlight">2 Ahmed St, COIMBATORE, INDIA</p>
        </div>

        <div className="contact-card">
          <div className="icon-circle">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M6.6 3.5L9.2 3c.4-.1.8.1 1 .5l1.4 3.4c.2.4.1.9-.2 1.2L9.8 9.7c.9 1.7 2.3 3.1 4 4l1.5-1.6c.3-.3.8-.4 1.2-.2l3.4 1.4c.4.2.6.6.5 1l-.5 2.6c-.1.5-.5.9-1 .9C10.4 17.8 6.2 13.6 5.1 7.9c-.1-.5.3-1 .8-1.1l.7-.1z" />
            </svg>
          </div>
          <h3 className="card-title">CALL US</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis.
          </p>
          <p className="card-highlight">+91  75 50 36 70 50</p>
        </div>

        <div className="contact-card">
          <div className="icon-circle">
            <svg className="icon-svg" viewBox="0 0 24 24">
              <path d="M3 5c0-1.1.9-2 2-2h14c1.1 0 2 .9 2 2v14H3V5zm2 .5V7l7 4 7-4V5.5L12 10 5 5.5z" />
            </svg>
          </div>
          <h3 className="card-title">CONTACT US</h3>
          <p className="card-text">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla quis.
          </p>
          <p className="card-highlight">ahmedomarysaid012@gmail.com</p>
        </div>
      </section>
    </div>
  );
}

export default ContactUs;
