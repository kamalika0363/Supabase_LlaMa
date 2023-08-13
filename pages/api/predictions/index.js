export default async function handler(req, res) {
    const response = await fetch("https://api.replicate.com/v1/predictions", {
      method: "POST",
      headers: {
        Authorization: `Token ${process.env.REPLICATE_API_TOKEN}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
       
        version: "58d078176e02c219e11eb4da5a02a7830a283b14cf8f94537af893ccff5ee781",
  
        // This is the text prompt that will be submitted by a form on the frontend
        input: { prompt: req.body.prompt },
      }),
    });
  
    if (response.status !== 201) {
      let error = await response.json();
      res.statusCode = 500;
      res.end(JSON.stringify({ detail: error.detail }));
      return;
    }
  
    const prediction = await response.json();
    res.statusCode = 201;
    res.end(JSON.stringify(prediction));
  }