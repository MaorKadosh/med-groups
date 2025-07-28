
const participants = [{'name': 'אבי כהן', 'id': '445123', 'group': 'קבוצה 1'}, {'name': 'דנה לוי', 'id': '789654', 'group': 'קבוצה 2'}, {'name': 'משה שפירא', 'id': '123789', 'group': 'קבוצה 3'}];

document.getElementById("searchBtn").addEventListener("click", () => {
    const input = document.getElementById("searchInput").value.trim();
    const resultDiv = document.getElementById("result");

    if (!input) {
        resultDiv.innerHTML = "אנא הזן שם מלא או מספר אישי.";
        return;
    }

    const found = participants.find(p =>
        p.name.includes(input) || p.id === input
    );

    if (found) {
        const desc = groupDescriptions[found.group] || "";
        resultDiv.innerHTML = `שם: ${found.name}\nמספר אישי: ${found.id}\nקבוצה: ${found.group}\n\n${desc}`;
    } else {
        resultDiv.innerHTML = "לא נמצאה תוצאה.";
    }
});
