// functions/booking.js

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwzCLVi9BJseSoOrsj3FdRLetSMnOlNy00ncUjMqo3PCOQ1jQaYZy60w8GLAL1RDWC2/exec';

exports.handler = async function(event, context) {
  try {
    const response = await fetch(GOOGLE_SCRIPT_URL);
    const body = await response.text();

    return {
      statusCode: 200,
      headers: { 'Content-Type': 'text/html; charset=UTF-8' },
      body: body,
    };
  } catch (error) {
    console.error('Error fetching Google Script:', error);
    return {
      statusCode: 500,
      body: 'שגיאה בטעינת המערכת. נסו שוב מאוחר יותר.',
    };
  }
};
