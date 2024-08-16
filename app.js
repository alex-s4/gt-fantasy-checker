window.onload = function() {
    
    // NBA/WNBA FANTASY SCORE

    const bballFantasyScore = document.querySelector("#bball-total-fs");

    var buttonBball = document.querySelector("#bball-btn");
    var resetButtonBball = document.querySelector("#bball-clear");
    var copyButtonBball = document.querySelector("#bball-copy");
    var collapseBball = document.querySelector("#bball-coll");

    var bballPoints = document.getElementById("bball-pts");
    var bballRebound = document.getElementById("bball-rebs");
    var bballAssist = document.getElementById("bball-asst");
    var bballBlock = document.getElementById("bball-blk");
    var bballSteal = document.getElementById("bball-stl");
    var bballTurnover = document.getElementById("bball-to");

    var bballInputs = document.querySelectorAll(".bball-fs");
    var bballVal = document.querySelectorAll(".bball-val");

    buttonBball.addEventListener('click', () => {
        console.log("buttonBball")

        var bballPointsVal = Number(bballPoints.value);
        var bballReboundVal = Number((Number(bballRebound.value) * 1.2).toFixed(1));
        var bballAssistVal = Number((Number(bballAssist.value) * 1.5).toFixed(1));
        var bballBlockVal = Number(bballBlock.value) * 3;
        var bballStealVal = Number(bballSteal.value) * 3;
        var bballTurnoverVal = Number(bballTurnover.value) * -1

        var bballFantasy = Number(Number(bballPointsVal + 
                        bballReboundVal + 
                        bballAssistVal + 
                        bballBlockVal + 
                        bballStealVal + 
                        bballTurnoverVal).toFixed(1))

        bballFantasyScore.innerHTML = bballFantasy;

        document.querySelector("#bball-points-val").innerHTML = `= ${bballPointsVal}`
        document.querySelector("#bball-rebounds-val").innerHTML = `= ${bballReboundVal}`
        document.querySelector("#bball-assists-val").innerHTML = `= ${bballAssistVal}`
        document.querySelector("#bball-blocks-val").innerHTML = `= ${bballBlockVal}`
        document.querySelector("#bball-steals-val").innerHTML = `= ${bballStealVal}`
        document.querySelector("#bball-turnovers-val").innerHTML = `= ${bballTurnoverVal}`

        var bballBreakdownPoints = `Points: 1 pt (${bballPoints.value}) = ${bballPointsVal}`;
        var bballBreakdownRebound = `Rebound: 1.2 pts (${bballRebound.value}) = ${bballReboundVal}`;
        var bballBreakdownAssist = `Assist: 1.5 pts (${bballAssist.value}) = ${bballAssistVal}`;
        var bballBreakdownBlock = `Block: 3 pts (${bballBlock.value}) = ${bballBlockVal}`;
        var bballBreakdownSteal = `Steal: 3 pts (${bballSteal.value}) = ${bballStealVal}`;
        var bballBreakdownTurnover = `Turnover: -1 pt (${bballSteal.value}) = ${bballStealVal}`;

        document.querySelector("#bball-breakdown").innerHTML = 
        `${bballBreakdownPoints}\n${bballBreakdownRebound}\n${bballBreakdownAssist}\n${bballBreakdownBlock}\n${bballBreakdownSteal}\n${bballBreakdownTurnover}\n\nTOTAL: ${bballFantasy} FS`
    });

    resetButtonBball.addEventListener('click', () => {

        for(var i=0; i<bballInputs.length; i++){
            bballInputs[i].value = '';
        }

        for(var j=0; j<bballVal.length; j++){
            bballVal[j].innerHTML = '';
        }
        
        bballFantasyScore.innerHTML = "";
        document.querySelector("#bball-breakdown").innerHTML = "";
        
    })

    copyButtonBball.addEventListener('click', () => {

        var copyBballBreakdown = document.querySelector("#bball-breakdown");

        copyBballBreakdown.select();
        copyBballBreakdown.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyBballBreakdown.value);
    })

    collapseBball.addEventListener('click', () => {
        
        const contentBball = document.querySelector("#content-bball")

        console.log(contentBball.style.display)

        if(contentBball.style.display == "" || contentBball.style.display == "block"){
            contentBball.style.display = "none"
        } else if (contentBball.style.display == "none"){
            contentBball.style.display = "block"
        }

    })

    // MLB PITCHER FANTASY SCORE

    const bsballpFantasyScore = document.querySelector("#bsballp-total-fs");

    var buttonBsballP = document.querySelector("#bsballp-btn")
    var resetButtonBsballP = document.querySelector("#bsballp-clear")
    var copyButtonBsballP = document.querySelector("#bsballp-copy")
    var collapseBsballP = document.querySelector("#bsballp-coll");

    var bsballpInputs = document.querySelectorAll(".bsballp-fs");
    var bsballpVal = document.querySelectorAll(".bsballp-val");

    buttonBsballP.addEventListener('click', ()=> {
        console.log("buttonBsballP")

        const bsballpWin = document.getElementById("bsballp-win");
        const bsballpQS = document.getElementById("bsballp-qs");
        const bsballpER = document.getElementById("bsballp-er");
        const bsballpK = document.getElementById("bsballp-k");
        const bsballpOut = document.getElementById("bsballp-out");
    
        var bsballpWinVal = Number(bsballpWin.value) * 6;
        var bsballpQSVal = Number(bsballpQS.value) * 4;
        var bsballpERVal = Number(bsballpER.value) * -3;
        var bsballpKVal = Number(bsballpK.value) * 3;
        var bsballpOutVal = Number(bsballpOut.value);

        var bsballpFantasy = bsballpWinVal + 
                             bsballpQSVal + 
                             bsballpERVal + 
                             bsballpKVal + 
                             bsballpOutVal

        bsballpFantasyScore.innerHTML = bsballpFantasy;

        document.querySelector("#bsballp-win-val").innerHTML = `= ${bsballpWinVal}`
        document.querySelector("#bsballp-qs-val").innerHTML = `= ${bsballpQSVal}`
        document.querySelector("#bsballp-er-val").innerHTML = `= ${bsballpERVal}`
        document.querySelector("#bsballp-k-val").innerHTML = `= ${bsballpKVal}`
        document.querySelector("#bsballp-out-val").innerHTML = `= ${bsballpOutVal}`

        var bsballpBreakdownWin = `Win: 6 pts (${bsballpWin.value}) = ${bsballpWinVal}`;
        var bsballpBreakdownQS = `Quality Start: 4 pts (${bsballpQS.value}) = ${bsballpQSVal}`;
        var bsballpBreakdownER = `Earned Run: -3 pt (${bsballpER.value}) = ${bsballpERVal}`;
        var bsballpBreakdownK = `Strikeout: 3 pt (${bsballpK.value}) = ${bsballpKVal}`;
        var bsballpBreakdownOut = `Out: 1 pt (${bsballpOut.value}) = ${bsballpOutVal}`;

        document.querySelector("#bsballp-breakdown").innerHTML = `${bsballpBreakdownWin}\n${bsballpBreakdownQS}\n${bsballpBreakdownER}\n${bsballpBreakdownK}\n${bsballpBreakdownOut}\n\nTOTAL: ${bsballpFantasy} FS`;

    })

    resetButtonBsballP.addEventListener('click', ()=> {
        
        for(var i=0; i<bsballpInputs.length; i++){
            bsballpInputs[i].value = '';
        }

        for(var j=0; j<bsballpVal.length; j++){
            bsballpVal[j].innerHTML = '';
        }

        bsballpFantasyScore.innerHTML = '';
        document.querySelector("#bsballp-breakdown").innerHTML = "";
    })

    copyButtonBsballP.addEventListener('click', ()=> {
        
        var copyBsballPBreakdown = document.querySelector("#bsballp-breakdown");

        copyBsballPBreakdown.select();
        copyBsballPBreakdown.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyBsballPBreakdown.value);
    })

    collapseBsballP.addEventListener('click', ()=> {
        
        const contentBsballP = document.querySelector("#content-bsballp")

        if(contentBsballP.style.display == "" || contentBsballP.style.display == "block"){
            contentBsballP.style.display = "none"
        } else if (contentBsballP.style.display == "none"){
            contentBsballP.style.display = "block"
        }


    })


    // MLB HITTER FANTASY SCORE

    const bsballhFantasyScore = document.querySelector("#bsballh-total-fs");

    var buttonBsballH = document.querySelector("#bsballh-btn")
    var resetButtonBsballH = document.querySelector("#bsballh-clear")
    var copyButtonBsballH = document.querySelector("#bsballh-copy")
    var collapseBsballH = document.querySelector("#bsballh-coll");

    var bsballhInputs = document.querySelectorAll(".bsballh-fs");
    var bsballhVal = document.querySelectorAll(".bsballh-val");

    buttonBsballH.addEventListener('click', ()=> {
        console.log("buttonBsballH")

        const bsballhSingle = document.getElementById("bsballh-sing");
        const bsballhDouble = document.getElementById("bsballh-doub");
        const bsballhTriple = document.getElementById("bsballh-trip");
        const bsballhHomeRun = document.getElementById("bsballh-hr");
        const bsballhRun = document.getElementById("bsballh-r");
        const bsballhRunBattedIn = document.getElementById("bsballh-rbi");
        const bsballhBaseOnBalls = document.getElementById("bsballh-bob");
        const bsballhHitByPitch = document.getElementById("bsballh-hbp");
        const bsballhStolenBase = document.getElementById("bsballh-sb");
        
        var bsballhSingVal = Number(bsballhSingle.value) * 3;
        var bsballhDoubVal = Number(bsballhDouble.value) * 5;
        var bsballhTripVal = Number(bsballhTriple.value) * 8;
        var bsballhHRVal = Number(bsballhHomeRun.value) * 10;
        var bsballhRVal = Number(bsballhRun.value) * 2;
        var bsballhRBIVal = Number(bsballhRunBattedIn.value) * 2;
        var bsballhBOBVal = Number(bsballhBaseOnBalls.value) * 2;
        var bsballhHBPVal = Number(bsballhHitByPitch.value) * 2;
        var bsballhSBVal = Number(bsballhStolenBase.value) * 5;

        var bsballhFantasy = bsballhSingVal + 
                             bsballhDoubVal +
                             bsballhTripVal +
                             bsballhHRVal +
                             bsballhRVal +
                             bsballhRBIVal +
                             bsballhBOBVal +
                             bsballhHBPVal +
                             bsballhSBVal;
        
        bsballhFantasyScore.innerHTML = bsballhFantasy;

        document.querySelector("#bsballh-sing-val").innerHTML = `= ${bsballhSingVal}`
        document.querySelector("#bsballh-doub-val").innerHTML = `= ${bsballhDoubVal}`
        document.querySelector("#bsballh-trip-val").innerHTML = `= ${bsballhTripVal}`
        document.querySelector("#bsballh-hr-val").innerHTML = `= ${bsballhHRVal}`
        document.querySelector("#bsballh-r-val").innerHTML = `= ${bsballhRVal}`
        document.querySelector("#bsballh-rbi-val").innerHTML = `= ${bsballhRBIVal}`
        document.querySelector("#bsballh-bob-val").innerHTML = `= ${bsballhBOBVal}`
        document.querySelector("#bsballh-hbp-val").innerHTML = `= ${bsballhHBPVal}`
        document.querySelector("#bsballh-sb-val").innerHTML = `= ${bsballhSBVal}`

        var bsballhBreakdownSingle = `Single: 3 pts (${bsballhSingle.value}) = ${bsballhSingVal}`;
        var bsballhBreakdownDouble = `Double: 5 pts (${bsballhDouble.value}) = ${bsballhDoubVal}`;
        var bsballhBreakdownTriple = `Triple: 8 pts (${bsballhTriple.value}) = ${bsballhTripVal}`;
        var bsballhBreakdownHomeRun = `Home Run: 10 pts (${bsballhHomeRun.value}) = ${bsballhHRVal}`;
        var bsballhBreakdownRun = `Run: 2 pts (${bsballhRun.value}) = ${bsballhRVal}`;
        var bsballhBreakdownRunBattedIn = `Run Batted In: 2 pts (${bsballhRunBattedIn.value}) = ${bsballhRBIVal}`;
        var bsballhBreakdownBaseOnBalls = `Base On Balls: 2 pts (${bsballhBaseOnBalls.value}) = ${bsballhBOBVal}`;
        var bsballhBreakdownHitByPitch = `Hit By Pitch: 2 pts (${bsballhHitByPitch.value}) = ${bsballhHBPVal}`;
        var bsballhBreakdownStolenBase = `Stolen Base: 5 pts (${bsballhStolenBase.value}) = ${bsballhSBVal}`;

        document.querySelector("#bsballh-breakdown").innerHTML = `${bsballhBreakdownSingle}\n${bsballhBreakdownDouble}\n${bsballhBreakdownTriple}\n${bsballhBreakdownHomeRun}\n${bsballhBreakdownRun}\n${bsballhBreakdownRunBattedIn}\n${bsballhBreakdownBaseOnBalls}\n${bsballhBreakdownHitByPitch}\n${bsballhBreakdownStolenBase}\n\nTOTAL: ${bsballhFantasy} FS`;
    })

    resetButtonBsballH.addEventListener('click', ()=> {
        
        for(var i=0; i<bsballhInputs.length; i++){
            bsballhInputs[i].value = '';
        }

        for(var j=0; j<bsballhVal.length; j++){
            bsballhVal[j].innerHTML = '';
        }

        bsballhFantasyScore.innerHTML = '';
        document.querySelector("#bsballh-breakdown").innerHTML = "";

    })

    copyButtonBsballH.addEventListener('click', ()=> {
        
        var copyBsballHBreakdown = document.querySelector("#bsballh-breakdown");

        copyBsballHBreakdown.select();
        copyBsballHBreakdown.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyBsballHBreakdown.value);
    })

    collapseBsballH.addEventListener('click', ()=> {
        
        const contentBsballH = document.querySelector("#content-bsballh")

        if(contentBsballH.style.display == "" || contentBsballH.style.display == "block"){
            contentBsballH.style.display = "none"
        } else if (contentBsballH.style.display == "none"){
            contentBsballH.style.display = "block"
        }

    })

    // NFL OFFENSIVE FANTASY SCORE

    const fballoFantasyScore = document.querySelector("#fballo-total-fs")

    var buttonFballO = document.querySelector("#fballo-btn");
    var resetButtonFballO = document.querySelector("#fballo-clear");
    var copyButtonFballO = document.querySelector("#fballo-copy");
    var collapseFBallO = document.querySelector("#fballo-coll");

    var fballoInputs = document.querySelectorAll(".fballo-fs");
    var fballoVal = document.querySelectorAll(".fballo-val");

    buttonFballO.addEventListener('click', ()=> {
        console.log("buttonFballO")
        
        const fballoPassingYards = document.getElementById("fballo-passyd");
        const fballoPassingTDs = document.getElementById("fballo-passtd");
        const fballoInterceptions = document.getElementById("fballo-int");
        const fballoRushingYards = document.getElementById("fballo-rushyd");
        const fballoRushingTDs = document.getElementById("fballo-rushtd");
        const fballoReceivingYards = document.getElementById("fballo-recyd");
        const fballoReceivingTDs = document.getElementById("fballo-rectd");
        const fballoReceptions = document.getElementById("fballo-rec");
        const fballoFumblesLost = document.getElementById("fballo-fl");
        const fballo2PointConversions = document.getElementById("fballo-2ptc");
        const fballoOffensiveFumbleRecoveryTD = document.getElementById("fballo-ofrt");
        const fballoKickPuntFGReturnTD = document.getElementById("fballo-kpfgrtd");

        var fballoPassYdVal = Number((Number(fballoPassingYards.value) * 0.04).toFixed(2));
        var fballoPassTdVal = Number(fballoPassingTDs.value) * 4;
        var fballoIntVal = Number(fballoInterceptions.value) * -1;
        var fballoRushYdVal = Number((Number(fballoRushingYards.value) * 0.1).toFixed(1));
        var fballoRushTdVal = Number(fballoRushingTDs.value) * 6;
        var fballoRecYdVal = Number((Number(fballoReceivingYards.value) * 0.1).toFixed(1));
        var fballoRecTdVal = Number(fballoReceivingTDs.value) * 6;
        var fballoRecVal = Number(fballoReceptions.value);
        var fballoFlVal = Number(fballoFumblesLost.value) * -1;
        var fballo2PtcVal = Number(fballo2PointConversions.value) * 2;
        var fballoOfrtVal = Number(fballoOffensiveFumbleRecoveryTD.value) * 6;
        var fballoKpfgrtdVal = Number(fballoKickPuntFGReturnTD.value) * 6;

        var fballoFantasy = Number((fballoPassYdVal +
                            fballoPassTdVal +
                            fballoIntVal +
                            fballoRushYdVal +
                            fballoRushTdVal +
                            fballoRecYdVal +
                            fballoRecTdVal +
                            fballoRecVal +
                            fballoFlVal +
                            fballo2PtcVal +
                            fballoOfrtVal +
                            fballoKpfgrtdVal).toFixed(2));

        fballoFantasyScore.innerHTML = fballoFantasy

        document.querySelector("#fballo-passyd-val").innerHTML = `= ${fballoPassYdVal}`
        document.querySelector("#fballo-passtd-val").innerHTML = `= ${fballoPassTdVal}`
        document.querySelector("#fballo-int-val").innerHTML = `= ${fballoIntVal}`
        document.querySelector("#fballo-rushyd-val").innerHTML = `= ${fballoRushYdVal}`
        document.querySelector("#fballo-rushtd-val").innerHTML = `= ${fballoRushTdVal}`
        document.querySelector("#fballo-recyd-val").innerHTML = `= ${fballoRecYdVal}`
        document.querySelector("#fballo-rectd-val").innerHTML = `= ${fballoRecTdVal}`
        document.querySelector("#fballo-rec-val").innerHTML = `= ${fballoRecVal}`
        document.querySelector("#fballo-fl-val").innerHTML = `= ${fballoFlVal}`
        document.querySelector("#fballo-2ptc-val").innerHTML = `= ${fballo2PtcVal}`
        document.querySelector("#fballo-ofrt-val").innerHTML = `= ${fballoOfrtVal}`
        document.querySelector("#fballo-kpfgrtd-val").innerHTML = `= ${fballoKpfgrtdVal}`

        var fballoBreakdownPassingYards = `Passing Yards: 0.04 pts/yard (${fballoPassingYards.value}) = ${fballoPassYdVal}`;
        var fballoBreakdownPassingTDs = `Passing TDs: 4 pts (${fballoPassingTDs.value}) = ${fballoPassTdVal}`;
        var fballoBreakdownInterceptions = `Interceptions: -1 pt (${fballoInterceptions.value}) = ${fballoIntVal}`;
        var fballoBreakdownRushingYards = `Rushing Yards: 0.1 pts/yard (${fballoRushingYards.value}) = ${fballoRushYdVal}`;
        var fballoBreakdownRushingTDs = `Rushing TDs: 6 pts (${fballoRushingTDs.value}) = ${fballoRushTdVal}`;
        var fballoBreakdownReceivingYards = `Receiving Yards: 0.1 pts/yard (${fballoReceivingYards.value}) = ${fballoRecYdVal}`;
        var fballoBreakdownReceivingTDs = `Receiving TDs: 6 pts (${fballoReceivingTDs.value}) = ${fballoRecTdVal}`;
        var fballoBreakdownReceptions = `Receptions: 1 pt (${fballoReceptions.value}) = ${fballoRecVal}`;
        var fballoBreakdownFumblesLost = `Fumbles Lost: -1 pt (${fballoFumblesLost.value}) = ${fballoFlVal}`;
        var fballoBreakdown2PointConv = `2 Point Conversions: 2 pts (${fballo2PointConversions.value}) = ${fballo2PtcVal}`;
        var fballoBreakdownOffensiveFumbleRecoveryTD = `Offensive Fumble Recovery Touchdown: 6 pts (${fballoOffensiveFumbleRecoveryTD.value}) = ${fballoOfrtVal}`;
        var fballoBreakdownKickPuntFGReturnTD = `Kick/Punt/Field Goal Return Touchdown: 6 pts (${fballoKickPuntFGReturnTD.value}) = ${fballoKpfgrtdVal}`;

        document.querySelector("#fballo-breakdown").innerHTML = `${fballoBreakdownPassingYards}\n${fballoBreakdownPassingTDs}\n${fballoBreakdownInterceptions}\n${fballoBreakdownRushingYards}\n${fballoBreakdownRushingTDs}\n${fballoBreakdownReceivingYards}\n${fballoBreakdownReceivingTDs}\n${fballoBreakdownReceptions}\n${fballoBreakdownFumblesLost}\n${fballoBreakdown2PointConv}\n${fballoBreakdownOffensiveFumbleRecoveryTD}\n${fballoBreakdownKickPuntFGReturnTD}\n\nTOTAL: ${fballoFantasy} FS`

    })

    resetButtonFballO.addEventListener('click', ()=> {
        
        for(var i=0; i<fballoInputs.length; i++){
            fballoInputs[i].value = '';
        }

        for(var j=0; j<fballoVal.length; j++){
            fballoVal[j].innerHTML = '';
        }

        fballoFantasyScore.innerHTML = '';
        document.querySelector("#fballo-breakdown").innerHTML = '';
    })

    copyButtonFballO.addEventListener('click', ()=> {
        
        var copyFballOBreakdown = document.querySelector("#fballo-breakdown");

        copyFballOBreakdown.select();
        copyFballOBreakdown.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyFballOBreakdown.value);
    })

    collapseFBallO.addEventListener('click', ()=> {
        
        const contentFballO = document.querySelector("#content-fballo")

        if(contentFballO.style.display == "" || contentFballO.style.display == "block"){
            contentFballO.style.display = "none"
        } else if (contentFballO.style.display == "none"){
            contentFballO.style.display = "block"
        }


    })

    // NFL DST FANTASY SCORE

    const fballdFantasyScore = document.querySelector("#fballd-total-fs");

    var buttonFballD = document.querySelector("#fballd-btn");
    var resetButtonFballD = document.querySelector("#fballd-clear");
    var copyButtonFballD = document.querySelector("#fballd-copy");
    var collapseFBallD = document.querySelector("#fballd-coll");

    var fballdInputs = document.querySelectorAll(".fballd-fs");
    var fballdVal = document.querySelectorAll(".fballd-val");
    var fballdRad = document.querySelectorAll(".fballd-pa");

    buttonFballD.addEventListener('click', ()=> {
        
        var fballdPaRadio = document.querySelectorAll(".fballd-pa");

        const fballdSack = document.getElementById("fballd-sac");
        const fballdInterception = document.getElementById("fballd-int");
        const fballdFumbleRecovery = document.getElementById("fballd-fumbrec");
        const fballdPuntKickoffFGReturnTD = document.getElementById("fballd-pkfgrtd");
        const fballdInterceptionReturnTD = document.getElementById("fballd-intrettd");
        const fballdFumbleRecoveryTD = document.getElementById("fballd-fumbrectd");
        const fballdBlockedPuntTD = document.getElementById("fballd-blkpunt");
        const fballdSafety = document.getElementById("fballd-saf");
        const fballdBlockedKick = document.getElementById("fballd-blkkick");
        const fballd2PointConversion = document.getElementById("fballd-2ptconv");

        var fballdSacVal = Number(fballdSack.value) * 1;
        var fballdIntVal = Number(fballdInterception.value) * 2;
        var fballdFumbRecVal = Number(fballdFumbleRecovery.value) * 2;
        var fballdPkfgrtdVal = Number(fballdPuntKickoffFGReturnTD.value) * 6;
        var fballdIntrettdVal = Number(fballdInterceptionReturnTD.value) * 6;
        var fballdFumbRecTdVal = Number(fballdFumbleRecoveryTD.value) * 6;
        var fballdBlkPuntVal = Number(fballdBlockedPuntTD.value) * 6;
        var fballdSafVal = Number(fballdSafety.value) * 2;
        var fballdBlkKickVal = Number(fballdBlockedKick.value) * 2;
        var fballd2PtConvVal = Number(fballd2PointConversion.value) * 2;

        var fballdFaVal = 0;
        var fballdBreakdownFa = "";

        for(var i=0; i<fballdPaRadio.length; i++){
            if(fballdPaRadio[i].checked === true){
                fballdFaVal = Number(fballdPaRadio[i].value)
            }
            switch(fballdFaVal){
                case 10:
                    fballdBreakdownFa = "0 Point Allowed = 10 pts";
                    break;
                case 7:
                    fballdBreakdownFa = "1-6 Points Allowed = 7 pts";
                    break;
                case 4:
                    fballdBreakdownFa = "7-13 Points Allowed = 4 pts";
                    break;
                case 1:
                    fballdBreakdownFa = "14-20 Points Allowed = 1 pt";
                    break;
                case 0:
                    fballdBreakdownFa = "21-27 Points Allowed = 0 pt";
                    break;
                case -1:
                    fballdBreakdownFa = "28-34 Points Allowed = -1 pt";
                    break;
                case -4:
                    fballdBreakdownFa = "35+ Points Allowed = -4 pt";
                    break;
            }
        }

        var fballdFantasy = fballdSacVal +
                            fballdIntVal +
                            fballdFumbRecVal +
                            fballdPkfgrtdVal +
                            fballdIntrettdVal +
                            fballdFumbRecTdVal +
                            fballdBlkPuntVal +
                            fballdSafVal +
                            fballdBlkKickVal +
                            fballd2PtConvVal +
                            fballdFaVal;

        fballdFantasyScore.innerHTML = fballdFantasy;

        document.querySelector("#fballd-sac-val").innerHTML = `= ${fballdSacVal}`
        document.querySelector("#fballd-int-val").innerHTML = `= ${fballdIntVal}`
        document.querySelector("#fballd-fumbrec-val").innerHTML = `= ${fballdFumbRecVal}`
        document.querySelector("#fballd-pkfgrtd-val").innerHTML = `= ${fballdPkfgrtdVal}`
        document.querySelector("#fballd-intrettd-val").innerHTML = `= ${fballdIntrettdVal}`
        document.querySelector("#fballd-fumbrectd-val").innerHTML = `= ${fballdFumbRecTdVal}`
        document.querySelector("#fballd-blkpunt-val").innerHTML = `= ${fballdBlkPuntVal}`
        document.querySelector("#fballd-saf-val").innerHTML = `= ${fballdSafVal}`
        document.querySelector("#fballd-blkkick-val").innerHTML = `= ${fballdBlkKickVal}`
        document.querySelector("#fballd-2ptconv-val").innerHTML = `= ${fballd2PtConvVal}`

        var fballdBreakdownSack = `Sack: 1 pt (${fballdSack.value}) = ${fballdSacVal}`;
        var fballdBreakdownInterception = `Interception: 2 pts (${fballdInterception.value}) = ${fballdIntVal}`;
        var fballdBreakdownFumbleRecovery = `Fumble Recovery: 2 pts (${fballdFumbleRecovery.value}) = ${fballdFumbRecVal}`;
        var fballdBreakdownPuntKickoffFGReturnTD = `Punt/Kickoff/FG Return for TD: 6 pts (${fballdPuntKickoffFGReturnTD.value}) = ${fballdPkfgrtdVal}`;
        var fballdBreakdownInterceptionReturnTD = `Interception Return TD: 6 pts (${fballdInterceptionReturnTD.value}) = ${fballdIntrettdVal}`;
        var fballdBreakdownFumbleRecoveryTD = `Fumble Recovery TD: 6 pts (${fballdFumbleRecoveryTD.value}) = ${fballdFumbRecTdVal}`;
        var fballdBreakdownBlockedPuntTD = `Blocked Punt or FG Return TD: 6 pts (${fballdBlockedPuntTD.value}) = ${fballdBlkPuntVal}`;
        var fballdBreakdownSafety = `Safety: 2 pts (${fballdSafety.value}) = ${fballdSafVal}`;
        var fballdBreakdownBlockedKick = `Blocked Kick: 2 pts (${fballdBlockedKick.value}) = ${fballdBlkKickVal}`;
        var fballdBreakdownfballd2PointConversion = `2 Point Conversions/Extra Point Returns: 2 pts (${fballd2PointConversion.value}) = ${fballd2PtConvVal}`;


        document.querySelector("#fballd-breakdown").innerHTML = `${fballdBreakdownSack}\n${fballdBreakdownInterception}\n${fballdBreakdownFumbleRecovery}\n${fballdBreakdownPuntKickoffFGReturnTD}\n${fballdBreakdownInterceptionReturnTD}\n${fballdBreakdownFumbleRecoveryTD}\n${fballdBreakdownBlockedPuntTD}\n${fballdBreakdownSafety}\n${fballdBreakdownBlockedKick}\n${fballdBreakdownfballd2PointConversion}\n${fballdBreakdownFa}\n\nTOTAL: ${fballdFantasy} FS`

    })

    resetButtonFballD.addEventListener('click', ()=> {
        
        for(var i=0; i<fballdInputs.length; i++){
            fballdInputs[i].value = '';
        }

        for(var j=0; j<fballdVal.length; j++){
            fballdVal[j].innerHTML = '';
        }

        for(var k=0; k<fballdRad.length; k++){
            fballdRad[k].checked = false;
        }

        fballdFantasyScore.innerHTML = '';
        document.querySelector("#fballd-breakdown").innerHTML = '';
    })

    copyButtonFballD.addEventListener('click', ()=> {
        
        var copyFballDBreakdown = document.querySelector("#fballd-breakdown");

        copyFballDBreakdown.select();
        copyFballDBreakdown.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyFballDBreakdown.value);
    })

    collapseFBallD.addEventListener('click', ()=> {
        
        const contentFballD = document.querySelector("#content-fballd")

        if(contentFballD.style.display == "" || contentFballD.style.display == "block"){
            contentFballD.style.display = "none"
        } else if (contentFballD.style.display == "none"){
            contentFballD.style.display = "block"
        }

    })

    // TENNIS FANTASY SCORE

    const tennisFantasyScore = document.querySelector("#tennis-total-fs");

    var buttonTennis = document.querySelector("#tennis-btn");
    var resetButtonTennis = document.querySelector("#tennis-clear")
    var copyButtonTennis = document.querySelector("#tennis-copy");
    var collapseTennis = document.querySelector("#tennis-coll");

    var tennisInputs = document.querySelectorAll(".tennis-fs");
    var tennisVal = document.querySelectorAll(".tennis-val");

    buttonTennis.addEventListener('click', ()=> {

        const tennisMatchPlayed = document.querySelector("#tennis-mp")
        const tennisGameWin = document.querySelector("#tennis-gw")
        const tennisGameLoss = document.querySelector("#tennis-gl")
        const tennisSetWon = document.querySelector("#tennis-sw")
        const tennisSetLoss = document.querySelector("#tennis-sl")
        const tennisAce = document.querySelector("#tennis-ac")
        const tennisDoubleFault = document.querySelector("#tennis-dblft")

        var tennisMpVal = Number(tennisMatchPlayed.value) * 10;
        var tennisGwVal = Number(tennisGameWin.value) * 1;
        var tennisGlVal = Number(tennisGameLoss.value) * -1;
        var tennisSwVal = Number(tennisSetWon.value) * 3;
        var tennisSlVal = Number(tennisSetLoss.value) * -3;
        var tennisAcVal = Number(tennisAce.value) * 0.5;
        var tennisDblftVal = Number(tennisDoubleFault.value) * -0.5;

        var tennisFantasy = tennisMpVal +
                            tennisGwVal +
                            tennisGlVal +
                            tennisSwVal +
                            tennisSlVal +
                            tennisAcVal +
                            tennisDblftVal;

        tennisFantasyScore.innerHTML = tennisFantasy;

        document.querySelector("#tennis-mp-val").innerHTML = `= ${tennisMpVal}`
        document.querySelector("#tennis-gw-val").innerHTML = `= ${tennisGwVal}`
        document.querySelector("#tennis-gl-val").innerHTML = `= ${tennisGlVal}`
        document.querySelector("#tennis-sw-val").innerHTML = `= ${tennisSwVal}`
        document.querySelector("#tennis-sl-val").innerHTML = `= ${tennisSlVal}`
        document.querySelector("#tennis-ac-val").innerHTML = `= ${tennisAcVal}`
        document.querySelector("#tennis-dblft-val").innerHTML = `= ${tennisDblftVal}`

        var tennisBreakdownMatchPlayed = `Match Played: 10 pts (${tennisMatchPlayed.value}) = ${tennisMpVal}`;
        var tennisBreakdownGameWin = `Game Win: 1 pt (${tennisGameWin.value}) = ${tennisGwVal}`;
        var tennisBreakdownGameLoss = `Game Loss: -1 pt (${tennisGameLoss.value}) = ${tennisGlVal}`;
        var tennisBreakdownSetWon = `Set Won: 3 pts (${tennisSetWon.value}) = ${tennisSwVal}`;
        var tennisBreakdownSetLoss = `Set Loss: -3 pts (${tennisSetLoss.value}) = ${tennisSlVal}`;
        var tennisBreakdownAce = `Ace: 0.5 pt (${tennisAce.value}) = ${tennisAcVal}`;
        var tennisBreakdownDoubleFault = `Double Fault: -0.5 pt (${tennisDoubleFault.value}) = ${tennisDblftVal}`;

        document.querySelector("#tennis-breakdown").innerHTML = `${tennisBreakdownMatchPlayed}\n${tennisBreakdownGameWin}\n${tennisBreakdownGameLoss}\n${tennisBreakdownSetWon}\n${tennisBreakdownSetLoss}\n${tennisBreakdownAce}\n${tennisBreakdownDoubleFault}\n\nTOTAL: ${tennisFantasy} FS`;
    })

    resetButtonTennis.addEventListener('click', ()=> {
        
        for(var i=0; i<tennisInputs.length; i++){
            tennisInputs[i].value = '';
        }

        for(var j=0; j<tennisVal.length; j++){
            tennisVal[j].innerHTML = '';
        }

        tennisFantasyScore.innerHTML = '';
        document.querySelector("#tennis-breakdown").innerHTML = '';
    })

    copyButtonTennis.addEventListener('click', ()=> {
        
        var copyTennisBreakdown = document.querySelector("#tennis-breakdown");

        copyTennisBreakdown.select();
        copyTennisBreakdown.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyTennisBreakdown.value);
    })

    collapseTennis.addEventListener('click', ()=> {

        const contentTennis = document.querySelector("#content-tennis")

        if(contentTennis.style.display == "" || contentTennis.style.display == "block"){
            contentTennis.style.display = "none"
        } else if (contentTennis.style.display == "none"){
            contentTennis.style.display = "block"
        }


    })


    // MMA FANTASY SCORE

    const mmaFantasyScore = document.querySelector("#mma-total-fs");

    var buttonMma = document.querySelector("#mma-btn");
    var resetButtonMma = document.querySelector("#mma-clear")
    var copyButtonMma = document.querySelector("#mma-copy")
    var collapseMma = document.querySelector("#mma-coll");

    var mmaInputs = document.querySelectorAll(".mma-fs");
    var mmaVal = document.querySelectorAll(".mma-val");
    var mmaRad = document.querySelectorAll(".mma-fcb");

    buttonMma.addEventListener("click", ()=> {

        var mmaFcbRadio = document.querySelectorAll('.mma-fcb');

        const mmaSignificantStrikes = document.querySelector("#mma-sigstr");
        const mmaTakedown = document.querySelector("#mma-td");
        const mmaTakedownDefense = document.querySelector("#mma-tddef");
        const mmaSubmissionAttempt = document.querySelector("#mma-subatt");
        const mmaKnockdown = document.querySelector("#mma-kd");

        var mmaSigStrVal = Number(mmaSignificantStrikes.value) * 0.6;
        var mmaTdVal = Number(mmaTakedown.value) * 6;
        var mmaTdDefVal = Number(mmaTakedownDefense.value) * 3;
        var mmaSubAttVal = Number(mmaSubmissionAttempt.value) * 5;
        var mmaKdVal = Number(mmaKnockdown.value) * 12;

        var mmaFcbVal = 0;
        var mmaBreakdownFCB = "";

        for(var i=0; i<mmaFcbRadio.length; i++){
            if(mmaFcbRadio[i].checked === true){
                mmaFcbVal = Number(mmaFcbRadio[i].value)
            }
            switch(mmaFcbVal){
                case 100:
                    mmaBreakdownFCB = "1st Round Win = 100 pts";
                    break;
                case 75:
                    mmaBreakdownFCB = "2nd Round Win = 75 pts";
                    break;
                case 50:
                    mmaBreakdownFCB = "3rd Round Win = 50 pts";
                    break;
                case 35:
                    mmaBreakdownFCB = "4th Round Win = 35 pts";
                    break;
                case 25:
                    mmaBreakdownFCB = "5th Round Win = 25 pts";
                    break;
                case 20:
                    mmaBreakdownFCB = "Decision Win = 20 pts";
                    break;
            }
        }
        
        var mmaFantasy = mmaSigStrVal +
                         mmaTdVal +
                         mmaTdDefVal +
                         mmaSubAttVal +
                         mmaKdVal +
                         mmaFcbVal;

        mmaFantasyScore.innerHTML = mmaFantasy;

        document.querySelector("#mma-sigstr-val").innerHTML = `= ${mmaSigStrVal}`;
        document.querySelector("#mma-td-val").innerHTML = `= ${mmaTdVal}`;
        document.querySelector("#mma-tddef-val").innerHTML = `= ${mmaTdDefVal}`;
        document.querySelector("#mma-subatt-val").innerHTML = `= ${mmaSubAttVal}`;
        document.querySelector("#mma-kd-val").innerHTML = `= ${mmaKdVal}`;
        
        var mmaBreakdownSigStrikes = `Significant Strikes: 0.6 pts (${mmaSignificantStrikes.value}) = ${mmaSigStrVal}`;
        var mmaBreakdownTakedown = `Takedown: 6 pts (${mmaTakedown.value}) = ${mmaTdVal}`;
        var mmaBreakdownTakedownDefense = `Takedown Defense: 3 pts (${mmaTakedownDefense.value}) = ${mmaTdDefVal}`;
        var mmaBreakdownSubmissionAttempt = `Submission Attempt: 5 pts (${mmaSubmissionAttempt.value}) = ${mmaSubAttVal}`;
        var mmaBreakdownKnockdown = `Knockdown: 12 pts (${mmaKnockdown.value}) = ${mmaKdVal}`;

        document.querySelector("#mma-breakdown").innerHTML = `${mmaBreakdownSigStrikes}\n${mmaBreakdownTakedown}\n${mmaBreakdownTakedownDefense}\n${mmaBreakdownSubmissionAttempt}\n${mmaBreakdownKnockdown}\n${mmaBreakdownFCB}\n\nTOTAL: ${mmaFantasy} FS`

    })

    resetButtonMma.addEventListener("click", ()=> {
        
        for(var i=0; i<mmaInputs.length; i++){
            mmaInputs[i].value = '';
        }

        for(var j=0; j<mmaVal.length; j++){
            mmaVal[j].innerHTML = '';
        }

        for(var k=0; k<mmaRad.length; k++){
            mmaRad[k].checked = false;
        }

        mmaFantasyScore.innerHTML = '';
        document.querySelector("#mma-breakdown").innerHTML = "";
    })

    copyButtonMma.addEventListener("click", ()=> {
        
        var copyMmaBreakdown = document.querySelector("#mma-breakdown");

        copyMmaBreakdown.select();
        copyMmaBreakdown.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyMmaBreakdown.value);
    })

    collapseMma.addEventListener("click", ()=> {
        
        const contentMma = document.querySelector("#content-mma")

        if(contentMma.style.display == "" || contentMma.style.display == "block"){
            contentMma.style.display = "none"
        } else if (contentMma.style.display == "none"){
            contentMma.style.display = "block"
        }

    })

    // BOXING FANTASY SCORE

    const boxFantasyScore = document.querySelector("#box-total-fs");

    var buttonBox = document.querySelector("#box-btn");
    var resetButtonBox = document.querySelector("#box-clear");
    var copyButtonBox = document.querySelector("#box-copy");
    var collapseBox = document.querySelector("#box-coll");

    var boxInputs = document.querySelectorAll(".box-fs");
    var boxVal = document.querySelectorAll(".box-val");
    var boxRad = document.querySelectorAll(".box-fcb");

    buttonBox.addEventListener("click", ()=> {

        var boxFcbRadio = document.querySelectorAll('.box-fcb');

        const boxPunchLanded = document.querySelector("#box-punch");
        const boxKnockdown = document.querySelector("#box-kd");
        const boxBeingKnocked = document.querySelector("#box-beingkd");

        var boxPunchVal = Number(boxPunchLanded.value) * 0.5;
        var boxKdVal = Number(boxKnockdown.value) * 12;
        var boxBeingKdVal = Number(boxBeingKnocked.value) * -12;

        var boxFcbVal = 0;
        var boxBreakdownFcb = '';

        for(var i=0; i<boxFcbRadio.length; i++){
            if(boxFcbRadio[i].checked === true){
                boxFcbVal = Number(boxFcbRadio[i].value)
            }
            switch(boxFcbVal){
                case 100:
                    boxBreakdownFcb = "Win Within Rounds 1-2 = 100 pts";
                    break;
                case 75:
                    boxBreakdownFcb = "Win Within Rounds 3-6 = 75 pts";
                    break;
                case 50:
                    boxBreakdownFcb = "Win Within Rounds 7-10 = 50 pts";
                    break;
                case 25:
                    boxBreakdownFcb = "Win Within Rounds 11-12 = 25 pts";
                    break;
                case 20:
                    boxBreakdownFcb = "Decision Win = 20 pts";
                    break;
            }
        }

        var boxFantasy = boxPunchVal + 
                         boxKdVal +
                         boxBeingKdVal +
                         boxFcbVal;

        boxFantasyScore.innerHTML = boxFantasy;

        document.querySelector("#box-punch-val").innerHTML = `= ${boxPunchVal}`
        document.querySelector("#box-kd-val").innerHTML = `= ${boxKdVal}`
        document.querySelector("#box-beingkd-val").innerHTML = `= ${boxBeingKdVal}`

        var boxBreakdownPunchLanded = `Punch Landed: 0.5 pts (${boxPunchLanded.value}) = ${boxPunchVal}`;
        var boxBreakdownKnockdown = `Knockdown on Opponent: 12 pts (${boxKnockdown.value}) = ${boxKdVal}`;
        var boxBreakdownBeingKnocked = `Being Knocked Down by Opponent: -12 pts (${boxBeingKnocked.value}) = ${boxBeingKdVal}`;

        document.querySelector("#box-breakdown").innerHTML = `${boxBreakdownPunchLanded}\n${boxBreakdownKnockdown}\n${boxBreakdownBeingKnocked}\n${boxBreakdownFcb}\n\nTOTAL: ${boxFantasy} FS`;
    })

    resetButtonBox.addEventListener("click", ()=> {
        
        for(var i=0; i<boxInputs.length; i++){
            boxInputs[i].value = '';
        }

        for(var j=0; j<boxVal.length; j++){
            boxVal[j].innerHTML = '';
        }

        for(var k=0; k<boxRad.length; k++){
            boxRad[k].checked = false;
        }

        boxFantasyScore.innerHTML = '';
        document.querySelector("#box-breakdown").innerHTML = '';
    })

    copyButtonBox.addEventListener("click", ()=> {
        
        var copyBoxBreakdown = document.querySelector("#box-breakdown");

        copyBoxBreakdown.select();
        copyBoxBreakdown.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyBoxBreakdown.value);
    })

    collapseBox.addEventListener("click", ()=> {
        
        const contentBox = document.querySelector("#content-box")

        if(contentBox.style.display == "" || contentBox.style.display == "block"){
            contentBox.style.display = "none"
        } else if (contentBox.style.display == "none"){
            contentBox.style.display = "block"
        }

    })

    // NASCAR FANTASY SCORE

    const nascarFantasyScore = document.querySelector("#nascar-total-fs");

    var buttonNascar = document.querySelector("#nascar-btn");
    var resetButtonNascar = document.querySelector("#nascar-clear");
    var copyButtonNascar = document.querySelector("#nascar-copy");
    var collapseNascar = document.querySelector("#nascar-coll");

    var nascarInputs = document.querySelectorAll(".nascar-fs");
    var nascarVal = document.querySelectorAll(".nascar-val");
    var nascarRad = document.querySelectorAll(".nascar-fpp");

    buttonNascar.addEventListener("click", ()=> {

        var nascarFppRadio = document.querySelectorAll('.nascar-fpp');

        const nascarPlaceDiff = document.querySelector("#nascar-pd");
        const nascarFastestLaps = document.querySelector("#nascar-fl");
        const nascarLapsLead = document.querySelector("#nascar-ll");

        var nascarPdVal = Number(nascarPlaceDiff.value) * 1;
        var nascarFlVal = Number(nascarFastestLaps.value) * 0.45;
        var nascarLlVal = Number(nascarLapsLead.value) * 0.25;

        var nascarFppVal = 0;
        var nascarBreakdownFpp = '';

        for(var i=0; i<nascarFppRadio.length; i++){
            if(nascarFppRadio[i].checked === true){
                nascarFppVal = Number(nascarFppRadio[i].value)
            }
            switch(nascarFppVal){
                case 45:
                    nascarBreakdownFpp = "1st Place: 45 pts";
                    break;
                case 42:
                    nascarBreakdownFpp = "2nd Place: 42 pts";
                    break;
                case 41:
                    nascarBreakdownFpp = "3rd Place: 41 pts";
                    break;
                case 40:
                    nascarBreakdownFpp = "4th Place: 40 pts";
                    break;
                case 39:
                    nascarBreakdownFpp = "5th Place: 39 pts";
                    break;
                case 38:
                    nascarBreakdownFpp = "6th Place: 38 pts";
                    break;
                case 37:
                    nascarBreakdownFpp = "7th Place: 37 pts";
                    break;
                case 36:
                    nascarBreakdownFpp = "8th Place: 36 pts";
                    break;
                case 35:
                    nascarBreakdownFpp = "9th Place: 35 pts";
                    break;
                case 34:
                    nascarBreakdownFpp = "10th Place: 34 pts";
                    break;
                case 32:
                    nascarBreakdownFpp = "11th Place: 32 pts";
                    break;
                case 31:
                    nascarBreakdownFpp = "12th Place: 31 pts";
                    break;
                case 30:
                    nascarBreakdownFpp = "13th Place: 30 pts";
                    break;
                case 29:
                    nascarBreakdownFpp = "14th Place: 29 pts";
                    break;
                case 28:
                    nascarBreakdownFpp = "15th Place: 28 pts";
                    break;
                case 27:
                    nascarBreakdownFpp = "16th Place: 27 pts";
                    break;
                case 26:
                    nascarBreakdownFpp = "17th Place: 26 pts";
                    break;
                case 25:
                    nascarBreakdownFpp = "18th Place: 25 pts";
                    break;
                case 23:
                    nascarBreakdownFpp = "19th Place: 23 pts";
                    break;
                case 21:
                    nascarBreakdownFpp = "20th Place: 21 pts";
                    break;
                case 20:
                    nascarBreakdownFpp = "21st Place: 20 pts";
                    break;
                case 19:
                    nascarBreakdownFpp = "22nd Place: 19 pts";
                    break;
                case 18:
                    nascarBreakdownFpp = "23rd Place: 18 pts";
                    break;
                case 17:
                    nascarBreakdownFpp = "24th Place: 17 pts";
                    break;
                case 16:
                    nascarBreakdownFpp = "25th Place: 16 pts";
                    break;
                case 15:
                    nascarBreakdownFpp = "26th Place: 15 pts";
                    break;
                case 14:
                    nascarBreakdownFpp = "27th Place: 14 pts";
                    break;
                case 13:
                    nascarBreakdownFpp = "28th Place: 13 pts";
                    break;
                case 12:
                    nascarBreakdownFpp = "29th Place: 12 pts";
                    break;
                case 11:
                    nascarBreakdownFpp = "30th Place: 11 pts";
                    break;
                case 10:
                    nascarBreakdownFpp = "31st Place: 10 pts";
                    break;
                case 9:
                    nascarBreakdownFpp = "32nd Place: 9 pts";
                    break;
                case 8:
                    nascarBreakdownFpp = "33rd Place: 8 pts";
                    break;
                case 7:
                    nascarBreakdownFpp = "34th Place: 7 pts";
                    break;
                case 6:
                    nascarBreakdownFpp = "35th Place: 6 pts";
                    break;
                case 5:
                    nascarBreakdownFpp = "36th Place: 5 pts";
                    break;
                case 4:
                    nascarBreakdownFpp = "37th Place: 4 pts";
                    break;
                case 3:
                    nascarBreakdownFpp = "38th Place: 3 pts";
                    break;
                case 2:
                    nascarBreakdownFpp = "39th Place: 2 pts";
                    break;
                case 1:
                    nascarBreakdownFpp = "40th Place: 1 pt";
                    break;
                case 0:
                    nascarBreakdownFpp = "41st Place or Worse: 0 pt";
                    break;
            }
        }

        console.log(nascarBreakdownFpp);

        var nascarFantasy = nascarPdVal + nascarFlVal + nascarLlVal + nascarFppVal;

        nascarFantasyScore.innerHTML = nascarFantasy

        document.querySelector("#nascar-pd-val").innerHTML = `= ${nascarPdVal}`
        document.querySelector("#nascar-fl-val").innerHTML = `= ${nascarFlVal}`
        document.querySelector("#nascar-ll-val").innerHTML = `= ${nascarLlVal}`

        var nascarBreakdownPlaceDiff = `Place Differential: +/- 1 pt (${nascarPlaceDiff.value}) = ${nascarPdVal}`;
        var nascarBreakdownFastestLaps = `Fastest Laps: 0.45 pt/lap (${nascarFastestLaps.value}) = ${nascarFlVal}`;
        var nascarBreakdownLapsLead = `Laps Lead: 0.25 pt/lap (${nascarLapsLead.value}) = ${nascarLlVal}`;

        document.querySelector("#nascar-breakdown").innerHTML = `${nascarBreakdownPlaceDiff}\n${nascarBreakdownFastestLaps}\n${nascarBreakdownLapsLead}\n${nascarBreakdownFpp}\n\nTOTAL: ${nascarFantasy} FS`;
    })

    resetButtonNascar.addEventListener("click", ()=> {
        
        for(var i=0; i<nascarInputs.length; i++){
            nascarInputs[i].value = '';
        }

        for(var j=0; j<nascarVal.length; j++){
            nascarVal[j].innerHTML = '';
        }

        for(var k=0; k<nascarRad.length; k++){
            nascarRad[k].checked = false;
        }

        nascarFantasyScore.innerHTML = '';
        document.querySelector("#nascar-breakdown").innerHTML = "";
    })

    copyButtonNascar.addEventListener("click", ()=> {
        
        var copyNascarBreakdown = document.querySelector("#nascar-breakdown");

        copyNascarBreakdown.select();
        copyNascarBreakdown.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(copyNascarBreakdown.value);
    })

    collapseNascar.addEventListener("click", ()=> {
        
        const contentNascar = document.querySelector("#content-nascar")

        if(contentNascar.style.display == "" || contentNascar.style.display == "block"){
            contentNascar.style.display = "none"
        } else if (contentNascar.style.display == "none"){
            contentNascar.style.display = "block"
        }

    })


}
