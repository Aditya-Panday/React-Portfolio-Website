import React, { useEffect, useState } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import emailjs from 'emailjs-com'; // Import the emailjs library
import Swal from 'sweetalert2'; // Import SweetAlert

const Contact = () => {
    useEffect(() => {
        AOS.init({ duration: 1000 });
    }, []);

    // State to manage form data
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    // Handle form submission
    const handleSubmit = (e) => {
        e.preventDefault();

        // Check if any field is empty
        if (!formData.name || !formData.email || !formData.message) {
            Swal.fire({
                icon: 'error',
                title: 'Oops...',
                text: 'Please fill in all fields!',
            });
            return;
        }


        // Send email using emailjs
        emailjs.sendForm('YOUR_SERVICE_ID', 'YOUR_TEMPLATE_ID', e.target, 'YOUR_USER_ID')
            .then((result) => {
                console.log(result.text);
                Swal.fire({
                    icon: 'success',
                    title: 'Success!',
                    text: 'Message sent successfully!',
                });
            })
            .catch((error) => {
                console.error(error);
                Swal.fire({
                    icon: 'error',
                    title: 'Oops...',
                    text: 'An error occurred. Please try again later.',
                });
            });

        // Reset form fields
        setFormData({
            name: '',
            email: '',
            message: ''
        });
    };

    // Handle form input changes
    const handleInputChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    return (
        <div name='contact' className='w-full h-full bg-gradient-to-b from-black to-gray-800 p-4 text-white'>
            <div className='flex flex-col p-4 justify-center max-w-screen-lg mx-auto mt-20 mt-lg-0 h-screen'>
                <div className='pb-8'>
                    <p className='text-4xl font-bold inline border-b-4 border-gray-400'>Contact Me</p>
                    <p className='mt-6'>Submit the form below to get in touch with me</p>
                </div>
                <div className='flex justify-center items-center'>
                    <form onSubmit={handleSubmit} className='flex flex-col w-full md:w-1/2'>
                        <input
                            onChange={handleInputChange}
                            value={formData.name}
                            type='text'
                            name='name'
                            placeholder='Enter your name'
                            className='p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                            required
                        />
                        <input
                            onChange={handleInputChange}
                            value={formData.email}
                            type='email'
                            name='email'
                            placeholder='Enter your e-mail'
                            className='p-2 m-2 bg-transparent border-2 rounded-md text-white focus:outline-none'
                            required
                        />
                        <textarea
                            onChange={handleInputChange}
                            value={formData.message}
                            name='message'
                            rows='10'
                            placeholder='Enter your message'
                            className='p-2 bg-transparent border-2 m-2 rounded-md text-white focus:outline-none'
                            required
                        ></textarea>
                        <button
                            type='submit'
                            className='text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300'
                        >
                            Let's Talk
                        </button>
                    </form>
                </div>
            </div>
            <div className='container-fluid' style={{ height: "100px" }}>
            </div>
        </div>
    );
};

export default Contact;
