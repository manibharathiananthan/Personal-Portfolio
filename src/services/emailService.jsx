import emailjs from "emailjs-com";

export const sendEmail = async (data) => {
  try {
    await emailjs.send(
      "YOUR_SERVICE_ID",      
      data,
      "YOUR_USER_ID"         
    );
    return true;
  } catch (err) {
    console.error(err);
    return false;
  }
};
