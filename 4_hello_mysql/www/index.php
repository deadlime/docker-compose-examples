<?php

$db = new PDO('mysql:host=database;dbname=test', 'test', 'test');
$stmt = $db->query('SHOW VARIABLES LIKE "%version%"');

echo '<pre>';
var_dump($stmt->fetchAll(PDO::FETCH_ASSOC));
echo '</pre>';
