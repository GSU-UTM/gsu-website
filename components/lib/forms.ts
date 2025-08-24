export const FORM_URLS = {
  join: "https://l.instagram.com/?u=https%3A%2F%2Fdocs.google.com%2Fforms%2Fd%2Fe%2F1FAIpQLSe3WDeDHYxvBjzTnV-vcmY7zrc7z2sD0on-gw410rinuQTZgQ%2Fviewform%3Fusp%3Dsharing%26ouid%3D112509761681559881355%26fbclid%3DPAZXh0bgNhZW0CMTEAAacldHeS7wZpwknwhiFZrKj2j-ZSlzPLPLJWRIyvhewLZwRP5jQx2MsgQdj0jg_aem_sf9OX1_LN8gfF-qZv_Vv_A&e=AT3iji3e4H5JT4RkvJPEhVj0PL1rFtx7q72c2Nw6w1pxSZMdVshwEJxU_W11H_m2wg7VL-pmEFtSdQE6P5dCwy42w1Yrr2zAjkRuBw",
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
