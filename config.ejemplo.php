// config.php
<?php
$host = 'localhost';
$dbname = 'yamaha_colombia_db';
$username = 'tu_usuario';
$password = 'tu_password';

try {
    $pdo = new PDO("mysql:host=$host;dbname=$dbname", $username, $password);
    $pdo->setAttribute(PDO::ATTR_ERRMODE, PDO::ERRMODE_EXCEPTION);
} catch(PDOException $e) {
    die("Error: " . $e->getMessage());
}
?>