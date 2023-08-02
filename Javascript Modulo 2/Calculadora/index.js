import calculate from "./modulos/Calculate.js"
import copyClipboard from "./modulos/copyClipboard.js"
import theme from "./modulos/themeSwitcher.js"
import clear from "./modulos/clear.js"
import pressbtn from "./modulos/pressbtn.js"
import charBtn from "./modulos/charBtn.js"

const input = document.getElementById("input")
const allowedKeys = ["(", ")", "/", "*", "-", "+", "9", "8", "7", "6", "5", "4", "3", "2", "1", "0", ".", "%", " "]

document.querySelectorAll(".charKey").forEach(charBtn)

document.getElementById("clear").addEventListener("click", clear )

input.addEventListener("keydown", pressbtn)

document.getElementById("equal").addEventListener("click", calculate)

document.getElementById("copyToClipboard").addEventListener("click", copyClipboard)

document.getElementById("themeSwitcher").addEventListener("click", theme)