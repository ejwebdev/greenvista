import { useState, useEffect, useRef } from "react";
import emailjs from "emailjs-com";
import mapboxgl from "mapbox-gl";
import "mapbox-gl/dist/mapbox-gl.css";
import "./contact.css";

const contactRight = [
    {
        icon: "home_work",
        title: "Our Address",
        desc: "Floridablanca, Pampanga",
        link: "",
    },
    {
        icon: "perm_phone_msg",
        title: "Our Contact",
        desc: "+63977-434-5155",
        link: "tel:09774345155",
    },
];

mapboxgl.accessToken =
    "pk.eyJ1IjoiZWp3ZWJkZXYiLCJhIjoiY20wMzZ0eXN1MGFnNTJrcWx4b3lpbnRvYiJ9.J-j-_GY07x9infOp5y6m7w";

function Contact() {
    const [notification, setNotification] = useState({ message: "", type: "" });
    const showNotification = (message, type) => {
        setNotification({ message, type });

        setTimeout(() => {
            setNotification({ message: "", type: "" });
        }, 3000);
    };

    // Email JS API
    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_erca4ir",
                "template_6ll5m4f",
                e.target,
                "qHFSCAfpT8h7mF4gf"
            )
            .then(
                (response) => {
                    console.log("Success:", response);
                    showNotification("Message Sent!", "success");
                    e.target.reset();
                },
                (error) => {
                    console.error("Error:", error);
                    showNotification("Failed to Send.", "error");
                }
            );
    };

    // Mapbox API
    const mapContainerRef = useRef(null);
    useEffect(() => {
        const map = new mapboxgl.Map({
            container: mapContainerRef.current,
            style: "mapbox://styles/ejwebdev/cm03czerw004f01omh6fphjyf",
            center: [120.5128, 14.964],
            zoom: 12,
            minZoom: 6,
            scrollZoom: false,
            touchZoomRotate: false,
            attributionControl: false,
        });

        new mapboxgl.Marker({
            color: "#13693D",
        })
            .setLngLat([120.5128, 14.964])
            .setPopup(
                new mapboxgl.Popup({ offset: 25 }).setText("GreenVista Homes")
            )
            .addTo(map);

        const nav = new mapboxgl.NavigationControl();
        map.addControl(nav, "bottom-right");

        return () => map.remove();
    }, []);

    return (
        <section className="contact">
            <div className="contact-cntnr">
                <div className="contact-left">
                    <form id="contact-form" onSubmit={sendEmail}>
                        <div className="contact-upper">
                            <div>
                                <label htmlFor="name">
                                    Name<span>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="name"
                                    autoComplete="off"
                                    name="name"
                                    placeholder="Full Name"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="number">
                                    Phone<span>*</span>
                                </label>
                                <input
                                    type="tel"
                                    id="number"
                                    autoComplete="off"
                                    name="number"
                                    placeholder="Phone No."
                                    required
                                />
                            </div>
                        </div>
                        <div className="contact-middle">
                            <div>
                                <label htmlFor="address">
                                    Address<span>*</span>
                                </label>
                                <input
                                    type="text"
                                    id="address"
                                    autoComplete="off"
                                    name="address"
                                    placeholder="Home Address"
                                    required
                                />
                            </div>
                            <div>
                                <label htmlFor="email">
                                    Email<span>*</span>
                                </label>
                                <input
                                    type="email"
                                    id="email"
                                    autoComplete="off"
                                    name="email"
                                    placeholder="Email Address"
                                    required
                                />
                            </div>
                        </div>
                        <div className="contact-bottom">
                            <label htmlFor="message">
                                Message<span>*</span>
                            </label>
                            <textarea
                                id="message"
                                autoComplete="off"
                                name="message"
                                placeholder="Write Your Message Here"
                                required
                            ></textarea>
                        </div>
                        <button type="submit">SUBMIT</button>
                        <p>
                            <strong>Note:</strong> Please check your email
                            address after sending your message.
                        </p>
                    </form>
                    {notification.message && (
                        <div className={`notification ${notification.type}`}>
                            {notification.message}
                        </div>
                    )}
                </div>
                <div className="contact-right">
                    <h3>Contact Us</h3>
                    <h2>Reach Out for Assistance</h2>
                    <p>
                        We&apos;re here to assist you with any inquiries or
                        concerns regarding our properties and services. Your
                        satisfaction is our priority, and we look forward to
                        helping you find your dream home.
                    </p>
                    <div className="contact-right-grid">
                        {contactRight.map((contactRight, index) => (
                            <div key={index}>
                                <span className="material-symbols-rounded">
                                    {contactRight.icon}
                                </span>
                                <div>
                                    <h3>{contactRight.title}</h3>
                                    <a href={contactRight.link}>
                                        {contactRight.desc}
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>
                    <div
                        ref={mapContainerRef}
                        className="contact-right-map"
                    ></div>
                </div>
            </div>
        </section>
    );
}

export default Contact;
