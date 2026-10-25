-- Base de datos Profesional para Moto Shop Race 2026
CREATE DATABASE IF NOT EXISTS moto_shop_race_db;
USE moto_shop_race_db;

-- 1. Tabla de Usuarios / Clientes
CREATE TABLE IF NOT EXISTS usuarios (
    id_usuario INT AUTO_INCREMENT PRIMARY KEY,
    cedula VARCHAR(20) UNIQUE NOT NULL,
    nombre_completo VARCHAR(100) NOT NULL,
    email VARCHAR(100) UNIQUE NOT NULL,
    password_hash VARCHAR(255) NOT NULL,
    telefono VARCHAR(20),
    direccion VARCHAR(255),
    ciudad VARCHAR(50) DEFAULT 'Bogotá',
    rol ENUM('admin', 'cliente') DEFAULT 'cliente',
    fecha_creacion TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);

-- 2. Tabla de Categorías/Marcas
CREATE TABLE IF NOT EXISTS marcas (
    id_marca INT AUTO_INCREMENT PRIMARY KEY,
    nombre_marca VARCHAR(50) NOT NULL
);

-- 3. Tabla de Motocicletas (Productos)
CREATE TABLE IF NOT EXISTS motocicletas (
    id_moto INT AUTO_INCREMENT PRIMARY KEY,
    id_marca INT NOT NULL,
    modelo VARCHAR(100) NOT NULL,
    cilindraje INT NOT NULL,
    precio DECIMAL(12,2) NOT NULL,
    descripcion TEXT,
    stock INT DEFAULT 1,
    estado ENUM('disponible', 'agotado') DEFAULT 'disponible',
    FOREIGN KEY (id_marca) REFERENCES marcas(id_marca)
);

-- 4. Tabla de Imágenes por Moto (1 a muchos)
CREATE TABLE IF NOT EXISTS moto_imagenes (
    id_imagen INT AUTO_INCREMENT PRIMARY KEY,
    id_moto INT NOT NULL,
    url_imagen VARCHAR(255) NOT NULL,
    es_principal BOOLEAN DEFAULT FALSE,
    FOREIGN KEY (id_moto) REFERENCES motocicletas(id_moto) ON DELETE CASCADE
);

-- 5. Tabla de Pedidos (Ventas)
CREATE TABLE IF NOT EXISTS pedidos (
    id_pedido INT AUTO_INCREMENT PRIMARY KEY,
    id_usuario INT NOT NULL,
    total DECIMAL(12,2) NOT NULL,
    metodo_pago ENUM('Nequi', 'Daviplata', 'Bancolombia', 'PSE') NOT NULL,
    estado_pago ENUM('pendiente', 'comprobando', 'aprobado', 'rechazado') DEFAULT 'pendiente',
    fecha_pedido TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    FOREIGN KEY (id_usuario) REFERENCES usuarios(id_usuario)
);

-- 6. Tabla de Detalles del Pedido
CREATE TABLE IF NOT EXISTS detalles_pedido (
    id_detalle INT AUTO_INCREMENT PRIMARY KEY,
    id_pedido INT NOT NULL,
    id_moto INT NOT NULL,
    cantidad INT DEFAULT 1,
    precio_unitario DECIMAL(12,2) NOT NULL,
    FOREIGN KEY (id_pedido) REFERENCES pedidos(id_pedido),
    FOREIGN KEY (id_moto) REFERENCES motocicletas(id_moto)
);

-- Insertar Datos Base
INSERT INTO usuarios (cedula, nombre_completo, email, password_hash, telefono, rol) 
VALUES ('1234567890', 'Administrador Principal', 'admin@motoshoprace.com.co', '$2y$10$hash_seguro_aqui', '3193729772', 'admin');

INSERT INTO marcas (nombre_marca) VALUES ('Kawasaki'), ('Ducati'), ('BMW'), ('Yamaha');