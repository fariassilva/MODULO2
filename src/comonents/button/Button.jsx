import styles from './Button.module.css'

function Button ({children}) {

return(
 <button className={styles.button}
onClick ={( ) =>{
 console.log("CLICK")
}}
 >
  {children}
  
  </button>
)
}
export default Button