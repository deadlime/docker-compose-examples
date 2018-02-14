<?php

namespace DockerComposeExamples\Test;

use DockerComposeExamples\Hello;
use PHPUnit\Framework\TestCase;

class HelloTest extends TestCase
{
    /** @var Hello */
    private $subject;

    protected function setUp()
    {
        $this->subject = new Hello();
    }

    public function testGreet()
    {
        $this->assertEquals('Hello, World!', $this->subject->greet());
    }
}
