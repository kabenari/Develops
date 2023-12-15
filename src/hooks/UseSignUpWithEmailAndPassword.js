import { useState } from "react";
import {auth, firestore} from '../firebase/firebase'
import {useCreateUserWithEmailAndPassword} from 'react-firebase-hooks/auth'
import { setDoc,doc } from "firebase/firestore";


function useSignUpWithEmailAndPassword() {

    const [
        createUserWithEmailAndPassword,
        user,
        loading,
        error,
      ] = useCreateUserWithEmailAndPassword(auth);

      const signup = async (inputs)=>{

        if(!inputs.email || !inputs.password || !inputs.fullname || !inputs.username){
            console.log("plaese fill");
            return
        }

        try {
            const newUser = await createUserWithEmailAndPassword(inputs.email,inputs,password)
            if(!newUser && error){
                console.log(error);
                return
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
                localStorage.setItem("user-")

            }



        } catch (error) {
            console.log(error);
        }
      }


  return{loading,error,signup}
}

export default useSignUpWithEmailAndPassword
