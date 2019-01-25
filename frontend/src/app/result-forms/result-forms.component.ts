import { Component, OnInit } from '@angular/core';
import { FormulaireDynamique} from '../edit-forms/edit-forms.component';
import { UserService } from '../shared/user.service';
import { Router, ActivatedRoute } from '@angular/router';



@Component({
  selector: 'app-result-forms',
  templateUrl: './result-forms.component.html',
  styleUrls: ['./result-forms.component.css']
})
export class ResultFormsComponent implements OnInit {



formulaires;
  /******* Variable ***/
  Alpha = [ 'a','b','c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  constructor(public userService: UserService, private router: Router, private route: ActivatedRoute) { }
  serverErrorMessages: string;
  ngOnInit() {

    this.userService.getForm(this.route.snapshot.paramMap.get('titre')).then(
      res => {
        //console.log('requete envoyer');
       this.formulaires = res['form'];
        console.log(this.formulaires);
      },
      err => {
       // console.log('erreur ');
        this.serverErrorMessages = err.error.message;
      });

  }

  onSubmit(): void {

  }


}
