document.addEventListener("DOMContentLoaded", function () {
    const radioButtons = document.querySelectorAll('.radio-group input[type="radio"]');

    radioButtons.forEach(radio => {
        radio.addEventListener("click", function () {
            if (this.checked) {
                // Uncheck if clicking again (toggle behavior)
                if (this.dataset.checked === "true") {
                    this.checked = false;
                    this.dataset.checked = "false";
                } else {
                    // Uncheck all other radios
                    radioButtons.forEach(r => r.dataset.checked = "false");
                    this.dataset.checked = "true";
                }
            }
        });
    });
});

function Calc() {
    const branchName = document.getElementById("branchName").value;
    const prName = document.getElementById("prName");

    // Extract components from branch name: [Name]/[Type]/[IssueNo]-[Description]-[BranchName]
    let branchPattern = /^[^/]+\/([^/]+)\/(\d+)-([^-]+)-(.+)$/;
    let match = branchName.match(branchPattern);

    if (!match) {
        alert("Invalid Branch Name!");
        return;
    }

    let branchType = match[1].toLowerCase(); // Type (e.g., bug, feature)
    let ticketNumber = match[2]; // Issue Number
    let rawDescription = match[3]; // Description (TitleCaseWords)

    // Convert description to spaced words
    let formattedDescription = rawDescription.replace(/([A-Z])/g, " $1").trim();

    // PR Type Mapping
    const typeMapping = {
        "feature": "Feature",
        "feat": "Feature",
        "bug": "Bugfix",
        "bugfix": "Bugfix",
        "fix": "Bugfix",
        "refactor": "Refactor",
        "chore": "Chore",
        "docs": "Docs",
        "sql": "SQL",
        "hotfix": "Hotfix",
        "draft": "Draft"
    };

    // Determine the default PR type
    let defaultType = typeMapping[branchType] || "Feature";

    // Check if the user selected a radio button
    let selectedType = document.querySelector('input[name="prType"]:checked');
    let prType = selectedType ? selectedType.value : defaultType;

    // Construct the new PR name
    prName.value = `[${prType}] ${formattedDescription} (#${ticketNumber})`;

    console.log(prName.value);
}