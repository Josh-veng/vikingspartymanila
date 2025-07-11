export class Observer {
  constructor(container, element) {
    this.container = container;
    this.element = element;
  }
  observe = () => {
    const obs = new IntersectionObserver(
      (e) => {
        e.forEach((en) => {
          if (en.isIntersecting) {
            this.element.classList.add("hide");
          } else {
            this.element.classList.remove("hide");
          }
        });
      },
      {
        threshold: 0.5,
      }
    );
    obs.observe(this.container);
  };
}
