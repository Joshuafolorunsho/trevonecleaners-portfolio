import { useForm as useFormSpree } from '@formspree/react';
import { yupResolver } from '@hookform/resolvers/yup';
import { useForm } from 'react-hook-form';
import { toast } from 'react-toastify';
import React from 'react';

import * as yup from 'yup';

import { Button, TextAreaField } from '~/components';
import { InputField } from '~/components/InputField';

type FormValues = {
  fullName: string;
  phoneNumber: string;
  email: string;
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
    message: yup.string().required('This field is required')
  })
  .required();

const Index = () => {
  const [state, handleSubmitForm] = useFormSpree('mbjenoew');
  const {
    watch,
    register,
    handleSubmit,
    formState: { errors },
    reset
  } = useForm<FormValues>({ resolver: yupResolver(schema) });

  const message = watch('message');

  React.useEffect(() => {
    if (state.succeeded) {
      toast.success('Form successfully submitted.');
      reset();
    }
  }, [state.succeeded]);

  const onSubmit = (data: FormValues) => {
    const { fullName, email, message, phoneNumber } = data || {};
    const payload = {
      'Full Name': fullName,
      'Phone number': phoneNumber,
      Email: email,
      Message: message
    };
    handleSubmitForm(payload);
  };

  return (
    <div className="bg-blue-50">
      <section className="bg-hero-contact bg-cover bg-no-repeat py-8 text-white sm:py-28">
        <div className="container mx-auto">
          <div className="flex flex-col items-center justify-center">
            <h1
              style={{ backdropFilter: 'blur(4px)' }}
              className="rounded-full border border-white bg-primary-300/40 px-6 py-3 text-4xl font-bold"
            >
              Contact Us
            </h1>
          </div>
        </div>
      </section>
      <section className="container mx-auto my-8 ">
        <div className="rounded-3xl bg-white px-6 py-14 shadow-lg shadow-gray-300 sml:px-8 sm:rounded-[40px] md:flex md:space-x-14 lg:items-center lg:px-14">
          <div className="flex-1">
            <h2 className="pb-1 text-2xl font-semibold text-gray-950 sml:text-4xl">
              Contact Us Today
            </h2>
            <p className="mt-1 text-base text-gray-850 sml:text-2xl">
              We will give you a call to follow up.
            </p>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-2 w-full">
              <div className="flex-1">
                <InputField
                  type={'text'}
                  placeholder="Full name"
                  registration={{ ...register('fullName') }}
                  hasError={errors.fullName}
                  errorMessage={errors.fullName?.message}
                  isRequired
                  className="my-3 max-w-4xl"
                />
                <InputField
                  type={'number'}
                  placeholder="Phone Number"
                  registration={{ ...register('phoneNumber') }}
                  hasError={errors.phoneNumber}
                  errorMessage={errors.phoneNumber?.message}
                  isRequired
                  className="my-3 max-w-4xl"
                />
                <InputField
                  type={'email'}
                  placeholder="Email Address"
                  registration={{ ...register('email') }}
                  hasError={errors.email}
                  errorMessage={errors.email?.message}
                  isRequired
                  className="my-3 max-w-4xl"
                />
              </div>
              <TextAreaField
                id="message"
                placeholder="Message"
                registration={{ ...register('message') }}
                errorMessage={errors.message?.message}
                hasError={errors.message}
                value={message}
                isRequired
                className="mb-1 mt-2 border-gray-150 text-gray-950 placeholder-gray-150"
              />
              <div className="mb-2 mt-4 flex justify-center">
                <Button disabled={state.submitting} type="submit" className="w-full">
                  {state.submitting ? 'Sending...' : 'Send'}
                </Button>
              </div>
            </form>
          </div>

          <a
            href="https://www.google.com/maps/place/12+Ismail+Est,+Maryland+101233,+Lagos/@6.5668564,3.3635836,17z/data=!3m1!4b1!4m6!3m5!1s0x103b8d89d6e6e549:0x9df814523bbcf7a0!8m2!3d6.5668511!4d3.3661585!16s%2Fg%2F11st868g7c?entry=ttu"
            target="_blank"
            rel="noreferrer"
            className="mt-8 flex-1 md:mt-0"
          >
            <img src="/assets/contact/map.png" className="h-full w-full rounded-2xl object-cover" />
          </a>
        </div>
      </section>
      <section className="container mx-auto md:pt-8">
        <div className="font-open-sans md:flex">
          <div className="flex-1 bg-primary-500 px-5 py-4">
            <div className="flex h-full flex-col justify-center">
              <div className="flex items-center">
                <span>
                  <svg
                    width="42"
                    height="42"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3"
                  >
                    <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.5" />
                    <path
                      d="M31.95 33C29.8 33 27.7043 32.5207 25.663 31.562C23.621 30.604 21.8127 29.3373 20.238 27.762C18.6627 26.1873 17.396 24.379 16.438 22.337C15.4793 20.2957 15 18.2 15 16.05C15 15.75 15.1 15.5 15.3 15.3C15.5 15.1 15.75 15 16.05 15H20.1C20.3333 15 20.5417 15.075 20.725 15.225C20.9083 15.375 21.0167 15.5667 21.05 15.8L21.7 19.3C21.7333 19.5333 21.7293 19.7457 21.688 19.937C21.646 20.129 21.55 20.3 21.4 20.45L19 22.9C19.7 24.1 20.575 25.225 21.625 26.275C22.675 27.325 23.8333 28.2333 25.1 29L27.45 26.65C27.6 26.5 27.796 26.3873 28.038 26.312C28.2793 26.2373 28.5167 26.2167 28.75 26.25L32.2 26.95C32.4333 27 32.625 27.1123 32.775 27.287C32.925 27.4623 33 27.6667 33 27.9V31.95C33 32.25 32.9 32.5 32.7 32.7C32.5 32.9 32.25 33 31.95 33Z"
                      fill="white"
                    />
                  </svg>
                </span>
                <p className="text-lg font-bold text-white">081 611 65 391</p>
              </div>

              <p className="pl-14 text-primary-50">Drop us a call</p>
            </div>
          </div>
          <div className="flex-1 bg-primary-50 px-4 py-5">
            <div className="flex h-full flex-col justify-center">
              <div className="flex items-center">
                <span>
                  <svg
                    width="43"
                    height="43"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 inline-block"
                  >
                    <circle cx="24" cy="24" r="24" fill="white" fill-opacity="0.5" />
                    <path
                      d="M32 16H16C14.9 16 14.01 16.9 14.01 18L14 30C14 31.1 14.9 32 16 32H32C33.1 32 34 31.1 34 30V18C34 16.9 33.1 16 32 16ZM32 20L24 25L16 20V18L24 23L32 18V20Z"
                      fill="black"
                    />
                  </svg>
                </span>
                <p className="min-w-0 break-words text-xl font-bold text-gray-950 ">
                  consult@trevonecleaners.com
                </p>
              </div>

              <p className="pl-14 text-gray-850">Drop us a message</p>
            </div>
          </div>
          <div className="flex-1 bg-primary-500 px-4 py-5">
            <div className="flex h-full flex-col justify-center">
              <div className="flex items-center">
                <span>
                  <svg
                    width="41"
                    height="41"
                    viewBox="0 0 48 48"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-3 inline-block"
                  >
                    <circle cx="24" cy="24" r="24" fill="white" fillOpacity="0.5" />
                    <g filter="url(#filter0_d_86_777)">
                      <path
                        d="M24 24C24.55 24 25.021 23.804 25.413 23.412C25.8043 23.0207 26 22.55 26 22C26 21.45 25.8043 20.979 25.413 20.587C25.021 20.1957 24.55 20 24 20C23.45 20 22.9793 20.1957 22.588 20.587C22.196 20.979 22 21.45 22 22C22 22.55 22.196 23.0207 22.588 23.412C22.9793 23.804 23.45 24 24 24ZM24 34C21.3167 31.7167 19.3127 29.5957 17.988 27.637C16.6627 25.679 16 23.8667 16 22.2C16 19.7 16.8043 17.7083 18.413 16.225C20.021 14.7417 21.8833 14 24 14C26.1167 14 27.979 14.7417 29.587 16.225C31.1957 17.7083 32 19.7 32 22.2C32 23.8667 31.3377 25.679 30.013 27.637C28.6877 29.5957 26.6833 31.7167 24 34Z"
                        fill="white"
                      />
                    </g>
                    <defs>
                      <filter
                        id="filter0_d_86_777"
                        x="5"
                        y="9"
                        width="38"
                        height="38"
                        filterUnits="userSpaceOnUse"
                        color-interpolation-filters="sRGB"
                      >
                        <feFlood floodOpacity="0" result="BackgroundImageFix" />
                        <feColorMatrix
                          in="SourceAlpha"
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0"
                          result="hardAlpha"
                        />
                        <feOffset dy="4" />
                        <feGaussianBlur stdDeviation="3.5" />
                        <feComposite in2="hardAlpha" operator="out" />
                        <feColorMatrix
                          type="matrix"
                          values="0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.08 0"
                        />
                        <feBlend
                          mode="normal"
                          in2="BackgroundImageFix"
                          result="effect1_dropShadow_86_777"
                        />
                        <feBlend
                          mode="normal"
                          in="SourceGraphic"
                          in2="effect1_dropShadow_86_777"
                          result="shape"
                        />
                      </filter>
                    </defs>
                  </svg>
                </span>
                <p className="text-lg font-bold text-white">
                  12, Nana Okuribido street, Ismail Estate, Maryland, Lagos State.
                </p>
              </div>
              <p className="pl-14 pt-3 text-primary-50">Pay us a visit</p>
            </div>
          </div>
        </div>
      </section>
      <section className="bg-primary-300 py-12">
        <div className="mx-auto max-w-2xl p-3 text-center">
          <div className="flex items-center justify-center pb-7">
            <span>
              <svg
                width="46"
                height="54"
                viewBox="0 0 46 68"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M18.7698 36.67L0.883087 3.02666C0.780328 2.8334 0.716641 2.62179 0.695662 2.40392C0.674683 2.18604 0.696823 1.96617 0.760818 1.75685C0.890062 1.33411 1.18194 0.980026 1.57225 0.772494C1.96256 0.564963 2.41933 0.520981 2.84207 0.650225C3.05139 0.71422 3.24605 0.818816 3.41495 0.958043C3.58384 1.09727 3.72366 1.2684 3.82642 1.46166L21.7148 35.105L24.2514 33.755C25.0246 33.344 25.8711 33.0893 26.7427 33.0054C27.6143 32.9216 28.4938 33.0103 29.3311 33.2665C30.1684 33.5226 30.9471 33.9412 31.6226 34.4983C32.2981 35.0554 32.8572 35.7401 33.2681 36.5133L34.3481 38.545L45.7981 55.3017L31.2348 63.0433L26.1898 53.0717L23.2164 54.5767L28.2914 64.61L22.0481 67.9283L14.5564 49.065L13.4781 47.035C13.067 46.262 12.8122 45.4155 12.7283 44.544C12.6443 43.6725 12.7329 42.793 12.9889 41.9557C13.2448 41.1184 13.6632 40.3397 14.2202 39.6642C14.7771 38.9886 15.4617 38.4293 16.2348 38.0183L18.7698 36.67ZM25.8148 36.7L17.7981 40.9617C17.4115 41.1672 17.0693 41.4468 16.7908 41.7846C16.5123 42.1224 16.3031 42.5117 16.1751 42.9303C16.0471 43.349 16.0029 43.7887 16.0448 44.2245C16.0868 44.6603 16.2142 45.0835 16.4198 45.47L17.4981 47.5L31.4031 40.1067L30.3231 38.0783C30.1176 37.6918 29.838 37.3495 29.5002 37.071C29.1624 36.7926 28.7731 36.5834 28.3544 36.4554C27.9358 36.3274 27.496 36.2831 27.0603 36.3251C26.6245 36.3671 26.2013 36.4945 25.8148 36.7Z"
                  fill="white"
                />
              </svg>
            </span>
            <h2 className="text-2xl font-bold text-white">Trevone Nigeria</h2>
          </div>

          <p className="py-3 text-gray-250">
            Stay connected with us! Follow us on social media to see our latest news, promotions,
            and updates. Click the links below to find us on your favorite platforms. We look
            forward to staying in touch with you!
          </p>
          <div className="flex justify-center space-x-8 pt-3">
            <a href="https://twitter.com/TrevoneN97713" target="_blank" rel="noreferrer">
              {' '}
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#99CEDC" />
                <path
                  d="M31.8992 12.838C31.0092 13.2426 30.0499 13.5084 29.0559 13.6356C30.073 13.023 30.859 12.0521 31.2288 10.8847C30.2695 11.4626 29.2061 11.8671 28.085 12.0983C27.1719 11.1043 25.8889 10.5264 24.4325 10.5264C21.7163 10.5264 19.4971 12.7456 19.4971 15.4849C19.4971 15.8779 19.5434 16.2593 19.6243 16.6176C15.5095 16.4095 11.8456 14.4331 9.40675 11.4395C8.97909 12.1676 8.73637 13.023 8.73637 13.9245C8.73637 15.6467 9.60324 17.1724 10.944 18.0393C10.1234 18.0393 9.36052 17.8081 8.69014 17.4614V17.496C8.69014 19.9002 10.4008 21.9113 12.6662 22.3621C11.9389 22.5611 11.1753 22.5888 10.4354 22.443C10.7494 23.4283 11.3642 24.2905 12.1935 24.9083C13.0228 25.5261 14.0248 25.8685 15.0588 25.8874C13.3061 27.2749 11.1336 28.0249 8.89819 28.0141C8.5052 28.0141 8.11222 27.991 7.71924 27.9447C9.91532 29.3548 12.5275 30.1755 15.3246 30.1755C24.4325 30.1755 29.4373 22.6164 29.4373 16.0628C29.4373 15.8432 29.4373 15.6351 29.4257 15.4155C30.3966 14.722 31.2288 13.8436 31.8992 12.838Z"
                  fill="#1E2324"
                />
              </svg>
            </a>
            <a href="https://web.facebook.com/trevone.nigeria" target="_blank" rel="noreferrer">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#99CEDC" />
                <path
                  d="M30.0501 20.0251C30.0501 14.4912 25.5589 10 20.0251 10C14.4912 10 10 14.4912 10 20.0251C10 24.8772 13.4486 28.9173 18.0201 29.8496V23.0326H16.015V20.0251H18.0201V17.5188C18.0201 15.584 19.594 14.01 21.5288 14.01H24.0351V17.0175H22.0301C21.4787 17.0175 21.0276 17.4687 21.0276 18.02V20.0251H24.0351V23.0326H21.0276V30C26.0902 29.4987 30.0501 25.2281 30.0501 20.0251Z"
                  fill="#1E2324"
                />
              </svg>
            </a>
            <a href="https://www.instagram.com/trevone.nigeria/" target="_blank" rel="noreferrer">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
              >
                <rect width="40" height="40" rx="20" fill="#99CEDC" />
                <path
                  d="M22.54 19.5C22.54 20.1013 22.3617 20.689 22.0277 21.1889C21.6936 21.6889 21.2188 22.0785 20.6634 22.3086C20.1079 22.5387 19.4966 22.5989 18.9069 22.4816C18.3172 22.3643 17.7755 22.0748 17.3504 21.6496C16.9252 21.2245 16.6357 20.6828 16.5184 20.0931C16.4011 19.5034 16.4613 18.8921 16.6914 18.3366C16.9215 17.7812 17.3111 17.3064 17.8111 16.9723C18.311 16.6383 18.8987 16.46 19.5 16.46C20.3055 16.4625 21.0773 16.7836 21.6468 17.3532C22.2164 17.9227 22.5375 18.6945 22.54 19.5ZM29 15.32V23.68C29 25.091 28.4395 26.4441 27.4418 27.4418C26.4441 28.4395 25.091 29 23.68 29H15.32C13.909 29 12.5559 28.4395 11.5582 27.4418C10.5605 26.4441 10 25.091 10 23.68V15.32C10 13.909 10.5605 12.5559 11.5582 11.5582C12.5559 10.5605 13.909 10 15.32 10H23.68C25.091 10 26.4441 10.5605 27.4418 11.5582C28.4395 12.5559 29 13.909 29 15.32ZM24.06 19.5C24.06 18.5981 23.7926 17.7165 23.2915 16.9666C22.7904 16.2167 22.0783 15.6322 21.245 15.2871C20.4118 14.942 19.4949 14.8517 18.6104 15.0276C17.7258 15.2036 16.9133 15.6379 16.2756 16.2756C15.6379 16.9133 15.2036 17.7258 15.0276 18.6104C14.8517 19.4949 14.942 20.4118 15.2871 21.245C15.6322 22.0783 16.2167 22.7904 16.9666 23.2915C17.7165 23.7926 18.5981 24.06 19.5 24.06C20.7094 24.06 21.8692 23.5796 22.7244 22.7244C23.5796 21.8692 24.06 20.7094 24.06 19.5ZM25.58 14.56C25.58 14.3345 25.5131 14.1141 25.3879 13.9267C25.2626 13.7392 25.0846 13.5931 24.8763 13.5068C24.668 13.4205 24.4387 13.3979 24.2176 13.4419C23.9965 13.4859 23.7933 13.5945 23.6339 13.7539C23.4745 13.9133 23.3659 14.1165 23.3219 14.3376C23.2779 14.5587 23.3005 14.788 23.3868 14.9963C23.4731 15.2046 23.6192 15.3826 23.8067 15.5079C23.9941 15.6331 24.2145 15.7 24.44 15.7C24.7423 15.7 25.0323 15.5799 25.2461 15.3661C25.4599 15.1523 25.58 14.8623 25.58 14.56Z"
                  fill="#1E2324"
                />
              </svg>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Index;
