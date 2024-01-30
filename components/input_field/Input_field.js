import styles1 from "./input_field1.module.css";
import styles2 from "./input_field2.module.css";
export default function Input_field(props){
    switch (props.desing){
        case "1" :
            return (
              <>
                <input type={props.type} autocomplete="off" name="text" className={styles1.inputUser} placeholder={props.placeholder}></input>
              </>
            );
         case "2":
          return (
            <>
              <div className={styles2.inputContainer}>
                <input placeholder={props.placeholder} className={styles2.inputField} type={props.type} onChange={props.onChange} value={props.value} id={props.id} name={props.name} requried/>
                <label for="input-field" className={styles2.input_label} htmlFor={props.htmlFor}>{props.placeholder}</label>
                <span className={styles2.input_highlight}></span>
              </div>
         
            </>
          );
    
      }

}