<?php

namespace DockerComposeExamples;

use PDO;

class Database
{
    /** @var PDO */
    private $db;

    public function __construct(PDO $db)
    {
        $this->db = $db;
    }

    public function fetchNames()
    {
        return $this->db->query('SELECT name FROM items')->fetchAll(PDO::FETCH_COLUMN);
    }
}
