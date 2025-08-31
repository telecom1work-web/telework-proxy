// functions/booking.js

const GOOGLE_SCRIPT_URL = 'https://script.google.com/macros/s/AKfycbwUPQLFW97p02d96kCi1RHjh5CktJ0wNqpH__W5uh9tNS9o9I5naMAGO9CeOkPv0JvN/exec';

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
