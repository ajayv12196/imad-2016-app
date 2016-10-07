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

