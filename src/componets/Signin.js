import { showMessage } from "./showMessage"
import { auth } from "./firebase"
import { signInWithEmailAndPassword } from "@firebase/auth"
import { useNavigate } from "react-router-dom"

export default function Signin() {
  const navigate = useNavigate()
    const handelSubmit= async (e)=>{
        e.preventDefault()
        const email= e.target.elements.email.value.trim()
        const password= e.target.elements.password.value.trim()
     try{
       const res = await signInWithEmailAndPassword(auth, email, password)
       showMessage("welcome" + res.user.email)
       navigate('/profile')
     }catch(error){
      if (error.code === 'auth/wrong-password') {
        showMessage("Wrong password", "error")
      } else if (error.code === 'auth/user-not-found') {
        showMessage("User not found", "error")
      } else {
        showMessage("Something went wrong", "error")
      }
     }
    }
  return (
    <div>
       <form onSubmit={handelSubmit} >
         <input type='email' name="email" />
         <input type='password' name='password' />
         <button>send</button>
     </form>
     </div>
  )
}
