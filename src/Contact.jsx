import { useForm } from 'react-hook-form';
import dev from "./assets/dev.svg";
import emailjs from '@emailjs/browser';

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = (data) => {
    const serviceId = "service_80bie7q";
    const templateId = "template_xyc5zcj";
    const publicKey = "2LieBhZBs5LkadOHm";

    const templateParams = {
      from_name: data.name,
      to_name: "Meghana",
      message: data.message,
    };

    emailjs.send(serviceId, templateId, templateParams, publicKey)
      .then((response) => {
        console.log('Email sent successfully!', response);
        alert("Message sent successfully!");
      }, (error) => {
        console.log("Error sending mail", error.text);
      });
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#000000]">
      <div className="flex flex-col md:flex-row items-center md:items-start md:space-x-8 p-8">
        
        {/* Illustration */}
        <div className="hidden md:block w-1/2">
          <img src={dev} alt="Developer Illustration" className="w-full max-w-md" />
        </div>

        {/* Contact Form */}
        <div className="w-full md:w-1/2">
          <h2 className="text-3xl text-[#8261D0] font-semibold mb-6">Get in Touch</h2>
          <form
            onSubmit={handleSubmit(onSubmit)}
            className="bg-[#222222] p-8 rounded-lg shadow-lg max-w-md w-full"
          >
            <div className="mb-5">
              <label htmlFor="name" className="block text-lg mb-2 text-[#CCCCCC]">Name</label>
              <input
                type="text"
                id="name"
                {...register('name', { required: 'Name is required' })}
                className="w-full p-3 rounded-md bg-[#191919] text-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#8261D0] text-sm"
                placeholder="Enter your name"
              />
              {errors.name && <div className="text-xs text-[#FF6B6B] mt-1">{errors.name.message}</div>}
            </div>

            <div className="mb-5">
              <label htmlFor="email" className="block text-lg mb-2 text-[#CCCCCC]">Email</label>
              <input
                type="email"
                id="email"
                {...register('email', { required: 'Email is required' })}
                className="w-full p-3 rounded-md bg-[#191919] text-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#8261D0] text-sm"
                placeholder="Enter your email"
              />
              {errors.email && <div className="text-xs text-[#FF6B6B] mt-1">{errors.email.message}</div>}
            </div>

            <div className="mb-5">
              <label htmlFor="message" className="block text-lg mb-2 text-[#CCCCCC]">Message</label>
              <textarea
                id="message"
                {...register('message', { required: 'Message is required' })}
                className="w-full p-3 rounded-md bg-[#191919] text-[#CCCCCC] focus:outline-none focus:ring-2 focus:ring-[#8261D0] text-sm"
                placeholder="Enter your message"
              />
              {errors.message && <div className="text-xs text-[#FF6B6B] mt-1">{errors.message.message}</div>}
            </div>

            <div className="flex space-x-4">
              {/* Submit Button */}
              <button
                type="submit"
                className="bg-primaryPurple text-white px-4 py-1 rounded text-sm hover:bg-[#8261D0] transition-all"
              >
                Submit
              </button>

              {/* Go to Home Page Button */}
              <button
                type="button" 
                className="bg-transparent border-2 border-[#3a3a3a] text-white px-4 py-1 rounded text-sm flex items-center space-x-2 hover:bg-[#222] hover:text-white transition-all"
              >
                <a href="/" rel="noopener noreferrer">
                  <span>Go to Home Page</span>
                </a>
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;