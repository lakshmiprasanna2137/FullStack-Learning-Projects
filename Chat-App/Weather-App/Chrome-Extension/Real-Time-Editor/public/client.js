const socket = io();
const editor = document.getElementById("editor");

editor.addEventListener("input", () => {
    socket.emit("send-changes", editor.value);
});

socket.on("receive-changes", (data) => {
    editor.value = data;
});