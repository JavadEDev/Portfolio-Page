const tablinks = document.getElementsByClassName("tab-links");
const tabcontents = document.getElementsByClassName("tab-contents");

function opentab(tabname) {
    for (tablink of tablinks) {
        tablink.classList.remove("active-link");
    }

    for (tabcontent of tabcontents) {
        tabcontent.classList.remove("tab-active");
    }

    event.currentTarget.classList.add("active-link");
    document.getElementById(tabname).classList.add("tab-active");
}


const scriptURL = 'https://script.google.com/macros/s/AKfycbzHxQgT0W13UCjGYgESfbi69OM8vqIfe8qfi1a9sdZmRVSHmXF5GKW9Um1g7027XaNV0Q/exec'
const form = document.forms['submit-to-google-sheet']
const msg = document.getElementById("msg")
form.addEventListener('submit', e => {
    e.preventDefault()
    fetch(scriptURL, { method: 'POST', body: new FormData(form) })
        .then(response => {
            msg.innerHTML = "Message sent successfully"
            setTimeout(function(){
                msg.innerHTML = ""
            },5000)
            form.reset()
        })
        .catch(error => console.error('Error!', error.message))
})
