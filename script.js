let http = new XMLHttpRequest();

http.open("GET", "users.json", true);

http.send();

http.onload = function () {
  if (this.readyState == 4 && this.status == 200) {
    let users = JSON.parse(this.responseText);

    let output = "";
    for (let user of users) {
      output += `
        <div class="user">
          <h2>Name: ${user.name}</h2>
          <p>Email: ${user.mail}</p>
          <p>Risk Level: ${user.risk_level}</p>
          <p>Trigger Reason: ${user.trigger_reason}</p>
          <p>In Queue For: ${user.in_queue_for}</p>
          <p>Date Added On: ${user.date_added_on}</p>
          <p>Previously Reviewed: ${user.previously_reviewed ? "Yes" : "No"}</p>
        </div>
      `;
    }

    document.getElementById("userContainer").innerHTML = output;
  }
};
