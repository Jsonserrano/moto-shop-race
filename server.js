const express = require('express');
const cors = require('cors');
const fs = require('fs');
const bcrypt = require('bcryptjs');

const app = express();
const PORT = 3000;

app.use(cors());
app.use(express.json());

// Base de datos de Usuarios
const fileUsuarios = './usuarios.json';
if (!fs.existsSync(fileUsuarios)) fs.writeFileSync(fileUsuarios, JSON.stringify([]));

app.post('/api/register', async (req, res) => {
    const { nombre, email, password } = req.body;
    let usuarios = JSON.parse(fs.readFileSync(fileUsuarios));
    if (usuarios.find(u => u.email === email)) return res.status(400).json({ error: 'El correo ya está registrado.' });
    
    const salt = await bcrypt.genSalt(10);
    const hashedPassword = await bcrypt.hash(password, salt);
    
    usuarios.push({ id: Date.now(), nombre, email, password: hashedPassword });
    fs.writeFileSync(fileUsuarios, JSON.stringify(usuarios, null, 2));
    res.json({ mensaje: 'Cuenta creada exitosamente.' });
});

app.post('/api/login', async (req, res) => {
    const { email, password } = req.body;
    let usuarios = JSON.parse(fs.readFileSync(fileUsuarios));
    const usuario = usuarios.find(u => u.email === email);
    if (!usuario) return res.status(400).json({ error: 'Usuario no encontrado.' });
    
    const passwordValida = await bcrypt.compare(password, usuario.password);
    if (!passwordValida) return res.status(400).json({ error: 'Contraseña incorrecta.' });
    
    res.json({ mensaje: `Bienvenido`, usuario: { nombre: usuario.nombre, email: usuario.email } });
});

// Catálogo COMPLETO TVS (15 modelos, 5 fotos cada uno)
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

app.get('/api/motos', (req, res) => {
    res.json(motosTVS);
});

app.listen(PORT, () => {
    console.log(`Backend seguro corriendo en http://localhost:${PORT}`);
});