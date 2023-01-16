
import {
 signInWithPopup,
 GithubAuthProvider,
 GoogleAuthProvider,
  createUserWithEmailAndPassword
} from '@firebase/auth'
import { showMessage } from './showMessage'
import { auth } from './firebase'
import { useNavigate } from 'react-router-dom'

export default function Login() {
  const navigate = useNavigate()
   const handelSubmit= async (e)=>{
       e.preventDefault()
       const email= e.target.elements.email.value.trim()
       const password= e.target.elements.password.value.trim()
    try{
      const res = await createUserWithEmailAndPassword(auth, email, password)
      showMessage("welcome" + res.user.email)
      navigate("/profile")
    } catch (error) {
    if (error.code === 'auth/email-already-in-use') {
      showMessage("Email already in use", "error")
    } else if (error.code === 'auth/invalid-email') {
      showMessage("Invalid email", "error")
    } else if (error.code === 'auth/weak-password') {
      showMessage("Weak password", "error")
    } else if (error.code) {
      showMessage("Something went wrong", "error")
    }
  }
   }
  
  const handelGitHub = async (e)=>{
   e.preventDefault()
   const provider = new GithubAuthProvider()
   try{
      const res = await signInWithPopup(auth, provider)
      showMessage("welcome" + res.user.displayName)
      navigate("/profile")
   } catch(error){
     console.log(error)
   }
  }

  const handelGoogle = async(e)=>{
   e.preventDefault()
   const provider = new GoogleAuthProvider()
   try{
    const res = await signInWithPopup(auth, provider) 
    showMessage('welcome' + res.user.displayName)
    navigate('/profile')
   }catch(error){
     console.log(error)
   }
  }

  
  return (
    <div className='conten-form'>
       <form onSubmit={handelSubmit} >
         <h3>reguister :</h3>
         <input type='email' name="email" />
         <input type='password' name='password' />
         <button className='form-button' >send</button>
        </form>
     <div className='conten-button'>
       <h3>login with :</h3>
        <div> <button onClick={handelGitHub}>git hub</button>
       <button onClick={handelGoogle} >email</button></div>
       <a  href='/signing' ><p>signin</p></a>
     </div>
 
    </div>
   )
}
