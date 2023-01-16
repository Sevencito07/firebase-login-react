
import { useNavigate } from 'react-router-dom';
import { getAuth, onAuthStateChanged } from "firebase/auth";
import { signOut } from 'firebase/auth';
import { showMessage } from './showMessage';
import { auth } from './firebase';


export default function Profile() {


  const navigate = useNavigate()
  const auths = getAuth();
    onAuthStateChanged(auths, (user) => {
  if (user) {
      console.log("hola user")
      const uid = user.uid;
    // ...
  } else {
    console.log("no hay user")
    navigate('/login')
    // User is signed out
    // ...
  }})

  const logout = async(e)=>{
    e.preventDefault()
    try{
       await signOut(auth)
       showMessage("close session")
    }catch(error){
      console.log(error.message)
    }
  } 


  return (
    <div>
      <div>
        <div className='conten-profile'><h2>welcome </h2>
        <button className='conten-logout' onClick={logout}>logout</button></div>
        <p>
Mattis ullamcorper velit sed ullamcorper morbi tincidunt. Quam nulla porttitor massa id neque aliquam vestibulum. Facilisis leo vel fringilla est. Est placerat in egestas erat. Nunc consequat interdum varius sit amet. Diam donec adipiscing tristique risus nec feugiat in. Tellus orci ac auctor augue. Augue interdum velit euismod in. Tempus iaculis urna id volutpat lacus laoreet. Dictum varius duis at consectetur. Ultrices dui sapien eget mi proin sed libero enim sed. Mollis nunc sed id semper risus in hendrerit gravida.

Eu augue ut lectus arcu bibendum at. Amet massa vitae tortor condimentum lacinia. Elit ut aliquam purus sit amet luctus venenatis. Convallis a cras semper auctor. Est velit egestas dui id ornare. Ultricies tristique nulla aliquet enim tortor at auctor urna nunc. Dignissim convallis aenean et tortor at risus. At consectetur lorem donec massa sapien faucibus et. Elit scelerisque mauris pellentesque pulvinar pellentesque habitant morbi. Nulla facilisi cras fermentum odio eu feugiat pretium nibh ipsum.

Etiam non quam lacus suspendisse faucibus interdum posuere lorem. Massa massa ultricies mi quis hendrerit dolor magna eget. Commodo viverra maecenas accumsan lacus vel. Bibendum enim facilisis gravida neque convallis a cras semper. Sapien faucibus et molestie ac. Adipiscing vitae proin sagittis nisl rhoncus. Ac tincidunt vitae semper quis lectus nulla at volutpat diam. Semper eget duis at tellus at urna condimentum mattis. Fames ac turpis egestas sed tempus urna et. Amet est placerat in egestas. Integer enim neque volutpat ac tincidunt. Tristique nulla aliquet enim tortor at auctor urna nunc id. Sed risus ultricies tristique nulla. Velit dignissim sodales ut eu. Massa enim nec dui nunc mattis enim ut. Mattis rhoncus urna neque viverra justo nec. Ullamcorper a lacus vestibulum sed arcu non odio.

Senectus et netus et malesuada fames ac turpis egestas maecenas. Lobortis mattis aliquam faucibus purus in. Convallis a cras semper auctor. Lorem ipsum dolor sit amet consectetur adipiscing elit duis. Risus nec feugiat in fermentum posuere urna nec tincidunt praesent. Nec nam aliquam sem et. Dictum sit amet justo donec enim diam. Turpis egestas sed tempus urna et pharetra pharetra. Etiam dignissim diam quis enim lobortis scelerisque fermentum. Volutpat blandit aliquam etiam erat velit scelerisque in dictum non. Fermentum leo vel orci porta.</p>
      </div>
   
      
    </div>

  )
}
