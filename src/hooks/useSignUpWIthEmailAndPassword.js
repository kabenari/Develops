import { useCreateUserWithEmailAndPassword } from 'react-firebase-hooks/auth';
import { auth, firestore } from '../firebase/firebase.js';
import { doc,setDoc } from "firebase/firestore";

const useSignUpWithEmailAndPassword = ()=>{
    const [createUserWithEmailAndPassword,user, loading, error] = useCreateUserWithEmailAndPassword(auth);

    const signup = async (inputs) =>{
        if(!inputs.email || !inputs.password || !inputs.username || !inputs.fullname){
            console.log("fill");
            return
        }

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs.password)
            if(!newUser && error){
                console.log(error);
                return
            }

            if(newUser){
                const useDoc = {
                    uid: newUser.user.uid,
                    email: inputs.email,
                    username: inputs.username,
                    fullname: inputs.fullname,
                    bio: "",
                    profilePicURL: "",
                    followers: [],
                    following: [],
                    posts: [],
                    createdAt: Date.now(),
                };
                await setDoc(doc(firestore, "users", newUser.user.uid), useDoc);
                localStorage.setItem("user-info",JSON.stringify(useDoc))
            }

        } catch (error) {
            console.log(error);
        }
    }

    return {error,loading,signup};

}

export default useSignUpWithEmailAndPassword

