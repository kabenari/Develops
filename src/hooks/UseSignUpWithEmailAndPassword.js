import {auth, firestore} from '../firebase/firebase'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { setDoc,doc } from "firebase/firestore";
import useShowToast from './useShowToast';


function useSignUpWithEmailAndPassword() {

    const [
        createUserWithEmailAndPassword,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const showToast = useShowToast();

      const signup = async (inputs)=>{

        if(!inputs.email || !inputs.password || !inputs.fullname || !inputs.username){
            showToast("Error","fill everything","error");
            return
        }

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password)
            if(!newUser && error){
                showToast("Error","fill","error");
                return;
            }
            if(newUser){
                const userDoc = {
                    uid:newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    fullname: inputs.fullname,
                    bio:"",
                    profilePicURL:"",
                    followers: [],
                    follwing:[],
                    posts:[],
                    createdAt:Date.now()
                }
                await setDoc(doc(firestore, "users", newUser.user.uid), userDoc);
                localStorage.setItem("user-info",JSON.stringify(userDoc))
            }
        } catch (error) {
            showToast("Error","fill everything","error");
        }
      }


  return{loading,error,signup}
}

export default useSignUpWithEmailAndPassword
