import { Button } from '@vaadin/button/vaadin-lit-button.js';
import { SemVer } from 'semver';

const ver = '1.0.0';
const newVersion = (new SemVer(ver)).inc('patch');

console.log(newVersion);
export class MyButton extends Button {

}


// an error