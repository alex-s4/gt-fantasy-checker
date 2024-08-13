window.onload = function() {
    
    // NBA/WNBA FANTASY SCORE

    const bballFantasyScore = document.querySelector("#bball-total-fs");

    var buttonBball = document.querySelector("#bball-btn")

    buttonBball.addEventListener('click', () => {

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
}
