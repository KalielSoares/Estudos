export default function (ev) {
    ev.preventDefault()
    if (allowedKeys.includes(ev.key)) {
      input.value += ev.key
      return
    }
    if (ev.key === "Backspace") {
      input.value = input.value.slice(0, -1)
    }
    if (ev.key === "Enter") {
      calculate()
    }
  }