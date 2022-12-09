function Button({operador, margin, fn, effect}) {
    const buttonStyles = 'flex justify-center w-10 h-10 text-2xl font-bold text-white rounded-full shadow-md bg-fuchsia-700 shadow-black '
  return (
    <button
        type="button"
        className={margin === 'ml-3' ? (buttonStyles + margin) : (buttonStyles + margin) }
        onClick={(e)=>{
            fn();
            effect(e.target);
        }}
        >{operador}
    </button>
  )
}

export default Button;