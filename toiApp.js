window.onload = function() {

    /* ============= NHL TOI CALCULATOR ================= */

    /*---------- Declaration of Components -------------------*/ 
    const nhlToiBtn = document.querySelector("#nhl-toi-btn");
    const nhlToiCopyBtn = document.querySelector("#toi-copy");
    const nhlToiClearBtn = document.querySelector("#nhl-toi-clear");
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
        toiBreakdown: document.querySelector("#nhl-toi-breakdown"),
        toiMins: document.querySelectorAll(".input-toi-mins"),
        toiSecs: document.querySelectorAll(".input-toi-secs")
    }

    /*---------- Radio Button Behavior TOI -------------------*/ 
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

        /* COMPUTATION LOGIC */

        // Sum of all 'ss' value without the minute formatting
        var totalSecondsActualValue = Number(timeOnIce.firstPeriodSeconds.value) + Number(timeOnIce.secondPeriodSeconds.value) + Number(timeOnIce.thirdPeriodSeconds.value);

        // Total minutes accumulated from sum of all 'ss' - every total ss that reaches 60 is 1
        var minuteFromTotalSeconds = Math.floor(totalSecondsActualValue / 60);
        
        // Total Mintes computation
        var totalPeriodMinutesValue = Number(timeOnIce.firstPeriodMinutes.value) + Number(timeOnIce.secondPeriodMinutes.value) + Number(timeOnIce.thirdPeriodMinutes.value) + minuteFromTotalSeconds;
        
        // Total Seconds computation - every total ss that reaches 60
        var totalPeriodSecondsValue = String(totalSecondsActualValue % 60)

        if(totalPeriodSecondsValue.length == 1){ // if result is single digit - this will pad a string "0" to achieve "ss" formatting
            totalPeriodSecondsValue = totalPeriodSecondsValue.padStart(2, "0");
        }
        
        var totalSecondsInDec = String(Math.round(totalPeriodSecondsValue * 100 / 60) / 100).slice(2); // to get the proper formatting of decimal value in TOI

        
        if(toiPeriodRadio.checked)
        { // This code will only execute if first radio input was checked

        for(var i = 0; i<timeOnIce.toiSecs.length; i++){

            if(timeOnIce.toiSecs[i].value.length == 1){ // add leading zeroes if seconds input has 1 digit
                timeOnIce.toiSecs[i].value = timeOnIce.toiSecs[i].value.padStart(2, "0");
            }
            if(timeOnIce.toiSecs[i].value == "" || timeOnIce.toiSecs[i].value == "0"){ // input "00" if seconds input is empty
                timeOnIce.toiSecs[i].value = "00";
                totalSecondsInDec = "0";
            }
            if(timeOnIce.toiMins[i].value == "" || timeOnIce.toiMins[i].value == "0" ){ // input "00" if minutes input is empty
                timeOnIce.toiMins[i].value = "00";
            }
        }

        if(totalPeriodSecondsValue == "00"){ // appear as ".0" if value of total 'ss' is "00"
            totalSecondsInDec = "0"
        }
        
        timeOnIce.decValue.innerHTML = `${totalPeriodMinutesValue}:${totalPeriodSecondsValue} = ${totalPeriodMinutesValue}.${totalSecondsInDec}`;
        timeOnIce.toiBreakdown.value = `Period 1 - ${timeOnIce.firstPeriodMinutes.value}:${timeOnIce.firstPeriodSeconds.value}\nPeriod 2 - ${timeOnIce.secondPeriodMinutes.value}:${timeOnIce.secondPeriodSeconds.value}\nPeriod 3 - ${timeOnIce.thirdPeriodMinutes.value}:${timeOnIce.thirdPeriodSeconds.value}\n\nTOTAL: ${totalPeriodMinutesValue}:${totalPeriodSecondsValue} = ${totalPeriodMinutesValue} + (${totalPeriodSecondsValue}/60) = ${totalPeriodMinutesValue}.${totalSecondsInDec}`
        } 
        else if (toiTotalRadio.checked)
        { // This code will only execute if second radio input was checked

        var totSecondsDecimal = String(Math.round(timeOnIce.totalPeriodSeconds.value * 100 / 60) / 100).slice(2)

        if(timeOnIce.totalPeriodSeconds.value.length == 1){
            timeOnIce.totalPeriodSeconds.value = timeOnIce.totalPeriodSeconds.value.padStart(2, "0");
            console.log(timeOnIce.totalPeriodSeconds.value)
        }

        if(timeOnIce.totalPeriodMinutes.value == ""){
            timeOnIce.totalPeriodMinutes.value = "0";
        }
        if(timeOnIce.totalPeriodSeconds.value == ""){
            timeOnIce.totalPeriodSeconds.value = "00";
        }
        if(timeOnIce.totalPeriodSeconds.value == "" || timeOnIce.totalPeriodSeconds.value == "00"){
            totSecondsDecimal = "0"
            
        }
    
        timeOnIce.decTotValue.innerHTML = ` = ${timeOnIce.totalPeriodMinutes.value}.${totSecondsDecimal}`;
        timeOnIce.toiBreakdown.value = `Total: ${timeOnIce.totalPeriodMinutes.value}:${timeOnIce.totalPeriodSeconds.value} = ${timeOnIce.totalPeriodMinutes.value} + (${timeOnIce.totalPeriodSeconds.value}/60) = ${timeOnIce.totalPeriodMinutes.value}.${totSecondsDecimal}`    
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

    /*---------- Clear Button for TOI -------------------*/
    nhlToiClearBtn.addEventListener('click', ()=>{
        
        // This will clear the input fields
        for(var i=0; i<document.querySelectorAll(".input-time-global").length; i++){
            document.querySelectorAll(".input-time-global")[i].value = "";
        }

        // This will clear the numbers beside the input fields
        for(var j=0; j<document.querySelectorAll(".toi-val").length; j++){
            document.querySelectorAll(".toi-val")[j].innerHTML = "";
        }
        
        timeOnIce.toiBreakdown.value = "";

        document.querySelector("#toi-textarea-btn-cont").style.display = "none";
    })


    /* ============= MMA FIGHT TIME CALCULATOR ================= */

    /*---------- Declaration of Components -------------------*/ 

    var mmaFightTime = {
        goBtn: document.querySelector("#mma-ft-btn"),
        clearBtn: document.querySelector("#mma-ft-clear"),
        copyBtn: document.querySelector("#mma-ft-copy"),
        inputMins: document.querySelector("#mma-ft-mins"),
        inputSecs: document.querySelector("#mma-ft-secs"),
        inputNum: document.querySelectorAll(".mma-ft-num"),
        inputRadio: document.querySelectorAll(".mma-ft-radio"),
        ftResult: document.querySelector("#mma-ft-result"),
        ftTextarea: document.querySelector("#mma-ft-breakdown"),
    }

    /*---------- GO Button for MMA Fight Time -------------------*/ 
    mmaFightTime.goBtn.addEventListener('click', () => {
        
        if(mmaFightTime.inputMins.value == "" && mmaFightTime.inputSecs.value == ""){
            // input values will populate to 5:00 if both fields are empty
            mmaFightTime.inputMins.value = "5"
            mmaFightTime.inputSecs.value = "00"
        } else if (mmaFightTime.inputMins.value == "" && !mmaFightTime.inputSecs.value == ""){
            // minute input will populate to 0 if minute field is empty
            mmaFightTime.inputMins.value = "0"
        } else if(!mmaFightTime.inputMins.value == "" && mmaFightTime.inputSecs.value == ""){
            // seconds input will populate to 00 if seconds field is empty
            mmaFightTime.inputSecs.value = "00"
        }

        // add leading zero if 'ss' input is 1 digit
        if(mmaFightTime.inputSecs.value.length == 1){
            mmaFightTime.inputSecs.value = mmaFightTime.inputSecs.value.padStart(2, "0")
        }

        var totalMins = 0;
        // var totalSecs = 0;
        var secsToDecimal = String((Math.round(mmaFightTime.inputSecs.value * 100 / 60))/100).slice(2); // formatting of 'ss' to decimal

        // console.log(secsToDecimal)
        if(secsToDecimal == ""){
            secsToDecimal = "00"
        }

        // Computation
        for(var i=0; i<mmaFightTime.inputRadio.length; i++){
            if(mmaFightTime.inputRadio[i].checked){
                var roundNumber = Number(mmaFightTime.inputRadio[i].value) + 1
                totalMins = (mmaFightTime.inputRadio[i].value * 5) + Number(mmaFightTime.inputMins.value);
            }
        }

        var computation = ` = ${totalMins} + (${mmaFightTime.inputSecs.value}/60) = ${totalMins}.${secsToDecimal}`

        mmaFightTime.ftResult.innerHTML = `${totalMins}:${mmaFightTime.inputSecs.value} = ${totalMins}.${secsToDecimal}`
        mmaFightTime.ftTextarea.value = `Fight Ended at ${mmaFightTime.inputMins.value}:${mmaFightTime.inputSecs.value} of Round ${roundNumber}\n\nTotal Fight Time = ${totalMins}:${mmaFightTime.inputSecs.value}${computation}`

        // Copy Btn appear upon computation
        document.querySelector("#ft-textarea-btn-cont").style.display = "block";
    })


    /*---------- Copy Button for MMA Fight Time -------------------*/
    mmaFightTime.copyBtn.addEventListener('click', ()=>{
        
        var copyMmaFtBreakdown = mmaFightTime.ftTextarea;

        copyMmaFtBreakdown.select();
        copyMmaFtBreakdown.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyMmaFtBreakdown.value);
        
    })

    /*---------- Clear Button for MMA Fight Time -------------------*/
    mmaFightTime.clearBtn.addEventListener('click', ()=>{
        
        // clears all input fields and texts
        mmaFightTime.inputSecs.value = "";
        mmaFightTime.inputMins.value = "";
        mmaFightTime.ftTextarea.value = "";
        mmaFightTime.ftResult.innerHTML = "";

        // hides 'Copy' button
        document.querySelector("#ft-textarea-btn-cont").style.display = "none";
    })


    /* ============= Boxing FIGHT TIME CALCULATOR ================= */

    /*---------- Declaration of Components -------------------*/ 

    var boxFightTime = {
        goBtn: document.querySelector("#box-ft-btn"),
        clearBtn: document.querySelector("#box-ft-clear"),
        copyBtn: document.querySelector("#box-ft-copy"),
        inputMins: document.querySelector("#box-ft-mins"),
        inputSecs: document.querySelector("#box-ft-secs"),
        inputNum: document.querySelectorAll(".box-ft-num"),
        inputRadio: document.querySelectorAll(".box-ft-radio"),
        ftResult: document.querySelector("#box-ft-result"),
        ftTextarea: document.querySelector("#box-ft-breakdown"),
    }


    /*---------- GO Button for Boxing Fight Time -------------------*/ 
    boxFightTime.goBtn.addEventListener('click', () => {

        if(boxFightTime.inputMins.value == "" && boxFightTime.inputSecs.value == ""){
            // input values will populate to 3:00 if both fields are empty
            boxFightTime.inputMins.value = "3"
            boxFightTime.inputSecs.value = "00"
        } else if (boxFightTime.inputMins.value == "" && !boxFightTime.inputSecs.value == ""){
            // minute input will populate to 0 if minute field is empty
            boxFightTime.inputMins.value = "0"
        } else if(!boxFightTime.inputMins.value == "" && boxFightTime.inputSecs.value == ""){
            // seconds input will populate to 00 if seconds field is empty
            boxFightTime.inputSecs.value = "00"
        }

        // add leading zero if 'ss' input is 1 digit
        if(boxFightTime.inputSecs.value.length == 1){
            boxFightTime.inputSecs.value = boxFightTime.inputSecs.value.padStart(2, "0")
        }

        var totalMins = 0;
        // var totalSecs = 0;
        var secsToDecimal = String((Math.round(boxFightTime.inputSecs.value * 100 / 60))/100).slice(2); // formatting of 'ss' to decimal

        // console.log(secsToDecimal)
        if(secsToDecimal == ""){
            secsToDecimal = "00"
        }

        // Computation
        for(var i=0; i<boxFightTime.inputRadio.length; i++){
            if(boxFightTime.inputRadio[i].checked){
                var roundNumber = Number(boxFightTime.inputRadio[i].value) + 1
                totalMins = (boxFightTime.inputRadio[i].value * 3) + Number(boxFightTime.inputMins.value);
            }
        }

        var computation = ` = ${totalMins} + (${boxFightTime.inputSecs.value}/60) = ${totalMins}.${secsToDecimal}`

        boxFightTime.ftResult.innerHTML = `${totalMins}:${boxFightTime.inputSecs.value} = ${totalMins}.${secsToDecimal}`
        boxFightTime.ftTextarea.value = `Fight Ended at ${boxFightTime.inputMins.value}:${boxFightTime.inputSecs.value} of Round ${roundNumber}\n\nTotal Fight Time = ${totalMins}:${boxFightTime.inputSecs.value}${computation}`

        // Copy Btn appear upon computation
        document.querySelector("#box-ft-textarea-btn-cont").style.display = "block";

        console.log(boxFightTime.ftResult);
        

    })

    /*---------- Copy Button for Boxing Fight Time -------------------*/
    boxFightTime.copyBtn.addEventListener('click', () => {

        var copyBoxFtBreakdown = boxFightTime.ftTextarea;

        copyBoxFtBreakdown.select();
        copyBoxFtBreakdown.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyBoxFtBreakdown.value);
    })

    /*---------- Clear Button for Boxing Fight Time -------------------*/
    boxFightTime.clearBtn.addEventListener('click', ()=>{
        // clears all input fields and texts
        boxFightTime.inputSecs.value = "";
        boxFightTime.inputMins.value = "";
        boxFightTime.ftTextarea.value = "";
        boxFightTime.ftResult.innerHTML = "";

        // hides 'Copy' button
        document.querySelector("#box-ft-textarea-btn-cont").style.display = "none";
    })

}