// Catálogo Integrado para funcionar sin servidor en GitHub Pages
const motosTVS = [
    {
        id: 1, modelo: "TVS Sport 100 (KLS / ELS)", precio: 4999000, descripcion: "Economía extrema y durabilidad. Ideal para el trabajo diario.",
        caracteristicas: { motor: "99.7 cc", potencia: "7.38 HP", peso: "110 kg", frenos: "Campana / Campana" },
        imagenes: [
            "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500",
            "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500",
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500",
            "https://images.unsplash.com/photo-1568772585407-9361f9bfce92?w=500"
        ]
    },
    {
        id: 2, modelo: "TVS Sport 110 FI", precio: 5599000, descripcion: "Inyección electrónica para mayor rendimiento de combustible.",
        caracteristicas: { motor: "109.7 cc", potencia: "8.08 HP", peso: "112 kg", frenos: "Campana / Campana" },
        imagenes: [
            "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?w=500",
            "https://images.unsplash.com/photo-1600861194979-f628096238b1?w=500",
            "https://images.unsplash.com/photo-1590656608518-8f81ea3fb18b?w=500",
            "https://images.unsplash.com/photo-1598460621415-32a832c6f140?w=500",
            "https://images.unsplash.com/photo-1591552097782-b7b514300346?w=500"
        ]
    },
    {
        id: 3, modelo: "TVS Raider 125", precio: 7299000, descripcion: "Diseño agresivo, tablero digital LCD y modos de manejo.",
        caracteristicas: { motor: "124.8 cc", potencia: "11.2 HP", peso: "120 kg", frenos: "Disco / Campana" },
        imagenes: [
            "https://images.unsplash.com/photo-1591040505562-b9cf8dd3916e?w=500",
            "https://images.unsplash.com/photo-1616231682705-4c07921a97d9?w=500",
            "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500",
            "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500"
        ]
    },
    {
        id: 4, modelo: "TVS Raider 125 FI", precio: 7799000, descripcion: "La mejor de su segmento ahora con Inyección Electrónica.",
        caracteristicas: { motor: "124.8 cc", potencia: "11.2 HP", peso: "120 kg", frenos: "Disco / Campana" },
        imagenes: [
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500",
            "https://images.unsplash.com/photo-1590656608518-8f81ea3fb18b?w=500",
            "https://images.unsplash.com/photo-1568772585407-9361f9bfce92?w=500",
            "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?w=500",
            "https://images.unsplash.com/photo-1600861194979-f628096238b1?w=500"
        ]
    },
    {
        id: 5, modelo: "TVS Apache RTR 160 2V", precio: 7999000, descripcion: "Potencia y tradición en el segmento street. Agilidad pura.",
        caracteristicas: { motor: "159.7 cc", potencia: "15.8 HP", peso: "139 kg", frenos: "Disco / Campana" },
        imagenes: [
            "https://images.unsplash.com/photo-1598460621415-32a832c6f140?w=500",
            "https://images.unsplash.com/photo-1591552097782-b7b514300346?w=500",
            "https://images.unsplash.com/photo-1591040505562-b9cf8dd3916e?w=500",
            "https://images.unsplash.com/photo-1616231682705-4c07921a97d9?w=500",
            "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500"
        ]
    },
    {
        id: 6, modelo: "TVS Apache RTR 160 4V", precio: 9299000, descripcion: "Refrigeración por aceite, telemetría SmartXonnect y frenos ABS.",
        caracteristicas: { motor: "159.7 cc", potencia: "17.3 HP", peso: "145 kg", frenos: "Disco ABS / Disco" },
        imagenes: [
            "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500",
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500",
            "https://images.unsplash.com/photo-1590656608518-8f81ea3fb18b?w=500",
            "https://images.unsplash.com/photo-1568772585407-9361f9bfce92?w=500"
        ]
    },
    {
        id: 7, modelo: "TVS Apache RTR 200 4V", precio: 11599000, descripcion: "Suspensión Showa ajustable, modos de manejo y frenos ABS.",
        caracteristicas: { motor: "197.7 cc", potencia: "20.5 HP", peso: "152 kg", frenos: "Disco ABS / Disco" },
        imagenes: [
            "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?w=500",
            "https://images.unsplash.com/photo-1600861194979-f628096238b1?w=500",
            "https://images.unsplash.com/photo-1598460621415-32a832c6f140?w=500",
            "https://images.unsplash.com/photo-1591552097782-b7b514300346?w=500",
            "https://images.unsplash.com/photo-1591040505562-b9cf8dd3916e?w=500"
        ]
    },
    {
        id: 8, modelo: "TVS Apache RTR 310", precio: 22500000, descripcion: "Naked deportiva premium. Control de crucero y faro LED.",
        caracteristicas: { motor: "312.1 cc", potencia: "35.6 HP", peso: "169 kg", frenos: "Disco ABS / Disco ABS" },
        imagenes: [
            "https://images.unsplash.com/photo-1616231682705-4c07921a97d9?w=500",
            "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500",
            "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500",
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500"
        ]
    },
    {
        id: 9, modelo: "TVS Apache RR 310", precio: 24999000, descripcion: "Genética de carreras. Motor desarrollado en conjunto con BMW.",
        caracteristicas: { motor: "312.2 cc", potencia: "34 HP", peso: "174 kg", frenos: "Disco ABS Doble" },
        imagenes: [
            "https://images.unsplash.com/photo-1590656608518-8f81ea3fb18b?w=500",
            "https://images.unsplash.com/photo-1568772585407-9361f9bfce92?w=500",
            "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?w=500",
            "https://images.unsplash.com/photo-1600861194979-f628096238b1?w=500",
            "https://images.unsplash.com/photo-1598460621415-32a832c6f140?w=500"
        ]
    },
    {
        id: 10, modelo: "TVS Ronin 225", precio: 15499000, descripcion: "Estilo neo-retro, suspensión invertida y torque excepcional.",
        caracteristicas: { motor: "225.9 cc", potencia: "20.4 HP", peso: "160 kg", frenos: "Disco ABS / Disco" },
        imagenes: [
            "https://images.unsplash.com/photo-1591552097782-b7b514300346?w=500",
            "https://images.unsplash.com/photo-1591040505562-b9cf8dd3916e?w=500",
            "https://images.unsplash.com/photo-1616231682705-4c07921a97d9?w=500",
            "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500",
            "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500"
        ]
    },
    {
        id: 11, modelo: "TVS Neo NX 110", precio: 5399000, descripcion: "Moto semiautomática práctica, ligera y fácil de manejar.",
        caracteristicas: { motor: "109.7 cc", potencia: "8.5 HP", peso: "101 kg", frenos: "Disco / Campana" },
        imagenes: [
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500",
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500",
            "https://images.unsplash.com/photo-1590656608518-8f81ea3fb18b?w=500",
            "https://images.unsplash.com/photo-1568772585407-9361f9bfce92?w=500",
            "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?w=500"
        ]
    },
    {
        id: 12, modelo: "TVS Dazz 110", precio: 5899000, descripcion: "Scooter automático urbano con puerto de carga USB integrado.",
        caracteristicas: { motor: "109.6 cc", potencia: "8.7 HP", peso: "93 kg", frenos: "Disco / Campana" },
        imagenes: [
            "https://images.unsplash.com/photo-1600861194979-f628096238b1?w=500",
            "https://images.unsplash.com/photo-1598460621415-32a832c6f140?w=500",
            "https://images.unsplash.com/photo-1591552097782-b7b514300346?w=500",
            "https://images.unsplash.com/photo-1591040505562-b9cf8dd3916e?w=500",
            "https://images.unsplash.com/photo-1616231682705-4c07921a97d9?w=500"
        ]
    },
    {
        id: 13, modelo: "TVS NTORQ 125", precio: 8499000, descripcion: "El scooter deportivo más conectado. Pantalla digital y bluetooth.",
        caracteristicas: { motor: "124.8 cc", potencia: "9.25 HP", peso: "116 kg", frenos: "Disco / Campana" },
        imagenes: [
            "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500",
            "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500",
            "https://images.unsplash.com/photo-1558981806-ec527fa84c39?w=500",
            "https://images.unsplash.com/photo-1590656608518-8f81ea3fb18b?w=500"
        ]
    },
    {
        id: 14, modelo: "TVS iQube (Eléctrica)", precio: 13990000, descripcion: "Movilidad 100% eléctrica. Tablero TFT y cero emisiones.",
        caracteristicas: { motor: "Eléctrico HUB", potencia: "4.4 kW", peso: "117 kg", frenos: "Disco / Campana" },
        imagenes: [
            "https://images.unsplash.com/photo-1568772585407-9361f9bfce92?w=500",
            "https://images.unsplash.com/photo-1614165936126-2ed18e471b3b?w=500",
            "https://images.unsplash.com/photo-1600861194979-f628096238b1?w=500",
            "https://images.unsplash.com/photo-1598460621415-32a832c6f140?w=500",
            "https://images.unsplash.com/photo-1591552097782-b7b514300346?w=500"
        ]
    },
    {
        id: 15, modelo: "TVS King (Motocarro)", precio: 16890000, descripcion: "Máxima rentabilidad para tu negocio. Chasis reforzado.",
        caracteristicas: { motor: "199.2 cc", potencia: "10.4 HP", peso: "356 kg", frenos: "Tambor Hidráulico" },
        imagenes: [
            "https://images.unsplash.com/photo-1591040505562-b9cf8dd3916e?w=500",
            "https://images.unsplash.com/photo-1616231682705-4c07921a97d9?w=500",
            "https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=500",
            "https://images.unsplash.com/photo-1449426468159-d96dbf08f19f?w=500",
            "https://images.unsplash.com/photo-1494976388531-d1058494cdd8?w=500"
        ]
    }
];

let carrito = [];
const visores360 = {};

// Verificar Sesión Local
const usuarioGuardado = localStorage.getItem('usuario_tvs');
if (usuarioGuardado) {
    document.getElementById('btn-login').style.display = 'none';
    document.getElementById('btn-logout').style.display = 'inline-block';
    const usr = JSON.parse(usuarioGuardado);
    const greeting = document.getElementById('user-greeting');
    greeting.textContent = `Hola, ${usr.nombre}`;
    greeting.style.display = 'inline-block';
}

function renderizarBloques() {
    const contenedor = document.getElementById('moto-lista');
    contenedor.innerHTML = '';

    motosTVS.forEach(moto => {
        visores360[moto.id] = { index: 0, images: moto.imagenes, startX: 0, isDragging: false };
        const precioCOP = new Intl.NumberFormat('es-CO', { style: 'currency', currency: 'COP', minimumFractionDigits: 0 }).format(moto.precio);
        
        let miniaturasHTML = '';
        moto.imagenes.forEach((imgUrl, index) => {
            const activeClass = index === 0 ? 'active' : '';
            miniaturasHTML += `<img src="${imgUrl}" class="${activeClass}" id="min-${moto.id}-${index}">`;
        });

        const mWa = `https://wa.me/573193729772?text=Hola,%20deseo%20cotizar%20el%20modelo%20${encodeURIComponent(moto.modelo)}`;

        contenedor.innerHTML += `
            <div class="bloque-moto">
                <div class="galeria-bloque">
                    <img src="${moto.imagenes[0]}" id="img-360-${moto.id}" class="visor-360" draggable="false"
                        onmousedown="iniciarGiro(event, ${moto.id})"
                        onmousemove="girar(event, ${moto.id})"
                        onmouseup="detenerGiro(${moto.id})"
                        onmouseleave="detenerGiro(${moto.id})"
                        ontouchstart="iniciarGiroTouch(event, ${moto.id})"
                        ontouchmove="girarTouch(event, ${moto.id})"
                        ontouchend="detenerGiro(${moto.id})">
                    <p style="font-size: 0.8rem; color: #666; margin-top: 5px;">Arrastra para rotar</p>
                    <div class="miniaturas-container" id="miniaturas-${moto.id}">
                        ${miniaturasHTML}
                    </div>
                </div>
                
                <div class="bloque-info">
                    <h3>${moto.modelo}</h3>
                    <p>${moto.descripcion}</p>
                    <div class="specs-grid">
                        <div><span class="specs-label">Motor:</span> <span class="specs-value">${moto.caracteristicas.motor}</span></div>
                        <div><span class="specs-label">Potencia:</span> <span class="specs-value">${moto.caracteristicas.potencia}</span></div>
                        <div><span class="specs-label">Peso:</span> <span class="specs-value">${moto.caracteristicas.peso}</span></div>
                        <div><span class="specs-label">Frenos:</span> <span class="specs-value">${moto.caracteristicas.frenos}</span></div>
                    </div>
                    <div class="bloque-precio">${precioCOP}</div>
                    <div class="botones-accion">
                        <button class="btn-cart" onclick="agregarAlCarrito(${moto.id})"><i class="fas fa-shopping-cart"></i></button>
                        <a href="${mWa}" target="_blank" class="btn-cotizar">Cotizar</a>
                    </div>
                </div>
            </div>
        `;
    });
}

// Lógica Visor 360
function actualizarVista(id) {
    const visor = visores360[id];
    document.getElementById(`img-360-${id}`).src = visor.images[visor.index];
    const todas = document.getElementById(`miniaturas-${id}`).getElementsByTagName('img');
    for (let i = 0; i < todas.length; i++) todas[i].classList.remove('active');
    document.getElementById(`min-${id}-${visor.index}`).classList.add('active');
}
function iniciarGiro(e, id) { visores360[id].isDragging = true; visores360[id].startX = e.clientX; }
function iniciarGiroTouch(e, id) { visores360[id].isDragging = true; visores360[id].startX = e.touches[0].clientX; }
function procesarMovimiento(clienteX, id) {
    const visor = visores360[id];
    if (!visor.isDragging) return;
    const deltaX = clienteX - visor.startX;
    if (Math.abs(deltaX) > 25) { 
        if (deltaX > 0) visor.index = (visor.index - 1 + visor.images.length) % visor.images.length; 
        else visor.index = (visor.index + 1) % visor.images.length; 
        actualizarVista(id);
        visor.startX = clienteX;
    }
}
function girar(e, id) { procesarMovimiento(e.clientX, id); }
function girarTouch(e, id) { procesarMovimiento(e.touches[0].clientX, id); }
function detenerGiro(id) { visores360[id].isDragging = false; }

// Auth simulado para GitHub Pages (Usa LocalStorage)
const authModal = document.getElementById('auth-modal');
const errorDiv = document.getElementById('auth-error');

document.getElementById('form-registro').addEventListener('submit', (e) => {
    e.preventDefault();
    const nombre = document.getElementById('reg-nombre').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    let dbUsuarios = JSON.parse(localStorage.getItem('usuarios_db_pages')) || [];
    if (dbUsuarios.find(u => u.email === email)) {
        errorDiv.textContent = "El correo ya está registrado.";
        errorDiv.style.display = 'block';
        return;
    }
    
    dbUsuarios.push({ nombre, email, password });
    localStorage.setItem('usuarios_db_pages', JSON.stringify(dbUsuarios));
    
    alert("Cuenta creada exitosamente. Inicia sesión.");
    document.getElementById('form-registro-container').style.display = 'none';
    document.getElementById('form-login-container').style.display = 'block';
    errorDiv.style.display = 'none';
});

document.getElementById('form-login').addEventListener('submit', (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    let dbUsuarios = JSON.parse(localStorage.getItem('usuarios_db_pages')) || [];
    const user = dbUsuarios.find(u => u.email === email && u.password === password);
    
    if (user) {
        localStorage.setItem('usuario_tvs', JSON.stringify({ nombre: user.nombre, email: user.email }));
        window.location.reload(); 
    } else {
        errorDiv.textContent = "Correo o contraseña incorrectos.";
        errorDiv.style.display = 'block';
    }
});

document.getElementById('btn-logout').addEventListener('click', () => { localStorage.removeItem('usuario_tvs'); window.location.reload(); });
document.getElementById('btn-login').addEventListener('click', () => { authModal.style.display = 'flex'; });
document.querySelectorAll('.close-auth').forEach(btn => btn.addEventListener('click', () => authModal.style.display = 'none'));
document.getElementById('show-register').addEventListener('click', (e) => { e.preventDefault(); document.getElementById('form-login-container').style.display = 'none'; document.getElementById('form-registro-container').style.display = 'block'; });
document.getElementById('show-login').addEventListener('click', (e) => { e.preventDefault(); document.getElementById('form-registro-container').style.display = 'none'; document.getElementById('form-login-container').style.display = 'block'; });

// Carrito
const cartModal = document.getElementById('cart-modal');
document.getElementById('btn-carrito').addEventListener('click', () => cartModal.style.display = 'flex');
document.getElementById('close-cart').addEventListener('click', () => cartModal.style.display = 'none');

function agregarAlCarrito(id) { carrito.push(motosTVS.find(m => m.id === id)); actualizarCarritoUI(); alert('Moto agregada al carrito'); }

function actualizarCarritoUI() {
    const lista = document.getElementById('lista-carrito');
    const totalElement = document.getElementById('total');
    lista.innerHTML = '';
    let total = 0;
    carrito.forEach((item, index) => {
        total += item.precio;
        lista.innerHTML += `
            <li style="display:flex; justify-content:space-between; margin-bottom:15px; color:white; border-bottom:1px solid #333; padding-bottom:10px;">
                <span>${item.modelo}</span>
                <span>$${item.precio.toLocaleString('es-CO')} <button onclick="carrito.splice(${index},1); actualizarCarritoUI();" style="color:red; background:none; border:none; cursor:pointer; font-weight:bold; margin-left:10px;">X</button></span>
            </li>
        `;
    });
    totalElement.textContent = total.toLocaleString('es-CO');
    document.getElementById('cart-count').textContent = carrito.length;
}

document.getElementById('comprar-whatsapp').addEventListener('click', () => {
    if(carrito.length === 0) return alert('Carrito vacío');
    let msg = "🏍️ *NUEVO PEDIDO TVS*%0A";
    let total = 0;
    carrito.forEach(i => { msg += `- ${i.modelo}%0A`; total += i.precio; });
    msg += `%0A*TOTAL: $${total.toLocaleString('es-CO')}*%0APagaré por Nequi.`;
    window.open(`https://wa.me/573193729772?text=${msg}`, '_blank');
});

// Iniciar aplicación
window.onload = renderizarBloques;