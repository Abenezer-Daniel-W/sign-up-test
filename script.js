const passwordInput = document.querySelector("#pass1");
const passwordConfirm = document.querySelector("#pass2");
const submitBtn =  document.querySelector("#submitBtn");
const col2Form = document.querySelector(".col2")
submitBtn.addEventListener("click", () => passChecker())


function passChecker(){
    let passOne = passwordInput.value;
    let passTwo = passwordConfirm.value;

    if (passOne!= passTwo){
        const div = document.createElement('div');
        div.setAttribute("class", "error");
        div.innerHTML = "<p>passwords don't match</p>";
        col2Form.appendChild(div);
    }
}