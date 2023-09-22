"use client";

import { FormEvent, useState } from 'react';
import config from "@/config/config.json";

const ContactForm = () => {
    const { email } = config.contact;

    const [nameError, setNameError] = useState(false);
    const [emailError, setEmailError] = useState(false);
    const [messageError, setMessageError] = useState(false);

    const [showConfirmation, setShowConfirmation] = useState(false);

    const handleNewMessage = () => {
        setNameError(true);
        setEmailError(true);
        setMessageError(true);

        setShowConfirmation(false)
    }

    const handleSubmit = (e: FormEvent) => {
        e.preventDefault();

        setNameError(true);
        setEmailError(true);
        setMessageError(true);

        const nameInput = (e.target as HTMLElement).querySelector('#name') as HTMLInputElement;
        const emailInput = (e.target as HTMLElement).querySelector('#email') as HTMLInputElement;
        const messageInput = (e.target as HTMLElement).querySelector('#message') as HTMLInputElement;

        if (nameInput.value === '') {
            setNameError(true);
        } else {
            setNameError(false);
        }

        if (emailInput.value === '') {
            setEmailError(true);
        } else {
            setEmailError(false);
        }

        if (messageInput.value === '') {
            setMessageError(true);
        } else {
            setMessageError(false);
        }



        if (nameInput.value !== '' && emailInput.value !== '' && messageInput.value !== '') {
            // Option 1
            // (e.currentTarget as HTMLFormElement).submit();

            // Option 2 
            const subject = encodeURIComponent('Contact: ' + nameInput.value);
            const body = encodeURIComponent(`Nom: ${nameInput.value}\n\nEmail: ${emailInput.value}\n\nMessage: ${messageInput.value}`);
            const mailtoLink = `mailto:${email}?subject=${subject}&body=${body}`;

            window.location.href = mailtoLink;

            setShowConfirmation(true);
        }
    };

    return (
        <>
            <section className="section-sm">
                <div className="container">
                    <div className="row">
                        <div className="mx-auto md:col-10 lg:col-6">
                            {showConfirmation ? (

                                <div className="flex items-center justify-center ">
                                    <div className="text-center">
                                        <p>Merci d'avoir envoyé votre message!</p>
                                        <p>Notre équipe vous répondra dans les plus brefs délais.</p>
                                        <button className="btn btn-primary mt-8" onClick={handleNewMessage}>Envoyer autre message</button>
                                    </div>
                                </div>
                            ) : (
                                <form method="POST" onSubmit={handleSubmit}>
                                    <div className="mb-6">
                                        <label htmlFor="name" className="form-label">
                                            Nom <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="name"
                                            name="name"
                                            className={`form-input ${nameError ? 'border-red-500' : ''}`}
                                            placeholder="Votre nom"
                                            type="text"
                                            aria-invalid={nameError}
                                            aria-describedby={nameError ? 'name-error' : undefined}
                                        />
                                        {nameError && (
                                            <div id="name-error" className="text-red-500">
                                                Ce champ est obligatoire
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="email" className="form-label">
                                            E-mail <span className="text-red-500">*</span>
                                        </label>
                                        <input
                                            id="email"
                                            name="email"
                                            className={`form-input ${emailError ? 'border-red-500' : ''}`}
                                            placeholder="Votre email"
                                            type="email"
                                            aria-invalid={emailError}
                                            aria-describedby={emailError ? 'email-error' : undefined}
                                        />
                                        {emailError && (
                                            <div id="email-error" className="text-red-500">
                                                Ce champ est obligatoire
                                            </div>
                                        )}
                                    </div>
                                    <div className="mb-6">
                                        <label htmlFor="message" className="form-label">
                                            Votre message <span className="text-red-500">*</span>
                                        </label>
                                        <textarea
                                            id="message"
                                            name="message"
                                            className={`form-input ${messageError ? 'border-red-500' : ''}`}
                                            placeholder="Votre message"
                                            rows={8}
                                            aria-invalid={messageError}
                                            aria-describedby={messageError ? 'message-error' : undefined}
                                        />
                                        {messageError && (
                                            <div id="message-error" className="text-red-500">
                                                Ce champ est obligatoire
                                            </div>
                                        )}
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Envoyer message
                                    </button>
                                </form>
                            )}
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
};

export default ContactForm;
