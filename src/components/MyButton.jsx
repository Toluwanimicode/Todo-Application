import PropTypes from "prop-types"
const MyButton = ({bgcolor="gray", func, children}) => {
    const style = {
        backgroundColor: bgcolor,
        color: 'white',
        padding: '5px 10px',
        border: 'none',
        borderRadius: '5px',
        cursor: 'pointer',
        marginLeft: '5px'
    }
  return (
      <button
          style={style}
          onClick={func}
      >
          {children}
      </button>
  )
}

MyButton.propTypes = {
  bgcolor: PropTypes.string,
  children: PropTypes.string,
  func: PropTypes.func,
}


export default MyButton;