var button=document.getElementById("counter");


var counter =0;
button.onclick =function() {
    
    counter += 1;
    
    
    //create a request object(AJAX)
    
    var request =new XMLHttpRequest();
    
    
    // create the response and store in variable
    request.onreadystatechange =function(){
        
        if(request.readystate === XMLHttpRequest.DONE ){
            //TAKE SOME ACTION
            
            if(request.status === 200){
                
                var counter = request.responseText;
                var span=document.getElementById("count");
                span.innerHTML=counter.toString();
                
                
            }
            
        }
        //not done yet
    };
    
    //make the reques
    
    request.open('GET', 'http://ajayv12196.imad.hasura-app.io/counter', true);
    request.send(null);

    
    
};

//submit name

var nameInput=document.getElementById("name");
var name=nameInput.value;
var submit =document.getElementById("submit");

submit.onclick=function(){
    
    //make request to the server and send this name
    
    //capture a list if names and render it in the list
    
    var names =['name1','name2','name3','name4'];
    
    var list="";
    
    for(var i=0; i<=names.length;i++){
        
        list= '<li>' +name[i]+'</li>';
        
    }
    
    var ul=document.getElementById("namelist");
    
    ul.innerHTML=list;
    
    
    
}


