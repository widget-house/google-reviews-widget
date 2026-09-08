"use strict";

const copyButton = document.getElementById("copy-prompt");
const promptText = document.getElementById("setup-prompt");
const copyStatus = document.getElementById("copy-status");

copyButton.addEventListener("click", async () => {
  try {
    if (!navigator.clipboard || !window.isSecureContext) throw new Error("Clipboard unavailable");
    await navigator.clipboard.writeText(promptText.textContent.trim());
    copyButton.textContent = "Copied ✓";
    copyStatus.textContent = "Prompt copied. Add your own Widget House installation code before sending.";
  } catch {
    const selection = window.getSelection();
    const range = document.createRange();
    range.selectNodeContents(promptText);
    selection.removeAllRanges();
    selection.addRange(range);
    copyStatus.textContent = "The prompt is selected. Use your browser’s Copy command to copy it.";
  }
});
