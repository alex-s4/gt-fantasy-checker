window.onload = function() {
    
    // NBA/WNBA FANTASY SCORE

    const bballFantasyScore = document.querySelector("#bball-total-fs");

    var buttonBball = document.querySelector("#bball-btn")

    buttonBball.addEventListener('click', () => {
        console.log("buttonBball")

        const bballPoints = document.getElementById("bball-pts");
        const bballRebound = document.getElementById("bball-rebs");
        const bballAssist = document.getElementById("bball-asst");
        const bballBlock = document.getElementById("bball-blk");
        const bballSteal = document.getElementById("bball-stl");
        const bballTurnover = document.getElementById("bball-to");

        var bballPointsVal = Number(bballPoints.value);
        var bballReboundVal = Number(bballRebound.value) * 1.2;
        var bballAssistVal = Number(bballAssist.value) * 1.5;
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
    });


    // MLB PITCHER FANTASY SCORE

    const bsballpFantasyScore = document.querySelector("#bsballp-total-fs");

    var buttonBsballP = document.querySelector("#bsballp-btn")

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

    })

    // MLB HITTER FANTASY SCORE

    const bsballhFantasyScore = document.querySelector("#bsballh-total-fs");

    var buttonBsballH = document.querySelector("#bsballh-btn")

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
    })

    // NFL OFFENSIVE FANTASY SCORE

    const fballoFantasyScore = document.querySelector("#fballo-total-fs")

    var buttonFballO = document.querySelector("#fballo-btn");

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

        var fballoPassYdVal = Number(fballoPassingYards.value) * 0.04;
        var fballoPassTdVal = Number(fballoPassingTDs.value) * 4;
        var fballoIntVal = Number(fballoInterceptions.value) * -1;
        var fballoRushYdVal = Number(fballoRushingYards.value) * 0.1;
        var fballoRushTdVal = Number(fballoRushingTDs.value) * 6;
        var fballoRecYdVal = Number(fballoReceivingYards.value) * 0.1;
        var fballoRecTdVal = Number(fballoReceivingTDs.value) * 6;
        var fballoRecVal = Number(fballoReceptions.value);
        var fballoFlVal = Number(fballoFumblesLost.value) * -1;
        var fballo2PtcVal = Number(fballo2PointConversions.value) * 2;
        var fballoOfrtVal = Number(fballoOffensiveFumbleRecoveryTD.value) * 6;
        var fballoKpfgrtdVal = Number(fballoKickPuntFGReturnTD.value) * 6;

        var fballoFantasy = fballoPassYdVal +
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
                            fballoKpfgrtdVal;

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

    })

    // NFL DST FANTASY SCORE

    const fballdFantasyScore = document.querySelector("#fballd-total-fs")

    var buttonFballD = document.querySelector("#fballd-btn");

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


}
