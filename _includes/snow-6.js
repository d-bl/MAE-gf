function assignToPlait(prefix, blobs){
    return blobs.map((item, i) => `${prefix}${i}=${item}`).join(",")
}
function no_bounce_update(){
    const blobs = document.getElementById('no-bounce-blobs').value.toLowerCase().split(",");
    const nrOfBlobs = blobs.length;
    const right = document.getElementById("no_bounce_first_blobRight").checked
    const plait = (right ? "rc": "lc").repeat(nrOfBlobs).substring(0,nrOfBlobs)
    const spiderTip = `${nrOfBlobs-1}${blobs[nrOfBlobs-1].length-1}=ctcttctc`
    const width = document.getElementById("no-bounce-patch-width").value
    const height = document.getElementById("no-bounce-patch-height").value
    const patternType = document.querySelector('input[name="no-bounce-pattern"]:checked').value
    const footsideType = document.querySelector('input[name="no-bounce-footside"]:checked').value
    // headside columns:
    const h1 = 'abcdefghijklmnopqrstuvwxyz'[width*1+1]
    const h2 = 'abcdefghijklmnopqrstuvwxyz'[width*1+2]
    let q = "?"
    if (patternType == "diamond") {
        q += `c1=${plait}`
        q += "&tile=-5&shiftColsSW=-1&shiftRowsSW=1&shiftColsSE=1&shiftRowsSE=1"
        droste2 = `&droste2=${assignToPlait('c1', blobs)}`
        droste3 = `&droste3=ctc,c1${spiderTip}`
    } else {
        const flippedPlait = plait.replace(/r/g, "L").replace(/l/g, "R").toLowerCase()
        const flippedBlobs = blobs.map(str => str.replace(/r/g, "L") .replace(/l/g, "R") .toLowerCase())
        q += `b1=${plait}&b2=${flippedPlait}`
        q += "&tile=8,1&shiftColsSW=0&shiftRowsSW=2&shiftColsSE=1&shiftRowsSE=2"
        droste2 = `&droste2=${assignToPlait('b1', blobs)},${assignToPlait('b2',flippedBlobs)}`
        droste3 = `&droste3=ctc,b1${spiderTip},b2${spiderTip}`
    }
    q += "&footside=b,-&headside=-,c"
    switch (footsideType) {
        case "nothing":
            q += `&a1=-&${h1}2=-`
            break
        case "twist":
            q += `&a1=ttt&${h1}2=ttt`
            droste2 += `,a10=a11=${h1}20=tttt`
            droste3 += `,a110=${h1}200=${h1}201=ttttttt`
            break
        default:
            q += `&a1=rct&${h1}2=lct`
            droste2 += `,${h1}22=${blobs[0]},,a13=crrr,a10=a11=a12=${h1}11=ttt,${h1}20=rrr,${h1}12=ttttc,${h1}10=ttttcllll,${h1}21=${h1}23=llctt,${h1}23=tttt`
            droste3 += `,${h1}213=ctcttctc,,a110=a120=cr,a100=a111=a107=a108=a130=ttttct,a131=ttctctt,c134=c124=a100=ttttttttttt,${h1}212=llctt,${h1}200=tt,${h1}214=ttctt`
    }
    q += `&patchWidth=${width}&patchHeight=${height}`
    document.getElementById("hex_no_bounce_link").href = "https://d-bl.github.io/GroundForge/droste" + q + droste2 + droste3
    console.log(q)
}
