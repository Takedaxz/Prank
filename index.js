let click = document.getElementById('click-button');
let message = document.getElementById('message');
let messages = ["โอ้ เย", "เอ้ โย", "โก โก้", "โถ่ ถัง", "กะละมัง ซักผ้า"];

        function showRandomMessage(){
            let randomIndex = Math.floor(Math.random() * messages.length);
            
            message.innerHTML = "<p>" + messages[randomIndex] + "</p>";
        }

click.addEventListener('click',showRandomMessage);
