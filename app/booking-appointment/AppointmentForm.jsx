"use client";

import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";
import { collection, addDoc } from "firebase/firestore";
import { db } from "@/lib/firebaseConfig";

const AppointmentForm = () => {
  const servicesMap = {
    "Facial Treatments": [
      { name: "Classic Facial", price: 10000 },
      { name: "Hydrating Facial", price: 12000 },
      { name: "Anti-Aging Facial", price: 15000 },
      { name: "Acne Treatment Facial", price: 13000 },
      { name: "Brightening Facial", price: 14000 },
    ],
    "Makeup Sessions": [
      { name: "Bridal Makeup", price: 35000 },
      { name: "Party Makeup", price: 25000 },
      { name: "Editorial Makeup", price: 30000 },
    ],
    "Body Massage": [
      { name: "Swedish Massage", price: 12000 },
      { name: "Deep Tissue Massage", price: 15000 },
      { name: "Hot Stone Massage", price: 17000 },
    ],
    "Hair Styling": [
      { name: "Silk Press", price: 10000 },
      { name: "Braids", price: 12000 },
      { name: "Natural Styling", price: 8000 },
      { name: "Coloring & Highlights", price: 18000 },
    ],
    "Nail Care": [
      { name: "Classic Manicure", price: 5000 },
      { name: "Gel Polish", price: 7000 },
      { name: "Pedicure with Scrub", price: 8000 },
      { name: "Acrylic Nails", price: 10000 },
       { name: "Nail Design", price: 15000 },
     
    ],
  };

  const initialValues = {
    name: "",
    email: "",
    phone: "",
    category: "",
    service: "",
    price: 0,
    date: "",
    time: "",
    message: "",
  };

  const validationSchema = Yup.object({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    phone: Yup.string().required("Phone number is required"),
    category: Yup.string().required("Please select a category"),
    service: Yup.string().required("Please select a service"),
    date: Yup.date().required("Date is required"),
    time: Yup.string().required("Time is required"),
    message: Yup.string(),
  });

  const onSubmit = async (values, { resetForm }) => {
    const selectedService =
      servicesMap[values.category]?.find((s) => s.name === values.service);
    const price = selectedService?.price || 0;

    const bookingData = {
      ...values,
      price,
      status: "pending", // 🔒 Default status
      createdAt: new Date(), // optional timestamp
    };

    try {
      await addDoc(collection(db, "BookSession"), bookingData);
      alert("Your session has been booked successfully!");
      resetForm();
    } catch (error) {
      console.error("Error booking session:", error);
      alert("An error occurred while booking your session.");
    }
  };

  return (
    <main className="min-h-screen bg-white py-16 px-4">
      <section className="text-center mb-12">
        <h1 className="text-4xl font-bold text-orange-400 uppercase">Book a Session</h1>
        <p className="mt-4 text-gray-600 max-w-xl mx-auto">
          Fill in the form below to schedule your personalized beauty session with us.
        </p>
      </section>

      <section className="max-w-2xl mx-auto bg-orange-50 p-8 rounded-xl shadow-lg">
        <Formik
          initialValues={initialValues}
          validationSchema={validationSchema}
          onSubmit={onSubmit}
        >
          {({ values }) => (
            <Form className="space-y-6">
              {/* Name */}
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

              {/* Phone */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Phone</label>
                <Field
                  name="phone"
                  type="text"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                />
                <ErrorMessage name="phone" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Category */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Category</label>
                <Field
                  as="select"
                  name="category"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option value="">Select a category</option>
                  {Object.keys(servicesMap).map((category) => (
                    <option key={category} value={category}>
                      {category}
                    </option>
                  ))}
                </Field>
                <ErrorMessage name="category" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Service */}
              <div>
                <label className="block text-sm font-medium text-gray-700">Service</label>
                <Field
                  as="select"
                  name="service"
                  className="w-full mt-1 p-3 border rounded-md focus:outline-none focus:ring-2 focus:ring-orange-400"
                >
                  <option value="">Select a service</option>
                  {values.category &&
                    servicesMap[values.category].map((service) => (
                      <option key={service.name} value={service.name}>
                        {service.name}
                      </option>
                    ))}
                </Field>
                <ErrorMessage name="service" component="div" className="text-red-500 text-sm" />
              </div>

              {/* Price */}
              {values.category && values.service && (
                <div>
                  <label className="block text-sm font-medium text-gray-700">Price</label>
                  <div className="mt-1 p-3 border rounded-md bg-gray-100 text-gray-700">
                    ₦
                    {
                      servicesMap[values.category].find(
                        (s) => s.name === values.service
                      )?.price ?? 0
                    }
                  </div>
                </div>
              )}

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

              {/* Submit */}
              <button
                type="submit"
                className="w-full bg-orange-400 text-white py-3 rounded-md hover:bg-orange-500 transition"
              >
                Book Session
              </button>
            </Form>
          )}
        </Formik>
      </section>
    </main>
  );
};

export default AppointmentForm;
