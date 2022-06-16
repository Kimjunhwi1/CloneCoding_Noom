// alert("hi!");
//const socket = new WebSocket("http://localhost:3000")
const socket = new WebSocket(`ws://${window.location.host}`);

socket.addEventListener("open",() => {
    console.log("Connected to Server")
});

socket.addEventListener("message",(message) => {
    console.log("just got this", message.data, "from the server")
});

socket.addEventListener("close",() => {
    console.log("diseConnected to Server")
});

setTimeout(() => {
    socket.send("hello from browsers")
},5000);