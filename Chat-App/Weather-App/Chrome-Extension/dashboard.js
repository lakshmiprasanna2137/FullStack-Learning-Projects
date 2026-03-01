const productiveSites = ["github.com", "leetcode.com", "stackoverflow.com"];
const unproductiveSites = ["facebook.com", "instagram.com", "youtube.com"];

chrome.storage.local.get(["data"], (result) => {
    const data = result.data || {};
    const table = document.getElementById("reportTable");

    for (let site in data) {
        const row = table.insertRow();

        const cell1 = row.insertCell(0);
        const cell2 = row.insertCell(1);
        const cell3 = row.insertCell(2);

        cell1.textContent = site;
        cell2.textContent = (data[site] / 60000).toFixed(2);

        if (productiveSites.includes(site)) {
            cell3.textContent = "Productive";
        } else if (unproductiveSites.includes(site)) {
            cell3.textContent = "Unproductive";
        } else {
            cell3.textContent = "Neutral";
        }
    }
});