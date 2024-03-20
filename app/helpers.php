<?php

if (! function_exists('getFirstName')) {
    function getFirstName($string): string
    {
        $string = str()->of(strtolower($string))->explode(' ')->get(0);

        return $string;
    }
}

if (! function_exists('firstWord')) {
    function firstWord(string $string, ?bool $capitalize = false): string
    {
        $result = explode(' ', trim($string))[0];

        return $capitalize ? ucfirst($result) : strtolower($result);
    }
}

if (! function_exists('acronym')) {
    function acronym(string $string): string
    {
        return ucfirst(substr($string, 0, 1));
    }
}
