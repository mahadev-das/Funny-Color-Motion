let rect = document.querySelector('.centre');
let h1 = document.querySelector('h1');
let body = document.querySelector('body');


rect.addEventListener('mousemove', function (details) {

    let rectanglelocation = rect.getBoundingClientRect();
    let mouseloc = Math.floor(details.clientX - rectanglelocation.left) + 1;
    
    if (mouseloc < rectanglelocation.width / 2) {
        // console.log(mouseloc);
        var redValue=Math.floor(gsap.utils.mapRange(0, rectanglelocation.width/2, 255, 0, mouseloc));
        // console.log(redValue)
        rect.style.backgroundColor=`rgb(${redValue},0,0)`
        h1.style.color = `rgb(${redValue},0,0)`
        body.style.backgroundColor=`rgb(100,150,${redValue+100})`
    }
    else {
        if (mouseloc > rectanglelocation.width / 2) {
            // console.log(mouseloc);
            var blueValue = Math.floor(gsap.utils.mapRange(rectanglelocation.width/2, rectanglelocation.width, 0, 255, mouseloc));
            // console.log(blueValue);
            rect.style.backgroundColor = `rgb(20,20,${blueValue})`;
            h1.style.color = `rgb(20,20,${blueValue})`;
            body.style.backgroundColor=`rgb(${blueValue+100},${blueValue+150},${blueValue/4})`
        }
    }
})

rect.addEventListener('mouseleave', function () {
    // rect.style.backgroundColor = 'white';
    gsap.to(rect, {
        backgroundColor:'white',
        duration:0.5,
    })
})