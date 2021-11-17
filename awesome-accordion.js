class AwesomeAccordion extends HTMLElement {

  constructor() {

    super();

    this.attachShadow({mode: 'open'});

    this.changeAccordion = this.changeAccordion.bind(this);

    //defined HTML of the custom accordion
    const accordion = document.createElement('template');
    accordion.innerHTML = `
         <link rel="stylesheet" href="accordionCode.css">
            <div class="accordion-wrapper">
              <button class="accordion active">
                  <slot name="title"></slot>
                  <i class="arrow-pic"><svg width="23" height="13" viewBox="0 0 23 13" xmlns="http://www.w3.org/2000/svg">
                      <path fill-rule="evenodd" clip-rule="evenodd" d="M0.540039 1.6527L1.24714 0.9456L11.5001 11.1986L21.7532 0.945599L22.4603 1.6527L11.5001 12.6128L0.540039 1.6527Z"/>
                  </svg></i>
              </button>
                <div class="panel">
                    <slot ></slot>
                </div>
            </div>
        `;

    this.shadowRoot.appendChild(accordion.content.cloneNode(true));

    //added listeners to buttons
    let button = this.shadowRoot.querySelector('button.accordion');
    button.addEventListener("click", (e) => this.changeAccordion(e))

    //found panels with content of the accordion
    let panel = this.shadowRoot.querySelector('.panel');
    panel.style.height =  `${panel.scrollHeight}px`;
  }

  //defined behaviour of the accordion after a click
  changeAccordion(e) {
    let accordion = this.shadowRoot.querySelector('.accordion');
    let icon = this.shadowRoot.querySelector('.arrow-pic');
    let panel = this.shadowRoot.querySelector('.panel');

    accordion.classList.toggle("active");
    icon.classList.toggle("rotated");
    if (!panel.style.height || panel.style.height === "0px") {
      panel.style.height = panel.scrollHeight + "px";
    } else {
      panel.style.height = "0";
    }
  }
}

customElements.define('awesome-accordion', AwesomeAccordion);