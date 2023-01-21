const rateLimit = require("lambda-rate-limiter")({
  interval: 60 * 1000, // Our rate-limit interval, one minute
}).check;

exports.handler = async function (event, context) {
  console.log(event.headers["client-ip"]);

  try { 
    await rateLimit(5, event.headers["client-ip"]);
  } catch (error) {
    return { statusCode: 429 }; // Still returning a basic 429, but we could do anything~
  }

  if (context.clientContext.totalRps > 0) {
    return {
      statusCode: 429,
      body: "Too many requests, please try again later",
    };
  }
  //

  if (event.httpMethod != "GET") {
    return {
      statusCode: 405,
    };
  }

  return {
    statusCode: 200,
    body: JSON.stringify({
      message: "Hello World!",
    }),
  };
};
