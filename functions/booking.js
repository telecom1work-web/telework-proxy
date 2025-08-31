// functions/booking.js

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbzrh9UjhH5zso-y0twipOKr4-0gLzyCkPiunth5A8uqRqKukXf2rkrEbBtUz29bt4V9/exec';

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
