const canvas = document.getElementById("drawingCanvas");
const ctx = canvas.getContext("2d");
let painting = false;

const colorPicker = document.getElementById("colorPicker");
const sizePicker = document.getElementById("sizePicker");
const clearBtn = document.getElementById("clearBtn");

function startPosition(e) {
    painting = true;
    draw(e);
}

function endPosition() {
    painting = false;
    ctx.beginPath();
}

function draw(e) {
    if (!painting) return;

    ctx.lineWidth = sizePicker.value;
    ctx.lineCap = "round";
    ctx.strokeStyle = colorPicker.value;

    ctx.lineTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
    ctx.stroke();
    ctx.beginPath();
    ctx.moveTo(e.clientX - canvas.offsetLeft, e.clientY - canvas.offsetTop);
}

// Event Listeners
canvas.addEventListener("mousedown", startPosition);
canvas.addEventListener("mouseup", endPosition);
canvas.addEventListener("mousemove", draw);

clearBtn.addEventListener("click", () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
});
