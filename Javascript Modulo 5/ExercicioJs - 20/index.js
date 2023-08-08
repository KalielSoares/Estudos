import { Component } from "./Component.js";
import { Form } from "./Form.js";
import { Input } from "./Input.js";
import { label } from "./Label.js";

const el = new Component('h1', 'body', { innerText: 'Olá, Mundo!' })
console.log(el)