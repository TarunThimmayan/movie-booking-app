const seatsContainer = document.querySelector(".seat-container");
const movieSelect = document.getElementById("movie");
const totalAmount = document.getElementById("total");

// Generate seats dynamically like a real theater
function createSeats() {
    seatsContainer.innerHTML = ""; // Clear old seats
    const rows = 15;  // 15 rows of seats
    const seatsPerRow = [10,10,10,10,10,10,10,10,10,10,10,10,10,10,10]; // Number of seats per row 

    for (let r = 0; r < rows; r++) {
        const rowDiv = document.createElement("div");
        rowDiv.classList.add("seat-row");

        for (let s = 0; s < seatsPerRow[r]; s++) {
            const seat = document.createElement("div");
            seat.classList.add("seat");

            // Randomly mark some seats as booked
            if (Math.random() < 0.2) {
                seat.classList.add("booked");
            } else {
                seat.addEventListener("click", () => {
                    if (!seat.classList.contains("booked")) {
                        seat.classList.toggle("selected");
                        updateTotal();
                    }
                });
            }
            rowDiv.appendChild(seat);
        }
        seatsContainer.appendChild(rowDiv);
    }
}

// Update total price when seats are selected
function updateTotal() {
    const selectedSeats = document.querySelectorAll(".seat.selected").length;
    const ticketPrice = movieSelect.value;
    totalAmount.textContent = selectedSeats * ticketPrice;
}

// Change seats when movie is selected
movieSelect.addEventListener("change", createSeats);

// Initial load
createSeats();
