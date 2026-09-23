const user = JSON.parse(localStorage.getItem("loggedInUser") || "null");

if (!user || !user.isAdmin) {
    alert("Please log in with an administrator account.");
    window.location.href = "login.html";
} else {
    document.getElementById("welcome-message").textContent = `Signed in as ${user.name}`;
}

function formatDate(value) {
    if (!value) return "—";
    return new Date(value.replace(" ", "T")).toLocaleString();
}

function addCell(row, value) {
    const cell = document.createElement("td");
    cell.textContent = value || "—";
    row.appendChild(cell);
}

function renderRows(bodyId, rows, cells) {
    const body = document.getElementById(bodyId);
    body.replaceChildren();

    if (!rows.length) {
        const row = document.createElement("tr");
        const cell = document.createElement("td");
        cell.colSpan = cells.length;
        cell.className = "empty";
        cell.textContent = "No saved records yet.";
        row.appendChild(cell);
        body.appendChild(row);
        return;
    }

    rows.forEach((item) => {
        const row = document.createElement("tr");
        cells.forEach((getValue) => addCell(row, getValue(item)));
        body.appendChild(row);
    });
}

async function loadDashboard() {
    const status = document.getElementById("status-message");
    status.textContent = "Loading saved records…";

    try {
        const [donationsResponse, fundraisingResponse, guestsResponse] = await Promise.all([
            fetch("/api/admin/donations"),
            fetch("/api/admin/fundraising"),
            fetch("/api/admin/guests")
        ]);

        if (![donationsResponse, fundraisingResponse, guestsResponse].every((response) => response.ok)) {
            throw new Error("Could not load dashboard data.");
        }

        const [donations, fundraising, guests] = await Promise.all([
            donationsResponse.json(), fundraisingResponse.json(), guestsResponse.json()
        ]);

        document.getElementById("donations-count").textContent = donations.length;
        document.getElementById("fundraising-count").textContent = fundraising.length;
        document.getElementById("guests-count").textContent = guests.length;

        renderRows("donations-body", donations, [
            (item) => item.donation_type,
            (item) => item.quantity,
            (item) => [item.donation_date, item.donation_time].filter(Boolean).join(" "),
            (item) => item.orphanage,
            (item) => formatDate(item.created_at)
        ]);
        renderRows("fundraising-body", fundraising, [
            (item) => item.anonymous === "yes" ? "Anonymous" : item.name,
            (item) => item.anonymous === "yes" ? "Hidden" : item.email,
            (item) => item.amount ? `₹${item.amount}` : "—",
            (item) => item.orphanage,
            (item) => item.payment_status,
            (item) => formatDate(item.created_at)
        ]);
        renderRows("guests-body", guests, [
            (item) => item.room_number,
            (item) => item.name,
            (item) => item.contact,
            (item) => item.notes,
            (item) => formatDate(item.updated_at)
        ]);
        status.textContent = "Dashboard is up to date.";
    } catch (error) {
        status.textContent = error.message;
    }
}

document.getElementById("refresh-button").addEventListener("click", loadDashboard);
loadDashboard();
