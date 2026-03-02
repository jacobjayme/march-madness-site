// Footer year (runs on every page that has #year)
const yearEl = document.getElementById("year");
if (yearEl) yearEl.textContent = new Date().getFullYear();

/* ===== WINNERS WALL (only runs on winners.html) ===== */
const winnersGrid = document.getElementById("winnersGrid");
if (winnersGrid) {
	const winners = [
		{ year: 2025, name: "Sam 'The Diamond' Jayme", img: "images/winners/2025winner.heic" },
		{ year: 2024, name: "Bella 'The Student' Jayme", img: "images/winners/2024winner.heic" },
		{ year: 2023, name: "Nick 'The Club' Jayme", img: "images/winners/2023winner.heic" },
		{ year: 2022, name: "Sam 'The Diamond' Jayme", img: "images/winners/2022winner.heic" },
		{ year: 2021, name: "Nick 'The Club' Jayme", img: "images/winners/2021winner.heic" },
		{ year: 2020, name: "Coronavirus", img: "images/winners/2020winner.heic" },
		{ year: 2019, name: "Bella 'The Student' Jayme", img: "images/winners/2019winner.heic" },
		{ year: 2018, name: "Kent 'Big D' Jayme", img: "images/winners/2018winner.heic" },
		{ year: 2017, name: "Jacob 'The Beast' Jayme", img: "images/winners/2017winner.heic" },
	];

	winnersGrid.innerHTML = winners
		.map(
			(w) => `
      <div class="winner-card">
        <div class="winner-photo">
          <img class="photo"
            src="${w.img}"
            loading="lazy"
            alt="Winner ${w.year}: ${w.name}"
            onerror="this.src='images/winners/placeholder.jpg'; this.onerror=null;" />
          <img class="frame" src="images/winnerswallframe.webp" alt="" />
        </div>

        <div class="nameplate">
          <div class="winner-year">${w.year}</div>
          <div class="winner-name">${w.name}</div>
        </div>
      </div>
    `,
		)
		.join("");
}

/* ===== PROPOSALS "PASSWORD" (client-side, not secure) =====
   This blocks navigation to proposals.html unless user enters password.
*/
const proposalsLink = document.getElementById("proposalsTab");
if (proposalsLink) {
  const PROPOSALS_PASSWORD = "jayme2026";

  proposalsLink.addEventListener("click", (e) => {
    const onProposalsPage = window.location.pathname.endsWith("/proposals.html") ||
                            window.location.pathname.endsWith("proposals.html");

    // If you're already on proposals page, do nothing (or you can force re-prompt)
    if (onProposalsPage) return;

    const unlocked = sessionStorage.getItem("proposalsUnlocked") === "true";
    if (unlocked) return; // allow normal navigation

    e.preventDefault();
    const entered = prompt("Enter password to view Proposals:");
    if (entered === PROPOSALS_PASSWORD) {
      sessionStorage.setItem("proposalsUnlocked", "true");
      window.location.href = "proposals.html";
    } else if (entered !== null) {
      alert("Incorrect password.");
    }
  });
}

const proposalsGate = document.getElementById("proposalsGate");
if (proposalsGate) {
  const PROPOSALS_PASSWORD = "jayme2026";
  const unlocked = sessionStorage.getItem("proposalsUnlocked") === "true";

  if (!unlocked) {
    const entered = prompt("Enter password to view Proposals:");
    if (entered === PROPOSALS_PASSWORD) {
      sessionStorage.setItem("proposalsUnlocked", "true");
      // reload so the page shows content
      window.location.reload();
    } else {
      proposalsGate.innerHTML = `
        <p class="winner-sub">This page is locked.</p>
        <p class="winner-sub">Go back and click the Proposals tab to try again.</p>
      `;
    }
  }
}

/* ===== PLAYER PROFILES (only runs on players.html) ===== */
const playersGrid = document.getElementById("playersGrid");
if (playersGrid) {
	/*
	  Add a new player by adding ONE object to this array.
	  Photo path suggestion:
	  images/players/<shortname>.jpg (JPG/PNG recommended; HEIC can fail on some browsers)
	*/
	const players = [
    {
			name: "Kent Jayme",
			nickname: "Big D",
			description: "TBD",
			titlesWon: 1,
			podiumFinishes: 1,
			yearsParticipated: [2017, 2018, 2019, 2021, 2022, 2023, 2024, 2025],
			img: "images/player_pictures/Kent.jpeg",
		},
    {
			name: "Jill Jayme",
			nickname: "Blue Eyes",
			description: "TBD",
			titlesWon: 0,
			podiumFinishes: 0,
			yearsParticipated: [2017, 2018, 2019, 2021, 2022, 2023, 2024, 2025],
			img: "images/player_pictures/Jill.JPG",
		},
		{
			name: "Jacob Jayme",
			nickname: "The Beast",
			description: "TBD",
			titlesWon: 1,
			podiumFinishes: 1,
			yearsParticipated: [2017, 2018, 2019, 2021, 2022, 2023, 2024, 2025],
			img: "images/player_pictures/Jacob.JPG",
		},
		{
			name: "Sam Jayme",
			nickname: "The Diamond",
			description: "TBD",
			titlesWon: 2,
			podiumFinishes: 2,
			yearsParticipated: [2017, 2018, 2019, 2021, 2022, 2023, 2024, 2025],
			img: "images/player_pictures/Sammy.jpeg",
		},
		{
			name: "Bella Jayme",
			nickname: "The Student",
			description: "TBD",
			titlesWon: 2,
			podiumFinishes: 2,
			yearsParticipated: [2017, 2018, 2019, 2021, 2022, 2023, 2024, 2025],
			img: "images/player_pictures/Bella.JPG",
		},
		{
			name: "Nick Jayme",
			nickname: "The Club",
			description: "TBD",
			titlesWon: 2,
			podiumFinishes: 2,
			yearsParticipated: [2017, 2018, 2019, 2021, 2022, 2023, 2024, 2025],
			img: "images/player_pictures/Nick.jpeg",
		},
    {
			name: "Coronavirus",
			nickname: "The Anomoly",
			description: "TBD",
			titlesWon: 1,
			podiumFinishes: 1,
			yearsParticipated: [2020],
			img: "images/player_pictures/Corona.jpeg",
		},
    {
			name: "Finley Jayme",
			nickname: "Finners",
			description: "TBD",
			titlesWon: 0,
			podiumFinishes: 0,
			yearsParticipated: [2022, 2023, 2024, 2025],
			img: "images/player_pictures/Finley.jpeg",
		},
	];

	const formatYears = (years) => {
		if (!years || years.length === 0) return "Years participated: —";
		const sorted = [...years].sort((a, b) => a - b);
		return `Years participated: ${sorted.join(", ")}`;
	};

	playersGrid.innerHTML = players
		.map(
			(p) => `
			<div class="player-card">
				<div class="player-photo">
					<img src="${p.img}" alt="${p.name}" loading="lazy"
						onerror="this.src='images/players/placeholder.jpg'; this.onerror=null;" />
				</div>

				<div class="player-body">
					<h3 class="player-name">${p.name}</h3>
					<div class="player-nickname">"${p.nickname}"</div>
					<p class="player-desc">${p.description}</p>

					<div class="player-stats">
						<div class="stat">
							<div class="label">Titles</div>
							<div class="value">${p.titlesWon}</div>
						</div>
						<div class="stat">
							<div class="label">Podiums</div>
							<div class="value">${p.podiumFinishes}</div>
						</div>
						<div class="stat">
							<div class="label">Years</div>
							<div class="value">${p.yearsParticipated?.length ?? 0}</div>
						</div>
					</div>

					<div class="player-years">${formatYears(p.yearsParticipated)}</div>
				</div>
			</div>
		`,
		)
		.join("");
}