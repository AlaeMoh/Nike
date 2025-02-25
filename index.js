
var allUsers=[];

var XHR= new XMLHttpRequest();
XHR.open('GET','https://jsonplaceholder.typicode.com/users');
XHR.setRequestHeader('Content-type','JSON');
XHR.send();

XHR.addEventListener('readystatechange',function(){
    if(XHR.readyState == 4){        
        console.log(XHR.response);

    }
})

function display(){
    var box='';
    for(i=0; i<allUsers.length ; i++){
        
    }
}