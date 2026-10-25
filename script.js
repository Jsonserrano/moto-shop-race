let motos = [];
let carrito = [];
const visores360 = {}; 

const usuarioGuardado = localStorage.getItem('usuario_tvs');
if (usuarioGuardado) {
    document.getElementById('btn-login').style.display = 'none';
    document.getElementById('btn-logout').style.display = 'inline-block';
    const usr = JSON.parse(usuarioGuardado);
    const greeting = document.getElementById('user-greeting');
    greeting.textContent = `Hola, ${usr.nombre}`;
    greeting.style.display = 'inline-block';
}

async function cargarCatalogo() {
    try {
        // Asegúrate de que la URL apunte al backend
        const respuesta = await fetch('http://localhost:3000/api/motos');
        motos = await respuesta.json();
        renderizarBloques();
    } catch (error) {
        document.getElementById('moto-lista').innerHTML = '<p style="color:red; text-align:center;">Error conectando al servidor. Verifica "node server.js"</p>';
    }
}

function renderizarBloques() {
    const contenedor = document.getElementById('moto-lista');
    contenedor.innerHTML = '';

    motos.forEach(moto => {
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

const authModal = document.getElementById('auth-modal');
const errorDiv = document.getElementById('auth-error');

document.getElementById('form-registro').addEventListener('submit', async (e) => {
    e.preventDefault();
    const nombre = document.getElementById('reg-nombre').value;
    const email = document.getElementById('reg-email').value;
    const password = document.getElementById('reg-password').value;

    try {
        const res = await fetch('http://localhost:3000/api/register', {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ nombre, email, password })
        });
        const data = await res.json();
        if (res.ok) {
            alert(data.mensaje);
            document.getElementById('form-registro-container').style.display = 'none';
            document.getElementById('form-login-container').style.display = 'block';
            errorDiv.style.display = 'none';
        } else {
            errorDiv.textContent = data.error; errorDiv.style.display = 'block';
        }
    } catch (err) { errorDiv.textContent = "Error al conectar."; errorDiv.style.display = 'block'; }
});

document.getElementById('form-login').addEventListener('submit', async (e) => {
    e.preventDefault();
    const email = document.getElementById('login-email').value;
    const password = document.getElementById('login-password').value;

    try {
        const res = await fetch('http://localhost:3000/api/login', {
            method: 'POST', headers: { 'Content-Type': 'application/json' }, body: JSON.stringify({ email, password })
        });
        const data = await res.json();
        if (res.ok) {
            localStorage.setItem('usuario_tvs', JSON.stringify(data.usuario));
            window.location.reload(); 
        } else {
            errorDiv.textContent = data.error; errorDiv.style.display = 'block';
        }
    } catch(err) { errorDiv.textContent = "Error al conectar."; errorDiv.style.display = 'block'; }
});

document.getElementById('btn-logout').addEventListener('click', () => { localStorage.removeItem('usuario_tvs'); window.location.reload(); });
document.getElementById('btn-login').addEventListener('click', () => { authModal.style.display = 'flex'; });
document.querySelectorAll('.close-auth').forEach(btn => btn.addEventListener('click', () => authModal.style.display = 'none'));
document.getElementById('show-register').addEventListener('click', (e) => { e.preventDefault(); document.getElementById('form-login-container').style.display = 'none'; document.getElementById('form-registro-container').style.display = 'block'; });
document.getElementById('show-login').addEventListener('click', (e) => { e.preventDefault(); document.getElementById('form-registro-container').style.display = 'none'; document.getElementById('form-login-container').style.display = 'block'; });

const cartModal = document.getElementById('cart-modal');
document.getElementById('btn-carrito').addEventListener('click', () => cartModal.style.display = 'flex');
document.getElementById('close-cart').addEventListener('click', () => cartModal.style.display = 'none');

function agregarAlCarrito(id) { carrito.push(motos.find(m => m.id === id)); actualizarCarritoUI(); alert('Moto agregada al carrito'); }

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

window.onload = cargarCatalogo;