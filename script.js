function Calc() {
    const branchName = document.getElementById("branchName");
    const prName = document.getElementById("prName");

    // Gets the first batch of consecutive digits
    let ticketNumberPattern = /[0-9]+/;
    let ticketNumber = branchName.value.match(ticketNumberPattern);

    // Matches a-z, A-Z after the dash (-)
    let ticketDescPattern = /-([a-zA-Z]+)/;
    let ticketDesc = branchName.value.match(ticketDescPattern);

    if (ticketDesc == null) {
        alert("Invalid Branch Name!");
        return;
    }

    // Add spaces to the 2nd match
    let SpacedDesc = ticketDesc[1].replace(/[A-Z]/g, ' $&').trim();

    // Matches lowercase chars after 2nd dash (-)
    let targetBranchPattern = /(-[a-zA-Z]+[-])([a-z]+)/;
    let targetBranch = branchName.value.match(targetBranchPattern);

    if (targetBranch == null) {
        alert("Invalid Branch Name!");
        return;
    }

    if (targetBranch[2] == "master") {
        targetBranch = "Master";
    }
    else if (targetBranch[2] == "uat") {
        targetBranch = "UAT";
    }

    prName.value = ticketNumber + " - " + SpacedDesc + " - " + targetBranch;
    console.log(prName.value);
}