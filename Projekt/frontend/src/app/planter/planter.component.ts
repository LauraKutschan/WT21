import { Component, OnInit } from '@angular/core';
import {Plan} from "../shared/plan";
import {BackendService} from "../shared/backend.service";
import {ActivatedRoute} from "@angular/router";
import {FormBuilder, FormGroup, Validators} from "@angular/forms";

@Component({
  selector: 'app-planter',
  templateUrl: './planter.component.html',
  styleUrls: ['./planter.component.css']
})
export class PlanterComponent implements OnInit {
  plans!: Plan[];
  plan!: Plan;
  form: FormGroup;

  id: string = '';

  constructor( private route: ActivatedRoute,
               private bs: BackendService,
               private fb: FormBuilder)
  {
    this.form = this.fb.group(
      {
        forenameControl: ['', Validators.required],
        surnameControl: ['', Validators.required],
        emailControl: ['', Validators.required],
      }
    );
  }

  ngOnInit(): void {
    this.readAll();
    this.id = this.route.snapshot.paramMap.get('id') || '';
    this.readOne(this.id);
    this.form.patchValue({
      plantControl: this.plan?.plant,
      dateControl: this.plan?.date,
      activityControl: this.plan?.activity
    });
  }

  readAll(): void {
    this.bs.getAllPlans().subscribe(
      (
        response: Plan[]) => {
        this.plans = response;
        console.log(this.plans);
        return this.plans;
      },
      error => console.log(error)
    );
  }

  delete(id: string): void {
    console.log("id :" ,id );
  }

  readOne(id: string): void {
    this.bs.getOnePlan(id).subscribe(
      (response: Plan) => {
        this.plan = response;
        console.log(this.plans);
        return this.plans;
      },
      error => console.log(error)
    );
  }

  update(): void {

  }

  cancel(): void {

  }
}
