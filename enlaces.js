// Mantiene al cliente dentro de la tienda: las fotos son solo para ver.
// Solo pueden abrir otra página los enlaces de redes sociales y de contacto (WhatsApp).
(function () {
  const PERMITIDOS = ['wa.me', 'api.whatsapp.com', 'facebook.com', 'instagram.com', 'tiktok.com', 'youtube.com'];
  const permitido = (url) => {
    try {
      const host = new URL(url, location.href).hostname.replace(/^www\./, '');
      return host === location.hostname || PERMITIDOS.some((d) => host === d || host.endsWith('.' + d));
    } catch (e) { return false; }
  };

  // Clics en enlaces externos que no son redes ni contacto: no hacen nada.
  document.addEventListener('click', (e) => {
    const a = e.target.closest && e.target.closest('a[href]');
    if (a && !permitido(a.getAttribute('href'))) { e.preventDefault(); e.stopPropagation(); }
  }, true);

  // window.open solo para redes y contacto.
  const abrir = window.open.bind(window);
  window.open = (url, ...resto) => (permitido(String(url)) ? abrir(url, ...resto) : null);

  // Las fotos no se pueden arrastrar ni abrir con clic derecho en otra pestaña.
  document.addEventListener('dragstart', (e) => { if (e.target.tagName === 'IMG') e.preventDefault(); });
  document.addEventListener('contextmenu', (e) => { if (e.target.tagName === 'IMG') e.preventDefault(); });
})();
