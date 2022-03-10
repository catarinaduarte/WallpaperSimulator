function upload() {
    var msg = window.document.getElementById('msg')
    var pic = window.document.getElementById('picture')
    var day = new Date()
    var hour = day.getHours()
    var minutes  = day.getMinutes()
    
    msg.innerHTML = `It's now ${hour} hours and ${minutes} minutes o'clock`
    
    if (hour >= 0 && hour < 5) {
        
        pic.src = 'images/0.png'
        // document.body.style.background = "#2d1a87"
    
    }else if (hour >= 5 && hour < 6) {
            
        pic.src = 'images/1.png'
        

    }else if (hour >= 6 && hour < 9) {
            
        pic.src = 'images/2.png'

    }else if (hour >= 9 && hour < 17 ) {
            
        pic.src = 'images/3.png'  

    }else if (hour >= 17 && hour < 19 ) {
            
        pic.src = 'images/4.png'     
    
    } else if (hour >= 19 && hour < 20) {
     
        pic.src = 'images/5.png'
    
    } else {
        
        pic.src = 'images/6.png'
    }
}



