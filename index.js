var express=require("express")
var app=express()
var vision=require('@google-cloud/vision')
const { checkError } = require('./multerLogic')
var port=3030


app.use(express.json())
async function textDetection(req,res)
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


async function logoDetection(req,res){
    try{
    const client=new vision.ImageAnnotatorClient()
    const imageDesc = await checkError(req, res)
        console.log(imageDesc)
 
    const [result]=await client.logoDetection(imageDesc.path)
    const detections=result.logoAnnotations
    const [ text, ...others ] = detections
    res.send(`Text: ${ text.description }`)
      }
    catch (error) {console.log(error)}  

}

async function labelDetection(req,res){
    try{
    const client=new vision.ImageAnnotatorClient()
    const imageDesc = await checkError(req, res)
        console.log(imageDesc)
 
    const [result]=await client.labelDetection(imageDesc.path)
    const detections=result.labelAnnotations
    var results=[]
    detections.forEach(element => results.push(element.description))
    console.log(results)
    res.send(`Text: ${ results}`)
      
      }
    catch (error) {console.log(error)}  

}


app.get('/',(req,res)=>{
    res.send("welcome to mypage")
})




app.post("/textDetection",textDetection)

app.post("/logoDetection",logoDetection)
app.post("/labelDetection",labelDetection)

app.listen(port,()=>{
    console.log(`Listening to port ${port}`)
})