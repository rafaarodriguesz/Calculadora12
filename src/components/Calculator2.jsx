import React from 'react'
import { useState } from 'react'

const Calculator2 = () => {

  //VARIAVEIS
  const [visor, setVisor] = useState(0);
  const [valor1, setValor1] = useState(0);
  const [valor2, setValor2] = useState(0);
  const [operation, setOperation] = useState(0);
  const [soma, setSoma] = useState(0);
  const [subtracao, setSubtracao] = useState(0);
  const [mult, setMult] = useState(0)
  const [dividir, setDivir] = useState(0);

  //NUMEROS NO VISOR
  const showNumber = (value) => {
    if (operation === 0) {
      if (visor === 0) {
        //setar valor 1
        setVisor(value)
        setValor1(value)
      } else if (visor !== 0) {
        //setar valor 1
        setVisor(visor + value)
        setValor1(visor + value)
      }
    } else if (operation === 1) {
      if (visor === 0) {
        //setar valor 2
        setVisor(value)
        setValor2(value)
      } else {
        //setar valor 2
        setVisor(visor + value)
        setValor2(visor + value)
      }
    }
  }

  //FUNCAO AC
  const ac = () => {
    setVisor(0)
    setValor1(0)
    setValor2(0)
    setOperation(0)
    setSoma(0)
  }

  //FUNÇAO RESULTADO
  const result = () => {
    if (soma === 1) {
      const valor1Num = valor1 - '0'
      const valor2Num = valor2 - '0'
      setVisor(valor1Num + valor2Num)
      setOperation(0)
      setSoma(0)
    }else if(subtracao === 1){
      const valor1Num = valor1 - '0'
      const valor2Num = valor2 - '0'
      setVisor(valor1Num - valor2Num)
      setOperation(0)
      setSubtracao(0)
    }else if(mult === 1){
      const valor1Num = valor1 - '0'
      const valor2Num = valor2 - '0'
      setVisor(valor1Num * valor2Num)
      setOperation(0)
      setMult(0)
    }else if(dividir === 1){
      const valor1Num = valor1 - '0'
      const valor2Num = valor2 - '0'
      setVisor(valor1Num / valor2Num)
      setOperation(0)
      setDivir(0)
    }
  }


  //FUNCAO DE SOMA
  const sum = () => {
    setSoma(1)
    setOperation(1)
    setVisor(0)
  }

  //FUNCAO DE SUBTRAIR
  const minus = () => {
    setSubtracao(1)
    setOperation(1)
    setVisor(0)
  }

  // FUNCAO DE MULTIPLICAR
  const multiply = () => {
    setMult(1)
    setOperation(1)
    setVisor(0)
  }

  //FUNCAO DIVIDIR
  const divide = () => {
    setDivir(1)
    setOperation(1)
    setVisor(0)
  }


  return (
    <div>
      <div className='bodycalculator'>

        <div className='regularVisor'></div>
        <p className='input'>{visor}</p>
        <div className='coluna0'>
          <button className='buttonsCalculator grey' onClick={ac}>AC</button>
          <button className='buttonsCalculator grey'>+/-</button>
          <button className='buttonsCalculator grey'>%</button>
          <button className='buttonsCalculator yellow' onClick={divide}>÷</button>
        </div>
        <div className='coluna1'>
          <button className='buttonsCalculator' onClick={() => showNumber("7")}>7</button>
          <button className='buttonsCalculator' onClick={() => showNumber("8")}>8</button>
          <button className='buttonsCalculator' onClick={() => showNumber("9")}>9</button>
          <button className='buttonsCalculator yellow' onClick={multiply}>X</button>
        </div>
        <div className='coluna1'>
          <button className='buttonsCalculator' onClick={() => showNumber("4")}>4</button>
          <button className='buttonsCalculator' onClick={() => showNumber("5")}>5</button>
          <button className='buttonsCalculator' onClick={() => showNumber("6")}>6</button>
          <button className='buttonsCalculator yellow' onClick={minus}>-</button>
        </div>
        <div className='coluna1'>
          <button className='buttonsCalculator' onClick={() => showNumber("1")}>1</button>
          <button className='buttonsCalculator' onClick={() => showNumber("2")}>2</button>
          <button className='buttonsCalculator' onClick={() => showNumber("3")}>3</button>
          <button className='buttonsCalculator yellow' onClick={sum}>+</button>
        </div>
        <div className='coluna1'>
          <button className='buttonsCalculator zero' onClick={() => showNumber(0)}>0</button>
          <button className='buttonsCalculator' onClick={() => showNumber(",")}>,</button>
          <button className='buttonsCalculator yellow' onClick={result}>=</button>
        </div>

      </div>
    </div>
  )
}

export default Calculator2