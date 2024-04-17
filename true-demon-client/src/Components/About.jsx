//About component
import React from "react";

const About = () => {
  return (
    <div className="mx-auto text-white p-6 bg-gray-800">
      <h1 className="text-2xl font-bold mb-4">About Us</h1>
      <p className="mb-4">
        Welcome to True Demon, your unique fashion store where we bring your favorite anime characters, logos, and slogans to life through customized prints on our products. We believe in providing high-quality, personalized fashion that allows you to express your individuality.
      </p>

      <h2 className="text-xl font-semibold mb-2">Our Mission</h2>
      <p className="mb-4">
        Our mission is to deliver exceptional and exclusive fashion items that resonate with anime enthusiasts and those who appreciate personalized prints. We strive to create a community where creativity and uniqueness thrive.
      </p>

      <h2 className="text-xl font-semibold mb-2">Contact Us</h2>
      <p className="mb-4">
        Have questions or want to get in touch? Reach out to us:
      </p>
      <ul className="list-disc pl-4 mb-4">
        <li>Email: team@truedemon.com</li>
        <li>Phone: +918393832969</li>
        <li>Address: Dharmanagri, Haridwar, Uttarakhand, India 249401</li>
      </ul>

      <h2 className="text-xl font-semibold mb-2">Visit Our Store</h2>
      <p className="mb-4">
        If you'd like to experience our products in person, visit our store located in the heart of Fashion City. Our friendly staff is ready to assist you.
      </p>

      <div className="bg-gray-700 p-4 m-4 rounded-md">
        <iframe
          title="Store Location"
          width="100%"
          height="300"
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d12345.678901234567!2d-74.0059723456789!3d40.71277653456789!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM5JzA1LjAiTiA3NMKwMjUnMDIuOCJX!5e0!3m2!1sen!2sus!4v1642612345678!5m2!1sen!2sus"
          loading="lazy"
        />
      </div>
    </div>
  );
};

export default About;
