<?php 

$I = new AcceptanceTester($scenario);
$I->wantTo('see the hidden message');

$I->amOnPage('/');
$I->dontSee('hidden message');

$I->click('#link');
$I->see('hidden message');
