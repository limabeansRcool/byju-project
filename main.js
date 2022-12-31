bg_noise=0;
pig_noise=0;
alien_noise=0;
cat_noise=0;
function identifynoise() {
    navigator.mediaDevices.getUserMedia({audio:true});
    HI=ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/3m8LF01s1/model.json",modelrrrrr);

}
function modelrrrrr() {
    HI.classify(gotresult);

}

function gotresult(error, results) {
//i dont know what to put here, oh ee ere, yaya ya yay 
//ba ba ba sheep goes noise sound, fallen down down don't know why im rhyming
//lieing
//because sheep goes MOO MOOO MOO MOO
if (error){
    console.log("error");
} else {
    console.log(results);
    r=Math.floor(Math.random()*255)+1;
    
    g=Math.floor(Math.random()*255)+1;
  
    b=Math.floor(Math.random()*255)+1;
    document.getElementById("number").innerHTML="amount of bg noise detected:"+bg_noise+ " amount of cat noise detected:" +cat_noise+" amount of pig noise detected: "+pig_noise+" amount of alien noise detected: " +alien_noise
    document.getElementById("result_label").innerHTML="I can hear this: "+results[0].label;
    document.getElementById("result_label").style.color="rgb("+r+","+g+","+b+")";
    document.getElementById("number").style.color="rgb("+r+","+g+","+b+")";

        alien=document.getElementById("resultimg");

       if (results[0].label=="Background Noise") {
        alien.src="free-video-3045163.webp"
        bg_noise=bg_noise+1;
       } else if (results[0].label=="alien") {
        alien.src="download.jpeg"
        alien_noise=alien_noise+1;
}     else if (results[0].label=="meow") {
    alien.src="images.jpeg"
    cat_noise=cat_noise+1;


       } else  {
        alien.src="pig-white-who-represented-background-35129996.jpg"
        pig_noise=pig_noise+1;
    
    
           }
      
        };
    }
