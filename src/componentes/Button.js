import { Component } from 'react'

const Button = () => {
    return ( 
     
      <button type="button" class="btn btn-primary btn-sm">COMPRAR</button>
     )
}

/*
const Button = ({ funcion, label}) => {
  return ( <Button onClick={funcion} class="btn btn-primary btn-sm">{label}</Button>

  )
}

/*

export default class Button extends Component {
  render () {
    return <Button onClick={this.props.funcion} class="btn btn-primary btn-sm">COMPRAR</Button>
  }
}

/*
const Button = ({ funcion, label }) => {
  return (
     <Button onClick={funcion} class="btn btn-primary btn-sm">{label}</Button>
  )
}*/

export default Button 