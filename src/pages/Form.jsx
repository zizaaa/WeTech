import React, { useState } from 'react';

const ConsultationForm = () => {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [message, setMessage] = useState('');
  const [selectedDate, setSelectedDate] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [errors, setErrors] = useState({});
  const [faqData, setFaqData] = useState([
    {
      question: 'How do I request a consultation?',
      answer: 'Fill out the form on the left side of the page and submit it.',
      isOpen: false,
    },
    {
      question: 'What happens after I submit the form?',
      answer: 'Our team will review your information and contact you to schedule an appointment.',
      isOpen: false,
    },
    {
      question: 'Can I change my appointment date and time?',
      answer: 'Yes, you can contact us to reschedule your appointment.',
      isOpen: false,
    },
    // ... add more FAQ items as needed
  ]);

  const validateForm = () => {
    const newErrors = {};

    if (!name) newErrors.name = 'Name is required';
    if (!email) newErrors.email = 'Email is required';
    if (!phone) newErrors.phone = 'Phone is required';
    if (!message) newErrors.message = 'Message is required';
    if (!selectedDate) newErrors.selectedDate = 'Date is required';
    if (!selectedTime) newErrors.selectedTime = 'Time is required';

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const submitFormAndScheduleAppointment = (formData) => {
    // Replace this with your actual form submission and scheduling logic
    console.log('Form data:', formData);
    // For example, you might send the data to an API endpoint
  };

  const toggleFAQ = (index) => {
    const updatedFAQData = faqData.map((faq, i) => {
      if (i === index) {
        return { ...faq, isOpen: !faq.isOpen };
      }
      return faq;
    });
    setFaqData(updatedFAQData);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (validateForm()) {
      const formData = {
        name,
        email,
        phone,
        message,
        selectedDate,
        selectedTime,
      };

      submitFormAndScheduleAppointment(formData);

      // Clear the form fields after successful submission
      setName('');
      setEmail('');
      setPhone('');
      setMessage('');
      setSelectedDate('');
      setSelectedTime('');

      // Optionally, show a success message to the user
      alert('Consultation requested successfully! We will contact you shortly.');
    }
  };

  return (
    <div className="max-w-7xl mx-auto px-4 py-8 sm:px-6 lg:px-8">
      <div className="lg:flex">
        <div className="lg:w-1/2 pr-4 mb-8 lg:mb-0">
          <h2 className="text-2xl font-semibold mb-4">Request a Consultation with Appointment</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-4">
              <label className="block text-sm font-medium">Name:</label>
              <input
                className={`mt-1 p-2 w-full border rounded ${errors.name && 'border-red-500'}`}
                type="text"
                value={name}
                onChange={(e) => setName(e.target.value)}
                required
              />
              {errors.name && <p className="text-red-500 text-xs mt-1">{errors.name}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Email:</label>
              <input
                className={`mt-1 p-2 w-full border rounded ${errors.email && 'border-red-500'}`}
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
              {errors.email && <p className="text-red-500 text-xs mt-1">{errors.email}</p>}
            </div>
            {/* Add other form fields here */}
            <div className="mb-4">
              <label className="block text-sm font-medium">Appointment Date:</label>
              <input
                className={`mt-1 p-2 w-full border rounded ${errors.selectedDate && 'border-red-500'}`}
                type="date"
                value={selectedDate}
                onChange={(e) => setSelectedDate(e.target.value)}
                required
              />
              {errors.selectedDate && <p className="text-red-500 text-xs mt-1">{errors.selectedDate}</p>}
            </div>
            <div className="mb-4">
              <label className="block text-sm font-medium">Appointment Time:</label>
              <input
                className={`mt-1 p-2 w-full border rounded ${errors.selectedTime && 'border-red-500'}`}
                type="time"
                value={selectedTime}
                onChange={(e) => setSelectedTime(e.target.value)}
                required
              />
              {errors.selectedTime && <p className="text-red-500 text-xs mt-1">{errors.selectedTime}</p>}
            </div>
            <div>
              <button
                 className='border-2 border-darkBlue px-7 py-3 rounded-full uppercase font-semibold hover:bg-darkBlue hover:text-white hover:drop-shadow-lg transition ease-in-out duration-500'
                type="submit"
              >
                Request Consultation
              </button>
            </div>
          </form>
        </div>
        <div className="lg:w-1/2 pl-4">
          <h2 className="text-2xl font-semibold mb-4">Frequently Asked Questions</h2>
          <ul>
            {faqData.map((faq, index) => (
              <li key={index} className="mb-4">
                <div className="flex justify-between items-center cursor-pointer" onClick={() => toggleFAQ(index)}>
                  <p className="font-medium">{faq.question}</p>
                  <svg
                    className={`ml-2 h-4 w-4 ${faq.isOpen ? 'transform rotate-180' : ''}`}
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M19 9l-7 7-7-7" />
                  </svg>
                </div>
                {faq.isOpen && <p className="text-gray-600">{faq.answer}</p>}
              </li>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ConsultationForm;
