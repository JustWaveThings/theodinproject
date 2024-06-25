import { Controller } from '@hotwired/stimulus';
import * as SlimSelect from 'slim-select';

export default class SlimSelectElement extends Controller {
  connect() {
    this.slimSelect = new SlimSelect({
      select: this.element,
    });
  }
}
