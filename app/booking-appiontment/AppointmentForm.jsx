import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AppointmentForm = () => {
  const initialValues = {
    name: '',
    email: '',
    service: '',
    date: '',
    time: '',
  };

  const validationSchema = Yup.object({
    name: Yup.string().required('Full name is required'),
    email: Yup.string().email('Invalid email').required('Email is required'),
    service: Yup.string().required('Please select a service'),
    date: Yup.date().required('Date is required'),
    time: Yup.string().required('Time is required'),
  });

  const onSubmit = (values, { resetForm }) => {
    alert('Appointment booked successfully!');
    console.log('Form Data:', values);
    resetForm();
  };

  return (
    <div className="min-h-screen bg-pink-50 flex items-center justify-center p-6">
      <div className="max-w-xl w-full bg-white rounded-xl shadow-lg p-8">
        <h2 className="text-3xl font-bold text-pink-600 mb-6 text-center">Book an Appointment</h2>
        <Formik initialValues={initialValues} validationSchema={validationSchema} onSubmit={onSubmit}>
          <Form className="space-y-5">
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <Field
                name="name"
                type="text"
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Field
                name="email"
                type="email"
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Service</label>
              <Field
                as="select"
                name="service"
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              >
                <option value="">-- Select Service --</option>
                <option value="makeup">Makeup</option>
                <option value="hair">Hair Styling</option>
                <option value="nails">Nail Care</option>
                <option value="spa">Spa & Facial</option>
              </Field>
              <ErrorMessage name="service" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Date</label>
              <Field
                name="date"
                type="date"
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
            </div>

            <div>
              <label className="block text-sm font-medium text-gray-700">Time</label>
              <Field
                name="time"
                type="time"
                className="w-full mt-1 p-2 border rounded focus:outline-none focus:ring-2 focus:ring-pink-400"
              />
              <ErrorMessage name="time" component="div" className="text-red-500 text-sm" />
            </div>

            <button
              type="submit"
              className="w-full py-2 px-4 bg-pink-600 text-white rounded hover:bg-pink-700 transition"
            >
              Book Now
            </button>
          </Form>
        </Formik>
      </div>
    </div>
  );
};

export default AppointmentForm;
