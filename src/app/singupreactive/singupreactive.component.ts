import { Component, OnInit} from '@angular/core';
import { FormBuilder, FormGroup, FormControl,Validators } from '@angular/forms';
import { AuthService } from '../auth.service';
import * as firebase from 'firebase/app';
import 'firebase/auth';
import 'firebase/firestore';

@Component({
  selector: 'app-singupreactive',
  templateUrl: './singupreactive.component.html',
  styleUrls: ['./singupreactive.component.css']
})
export class SingupreactiveComponent implements OnInit {

  myForm: FormGroup;
  message: string = "";
  userError: any;
  constructor(public fb: FormBuilder, public authService: AuthService) {
    this.myForm = this.fb.group({
      firstName: ['', [Validators.required]],
      lastName: ['', [Validators.required]],
      email: ['', [Validators.required]],
      password:['', [Validators.required, Validators.minLength(8)]],
      confirmPassword: ['', [Validators.required]],
    },
    {
      validators: this.checkConfirmPassword("password", "confirmPassword")
    })
   }

  ngOnInit() {
  }

  // onSubmit(signupform)
  // {
  //   let email: string = signupform.value.email;
  //   let password : string = signupform.value.password;
  //   let firstname: string = signupform.value.firstName;
  //   let lastname: string = signupform.value.lastName;
  //   firebase.auth().createUserWithEmailAndPassword(email, password)
  //   .then((response)=>
  //   {
  //     console.log(response);
  //     let randomNumber = Math.floor(Math.random() * 1000);
  //     response.user.updateProfile({
  //       displayName: firstname + " " + lastname,
  //       photoURL: "https://api.adorable.io/avatars/" + randomNumber,
  //     }).then(()=>
  //     {
  //         this.message = "You have successfully signed up.";
  //     })
  //   }).catch((error)=>{
  //     console.log(error);
  //     this.userError = error;
  //   })
  // } 
  //to be used without any service


  onSubmit(signupform)
  {
    let email: string = signupform.value.email;
    let password : string = signupform.value.password;
    let firstname: string = signupform.value.firstName;
    let lastname: string = signupform.value.lastName;
    
    this.authService.signup(email, password, firstname, lastname)
    .then((user: any)=>
    {
        firebase.firestore().collection('users').doc(user.uid).set({
          firstName: signupform.value.firstName,
          lastName: signupform.value.lastName,
          email: signupform.value.email,
          photoURL: user.photoURL,
          interests: "",
          bio: "",
          hobbies: "",
        }).then(()=>
        {
          this.message = "You have successfully signed up.";
        })
          
    }).catch((error)=>{
      console.log(error);
      this.userError = error;
    })
  }

  checkConfirmPassword(passwordKey: string, confirmPasswordKey: string)
  {
    return (group: FormGroup) =>
    {
      let password = group.controls[passwordKey];
      let confirmPassword = group.controls[confirmPasswordKey];
      if(password.value == confirmPassword.value)
        return;
      else
        {
          confirmPassword.setErrors({
            notEqualToPassowod: true,
          })
        }
    }
  }

}
