async function quickstart() {
    // Imports the Google Cloud client library
    const vision = require('@google-cloud/vision');
  
    // Creates a client
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    // const [result] = await client.labelDetection('wakeup.jpg');
    // const labels = result.labelAnnotations;
    // console.log('Labels:');
    // //console.log(labels)
    // labels.forEach(label => console.log(label.description));

    //Peform logo detection of popular brand
    // const [result]=await client.logoDetection("http://allenmeyerdesign.com/wp-content/uploads/2013/09/new-yahoo-logo.jpg")
    // const logos=result.logoAnnotations;
    // logos.forEach(logo=> console.log(logo.description))

    //Text detection
    const [result]=await client.textDetection("meme_text.jpg")
    const texts=result.textAnnotations
    console.log("texts")
    texts.forEach(txt=>console.log(txt.description))

  }
  quickstart();



  //export GOOGLE_APPLICATION_CREDENTIALS="/Users/anishhegde/Downloads/test-ad5b5-d9c5b7309572.json"

  