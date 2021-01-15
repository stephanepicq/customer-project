import { FormBuilder, FormGroup, Validators } from "@angular/forms";

export class CustomerModel {
  id: string = "";
  name: string = "";
  value: number = 0;

  formGroup: FormGroup = null;

  constructor() {
    var builder = new FormBuilder();
    this.formGroup = builder.group({});

    var validationCollection = [];
    validationCollection.push(Validators.required);
    validationCollection.push(Validators.pattern("^[0-9]{4,4}?"));

    this.formGroup.addControl("idControl", builder.control('', Validators.compose(validationCollection)));

    this.formGroup.addControl("nameControl", builder.control('', Validators.required));

  }

}
