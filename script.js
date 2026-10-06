document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const target = document.getElementById(button.dataset.copy);
    const text = target.innerText;
    try {
      await navigator.clipboard.writeText(text);
      const original = button.textContent;
      button.textContent = "Copied!";
      setTimeout(() => button.textContent = original, 1400);
    } catch {
      button.textContent = "Copy failed";
      setTimeout(() => button.textContent = "Copy", 1400);
    }
  });
});