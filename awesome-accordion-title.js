class AwesomeAccordionTitle extends HTMLElement {
  constructor() {
    super();

    this.setAttribute('slot', "accordion-title");
  }

  get slot() {
    return this.getAttribute('value');
  }

  set slot(newValue) {
    this.setAttribute('slot', newValue);
  }

  render() {
    return (
      <p slot="accordion-title">
        <slot></slot>
      </p>
    );
  }
}

customElements.define('awesome-accordion-title', AwesomeAccordionTitle);