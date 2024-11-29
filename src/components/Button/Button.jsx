
const Button = ({ increment, onClickFunction }) => {
  const num = Number(increment) || 1; // Por defecto en caso de fallo, incremento +1
  const handleClick = () => {
    onClickFunction(num)
  }
  return <button onClick={handleClick}>+{num}</button>
}

export default Button