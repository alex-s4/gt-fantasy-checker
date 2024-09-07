window.onload = function() {

    
    const nhlToiBtn = document.querySelector("#nhl-toi-btn");
    
    var timeOnIce = {
        firstPeriodMinutes: document.querySelector("#p1-mins"),
        firstPeriodSeconds: document.querySelector("#p1-secs"),
        secondPeriodMinutes: document.querySelector("#p2-mins"),
        secondPeriodSeconds: document.querySelector("#p2-secs"),
        thirdPeriodMinutes: document.querySelector("#p3-mins"),
        thirdPeriodSeconds: document.querySelector("#p3-secs"),
        totalPeriodMinutes: document.querySelector("#tot-mins"),
        totalPeriodSeconds: document.querySelector("#tot-secs"),
        decValue: document.querySelector("#toi-in-dec")
    }
    
    nhlToiBtn.addEventListener('click', ()=>{

        // Sum of all 'ss' value without the minute formatting
        var totalSecondsActualValue = Number(timeOnIce.firstPeriodSeconds.value) + Number(timeOnIce.secondPeriodSeconds.value) + Number(timeOnIce.thirdPeriodSeconds.value);

        // Total minutes accumulated from sum of all 'ss' - every total ss that reaches 60 is 1
        var minuteFromTotalSeconds = Math.floor(totalSecondsActualValue / 60);
        
        // Total Mintes computation
        var totalPeriodMinutesValue = Number(timeOnIce.firstPeriodMinutes.value) + Number(timeOnIce.secondPeriodMinutes.value) + Number(timeOnIce.thirdPeriodMinutes.value) + minuteFromTotalSeconds;
        // Total Seconds computation - every total ss that reaches 
        var totalPeriodSecondsValue = totalSecondsActualValue % 60
        var totalSecondsInDec = Math.round(totalPeriodSecondsValue*100/60);

        
        if(timeOnIce.totalPeriodMinutes.value == "" && timeOnIce.totalPeriodSeconds.value == ""){
            // Code only execute if Period fields has input
            
            timeOnIce.totalPeriodMinutes.value = totalPeriodMinutesValue;
            timeOnIce.totalPeriodSeconds.value = totalPeriodSecondsValue;
            timeOnIce.decValue.innerHTML = ` = ${totalPeriodMinutesValue}.${totalSecondsInDec}`;

        } else if (timeOnIce.totalPeriodMinutes.value != "" && timeOnIce.totalPeriodSeconds.value != ""){
            // Code only execute if Total fields has input

            timeOnIce.decValue.innerHTML = ` = ${timeOnIce.totalPeriodMinutes.value}.${Math.round(timeOnIce.totalPeriodSeconds.value * 100 / 60)}`;

        }

        

    })
}