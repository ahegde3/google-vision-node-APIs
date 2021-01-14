var express=require("express")
var app=express()
var vision=require('@google-cloud/vision')
const { checkError } = require('./multerLogic')
var port=3030


app.use(express.json())
async function detection(req,res)
{ try{
    //const client = new vision.ImageAnnotatorClient();
   
    // Performs label detection on the image file
    // const [result] = await client.labelDetection('wakeup.jpg');
    // const labels = result.labelAnnotations;
    // console.log('Labels:');
    // //console.log(labels)
    // labels.forEach(label => console.log(label.description));

    const client=new vision.ImageAnnotatorClient()
    const imageDesc = await checkError(req, res)
        console.log(imageDesc)
 
    const [result]=await client.textDetection(imageDesc.path)
    const detections=result.textAnnotations
    const [ text, ...others ] = detections
    res.send(`Text: ${ text.description }`)
      }
    catch (error) {console.log(error)}  
}


app.get('/',(req,res)=>{
    res.send("welcome to mypage")
})



app.post("/detect",detection)

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})