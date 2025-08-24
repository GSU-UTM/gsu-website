export const FORM_URLS = {
  join: "",
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
