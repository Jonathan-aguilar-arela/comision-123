// export const Button = () =>{
//  return   <button>click me </button>    
// }
//todo lo de arriba es lo mismo que la function buttton pero de en funcion flecha(otro tipo)

/*import styles from '../styles/Button.module.css'*/  //se quita esto para utilizar wailinds_css , se borra /*className={styles.btn}*/



function Button({label,icon,styles, onClick}) { //pascalcase  props.label props.icon
    //console.log(props.label)
    //const pepito='pepito'
return (

<button className={styles} onClick= {onClick}>
{/* <button className='bg-red-500 px-2 py-4 mr-2 rounded' onClick= {()=> alert('click')}> */}
 {/* className={styles.btn} style={{backgroundColor:'blue', padding:20}} */}
 {label} {icon} 
 </button>
   )
}
export default Button

// const sumar = (a,b) => a + b 
// sumar(2,1) //→3