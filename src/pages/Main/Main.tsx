import keyboard from "./keyboard";
import { Synth, Reverb, Compressor } from 'tone'

const synth = new Synth({
  oscillator: {
    type: 'triangle', // Используем треугольную волну для пианино
  },
  envelope: {
    attack: 0.01, // Быстрое начало звука
    decay: 0.1,   // Плавное уменьшение громкости
    sustain: 0.3, // Удержание громкости
    release: 0.3  // Быстрое затухание
  }
}).toDestination()

function Main() {
  
  function keys() {
    return keyboard.keysMouse.map((e, i) => (
      <button key={i}
      onMouseDown={() => synth.triggerAttack(e)}
      onMouseLeave={() => synth.triggerRelease()}
      >{e}</button>
    ))
  }

  return (
    <div 
    onKeyDown={(event) => {
      console.log(keyboard.keysButtons[`${event.key}`])
      synth.triggerAttack(keyboard.keysButtons[`${event.key}`])
    }}
    onKeyUp={() => {
      () => synth.triggerRelease()
    }}>
      {keys()}
    </div>
  );
}

export default Main;
