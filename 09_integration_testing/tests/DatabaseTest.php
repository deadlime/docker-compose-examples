<?php

namespace DockerComposeExamples\Test;

use DockerComposeExamples\Database;
use PDO;
use PHPUnit\Framework\TestCase;

class DatabaseTest extends TestCase
{
    /** @var PDO */
    private $db;
    /** @var Database */
    private $subject;

    protected function setUp()
    {
        $this->db = new PDO('mysql:host=database;dbname=test_db', 'test', 'test');
        $this->subject = new Database($this->db);
    }

    public function testFetchItems()
    {
        $this->initData();

        $this->assertEquals(['test 1', 'test 2'], $this->subject->fetchNames());
    }

    private function initData()
    {
        $this->db->query("DELETE FROM items");
        $this->db->query("INSERT INTO items (name) VALUES ('test 1'), ('test 2')");
    }
}
