const formElement = document.querySelector('form');


let storage = [];

    formElement.addEventListener('submit', (event) => {
        const formData = new FormData();
        event.preventDefault();
        let name = document.querySelector(".name").value;
        let email = document.querySelector(".email").value;
        let message = document.querySelector(".message").value;

        let userMessage = {
            Name: "",
            Email: "",
            Message: ""
        }
        
        if(name === "" || email === "" || message === "") {

            alert("Please fill the form");
            return false;    
        } else {

            userMessage.Name = name;
            userMessage.Email = email;
            userMessage.Message = message;

            storage.push(userMessage);

            console.log(storage);

            document.querySelector("form").reset();
        }
           
      
    });
