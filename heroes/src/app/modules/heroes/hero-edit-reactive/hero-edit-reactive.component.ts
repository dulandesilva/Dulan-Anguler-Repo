import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, FormBuilder, Validators, FormArray } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { HeroService } from '../../../services/hero.service';
import { Address } from '../../../models/hero';

@Component({
  // tslint:disable-next-line:component-selector
  selector: 'DHS-hero-edit-reactive',
  templateUrl: './hero-edit-reactive.component.html',
  styleUrls: ['./hero-edit-reactive.component.css']
})
export class HeroEditReactiveComponent implements OnInit {
 /* heroForm = new FormGroup({
    id: new FormControl(),
    name: new FormControl(),
    alterEgo: new FormControl(),
    specialPower: new FormControl()
  });*/
  powers = ['power1', 'power2'];
heroForm: FormGroup;

  constructor(private route: ActivatedRoute, private heroService: HeroService, private router: Router, private formBuilder: FormBuilder) { }

  ngOnInit() {
    this.createForm();
    this.route.params
    .map(params => params.id)
    .switchMap(id => this.heroService.getHero(id))
    .subscribe(hero => {
      this.createAddressControls(hero.addresses);
     this.heroForm.setValue(hero);

    });
  }
  onSubmit() {
    const hero = this.heroForm.value;
    this.heroService.saveHero(hero).subscribe(h => this.router.navigateByUrl(''));
  }

  createForm() {
    this.heroForm = this.formBuilder.group({
     name: ['', [Validators.required, Validators.minLength(3)]],
     alterEgo: ['', Validators.required],
     specialPower: [''],
     id: [''],
     addresses: this.formBuilder.array([ ])
    });
  }
  createAddressControls(addresses: Address[]) {
      const addressGroups = addresses.map(address => this.formBuilder.group({
        line1: ['', Validators.required],
        state: ['', Validators.required]
      }));
      const formArray = this.formBuilder.array(addressGroups);
      this.heroForm.setControl('addresses', formArray);
  }
  get addresses(): FormArray {
    return this.heroForm.get('addresses') as FormArray;
  }
}

