document.addEventListener("DOMContentLoaded", () => {
  // Format token inputs with commas on the fly
  const tokenInputs = document.querySelectorAll('input[name="tokens_used"]');
  tokenInputs.forEach((input) => {
    input.addEventListener("input", (e) => {
      const value = e.target.value.replace(/,/g, "").replace(/\D/g, "");
      if (value) {
        e.target.value = parseInt(value, 10).toLocaleString();
      } else {
        e.target.value = "";
      }
    });
  });

  // Filter dropdown auto-submission
  const filterSelects = document.querySelectorAll(".select-filter");
  filterSelects.forEach((select) => {
    select.addEventListener("change", () => {
      const form = select.closest("form");
      if (form) {
        form.submit();
      }
    });
  });

  // Flash alerts auto-dismiss
  const alerts = document.querySelectorAll(".alert");
  alerts.forEach((alert) => {
    setTimeout(() => {
      alert.style.transition = "opacity 0.5s ease, transform 0.5s ease";
      alert.style.opacity = "0";
      alert.style.transform = "translateY(-6px)";
      setTimeout(() => alert.remove(), 500);
    }, 4500);
  });
});

