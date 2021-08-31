var cat = 0;
var dog = 0;
var monkey = 0;
var cow = 0;

function startClassifictaion() {
    navigator.mediaDevices.getUserMedia({audio:true});
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/K2aLiTg6i/model.json',modelReady);
}
function modelReady() {
    classifier.classify(gotResult);
}
function gotResult(error, results) {
    if(error){
        console.error(error);
    }
    else{
        console.log(results);
        random_number_r = Math.floor(Math.random() * 255) + 1;
        random_number_g = Math.floor(Math.random() * 255) + 1;
        random_number_b = Math.floor(Math.random() * 255) + 1;

        console.log("Red "+random_number_r);
        console.log("Green "+random_number_g);
        console.log("Blue "+random_number_b);

        document.getElementById("detected").innerHTML = "Detected Dog - "+ dog +  " Detected Cat - "+ cat +" Detected monkey - "+ monkey+ " Detected Cow - "+ cow;
        document.getElementById("detected").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("detected").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        document.getElementById("voice").innerHTML = "Detected Voice Is Of - "+results[0].label;
        document.getElementById("voice").style.color = "rgb("+random_number_r+","+random_number_g+","+random_number_b+")";
        document.getElementById("voice").style.fontFamily = 'Courier New'+","+'Courier'+","+'monospace';

        img = document.getElementById("image");

        if(results[0].label == "Barking"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/bark.gif";
            dog = dog+1;
        }
        else if(results[0].label == "Meowing"){
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/meow.gif";
            cat = cat+1;
        }
        else if(results[0].label == "chatter"){
            img.src = "https://www.google.com/url?sa=i&url=https%3A%2F%2Fwww.shutterstock.com%2Fsearch%2Fmonkey%2Bcartoon&psig=AOvVaw3RkwHzfBUCc0CAKC9coM1j&ust=1630502674740000&source=images&cd=vfe&ved=0CAsQjRxqFwoTCJDvr_it2_ICFQAAAAAdAAAAABAD";
            lion = lion+1;
        }
        else if(results[0].label == "Mooing"){
            img.src = "https://th.bing.com/th/id/R.b4e11dc2b70207cb94f423386acf3f2c?rik=j%2fSbeyNl%2b8Nc2Q&riu=http%3a%2f%2fwww.clipartbest.com%2fcliparts%2f9iR%2f5qE%2f9iR5qEgpT.gif&ehk=ShP2z1%2fWaL85z9sRKB1qRZaNUWwnJc9ykc22f6jdMGc%3d&risl=&pid=ImgRaw&r=0";
            cow = cow+1;
        }
        else{
            img.src = "https://shravaripatil.github.io/Sound_controlled_animals/listen.gif";
        }
    }
}