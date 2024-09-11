window.onload = function() {
    
    const nhlToiBtn = document.querySelector("#nhl-toi-btn");
    const nhlToiCopyBtn = document.querySelector("#toi-copy");
    const toiPeriodRadio = document.querySelector("#toi-periods");
    const toiTotalRadio = document.querySelector("#toi-total");
    
    var timeOnIce = {
        firstPeriodMinutes: document.querySelector("#p1-mins"),
        firstPeriodSeconds: document.querySelector("#p1-secs"),
        secondPeriodMinutes: document.querySelector("#p2-mins"),
        secondPeriodSeconds: document.querySelector("#p2-secs"),
        thirdPeriodMinutes: document.querySelector("#p3-mins"),
        thirdPeriodSeconds: document.querySelector("#p3-secs"),
        totalPeriodMinutes: document.querySelector("#tot-mins"),
        totalPeriodSeconds: document.querySelector("#tot-secs"),
        decValue: document.querySelector("#toi-in-dec"),
        decTotValue: document.querySelector("#toi-in-dec-tot"),
        periodInputs: document.querySelectorAll(".input-toi-period"),
        radioInputs: document.querySelectorAll(".toi-radio-btn"),
        toiBreakdown: document.querySelector("#nhl-toi-breakdown")
    }


    if(!toiPeriodRadio.checked && !toiTotalRadio.checked){
        for(var j=0; j < timeOnIce.periodInputs.length; j++){
            timeOnIce.periodInputs[j].disabled = true;
            document.querySelector("#tot-mins").disabled = true;
            document.querySelector("#tot-secs").disabled = true;
        } 
    } else if (!toiTotalRadio.checked){
        document.querySelector("#tot-mins").disabled = true;
        document.querySelector("#tot-secs").disabled = true;
        // document.querySelector("#tot-mins").value = "";
        // document.querySelector("#tot-secs").value = "";
    }

    for(var i=0; i < timeOnIce.radioInputs.length; i++){
        timeOnIce.radioInputs[i].addEventListener('input', ()=>{
            if(toiPeriodRadio.checked){
                for(var j=0; j < timeOnIce.periodInputs.length; j++){
                    timeOnIce.periodInputs[j].disabled = false;
                }
                document.querySelector("#tot-mins").disabled = true;
                document.querySelector("#tot-secs").disabled = true;
                document.querySelector("#tot-mins").value = "";
                document.querySelector("#tot-secs").value = "";
                timeOnIce.decTotValue.innerHTML = "";
            }else if(toiTotalRadio.checked){
                for(var j=0; j < timeOnIce.periodInputs.length; j++){
                    timeOnIce.periodInputs[j].disabled = true;
                    timeOnIce.periodInputs[j].value = "";
                }
                document.querySelector("#tot-mins").disabled = false;
                document.querySelector("#tot-secs").disabled = false;
                timeOnIce.decValue.innerHTML = "";
            }
        })
    }
    
    /*---------- GO Button for TOI -------------------*/ 
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
            
            timeOnIce.decValue.innerHTML = `${totalPeriodMinutesValue}:${totalPeriodSecondsValue} = ${totalPeriodMinutesValue}.${totalSecondsInDec}`;
            timeOnIce.toiBreakdown.value = `Period 1 - ${timeOnIce.firstPeriodMinutes.value}:${timeOnIce.firstPeriodSeconds.value}\nPeriod 2 - ${timeOnIce.secondPeriodMinutes.value}:${timeOnIce.secondPeriodSeconds.value}\nPeriod 3 - ${timeOnIce.thirdPeriodMinutes.value}:${timeOnIce.thirdPeriodSeconds.value}\n\nTOTAL: ${totalPeriodMinutesValue}:${totalPeriodSecondsValue} = ${totalPeriodMinutesValue}.${totalSecondsInDec}`

        } else if (timeOnIce.totalPeriodMinutes.value != "" && timeOnIce.totalPeriodSeconds.value != ""){
            // Code only execute if Total fields has input

            timeOnIce.decTotValue.innerHTML = ` = ${timeOnIce.totalPeriodMinutes.value}.${Math.round(timeOnIce.totalPeriodSeconds.value * 100 / 60)}`;
            timeOnIce.toiBreakdown.value = `Total: ${timeOnIce.totalPeriodMinutes.value}:${timeOnIce.totalPeriodSeconds.value} = ${timeOnIce.totalPeriodMinutes.value}.${Math.round(timeOnIce.totalPeriodSeconds.value * 100 / 60)}`

        }

        document.querySelector("#toi-textarea-btn-cont").style.display = "block";

    })

    /*---------- Copy Button for TOI -------------------*/
    nhlToiCopyBtn.addEventListener('click', ()=>{
        
        var copyToiBreakdown = timeOnIce.toiBreakdown;

        copyToiBreakdown.select();
        copyToiBreakdown.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyToiBreakdown.value);
        
    })

}