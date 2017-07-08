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
            var imgSrc = obj.subjects[0].casts[0].avatars.large;
            /*console.log(imgSrc);*/
            var img =document.createElement('img');
            img.src = imgSrc;
            document.getElementById("pic").appendChild(img);
        }
    }
    xmlhttp.open("GET","json.txt",true);
    xmlhttp.send();
}
