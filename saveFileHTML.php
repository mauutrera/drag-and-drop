<?php

$path = __DIR__ . '/en/index.html';
file_put_contents($path, $_POST['data']);
echo json_encode(['success' => 'OK']);