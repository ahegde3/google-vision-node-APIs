var express=require("express")
var app=express()
var vision=require('@google-cloud/vision')
var port=3030

async function detection()
{
    const client = new vision.ImageAnnotatorClient();
  
    // Performs label detection on the image file
    const [result] = await client.labelDetection('wakeup.jpg');
    const labels = result.labelAnnotations;
    console.log('Labels:');
    //console.log(labels)
    labels.forEach(label => console.log(label.description));
}


app.get('/',(req,res)=>{
    res.send("welcome to mypage")
})



app.post("/detect",detection)

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})