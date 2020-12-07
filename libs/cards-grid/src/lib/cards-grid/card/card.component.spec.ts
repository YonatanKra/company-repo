import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CardComponent } from './card.component';
import { By } from '@angular/platform-browser';

describe('CardComponent', () => {
  let component: CardComponent;
  let fixture: ComponentFixture<CardComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CardComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CardComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it(`should have a title with the title's text`, function() {
    const titleText = 'Title text'
    component.title = titleText;
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('.title')).nativeElement;

    expect(titleElement.textContent).toEqual(titleText);
  });

  it(`should set an image according to the image property`, function() {
    const imageSrc = 'https://image.src/';
    component.imageSrc = imageSrc;
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('.image')).nativeElement;

    expect(titleElement.src).toEqual(imageSrc);
  });

  it(`should set a description according to the description property`, function() {
    const description = 'A nice person';
    component.description = description;
    fixture.detectChanges();

    const titleElement = fixture.debugElement.query(By.css('.description')).nativeElement;

    expect(titleElement.textContent).toEqual(description);
  });
});
