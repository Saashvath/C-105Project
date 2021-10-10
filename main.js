Webcam.set({

    width:325,
    height:250,
    image_format:'png',
    png_quality:95,
})

    Webcam.attach("#camera")

  
      function take_picture(){

        Webcam.snap(function(picture){
            document.getElementById("result").innerHTML= `<img id=picture_result src=${picture}>`
        })
    }

    console.log("ml5",ml5.version)

    storage= ml5.imageClassifier("https://teachablemachine.withgoogle.com/models/0fEo3BNzB/model.json",modelLoaded)



    function modelLoaded(){

        console.log("Model Has Been Loaded Successfully")
    }

    function identify_image(){

        img=document.getElementById("object_result")
        storage.classify(img, get_result)
    }


    function get_result(error ,result){

        if(error){

            console.log(error)

        }

        else{

                console.log(result)
                document.getElementById("object_result").innerHTML=result[0].label
                document.getElementById("object_accuracy").innerHTML=result[0].confidence.ToFixed(2)
        }

    }