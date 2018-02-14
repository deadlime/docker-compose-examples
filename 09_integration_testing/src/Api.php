<?php

namespace DockerComposeExamples;

class Api
{
    private $baseUrl;

    public function __construct($baseUrl)
    {
        $this->baseUrl = $baseUrl;
    }

    public function fetchUsers()
    {
        $response = file_get_contents("{$this->baseUrl}/v2/users");
        $users = json_decode($response, true);

        return array_column($users, 'name');
    }
}
