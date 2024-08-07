import {React,useState} from "react";
import { FiMessageCircle } from "react-icons/fi";
import emailjs from 'emailjs-com';

const ContactMe = () => {

    const [formData, setFormData] = useState({
        email: '',
        name: '',
        subject: '',
        message: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.send('service_rlwt0g2', 'template_hfqilxr', {
            from_email: formData.email,
            from_name: formData.name,
            subject: formData.subject,
            message: formData.message,
        }, 'wJsKuEXYddXYl5x3Y')
            .then((response) => {
                console.log('Email sent successfully!', response.status, response.text);
                setFormData({
                    email: '',
                    name: '',
                    subject: '',
                    message: ''
                });
            })
            .catch((err) => {
                console.error('Failed to send email. Error:', err);
            });
    };




    return (
        <div id="ContactMe" className="bg-gray-950 w-full text-white md:h-screen">
            <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
                <div className='pb-8'>
                    <p className='text-3xl font-bold border-b-gray-500 border-b-4'>Contact Me</p>
                </div>
                <div className="flex flex-col items-center p-3">
                    <div className="flex flex-row text-2xl font-bold p-3"> <FiMessageCircle /> Drop a message </div>
                    <form className="flex flex-col gap-4 w-full m-auto items-center" onSubmit={sendEmail}>

                        <textarea name='email' className="text-white bg-transparent rounded-lg border-2 border-cyan-400 pl-2 resize-none h-10 sm:h-12 md:h-14 lg:h-16 w-full pt-2 sm:w-[90%] md:w-[80%] lg:w-[70%]" placeholder="Enter your email here" required value={formData.email} onChange={handleChange}/>
                        <textarea name='name' className="text-white bg-transparent rounded-lg border-2 border-cyan-400 pl-2 resize-none h-10 sm:h-12 md:h-14 lg:h-16 w-full pt-2 sm:w-[90%] md:w-[80%] lg:w-[70%]" placeholder="Enter your name here" required value={formData.name} onChange={handleChange} />
                        <textarea name='subject' className="text-white bg-transparent rounded-lg border-2 border-cyan-400 pl-2 resize-none h-10 sm:h-12 md:h-14 lg:h-16 w-full pt-2 sm:w-[90%] md:w-[80%] lg:w-[70%]" placeholder="Subject" required value={formData.subject} onChange={handleChange}/>
                        <textarea name='message' className="text-white bg-transparent rounded-lg border-2 border-cyan-400 pl-2 resize-none h-20 sm:h-24 md:h-28 lg:h-32 w-full pt-2 sm:w-[90%] md:w-[80%] lg:w-[70%]" placeholder="Write your message" required value={formData.message} onChange={handleChange} />
                        <button type="submit" className="text-white bg-cyan-500 hover:bg-cyan-600 rounded-lg p-2 w-32 mt-4">Send</button>
                    </form>

                </div>
            </div>
        </div>
    );
};
export default ContactMe;