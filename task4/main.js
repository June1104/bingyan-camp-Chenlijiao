LoadXMLDoc()
function LoadXMLDoc() {
    var xmlhttp;
    if (window.XMLHttpRequest)
    {// code for IE7+, Firefox, Chrome, Opera, Safari
        xmlhttp=new XMLHttpRequest();
    }
    else
    {// code for IE6, IE5
        xmlhttp=new ActiveXObject("Microsoft.XMLHTTP");
    }
    xmlhttp.onreadystatechange = function()
    {
        if (xmlhttp.readyState==4 && xmlhttp.status==200){
            /*document.getElementById("myDiv").innerHTML = xmlhttp.responseText;*/
            var obj = JSON.parse(xmlhttp.responseText)
            var imgSrc = obj.subjects[0].images.large;
            /*console.log(imgSrc);*/
            var img =document.createElement('img');
            img.src = imgSrc;
            document.getElementById("pic").appendChild(img);

            document.getElementById("tit").innerHTML = obj.subjects[0].title;
            document.getElementById("rat").innerHTML = obj.subjects[0].rating.average;

            var img1Src = obj.subjects[1].images.large;
            var img1 = document.createElement('img');
            img1.src = img1Src;
            document.getElementById("pic1").appendChild(img1);
            document.getElementById("tit1").innerHTML = obj.subjects[1].title;
            document.getElementById("rat1").innerHTML = obj.subjects[1].rating.average;


            var img2Src = obj.subjects[2].images.large;
            var img2 = document.createElement('img');
            img2.src = img2Src;
            document.getElementById("pic2").appendChild(img2);
            document.getElementById("tit2").innerHTML = obj.subjects[2].title;
            document.getElementById("rat2").innerHTML = obj.subjects[2].rating.average;



            var img3Src = obj.subjects[3].images.large;
            var img3 = document.createElement('img');
            img3.src = img3Src;
            document.getElementById("pic3").appendChild(img3);
            document.getElementById("tit3").innerHTML = obj.subjects[3].title;
            document.getElementById("rat3").innerHTML = obj.subjects[3].rating.average;


            var img4Src = obj.subjects[4].images.large;
            var img4 = document.createElement('img');
            img4.src = img4Src;
            document.getElementById("pic4").appendChild(img4);
            document.getElementById("tit4").innerHTML = obj.subjects[4].title;
            document.getElementById("rat4").innerHTML = obj.subjects[4].rating.average;

            var img5Src = obj.subjects[5].images.large;
            var img5 = document.createElement('img');
            img5.src = img5Src;
            document.getElementById("pic5").appendChild(img5);
            document.getElementById("tit5").innerHTML = obj.subjects[5].title;
            document.getElementById("rat5").innerHTML = obj.subjects[5].rating.average;


        }
    }
    xmlhttp.open("GET","json.txt",true);
    xmlhttp.send();
}
