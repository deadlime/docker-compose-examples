<?php

namespace DockerComposeExamples\Test;

use DockerComposeExamples\Api;
use PHPUnit\Framework\TestCase;

class ApiTest extends TestCase
{
    /** @var Api */
    private $subject;

    protected function setUp()
    {
        $this->subject = new Api('http://api');
    }

    public function testFetchUsers()
    {
        $this->assertEquals(['user 1', 'user 2'], $this->subject->fetchUsers());
    }
}
