import emailjs from '@emailjs/browser';

export const capitalizeCase = (str = '') => str.charAt(0).toUpperCase() + str.slice(1);
export const sendEmailMessage = (formData: any = {}) => emailjs.send('service_jehsv7y', 'template_8819peq', formData, 'user_UT6nBSGGl0ObZLRHKuqSA');

