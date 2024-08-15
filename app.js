window.onload = function() {
    
    // NBA/WNBA FANTASY SCORE

    const bballFantasyScore = document.querySelector("#bball-total-fs");

    var buttonBball = document.querySelector("#bball-btn")
    var resetButtonBball = document.querySelector("#bball-clear")
    var copyButtonBball = document.querySelector("#bball-copy")

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

        var bballFantasy = bballPointsVal + 
                        bballReboundVal + 
                        bballAssistVal + 
                        bballBlockVal + 
                        bballStealVal + 
                        bballTurnoverVal

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

    // MLB PITCHER FANTASY SCORE

    const bsballpFantasyScore = document.querySelector("#bsballp-total-fs");

    var buttonBsballP = document.querySelector("#bsballp-btn")
    var resetButtonBsballP = document.querySelector("#bsballp-clear")
    var copyButtonBsballP = document.querySelector("#bsballp-copy")

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


    // MLB HITTER FANTASY SCORE

    const bsballhFantasyScore = document.querySelector("#bsballh-total-fs");

    var buttonBsballH = document.querySelector("#bsballh-btn")
    var resetButtonBsballH = document.querySelector("#bsballh-clear")
    var copyButtonBsballH = document.querySelector("#bsballh-copy")

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

    // NFL OFFENSIVE FANTASY SCORE

    const fballoFantasyScore = document.querySelector("#fballo-total-fs")

    var buttonFballO = document.querySelector("#fballo-btn");
    var resetButtonFballO = document.querySelector("#fballo-clear");
    var copyButtonFballO = document.querySelector("#fballo-copy");

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

    // NFL DST FANTASY SCORE

    const fballdFantasyScore = document.querySelector("#fballd-total-fs");

    var buttonFballD = document.querySelector("#fballd-btn");
    var resetButtonFballD = document.querySelector("#fballd-clear");

    var fballdInputs = document.querySelectorAll(".fballd-fs");
    var fballdVal = document.querySelectorAll(".fballd-val");

    buttonFballD.addEventListener('click', ()=> {
        console.log("buttonFballD")

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
        const fballd0PtAllowed = document.getElementById("fballd-0pt");
        const fballd1to6PtAllowed = document.getElementById("fballd-1to6pt");
        const fballd7to13PtAllowed = document.getElementById("fballd-7to13pt");
        const fballd14to20PtAllowed = document.getElementById("fballd-14to20pt");
        const fballd21to27PtAllowed = document.getElementById("fballd-21to27pt");
        const fballd28to34PtAllowed = document.getElementById("fballd-28to34pt");
        const fballd35AbovePtAllowed = document.getElementById("fballd-35morept");

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
        var fballd0PtVal = Number(fballd0PtAllowed.value) * 10;
        var fballd1To6PtVal = Number(fballd1to6PtAllowed.value) * 7;
        var fballd7To13PtVal = Number(fballd7to13PtAllowed.value) * 4;
        var fballd14To20PtVal = Number(fballd14to20PtAllowed.value) * 1;
        var fballd21To27PtVal = Number(fballd21to27PtAllowed.value) * 0;
        var fballd28To34PtVal = Number(fballd28to34PtAllowed.value) * -1;
        var fballd35MorePtVal = Number(fballd35AbovePtAllowed.value) * -4;

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
                            fballd0PtVal +
                            fballd1To6PtVal +
                            fballd7To13PtVal +
                            fballd14To20PtVal +
                            fballd21To27PtVal +
                            fballd28To34PtVal +
                            fballd35MorePtVal;


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
        document.querySelector("#fballd-0pt-val").innerHTML = `= ${fballd0PtVal}`
        document.querySelector("#fballd-1to6pt-val").innerHTML = `= ${fballd1To6PtVal}`
        document.querySelector("#fballd-7to13pt-val").innerHTML = `= ${fballd7To13PtVal}`
        document.querySelector("#fballd-14to20pt-val").innerHTML = `= ${fballd14To20PtVal}`
        document.querySelector("#fballd-21to27pt-val").innerHTML = `= ${fballd21To27PtVal}`
        document.querySelector("#fballd-28to34pt-val").innerHTML = `= ${fballd28To34PtVal}`
        document.querySelector("#fballd-35morept-val").innerHTML = `= ${fballd35MorePtVal}`

    })

    resetButtonFballD.addEventListener('click', ()=> {
        
        for(var i=0; i<fballdInputs.length; i++){
            fballdInputs[i].value = '';
        }

        for(var j=0; j<fballdVal.length; j++){
            fballdVal[j].innerHTML = '';
        }

        fballdFantasyScore.innerHTML = '';
    })

    // TENNIS FANTASY SCORE

    const tennisFantasyScore = document.querySelector("#tennis-total-fs");

    var buttonTennis = document.querySelector("#tennis-btn");
    var resetButtonTennis = document.querySelector("#tennis-clear")
    var copyButtonTennis = document.querySelector("#tennis-copy");

    var tennisInputs = document.querySelectorAll(".tennis-fs");
    var tennisVal = document.querySelectorAll(".tennis-val");

    buttonTennis.addEventListener('click', ()=> {
        console.log("buttonTennis")

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


    // MMA FANTASY SCORE

    const mmaFantasyScore = document.querySelector("#mma-total-fs");

    var buttonMma = document.querySelector("#mma-btn");
    var resetButtonMma = document.querySelector("#mma-clear")
    var copyButtonMma = document.querySelector("#mma-copy")

    var mmaInputs = document.querySelectorAll(".mma-fs");
    var mmaVal = document.querySelectorAll(".mma-val");
    var mmaRad = document.querySelectorAll(".mma-fcb")

    buttonMma.addEventListener("click", ()=> {
        // console.log("buttonMma");

        var mmaFcbRadio = document.querySelectorAll('.mma-fcb');

        const mmaSignificantStrikes = document.querySelector("#mma-sigstr");
        const mmaTakedown = document.querySelector("#mma-td");
        const mmaTakedownDefense = document.querySelector("#mma-tddef");
        const mmaSubmissionAttempt = document.querySelector("#mma-subatt");
        const mmaKnockdown = document.querySelector("#mma-kd");

        // const mma1stRound = document.querySelector("#mma-1strd");
        // const mma2ndRound = document.querySelector("#mma-2ndrd");
        // const mma3rdRound = document.querySelector("#mma-3rdrd");
        // const mma4thRound = document.querySelector("#mma-4thrd");
        // const mma5thRound = document.querySelector("#mma-5thrd");
        // const mmaDecision = document.querySelector("#mma-dec");

        var mmaSigStrVal = Number(mmaSignificantStrikes.value) * 0.6;
        var mmaTdVal = Number(mmaTakedown.value) * 6;
        var mmaTdDefVal = Number(mmaTakedownDefense.value) * 3;
        var mmaSubAttVal = Number(mmaSubmissionAttempt.value) * 5;
        var mmaKdVal = Number(mmaKnockdown.value) * 12;

        var mmaFcbVal = 0
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

    // BOXING FANTASY SCORE

    const boxFantasyScore = document.querySelector("#box-total-fs");

    var buttonBox = document.querySelector("#box-btn");
    var resetButtonBox = document.querySelector("#box-clear");
    var copyButtonBox = document.querySelector("#box-copy");

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

    // NASCAR FANTASY SCORE

    const nascarFantasyScore = document.querySelector("#nascar-total-fs");

    var buttonNascar = document.querySelector("#nascar-btn");
    var resetButtonNascar = document.querySelector("#nascar-clear")

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

        for(var i=0; i<nascarFppRadio.length; i++){
            if(nascarFppRadio[i].checked === true){
                nascarFppVal = Number(nascarFppRadio[i].value)
            }
        }

        var nascarFantasy = nascarPdVal + nascarFlVal + nascarLlVal + nascarFppVal;

        nascarFantasyScore.innerHTML = nascarFantasy

        document.querySelector("#nascar-pd-val").innerHTML = `= ${nascarPdVal}`
        document.querySelector("#nascar-fl-val").innerHTML = `= ${nascarFlVal}`
        document.querySelector("#nascar-ll-val").innerHTML = `= ${nascarLlVal}`

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
    })

}
