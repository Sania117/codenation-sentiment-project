fetch('https://sentim-api.herokuapp.com/api/v1/',{
    method: 'POST' ,
    headers: { 'Accept': "application/json", 
                "Content-Type": "application/json"

    } ,
    body: ({ "input.val();": "Your text here" 

    })
})

.then(function(response) {
  		return response.json();
  	})
.then(function(data) {
      console.log(data);
  	});


    