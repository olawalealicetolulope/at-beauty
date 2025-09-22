"use client";
import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';

const AppointmentForm = () => {
   const initialValues = {
    name: "",
    email: "",
    phone: "",
    service: "",
    date: "",
    time: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    service: Yup.string().required("Please select a service"),
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    message: Yup.string(),
  });

  const onSubmit = (values, { resetForm }) => {
    alert("Your session has been booked successfully!");
    console.log("Booking Info:", values);
    resetForm();
  };

  return (
     <main className="min-h-screen bg-white py-16 px-4">
      {/* Page Header */}
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-400 uppercase">Book a Session</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Fill in the form below to schedule your personalized beauty session with us.
        </p>
      </section>

      {/* Booking Form */}
      <section className="max-w-2xl mx-auto bg-orange-50 p-8 rounded-xl shadow-lg">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          <Form className="space-y-6">
            {/* Full Name */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Full Name</label>
              <Field
                name="name"
                type="text"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <ErrorMessage name="name" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Email */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Email</label>
              <Field
                name="email"
                type="email"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <ErrorMessage name="email" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Phone Number */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Phone</label>
              <Field
                name="phone"
                type="text"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Service Selection */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Service</label>
              <Field
                as="select"
                name="service"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              >
                <option value="">Select a service</option>
                <option value="facial">Facial Treatment</option>
                <option value="makeup">Makeup Session</option>
                <option value="massage">Body Massage</option>
                <option value="hair">Hair Styling</option>
                <option value="nails">Nail Care</option>
              </Field>
              <ErrorMessage name="service" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Date */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Date</label>
              <Field
                name="date"
                type="date"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <ErrorMessage name="date" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Time */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Preferred Time</label>
              <Field
                name="time"
                type="time"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <ErrorMessage name="time" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Message */}
            <div>
              <label className="block text-sm font-medium text-gray-700">Additional Message</label>
              <Field
                as="textarea"
                name="message"
                rows={4}
                placeholder="Anything we should know?"
                className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
              />
              <ErrorMessage name="message" component="div" className="text-red-500 text-sm" />
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              className="w-full bg-orange-400 text-white py-3 rounded-md hover:bg-orange-500 transition"
            >
              Book Session
            </button>
          </Form>
        </Formik>
      </section>
    </main>
  );
}
export default AppointmentForm;
