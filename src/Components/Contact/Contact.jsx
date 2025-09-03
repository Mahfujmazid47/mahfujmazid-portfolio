import React, { useRef } from "react";
import emailjs from "emailjs-com";
import { FaLinkedin, FaGithub, FaFacebook, FaWhatsapp, FaEnvelope } from "react-icons/fa";
import Swal from "sweetalert2";

const Contact = () => {
    const formRef = useRef();
    // const emailAddress = 'mahfujmazid47@gmail.com';

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs
            .sendForm(
                "service_o0mw9yp", // EmailJS service ID
                "template_wwuz9he", // EmailJS template ID
                formRef.current,
                "Njhf6954awtSQDFjC" // EmailJS public key
            )
            .then(
                () => {
                    Swal.fire({
                        position: "center",
                        icon: "success",
                        title: "Email sent successfully!",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                    formRef.current.reset();
                },
                () => {
                    Swal.fire({
                        position: "center",
                        icon: "error",
                        title: "Oops...",
                        text: "Failed to send email. Please try again.",
                        showConfirmButton: false,
                        timer: 1500,
                    });
                }
            );
    };



    // const copyToClipboard = () => {
    //     navigator.clipboard.writeText(emailAddress)
    //         .then(() => {
    //             Swal.fire({
    //                 icon: 'success',
    //                 title: 'Copied!',
    //                 text: 'Email address has been copied to your clipboard.',
    //                 showConfirmButton: false,
    //                 timer: 1500
    //             });
    //         })
    //         .catch(err => {
    //             Swal.fire({
    //                 icon: 'error',
    //                 title: 'Oops...',
    //                 text: 'Something went wrong. Could not copy the email.',
    //             });
    //             console.error('Could not copy text: ', err);
    //         });
    // };

    return (
        <section id="contact" className="bg-gradient-to-r from-primary/5 to-secondary/5 py-24 px-6 lg:px-20">
            <div className="max-w-6xl mx-auto flex flex-col lg:flex-row gap-16">

                {/* Left Side - Contact Form */}
                <div className="lg:w-1/2">
                    <h2 data-aos="fade-up" className="text-4xl font-extrabold text-blue-500 mb-8 tracking-wide">
                        Get In Touch
                    </h2>
                    <form data-aos="fade-up" ref={formRef} onSubmit={sendEmail} className="space-y-6 p-8 rounded-lg shadow-lg bg-gradient-to-r  to-primary/5 from-secondary/5">
                        {/* Name */}
                        <div data-aos="fade-up"
                            data-aos-delay="200">
                            <label className="block font-semibold mb-2">Your Name</label>
                            <input
                                type="text"
                                name="user_name"
                                required
                                placeholder="Enter your name"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Email */}
                        <div data-aos="fade-up"
                            data-aos-delay="300">
                            <label className="block font-semibold mb-2">Your Email</label>
                            <input
                                type="email"
                                name="user_email"
                                required
                                placeholder="Enter your email"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Subject */}
                        <div data-aos="fade-up"
                            data-aos-delay="400">
                            <label className="block font-semibold mb-2">Subject</label>
                            <input
                                type="text"
                                name="subject"
                                required
                                placeholder="Enter subject"
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            />
                        </div>

                        {/* Message */}
                        <div data-aos="fade-up"
                            data-aos-delay="500">
                            <label className="block font-semibold mb-2">Message</label>
                            <textarea
                                name="message"
                                required
                                rows="5"
                                placeholder="Write your message..."
                                className="w-full p-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-blue-500 focus:outline-none"
                            ></textarea>
                        </div>

                        {/* Submit */}
                        <button
                            type="submit"
                            className="w-full py-3 text-white font-semibold rounded-lg shadow-lg bg-gradient-to-r from-sky-500 to-blue-600 hover:scale-105 transition-transform"
                        >
                            Send Email
                        </button>
                    </form>
                </div>

                {/* Right Side - Social Links */}
                <div className="lg:w-1/2 flex flex-col justify-center" data-aos="fade-right">
                    <h2 className="text-4xl font-extrabold text-blue-500 mb-8 tracking-wide">
                        Connect With Me
                    </h2>
                    <div className="space-y-5">
                        {/* LinkedIn */}
                        <a
                            href="https://www.linkedin.com/in/mahfujmazid"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r  from-primary/5 to-secondary/5 hover:scale-105 transition-transform"
                        >
                            <FaLinkedin className="text-[#0077B5] text-3xl" />
                            <span className="font-semibold">LinkedIn</span>
                        </a>

                        {/* GitHub */}
                        <a
                            href="https://github.com/Mahfujmazid47"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r  from-primary/5 to-secondary/5 hover:scale-105 transition-transform"
                        >
                            <FaGithub className="text-black text-3xl" />
                            <span className="font-semibold">GitHub</span>
                        </a>

                        {/* Facebook */}
                        <a
                            href="https://www.facebook.com/mahfuj.mazid.2024"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r  from-primary/5 to-secondary/5 hover:scale-105 transition-transform"
                        >
                            <FaFacebook className="text-[#1877F2] text-3xl" />
                            <span className="font-semibold">Facebook</span>
                        </a>

                        {/* WhatsApp */}
                        <a
                            href="https://wa.me/+8801303725897"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="flex items-center gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r  from-primary/5 to-secondary/5 hover:scale-105 transition-transform"
                        >
                            <FaWhatsapp className="text-[#25D366] text-3xl" />
                            <span className="font-semibold">WhatsApp</span>
                        </a>

                        {/* Email */}
                        <a
                            href="mailto:mahfujmazid47@gmail.com"
                            className="flex items-center gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r  from-primary/5 to-secondary/5 hover:scale-105 transition-transform"
                        >
                            <FaEnvelope className="text-red-500 text-3xl" />
                            <span className="font-semibold">mahfujmazid47@gmail.com</span>
                        </a>

                        {/* <div
                            onClick={copyToClipboard}
                            className="flex items-center gap-4 p-4 rounded-lg shadow-lg bg-gradient-to-r  from-primary/5 to-secondary/5 hover:scale-105 transition-transform cursor-pointer"
                        >
                            <FaEnvelope className="text-red-500 text-3xl" />
                            <span className="font-semibold">{emailAddress}</span>
                        </div> */}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Contact;
