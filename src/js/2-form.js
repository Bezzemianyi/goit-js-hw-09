const formData = {
    email: "",
    message: ""
};
const LOC_KEY = "feedback-form-state";
const container = document.querySelector(".feedback-form");
container.addEventListener("input", handleInput);
container.addEventListener("submit", handleSubmit);

populateData();

function handleInput(event) {
    if (event.target.name === "email") {
        formData.email = event.target.value.trim();
    } else if(event.target.name === "message") {
        formData.message = event.target.value.trim();
    }
    localStorage.setItem(LOC_KEY, JSON.stringify(formData));
}

function populateData() {
    const data = localStorage.getItem(LOC_KEY);
    const parsedData = JSON.parse(data);
    if (data) {
        formData.email = parsedData.email;
        formData.message = parsedData.message;
        container.querySelector('input[name="email"]').value = parsedData.email;
        container.querySelector('textarea[name="message"]').value = parsedData.message;
    }
}

function handleSubmit(event) {
    event.preventDefault();
    if (!formData.email || !formData.message) {
        alert("Fill please all fields");
        return;
    }

    console.log(formData);
    event.currentTarget.reset();
    formData.email = "";
    formData.message = "";
    localStorage.removeItem(LOC_KEY);
}