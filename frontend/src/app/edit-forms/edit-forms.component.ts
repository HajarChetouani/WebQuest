import { Component, OnInit } from '@angular/core';
import { UserProfileComponent } from '../user-profile/user-profile.component';
import { UserService } from '../shared/user.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-edit-forms',
  templateUrl: './edit-forms.component.html',
  styleUrls: ['./edit-forms.component.css']
})
export class EditFormsComponent implements OnInit {
  /******* Variable *****/
  Create: boolean;
  Formulaire: FormulaireDynamique = {
    titre : '',
    email : localStorage.getItem('email'),
    questions : []
  };
  Alpha = [ 'a', 'b', 'c','d','e','f','g','h','i','j','k','l','m','n','o','p','q','r','s','t','u','v','w','x','y','z'];
  constructor(public userService: UserService, private router: Router) { }
  serverErrorMessages: string;
  FormDetails;
  ngOnInit() {
    this.Create = false;

  }
  //on definit la focntion submit

  onSubmit(): void {


    this.Create = true;
    console.log(this.Formulaire);
    this.userService.Form(this.Formulaire).subscribe(
      res => {
        console.log('le resultat retourné \n');
     console.log(res);
      },
      err => {
        console.log('l erreur retourné \n');

        console.log(err.error.message);
      });


  }

  delete(id): void {

    this.Formulaire.questions.splice(id, 1);
  }
  deleteM(id, ic): void {

    this.Formulaire.questions[id].multiQuest.splice(ic, 1);
  }


  addQuestions(type: number ): void {
    /****
     *  1 - text simple
     *  2 - adresse email
     *  3 - Chiffre
     *  4 - Liste deroulante
     *  5 - Case à cocher
     *  6 - Case à cocher multi
     *  7 - Text long
     *  8 - Question multipe
     */
    let taille= this.Formulaire.questions.length;
    switch (type) {
        case 1 :

          var quest: QuestionSimpleLong = {type: 'Simple', question: '', obligatoire: true};
          this.Formulaire.questions[taille] = quest;
          break;
        case 2 :
          var quest: QuestionSimpleLong = {type: 'Email', question: '', obligatoire: true};
          this.Formulaire.questions[taille] = quest;
         break;

      case 3 :
          var quest: QuestionSimpleLong = {type: 'Chiffre', question: '', obligatoire: true };
          this.Formulaire.questions[taille] = quest;
         break;

      case 4 :
        var questMult: QuestionMulti = { type: 'Liste', question: '', multiQuest: [] };
        this.Formulaire.questions[taille] = questMult;
        break;
      case 5 :
          var questMult: QuestionMulti = { type: 'Case1', question: '', multiQuest: [] };
          this.Formulaire.questions[taille] = questMult;
        break;
      case 6:
        var questMult: QuestionMulti = { type: 'Case2', question: '', multiQuest: [] };
        this.Formulaire.questions[taille] = questMult;
       break;
      case 7 :
          var quest: QuestionSimpleLong = {type: 'Long', question: '', obligatoire: true};
          this.Formulaire.questions[taille] = quest;
          break;
      case 8 :
          var questMult: QuestionMulti = { type: 'MultiQ', question: '', multiQuest: [] };
          this.Formulaire.questions[taille] = questMult;
        break;

    }
  }
  addQuestionMulti(index) {
    let taille= this.Formulaire.questions[index].multiQuest.length;
    var multQ: Question = { question : '', obligatoire : true};
    this.Formulaire.questions[index].multiQuest[taille] = multQ;
    console.log(this.Formulaire.questions[index].multiQuest);
  }
}


export interface FormulaireDynamique {
  titre: string;
  email: String;
  questions: any[];
}


export interface QuestionSimpleLong {
  type: string;
  question: string;
  obligatoire: boolean;

}
export interface QuestionEmail {

}
export interface QuestionChiffre {

}
export interface QuestionListe {

}
export interface QuestionCase {

}
export interface QuestionCaseMulti {

}
export interface Question {
  question: string;
  obligatoire: boolean;
}
export interface QuestionMulti {
  type: string;
  question: string;
  multiQuest: Question[];
}
