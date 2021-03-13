const time = document.getElementById('time'),
    greeting = document.getElementById('greeting'),
    name = document.getElementById('name'),
    focus = document.getElementById('focus');




    
    //show time
    function showTime(){
        let today = new Date(),
            hour = today.getHours(),
            min = today.getMinutes(),
            sec = today.getSeconds();

        //setting AM and PM
        const amPm = hour >= 12 ?  'PM' : 'AM';

        //12 hours format

        hour = hour % 12 || 12;

        //output time
        time.innerHTML = `${hour}<span>:</span>${min}<span>:</span>${sec}`;

        setTimeout(showTime, 1000);
    }
  
    // Add Zero
    function addZero(n) {
        return(parseInt(n, 10) < 10 ? '0' : '') + n;
    }

    // set background
    function setBgGreet() {
        let today = new Date(),
        hour = today.getHours();

        if (hour < 12) {
            document.body.style.backgroundImage = "url(Background.jpg)";
            greeting.textContent = ' “If you truly love nature, you will find beauty everywhere.” '
        } else if (hour < 18) {
            document.body.style.backgroundImage = "url(Background.jpg)";
            greeting.textContent = '"Nature always wears the colors of the spirit." '
        } else {
            document.body.style.backgroundImage = "url(Background.jpg)";
            greeting.textContent = ' "Look deep into nature, and then you will understand everything better."'
        }
    }




    var textWrapper = document.querySelector('.ml9 .letters');
    textWrapper.innerHTML = textWrapper.textContent.replace(/\S/g, "<span class='letter'>$&</span>");

    anime.timeline({loop: true})
    .add({
        targets: '.ml9 .letter',
        scale: [0, 1],
        duration: 1500,
        elasticity: 600,
        delay: (el, i) => 45 * (i+1)
    }).add({
        targets: '.ml9',
        opacity: 0,
        duration: 2000,
        easing: "easeOutExpo",
        delay: 1000
    });

  //Run
    showTime();
    setBgGreet();






