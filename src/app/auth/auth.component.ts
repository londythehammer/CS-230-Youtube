import { Component } from "@angular/core";
import { NgForm } from "@angular/forms";
import { Observable } from "rxjs";
import { AuthService } from "./auth.service";
import { AuthResponse } from "./authResponse";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { environment } from "src/environments/environment";
 
@Component({
    selector: "app-auth",
    templateUrl: "auth.component.html",
})

export class AuthComponent {
    public buttonClicked!: string;
    private authObservable!: Observable<AuthResponse>;
    
    constructor(private authService: AuthService, private auth: AngularFireAuth) {
        
    }

    public onSubmit(data: NgForm) {
        console.log("Button clicked = " + this.buttonClicked);

        if (this.buttonClicked == 'SignUp') {
            this.authObservable = this.authService.signup(data.value.email, data.value.password, data.value.firsname, data.value.lastname, data.value.age);
            console.log(data);
        }
        else if (this.buttonClicked == 'Login') {
            this.authObservable = this.authService.login(data.value.email, data.value.password);
            console.log(data);
        }

        data.resetForm();


        this.authObservable.subscribe(
            (data: AuthResponse) => {
                console.log(data);
            },
            error => {
                console.log(error.error);
            }
        );

        //data.resetForm();
    }
}