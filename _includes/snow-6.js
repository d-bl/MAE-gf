function assignToPlait(prefix, blobs){
    return blobs.map((item, i) => prefix.replace(/=/g,i+'=') + item).join(",")
}
function spiderTips(prefix, blobs){
    // TODO only if trailing and leading twist, more complicated for square
    const last = blobs[blobs.length-1]
    return ',' + prefix.replace(/=/g,`${blobs.length-1}${last.length-1}=`) + "ctcttctc"
}
function no_bounce_update(){
    const blobs = document.getElementById('no-bounce-blobs').value.toLowerCase().split(",");
    const nrOfBlobs = blobs.length;
    const right = document.getElementById("no_bounce_first_blobRight").checked
    const plait = (right ? "rc": "lc").repeat(nrOfBlobs).substring(0,nrOfBlobs)
    const width = document.getElementById("no-bounce-patch-width").value
    const height = document.getElementById("no-bounce-patch-height").value
    const patternType = document.querySelector('input[name="no-bounce-pattern"]:checked').value
    const footsideType = document.querySelector('input[name="no-bounce-footside"]:checked').value
    // headside columns:
    const g = 'abcdefghijklmnopqrstuvwxyz'[width*1+2]
    const h = 'abcdefghijklmnopqrstuvwxyz'[width*1+3]
    let q = "?"
    if (patternType == "diamond") {
        q += `b1=${plait}&d1=${plait}&${g}2=${plait}`
        q += "&tile=-5&shiftColsSW=-1&shiftRowsSW=1&shiftColsSE=1&shiftRowsSE=1"
        droste2 = `&droste2=${assignToPlait(`b1=d1=${g}2=`, blobs)}`
        droste3 = '&droste3=ctc' + spiderTips('b1=d1=${g}2=', blobs)
    } else {
        // flip snowflakes on the returning row
        const flippedPlait = plait.replace(/r/g, "L").replace(/l/g, "R").toLowerCase()
        const flippedBlobs = blobs.map(str => str.replace(/r/g, "L") .replace(/l/g, "R") .toLowerCase())
        q += `b1=${plait}&b2=${flippedPlait}&c1=${plait}&c2=${flippedPlait}&${g}1=${plait}&${g}2=${flippedPlait}`
        q += "&tile=8,1&shiftColsSW=0&shiftRowsSW=2&shiftColsSE=1&shiftRowsSE=2"
        droste2 = `&droste2=${assignToPlait(`b1=c1=${g}1=`, blobs)},${assignToPlait(`b2=c2=${g}2=`,flippedBlobs)}`
        droste3 = `&droste3=ctc` + spiderTips(`b1=b2=c1=c2=${g}1==${g}2=`, blobs)
    }
    q += "&footside=-5,b-&headside=-c,5-"
    switch (footsideType) {
        case "nothing":
            q += `&a2=-&${h}1=-`
            break
        default:
            q += `&a2=ttt&${h}1=ttt`
            droste2 += `,,a21=${h}10=${g}20=${g}22=tt,${g}12=${g}21=cr,${g}23=r`
            droste3 += `,,b133=ctctttttt,${g}201=${g}210=${g}211=ttttt`
            break
    }
    q += `&patchWidth=${width}&patchHeight=${height}`
    document.getElementById("hex_no_bounce_link").href = "https://d-bl.github.io/GroundForge/droste" + q + droste2 + droste3
    console.log(q)
}
