import './styles.scss';
import 'bootstrap';

class Example {
  constructor(element) {
    this.element = element;
  }

  init() {
    this.element.textContent = 'hello, world!';
    console.log('ehu!');
  }
}

const init = () => {
  const element = document.getElementById('point');
  const obj = new Example(element);
  obj.init();
};

init();
