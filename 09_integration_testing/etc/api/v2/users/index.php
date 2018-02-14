<?php

header('Content-Type: application/json');
print(json_encode([
    [
        'id' => 1,
        'name' => 'user 1',
    ],
    [
        'id' => 2,
        'name' => 'user 2',
    ],
]));
