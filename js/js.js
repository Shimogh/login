function validateForm() {
    const username = document.getElementById("username").value;
    const password = document.getElementById("password").value;
    const errorMessage = document.getElementById("error-message");

    errorMessage.textContent = ""; 

    if (username === "" || password === "") {
        errorMessage.textContent = "لطفاً همه فیلدها را پر کنید.";
        return false; 


    if (username !== "user" || password !== "pass") {
        errorMessage.textContent = "نام کاربری یا رمز عبور نادرست است.";
        return false; 
    }

    alert("ورود موفقیت‌آمیز!");
    return true; 
}
}