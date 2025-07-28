function searchParticipant() {
  const input = document.getElementById("searchInput").value.trim();
  const resultDiv = document.getElementById("result");

  if (!input) {
    resultDiv.innerHTML = "אנא הזן שם לחיפוש";
    return;
  }

  // חיפוש תואם חלקית (Case-insensitive)
  const lowerInput = input.toLowerCase();
  const matches = participants.filter((p) =>
    p.name.toLowerCase().includes(lowerInput)
  );

  if (matches.length === 0) {
    resultDiv.innerHTML = "לא נמצאה תוצאה מתאימה";
    return;
  }

  // יצירת תוצאות חיפוש עם תיאור קבוצה
  const resultsHtml = matches
    .map((match) => {
      const description = groupDescriptions[match.group] || "";
      return `
        <div class="result-entry">
          <strong>שם:</strong> ${match.name}<br>
          <strong>קבוצה:</strong> ${match.group}<br>
          <strong>תיאור:</strong><br>${description}
        </div>
      `;
    })
    .join("<hr>");

  resultDiv.innerHTML = resultsHtml;
}

// האזנה ללחיצה על כפתור "חיפוש"
document
  .getElementById("searchBtn")
  .addEventListener("click", searchParticipant);

// האזנה להקשה על Enter בשדה החיפוש
document
  .getElementById("searchInput")
  .addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      searchParticipant();
    }
  });
