import './LocationMap.css'

export function LocationMap() {

  {/* 
    const lat = 6.845340;
    const lng = 7.395272;
    const zoom = 17; // Try 16–18; higher = closer (more "centered" feel)
  */}
  return (
    <div className="location-section">

      <iframe
        src="https://www.google.com/maps/embed?pb=!1m17!1m12!1m3!1d990.3442247566702!2d7.395272269617865!3d6.845340331116953!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNsKwNTAnNDMuMiJOIDfCsDIzJzQ1LjMiRQ!5e0!3m2!1sen!2sng!4v1769790867708!5m2!1sen!2sng"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowfullscreen=""
        loading="lazy"
        referrerpolicy="no-referrer-when-downgrade"
      >
      </iframe>

      {/*}
      <iframe
        src={`https://www.google.com/maps/embed/v1/place?q=${lat},${lng}&center=${lat},${lng}&zoom=${zoom}&key=NO_KEY_NEEDED`}
        // If you have a Google Maps API key (recommended for production/no quota surprises):
        // src={`https://www.google.com/maps/embed/v1/place?key=YOUR_API_KEY&q=${lat},${lng}&center=${lat},${lng}&zoom=${zoom}`}
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
      ></iframe>
      */}

    </div>
  )
}