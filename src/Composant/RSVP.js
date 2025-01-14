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
        address: Yup.string().required('Veuillez remplir le champ'), // Validation pour l'adresse
        alim: Yup.string().required('Veuillez remplir le champ'), // Validation pour les restrictions alimentaires
    });

    const handleSubmit = async (values, { setSubmitting, resetForm }) => {
        try {
            console.log('Envoi avec la clé:', WEB3FORMS_KEY);
            
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json'
                },
                body: JSON.stringify({
                    access_key: WEB3FORMS_KEY,
                    name: values.name,
                    email: values.email,
                    message: values.message,
                    address: values.address, // Inclure l'adresse dans l'envoi
                    alim: values.alim, // Inclure les restrictions alimentaires
                    subject: 'Les invités ont répondu'
                }),
            });

            const data = await response.json();
            console.log('Réponse:', data);

            if (data.success) {
                alert('Message envoyé avec succès !');
                resetForm();
            } else {
                alert(`Erreur: ${data.message || 'Une erreur est survenue'}`);
            }
        } catch (error) {
            console.error('Erreur détaillée:', error);
            alert(`Erreur lors de l'envoi: ${error.message}`);
        } finally {
            setSubmitting(false);
        }
    };

    return (
        <>
            <Banner />
            <div className={`contact-form-section ${showOnlyForm ? '' : 'min-h-screen'} mt-12`}>
                <Formik
                    initialValues={{ name: '', email: '', message: '', address: '', alim: '' }} // Assurez-vous que 'alim' est initialisé
                    validationSchema={validationSchema}
                    onSubmit={handleSubmit}
                >
                    {({ isSubmitting }) => (
                        <div className={`${showOnlyForm ? '' : 'min-h-screen'} bg-gray-200 rounded-xl flex items-center justify-center`}>
                            <div className="Form w-full max-w-2xl bg-gray-200 rounded-2xl shadow-xl p-8 mx-auto h-full">
                                <div className="text-center mb-8">
                                    <h2 id='contacts' className='text-4xl font-bold text-gray-800 mb-4'>Répondez SVP !</h2>
                                    <p className='text-lg text-gray-600 max-w-md mx-auto'>
                                        Tu ne sais pas quoi me répondre ? Dis moi si tu viens au mariage le 13.09.2025, combien vous êtes et si tu viens à la mairie !
                                    </p>
                                </div>

                                <Form className="space-y-6">
                                    <div className="space-y-2">
                                        <Field
                                            type="text"
                                            name="name"
                                            className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-blue-400 focus:outline-none transition duration-150 ease-in-out"
                                            placeholder="Votre nom"
                                        />
                                        <ErrorMessage name="name" component="div" className="text-red-500 text-sm mt-1 text-center" />
                                    </div>

                                    <div className="space-y-2">
                                        <Field
                                            type="email"
                                            name="email"
                                            className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-blue-400 focus:outline-none transition duration-150 ease-in-out"
                                            placeholder="votre@email.com"
                                        />
                                        <ErrorMessage name="email" component="div" className="text-red-500 text-sm mt-1 text-center" />
                                    </div>

                                    <div className="space-y-2">
                                        <Field
                                            type="text"
                                            name="address"
                                            className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-blue-400 focus:outline-none transition duration-150 ease-in-out"
                                            placeholder="Votre adresse"
                                        />
                                        <ErrorMessage name="address" component="div" className="text-red-500 text-sm mt-1 text-center" />
                                    </div>

                                    <div className="space-y-2">
                                        <Field
                                            type="text"
                                            name="alim"
                                            className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-blue-400 focus:outline-none transition duration-150 ease-in-out"
                                            placeholder="Restrictions alimentaires"
                                        />
                                        <ErrorMessage name="alim" component="div" className="text-red-500 text-sm mt-1 text-center" /> {/* Correction ici */}
                                    </div>

                                    <div className="space-y-2">
                                        <Field
                                            as="textarea"
                                            name="message"
                                            rows="6"
                                            className="block w-full px-4 py-3 rounded-xl border-2 border-gray-200 bg-gray-50 focus:border-blue-400 focus:ring-blue-400 focus:outline-none transition duration-150 ease-in-out resize-none"
                                            placeholder="Votre message..."
                                        />
                                        <ErrorMessage name="message" component="div" className="text-red-500 text-sm mt-1 text-center" />
                                    </div>

                                    <button
                                        type="submit"
                                        disabled={isSubmitting}
                                        className={`w-full py-4 px-6 rounded-xl text-lg font-semibold text-white transition duration-150 ease-in-out
                                          ${isSubmitting 
                                            ? 'bg-gray-400 cursor-not-allowed' 
                                            : 'bg-blue-500 hover:bg-blue-600 active:bg-blue-700 hover:shadow-lg'
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
        </>
    );
};

export default RSVP;