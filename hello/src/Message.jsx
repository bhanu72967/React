
const Message = () => {


    const handleClick = () =>{
        console.log("Button Clicked")
    }
  return (
    <div>
        <button onClick={handleClick}>
            Click Me
        </button>
    </div>
  )
}

export default Message