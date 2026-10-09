const form = document.querySelector("#signup-form");
const fields = {
    fullName: document.querySelector("#full-name"),
    email: document.querySelector("#email"),
    password: document.querySelector("#password"),
    confirmPassword: document.querySelector("#confirm-password")
};
const summary = document.querySelector("#form-error-summary");

function setFieldError(field, message) {
    const error = document.querySelector(`#${field.id}-error`);
    field.setAttribute("aria-invalid", message ? "true" : "false");
    error.textContent = message;
}

function validateField(field) {
    const value = field.value.trim();
    let message = "";

    if (!value) {
        message = "Vui lòng nhập thông tin này.";
    } else if (field === fields.email && field.validity.typeMismatch) {
        message = "Vui lòng nhập email hợp lệ, ví dụ ban@example.com.";
    } else if (field === fields.password && field.value.length < 8) {
        message = "Mật khẩu cần có ít nhất 8 ký tự.";
    } else if (field === fields.confirmPassword && field.value !== fields.password.value) {
        message = "Mật khẩu xác nhận chưa khớp.";
    }

    setFieldError(field, message);
    return message === "";
}

Object.values(fields).forEach((field) => {
    field.addEventListener("input", () => {
        if (field.getAttribute("aria-invalid") === "true") {
            validateField(field);
        }
        if (field === fields.password && fields.confirmPassword.value) {
            validateField(fields.confirmPassword);
        }
        summary.textContent = "";
    });
});

document.querySelectorAll("[data-password-toggle]").forEach((button) => {
    button.addEventListener("click", () => {
        const input = document.getElementById(button.dataset.passwordToggle);
        const showPassword = input.type === "password";
        input.type = showPassword ? "text" : "password";
        button.textContent = showPassword ? "Ẩn" : "Hiện";
        button.setAttribute("aria-pressed", String(showPassword));
        button.setAttribute(
            "aria-label",
            showPassword ? "Ẩn mật khẩu" : `Hiện ${input.id === "password" ? "mật khẩu" : "mật khẩu xác nhận"}`
        );
    });
});

form.addEventListener("submit", (event) => {
    event.preventDefault();
    summary.textContent = "";

    const invalidFields = Object.values(fields).filter((field) => !validateField(field));
    if (invalidFields.length > 0) {
        summary.textContent = "Kiểm tra lại các thông tin được đánh dấu bên dưới.";
        invalidFields[0].focus();
        return;
    }

    const theme = new URLSearchParams(window.location.search).get("theme");
    window.location.href = theme === "forest" ? "success.html?theme=forest" : "success.html";
});
