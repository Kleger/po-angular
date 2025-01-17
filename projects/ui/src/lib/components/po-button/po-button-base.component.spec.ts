import { PoButtonBaseComponent } from './po-button-base.component';

import { expectPropertiesValues } from '../../util-test/util-expect.spec';
import { PoButtonKind } from './po-button-type.enum';
import { ComponentFixture, TestBed } from '@angular/core/testing';

describe('PoButtonBaseComponent', () => {
  let component: PoButtonBaseComponent;

  beforeEach(() => {
    component = new PoButtonBaseComponent();
  });

  const booleanValidTrueValues = [true, 'true', 1, ''];
  const booleanValidFalseValues = [false, 'false', 0];
  const booleanInvalidValues = [undefined, null, 2, 'string'];

  it('should be created', () => {
    expect(component instanceof PoButtonBaseComponent).toBeTruthy();
  });

  it('should update property `p-disabled` with valid values', () => {
    expectPropertiesValues(component, 'disabled', booleanValidTrueValues, true);
    expectPropertiesValues(component, 'disabled', booleanValidFalseValues, false);
  });

  it('should update property `p-disabled` with `false` when invalid values', () => {
    expectPropertiesValues(component, 'disabled', booleanInvalidValues, false);
  });

  it('should update property `p-small` with valid values', () => {
    expectPropertiesValues(component, 'small', booleanValidTrueValues, true);
    expectPropertiesValues(component, 'small', booleanValidFalseValues, false);
  });

  it('should update property `p-small` with `false` when invalid values', () => {
    expectPropertiesValues(component, 'small', booleanInvalidValues, false);
  });

  it('should update property `p-kind` with valid values', () => {
    component.danger = false;
    const validValues = ['primary', 'secondary', 'tertiary', 'danger'];

    expectPropertiesValues(component, 'type', validValues, validValues);
  });

  it('should update property `p-kind` with `secondary` when invalid values', () => {
    const invalidValues = [undefined, null, '', true, false, 0, 1, 'aa', [], {}];

    expectPropertiesValues(component, 'type', invalidValues, 'secondary');
  });

  it('should set `p-danger` with false if `p-kind` is tertiary', () => {
    component.kind = PoButtonKind.tertiary;
    component.danger = true;
    expect(component.danger).toBe(false);
  });

  it('should set `p-danger` with true if `p-kind` is not tertiary', () => {
    component.kind = PoButtonKind.primary;
    component.danger = true;
    expect(component.danger).toBe(true);
  });
});
