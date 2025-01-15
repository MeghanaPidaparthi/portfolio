// Contact.jsx
import { useForm } from 'react-hook-form';
import { db } from './firebase'; // Correctly importing db from firebase.js
import { collection, addDoc } from "firebase/firestore";

const Contact = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();

  const onSubmit = async (data) => {
    try {
      // Reference to "messages" collection in Firestore
      const docRef = await addDoc(collection(db, "messages"), {
        name: data.name,
        email: data.email,
        message: data.message,
        timestamp: new Date(), // Optional: To save the time
      });
      alert("Message sent successfully!");
    } catch (error) {
      console.error("Error adding document: ", error.message);
      alert(`Failed to send message. Error: ${error.message}`);
    }
  };

  return (
    <div className="flex justify-center items-center h-screen bg-[#000000]">
      <div className="w-full md:w-1/2 p-8">
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
  );
};

export default Contact;
