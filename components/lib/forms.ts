export const FORM_URLS = {
  join: "https://docs.google.com/forms/d/e/1FAIpQLSe3WDeDHYxvBjzTnV-vcmY7zrc7z2sD0on-gw410rinuQTZgQ/viewform",
  speaker: "",
  partner: "",
  volunteer: "",
};

export function openForm(url?: string) {
  if (url && url.trim().length > 0) {
    window.open(url, "_blank", "noopener,noreferrer");
  } else {
    alert("coming soon — we’re putting the form together. check back shortly.");
  }
}
