const getStarted = document.getElementById("get-started");
const readMore = document.getElementById("readmore");

getStarted.addEventListener('click', () => {
    alert("Sorry. You cannot make purchases at the moment.")
})

readMore.addEventListener('click', () => {
    alert("Sorry. The about page is not avalable at the moment.")
})



window.addEventListener("beforeunload", (e) => {
    e.returnValue = true
})
