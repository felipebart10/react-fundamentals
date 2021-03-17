// Styling
// http://localhost:3000/isolated/exercise/05.js

import * as React from 'react'
import '../box-styles.css'

// 💰 Use the className for the size and style (backgroundColor) for the color
// 💰 each of the elements should also have the "box" className applied

// 🐨 add a className prop to each of these and apply the correct class names
// 💰 Here are the available class names: box, box--large, box--medium, box--small

// 🐨 add a style prop to each of them as well so their background color
// matches what the text says it should be as well as `fontStyle: 'italic'`
//const smallBox = <div className="box box--small" style={{backgroundColor: 'lightblue', fontStyle: "italic"}}>small lightblue box</div>
//const mediumBox = <div className="box box--medium" style={{backgroundColor:"pink", fontStyle:"italic", filter:'brightness(70%)'}}>medium pink box</div>
//const largeBox = <div className="box box--large" style={{backgroundColor:"orange", fontStyle:"italic"}}>large orange box</div>

// Se o usuário não especificar a cor nem o tamanho, a caixa será média e azul clara.
function Box({color = 'lightblue', style= {}, size = 'medium', ...props}) {
    const className = 'box box--' + size
    return <div className={className} style={{fontStyle: 'italic', backgroundColor: color, ...style}} {...props}></div>
}

function App() {
  return (
    <div>
        {/*
            Em JSX, estilos CSS são passados como objetos para o elemento.
            O nome dos atributos em CSS, escritas em kebab-case, tornam-se
            os}
        */}
        <div style={{marginTop: '20px', backgrounColor: 'blue'}}></div>
        <Box size='small' id='box1'>Small Lightblue Box</Box>
        <Box color ="pink" id="box2">Medium Pink Box</Box>
        <Box size='large' color='orange' id='box3'>Large Orange Box</Box>
    </div>
  )
}

export default App
