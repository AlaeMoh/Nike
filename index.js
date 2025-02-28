


var XHR= new XMLHttpRequest();
var allArticles=[];

XHR.open('Get','https://newsapi.org/v2/top-headlines?country=us&category=business&apiKey=d74a7b3652104eb6a80f8453a2292f34');
XHR.send();


XHR.addEventListener("readystatechange",function(){
if(XHR.readyState == 4){
    
    allArticles=JSON.parse(XHR.response).articles;
    display();
}
})

function display(){
    box='';
    for(var i =0 ; i<allArticles.length ; i++){

        allArticles[i].urlToImage?'':allArticles[i].urlToImage="https://media.cnn.com/api/v1/images/stellar/prod/ap25030060463986.jpg?c=16x9&q=w_800,c_fill"

        box+=`
            <div class="col-md-4">
            <a target="_blank" href="${allArticles[i].url}"> <img src="${allArticles[i].urlToImage}" alt="" height="200px"class="w-100">
            <p>${allArticles[i].title.substring(0,40)}...</p></a>
            </div>

        `

        document.getElementById("articles").innerHTML=box;
    }
}

