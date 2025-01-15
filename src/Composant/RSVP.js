import React from 'react';
import { Formik, Form, Field, ErrorMessage } from 'formik';
import * as Yup from 'yup';
import Banner from './banner';

const WEB3FORMS_KEY = process.env.REACT_APP_WEB3FORMS_KEY;

const RSVP = ({ showOnlyForm = false }) => {
    const validationSchema = Yup.object({
        name: Yup.string().required('Veuillez remplir le champ'),
        email: Yup.string().email('Adresse mail invalide').required('Veuillez remplir le champ'),
        message: Yup.string().required('Veuillez remplir le champ'),
        address: Yup.string().required('Veuillez remplir le champ'),
        alim: Yup.string().required('Veuillez remplir le champ'),
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        // ... votre logique handleSubmit reste identique ...
    };

    return (
        <>
            <Banner />
            <div className="relative min-h-screen">
                <div 
                    className="fixed inset-0 w-full h-full pointer-events-none -z-10 opacity-80"
                    style={{
                        backgroundImage: `url(${process.env.PUBLIC_URL}/images/Color.jpg)`,
                        backgroundSize: 'cover',
                        backgroundPosition: 'center',
                        backgroundRepeat: 'no-repeat',
                    }}
                    aria-hidden="true"
                />

                <div className={`contact-form-section ${showOnlyForm ? '' : 'min-h-screen'} mt-8 sm:mt-12`}>
                    <Formik
                        initialValues={{ name: '', email: '', message: '', address: '', alim: '' }}
                        validationSchema={validationSchema}
                        onSubmit={handleSubmit}
                    >
                        {({ isSubmitting }) => (
                            <div className={`${showOnlyForm ? '' : 'min-h-screen'} flex items-center justify-center px-4 py-6 sm:py-8`}>
                                <div className="Form w-full max-w-2xl bg-white/50 backdrop-blur-sm rounded-xl sm:rounded-2xl shadow-xl p-4 sm:p-8 mx-auto">
                                    <div className="text-center mb-6 sm:mb-8">
                                        <h2 id='contacts' className='text-2xl sm:text-3xl lg:text-4xl font-bold text-gray-800 mb-3 sm:mb-4'>
                                            Répondez SVP !
                                        </h2>
                                        <p className='text-sm sm:text-base lg:text-lg text-gray-800 max-w-md mx-auto px-2'>
                                            Tu ne sais pas quoi me répondre ? Dis moi si tu viens au mariage le 13.09.2025, combien vous êtes et si tu viens à la mairie !
                                        </p>
                                    </div>

                                    <Form className="space-y-4 sm:space-y-6">
                                        {/* Champs du formulaire avec styles responsifs */}
                                        <InputField name="name" type="text" placeholder="Votre nom" />
                                        <InputField name="email" type="email" placeholder="votre@email.com" />
                                        <InputField name="address" type="text" placeholder="Votre adresse" />
                                        <InputField name="alim" type="text" placeholder="Restrictions alimentaires" />
                                        <TextAreaField name="message" placeholder="Votre message..." />

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className={`w-full py-3 sm:py-4 px-4 sm:px-6 rounded-xl text-base sm:text-lg 
                                                      font-semibold text-white transition duration-150 ease-in-out
                                                      ${isSubmitting 
                                                        ? 'bg-gray-400 cursor-not-allowed' 
                                                        : 'bg-blue-700 hover:bg-blue-800 active:bg-blue-800 hover:shadow-lg'
                                                      }`}
                                        >
                                            {isSubmitting ? 'Envoi en cours...' : 'Envoyer le message'}
                                        </button>
                                    </Form>
                                </div>
                            </div>
                        )}
                    </Formik>
                </div>
            </div>
        </>
    );
};

// Composants réutilisables pour les champs de formulaire
const InputField = ({ name, type, placeholder }) => (
    <div className="space-y-1 sm:space-y-2">
        <Field
            type={type}
            name={name}
            className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl 
                       border-2 border-gray-200 bg-gray-50 
                       focus:border-blue-400 focus:ring-blue-400 focus:outline-none 
                       transition duration-150 ease-in-out
                       text-sm sm:text-base"
            placeholder={placeholder}
        />
        <ErrorMessage name={name} component="div" className="text-red-500 text-xs sm:text-sm mt-1 text-center" />
    </div>
);

const TextAreaField = ({ name, placeholder }) => (
    <div className="space-y-1 sm:space-y-2">
        <Field
            as="textarea"
            name={name}
            rows="4"
            className="block w-full px-3 sm:px-4 py-2.5 sm:py-3 rounded-lg sm:rounded-xl 
                       border-2 border-gray-200 bg-gray-50 
                       focus:border-blue-400 focus:ring-blue-400 focus:outline-none 
                       transition duration-150 ease-in-out resize-none
                       text-sm sm:text-base"
            placeholder={placeholder}
        />
        <ErrorMessage name={name} component="div" className="text-red-500 text-xs sm:text-sm mt-1 text-center" />
    </div>
);

export default RSVP;