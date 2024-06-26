function choose(ball, num) {
    let wc = document.getElementById("wc").src
    let cl = document.getElementById("cl").src
    if (wc.substring(wc.length-9, wc.length) != "catch.png" && cl.substring(cl.length-9, cl.length) != "catch.png") {
        document.getElementById(ball).src = "catch.png";
    }
}