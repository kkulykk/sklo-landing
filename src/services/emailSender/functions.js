import emailjs from '@emailjs/browser';
import { EMAILJS_USER_ID, EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID } from '../../utils/config';

export const sendStreamLink = (email, streamLink) => {
   const templateData = {
      sendTo: email,
      streamLink: streamLink
   }

    emailjs.send(EMAILJS_SERVICE_ID, EMAILJS_TEMPLATE_ID, templateData, EMAILJS_USER_ID)
    .then((res) => {
       console.log('SUCCESS!', res.status, res.text);
    }, (err) => {
       console.log('FAILED...', err);
    });
  };