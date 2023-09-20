import { useForm as useFormSpree } from '@formspree/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm, Control } from 'react-hook-form';
import React, { useState } from 'react';
import Link from 'next/link';
import * as yup from 'yup';

import { Button, SelectField, TextAreaField, Title } from '~/components';
import { InputDateField } from '~/components/InputDateField';
import { InputField } from '~/components/InputField';
import { toast } from 'react-toastify';
import { useRouter } from 'next/router';

type FormValues = {
  fullName: string;
  phoneNumber: number;
  email: string;
  serviceType: { id: string; name: string };
  date: number;
  serviceTime: { id: string; name: string };
  message: string;
};

const schema = yup
  .object({
    fullName: yup.string().required('This field is required'),
    email: yup
      .string()
      .email('Please enter a valid email address')
      .required('This field is required'),
    phoneNumber: yup
      .string()
      .required('This field is required')
      .matches(/^([0]{1})[0-9]{10}$/, 'Invalid phone number.'),
    date: yup.date().required('This field is required'),
    serviceType: yup.mixed().required('This field is required'),
    serviceTime: yup.mixed().required('This field is required'),
    message: yup.string().required('This field is required')
    // .min(1, 'Must be more than 1 character')
    // .max(500, 'Not more than 500 characters')
  })
  .required();

const Index = () => {
  const router = useRouter();
  const [state, handleSubmitForm] = useFormSpree('xdovqgvr');
  const [formData, setFormData] = useState<FormValues>();
  const formatDate: string[] =
    formData?.date !== undefined ? new Date(formData.date).toString().split(' ') : [];
  const {
    watch,
    register,
    handleSubmit,
    control,
    formState: { errors, isSubmitSuccessful },
    reset
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const message = watch('message');

  const onSubmit = (data: FormValues) => {
    setFormData(data);
  };

  const services = [
    {
      id: 'General Cleaning',
      name: 'General Cleaning'
    },
    {
      id: 'Carpet & Upholstery Cleaning',
      name: 'Carpet & Upholstery Cleaning'
    },
    { id: 'Industrial Cleaning', name: 'Industrial Cleaning' },
    {
      id: 'Floor restoration & Cleaning',
      name: 'Floor restoration & Cleaning'
    },
    {
      id: 'Fumigation & Pest Control',
      name: 'Fumigation & Pest Control'
    }
  ];

  const time = [
    {
      id: 'Morning',
      name: 'Morning'
    },
    {
      id: 'Afternoon',
      name: 'Afternoon'
    },
    { id: 'Evening', name: 'Evening' }
  ];

  React.useEffect(() => {
    if (state.succeeded) {
      toast.success('Form successfully submitted.');
    }
  }, [state.succeeded]);

  const handleConfirmBooking = () => {
    const { fullName, date, email, message, phoneNumber, serviceTime, serviceType } =
      formData || {};
    const payload = {
      'Full Name': fullName,
      Date: new Date(date ? date : '').toDateString(),
      'Phone number': phoneNumber,
      Email: email,
      'Service Time': serviceTime?.name,
      'Service Type': serviceType?.name,
      Message: message
    };
    handleSubmitForm(payload);
  };

  const handleReset = () => {
    reset(formData);
  };

  return (
    <div className="bg-blue-50">
      <section className="bg-hero-book bg-cover bg-no-repeat py-8 text-white sm:py-28">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1
              style={{ backdropFilter: 'blur(4px)' }}
              className="rounded-full border border-white bg-primary-300/40 px-6 py-3 text-4xl font-bold"
            >
              Book us now
            </h1>
          </div>
        </div>
      </section>
      <section className="p-8"></section>
      <section className=" bg-primary-300/90 text-center">
        <p className="container mx-auto flex flex-col  items-center justify-center gap-3 py-5 text-white  sm:flex-row md:py-8">
          <svg
            width="34"
            height="32"
            viewBox="0 0 34 32"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              d="M33.6663 12.4L21.683 11.3667L16.9997 0.333333L12.3163 11.3833L0.333008 12.4L9.43301 20.2833L6.69967 32L16.9997 25.7833L27.2997 32L24.583 20.2833L33.6663 12.4ZM16.9997 22.6667L10.733 26.45L12.3997 19.3167L6.86634 14.5167L14.1663 13.8833L16.9997 7.16667L19.8497 13.9L27.1497 14.5333L21.6163 19.3333L23.283 26.4667L16.9997 22.6667Z"
              fill="#E4F2F6"
            />
          </svg>

          <span className="text-lg md:text-2xl">
            Enjoy 12% discount when booking from our website
          </span>
        </p>
      </section>
      <section className="py-16">
        {!isSubmitSuccessful ? (
          <section className="container mx-auto rounded-2xl bg-white py-7 shadow-lg">
            <div className="mx-auto md:max-w-3xl">
              <div className="flex items-center justify-center space-x-3">
                <svg
                  className="h-6 w-6 sm:h-10 sm:w-10"
                  viewBox="0 0 35 34"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    d="M9.5 33H25.5"
                    stroke="#4EABC2"
                    strokeWidth="1.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M1.5 25V4.2C1.5 3.35131 1.83714 2.53737 2.43726 1.93726C3.03737 1.33714 3.85131 1 4.7 1H30.3C31.1487 1 31.9626 1.33714 32.5627 1.93726C33.1629 2.53737 33.5 3.35131 33.5 4.2V25C33.5 25.8487 33.1629 26.6626 32.5627 27.2627C31.9626 27.8629 31.1487 28.2 30.3 28.2H4.7C3.85131 28.2 3.03737 27.8629 2.43726 27.2627C1.83714 26.6626 1.5 25.8487 1.5 25Z"
                    fill="#4EABC2"
                    stroke="#4EABC2"
                    strokeWidth="1.5"
                  />
                  <path
                    d="M12.6992 14.6L15.8992 17.8L22.2992 11.4"
                    stroke="white"
                    strokeWidth="3.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
                <span className="py-1 text-2xl font-bold text-gray-950 sm:text-4xl">
                  Ready to book our services?
                </span>
              </div>
              <p className="mt-2 text-center font-open-sans text-gray-850 sm:text-lg">
                It's easy! Simply fill out the form below with your contact information and the
                details of the services you need. Our team will be in touch with you promptly to
                confirm your booking and answer any questions you may have.
              </p>
            </div>
            <section className="my-7 flex justify-center">
              <form onSubmit={handleSubmit(onSubmit)} className="w-full md:max-w-4xl">
                <div className="md:flex md:space-x-10">
                  <div className="flex-1">
                    <h3 className="text-lg">Personal Details</h3>
                    <InputField
                      placeholder="Full Name"
                      registration={{ ...register('fullName') }}
                      hasError={errors.fullName}
                      errorMessage={errors.fullName?.message}
                      isRequired
                      className="my-3 max-w-4xl"
                    />
                    <InputField
                      type="number"
                      placeholder="Phone Number"
                      registration={{ ...register('phoneNumber') }}
                      hasError={errors.phoneNumber}
                      errorMessage={errors.phoneNumber?.message}
                      isRequired
                      className="my-3 max-w-4xl"
                    />
                    <InputField
                      type="email"
                      placeholder="Email Address"
                      registration={{ ...register('email') }}
                      hasError={errors.email}
                      errorMessage={errors.email?.message}
                      isRequired
                      className="my-3 max-w-4xl"
                    />
                  </div>
                  <div className="mt-6 flex-1 md:mt-0">
                    <h3 className="text-lg">Select date, time & services</h3>
                    <SelectField
                      name="serviceType"
                      placeholder="Service Type"
                      control={control as unknown as Control}
                      arr={services}
                      errorMessage={errors.serviceType?.message}
                      hasError={errors.serviceType}
                      className="my-3 max-w-4xl"
                    />
                    <InputDateField
                      placeholder="Select Date"
                      control={control as unknown as Control}
                      name="date"
                      errorMessage={errors.date?.message}
                      hasError={errors.date}
                      className="my-3 max-w-4xl"
                      isRequired
                    />
                    <SelectField
                      name="serviceTime"
                      placeholder="Service Time"
                      control={control as unknown as Control}
                      arr={time}
                      errorMessage={errors.serviceTime?.message}
                      hasError={errors.serviceTime}
                      className="my-3 max-w-4xl"
                    />
                  </div>
                </div>
                <TextAreaField
                  id="message"
                  placeholder="Message"
                  value={message}
                  registration={{ ...register('message') }}
                  errorMessage={errors.message?.message}
                  hasError={errors.message}
                  isRequired
                  className="mb-1 mt-2 border-gray-150 text-gray-950 placeholder-gray-150"
                />
                <div className="mb-2 mt-4 flex justify-center">
                  <Button type="submit" className="w-full sml:w-10/12 md:w-8/12">
                    Proceed
                  </Button>
                </div>
              </form>
            </section>
          </section>
        ) : (
          <section className="mx-1 mb-14 mt-12 flex justify-center">
            <div className="w-full rounded-xl p-5 text-gray-950 shadow-xl shadow-slate-300 sml:max-w-lg">
              <h2 className="py-3 text-2xl font-semibold sm:text-3xl">Booking Details</h2>
              <div className="border-y border-gray-850">
                <p className="pt-5 text-gray-750">Name</p>
                <div className="flex flex-wrap justify-between pb-6">
                  <p className="flex-1 font-bold ">{formData?.fullName}</p>
                  <button
                    onClick={handleReset}
                    className="font-semibold text-blue-750 hover:text-blue-900"
                  >
                    Edit
                  </button>
                </div>
                <p className="text-gray-750">Email Address</p>
                <p className="flex-1 break-words pb-6 font-bold">{formData?.email}</p>
                <p className="text-gray-750">Phone Number</p>
                <p className="flex-1 pb-4 font-bold">{formData?.phoneNumber}</p>
              </div>
              <div className="border-b border-gray-850 pt-2">
                <p className="pt-5 text-gray-750">Service Type</p>
                <div className="flex flex-wrap justify-between pb-6">
                  <p className="flex-1 font-bold ">{formData?.serviceType.id}</p>
                  <button
                    onClick={handleReset}
                    className="font-semibold text-blue-750 hover:text-blue-900"
                  >
                    Change
                  </button>
                </div>
                <p className="text-gray-750">Service Date</p>
                <p className="flex-1 pb-6 font-bold">
                  {`${formatDate[2]} ${formatDate[1]}, ${formatDate[3]}`}
                </p>
                <p className="text-gray-750">Service Time</p>
                <p className="flex-1 pb-4 font-bold">{formData?.serviceTime.id}</p>
              </div>
              <Button
                disabled={state.submitting || state.succeeded}
                onClick={handleConfirmBooking}
                className="mb-5 mt-8 w-full"
              >
                {state.submitting ? (
                  'Confirming...'
                ) : (
                  <>{state.succeeded ? 'Confirmed.' : 'Proceed to confirm booking'}</>
                )}
              </Button>
            </div>
          </section>
        )}
      </section>
    </div>
  );
};

export default Index;
