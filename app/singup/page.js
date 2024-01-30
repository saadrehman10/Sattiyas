'use client';
import Buttons from "@/components/buttons/Button";
import Navbar from "@/components/navbar/Navbar";
import Footer from "@/components/footer/Footer";
import Input_field from "@/components/input_field/Input_field";
import Link from "next/link";
import { useEffect , useState } from "react";


export default function Sigup(){
    const [formData, setFormData] = useState({
        id:'',
        firstName: '',
        lastName: '',
        fatherName: '',
        email: '',
        password: '',
        confirmPassword: '',
        phoneNo: '',
        address:'',
        dateOfBirth:'',
        gender:'',
      });
      
      const [gender, setGender] = useState(''); 

      const handleGenderChange = (e) => {
        setGender(e.target.value);
      };
    
    
    const handleChange = (e) => {
        const { name, value } = e.target;
            setFormData({ ...formData, [name]: value });
        };


    const  handleSubmit = (e) => {
        e.preventDefault();
        const { password, confirmPassword, phoneNo} = formData;
        
        if (phoneNo.length != 11 ){
            alert("Please enter a valid Phone Number");
            
        }

        if (password === confirmPassword && password != "") {
            
            alert("password matcch");
            
        } 
        else {
        
            alert("Password and Confirm Password do not match or its empty");
            setFormData({password:''});
        }
        formData.id = userIdgen();
        formData.gender = gender;
        console.log("Form submitted:", formData);
        
    };  
    return(
        <>
        <nav><Navbar></Navbar></nav>
        <body className="cs_sigup_body">
            <div className='singupCard'>
              <h3 className='headName'>Create Account</h3>
               <form onSubmit={handleSubmit} >
                  <div className='formDesing'>

                    <div className='formAttribute'>
                        <Input_field 
                          desing="2"
                          type="text"
                          placeholder="First Name"
                          id="firstName"
                          name="firstName"
                          value={formData.firstName}
                          onChange={handleChange}
                          htmlFor="firstName"
                          requried

                        ></Input_field>
                
                    </div>
                    <div  className='formAttribute'>
                        <Input_field
                            desing="2"
                            type="email"
                            placeholder="Email"
                            id="email"
                            name="email"
                            value={formData.email}
                            htmlFor="email"
                            onChange={handleChange}
                            required

                        ></Input_field>

                    </div>

                    <div className='formAttribute'>
                        <Input_field
                            desing="2"
                            type="text"
                            placeholder="Last Name"
                            id="lastName"
                            name="lastName"
                            value={formData.lastName}
                            onChange={handleChange}
                            htmlFor="lastName"
                            required
                        
                        ></Input_field>
                    </div>

                    

                   

                    <div className='formAttribute'>
                        <Input_field
                            desing="2"
                            type="password"
                            placeholder="Create Password"
                            htmlFor="password"
                            id="password"
                            name="password"
                            value={formData.password}
                            onChange={handleChange}
                            required
                           
                        ></Input_field>

                    </div>

                    
                    <div className='formAttribute'>
                        <Input_field
                            desing="2"
                            type="text"
                            placeholder="Father Name"
                            id="fatherName"
                            name="fatherName"
                            value={formData.fatherName}
                            htmlFor="fatherName"
                            onChange={handleChange}
                            required

                        ></Input_field>
                    
                    </div>


                  

                    <div className='formAttribute'>
                        <Input_field
                            desing="2"
                            type="password"
                            placeholder="Confirm Password"
                            htmlFor="confirmPassword"
                            id="confirmPassword"
                            name="confirmPassword"
                            value={formData.confirmPassword}
                            onChange={handleChange}
                            required
                            
                        ></Input_field>

            
                    </div>

                    <div  className='formAttribute'>
                        <Input_field
                            desing="2"
                            type="number"
                            placeholder="Phone No"
                            id="phoneNo"
                            name="phoneNo"
                            value={formData.phoneNo}
                            htmlFor="phoneNo"
                            onChange={handleChange}
                            required

                        ></Input_field>

                    </div>

                    <div  className='formAttribute'>
                        <Input_field
                            desing="2"
                            type="text"
                            placeholder="Address"
                            id="address"
                            name="address"
                            value={formData.address}
                            htmlFor="address"
                            onChange={handleChange}
                            required

                        ></Input_field>

                    </div>

                    <div  className='formAttribute'>
                        <Input_field
                            desing="2"
                            type="date"
                            placeholder="Date of Birth"
                            id="dateOfBirth"
                            name="dateOfBirth"
                            value={formData.dateOfBirth}
                            htmlFor="dateOfBirth"
                            onChange={handleChange}
                            required

                        ></Input_field>

                    </div>

                    <div  className='formAttribute'>
                    <div class="radio-container">
                        <label>Gender :</label>
                        <div class="radio-wrapper">
                            <label class="radio-button">
                            <input 
                            id="option1" 
                            name="radio-group" 
                            type="radio" 
                            value="male"
                            checked={gender === 'male'}
                            onChange={handleGenderChange}/>
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">Male</span>
                            </label>
                        </div>

                        <div class="radio-wrapper">
                            <label class="radio-button">
                            <input 
                            id="option2" 
                            name="radio-group" 
                            type="radio" 
                            value="female"
                            checked={gender === 'female'}
                            onChange={handleGenderChange}/>
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">Female</span>
                            </label>
                        </div>

                        <div class="radio-wrapper">
                            <label class="radio-button">
                            <input 
                            id="option3" 
                            name="radio-group" 
                            type="radio" 
                            value="other"
                            checked={gender === 'other'}
                            onChange={handleGenderChange}/>
                            <span class="radio-checkmark"></span>
                            <span class="radio-label">Other</span>
                            </label>
                        </div>
                    </div>

                     

                    </div>
                     </div>  

                    <div className="buttonCard">
                      <Buttons desing="1" txt="Sing Up" type="submit" ></Buttons>
                      <hr />
                      <p>Already have an account? <Link href="/login"> Login here</Link></p>
                    </div>
                    
                </form>
            
                

            </div>
            

        </body>
       <footer><Footer></Footer></footer>

        </>
    )
}