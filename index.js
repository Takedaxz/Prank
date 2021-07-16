let discount = document.getElementById('discount-button');
let message = document.getElementById('message');

function show_message(){
    message.innerHTML = "<p>กดทำไม</p>"
}

discount.addEventListener('click',show_message)
