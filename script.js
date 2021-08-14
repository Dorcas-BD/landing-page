const time = document.getElementById('time'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');




    
    //show time
    function showTime(){
        let today = new Date(),
            hour = today.getHours(),
            min = today.getMinutes(),
            sec = today.getSeconds();

        //12 hours format

        hour = hour % 24 || 24;

        //output time
        time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;

        setTimeout(showTime, 1000);
    }
  
    
    function addZero(sec) {
        if(sec < 10) {
            return '0' + sec
        } else {
            return 
        }
    }

    //set background
    function setBgGreet() {
        let today = new Date(),
        hour = today.getHours();

        if (hour < 12) {
            document.body.style.backgroundImage = "url(Background.jpg)";
            document.body.style.backgroundSize = "100% 100%";
            document.body.style.backgroundPosition = 'center'; 
            document.body.style.backgroundRepeat = 'no-repeat';
            greeting.textContent = ' “Good morning love. do have a successful day ahead” '
        } else if (hour < 18) {
            document.body.style.backgroundImage = "url(images.jpeg)"; 
            document.body.style.backgroundSize = "100% 100%";
            document.body.style.backgroundPosition = 'center'; 
            document.body.style.backgroundRepeat = 'no-repeat';
            greeting.textContent = 'Nature always wears the colors of the spirit.'
            greeting.textContent = 'Look deep into nature, and then you will understand everything better.'
        } else {
            document.body.style.backgroundImage = "url(hero.jpeg)";
            document.body.style.backgroundSize = "100% 100%";
            document.body.style.backgroundPosition = 'center'; 
            document.body.style.backgroundRepeat = 'no-repeat';
            greeting.textContent = " Sleep well and don't give up on your dream"
        }
    }



  //Run
    showTime();
    setBgGreet();
    addZero(0)






