class Carousel {
  constructor(config) {
    this.target = config.target;
    this.items = config.items;
    this.activeIndex = 0;
    this.animating = false;

    this.createElements();
    this.setupEventListeners();
    this.updateCarousel();
  }

  createElements() {
    this.elements = {
      items: {
        left: this.createItemElement(),
        center: this.createItemElement(),
        right: this.createItemElement(),
        out: this.createItemElement(),
      },
      arrows: {
        left: this.createArrowElement("left"),
        right: this.createArrowElement("right"),
      },
    };

    this.target.appendChild(this.elements.items.left);
    this.target.appendChild(this.elements.items.center);
    this.target.appendChild(this.elements.items.right);
    this.target.appendChild(this.elements.items.out);
    this.target.appendChild(this.elements.arrows.left);
    this.target.appendChild(this.elements.arrows.right);
  }

  createItemElement() {
    const item = document.createElement("div");
    item.classList.add("carousel__item");
    return item;
  }

  createArrowElement(direction) {
    const arrow = document.createElement("div");
    arrow.classList.add("carousel__arrow", `carousel__arrow--${direction}`);
    return arrow;
  }

  setupEventListeners() {
    this.elements.arrows.left.addEventListener("click", () =>
      this.slide(false)
    );
    this.elements.arrows.right.addEventListener("click", () =>
      this.slide(true)
    );
  }

  updateCarousel() {
    this.elements.items.left.style.backgroundImage = `url('${
      this.items[this.getPreviousIndex()].image
    }')`;
    this.elements.items.center.style.backgroundImage = `url('${
      this.items[this.activeIndex].image
    }')`;
    this.elements.items.right.style.backgroundImage = `url('${
      this.items[this.getNextIndex()].image
    }')`;
  }

  slide(forward) {
    if (this.animating) return;

    this.animating = true;
    this.elements.items.out.classList.add("static");

    setTimeout(() => {
      this.elements.items.out.classList.remove("static");
      this.elements.items.out.classList.add(
        forward ? "carousel__item--right" : "carousel__item--left"
      );
      this.elements.items.out.classList.remove(
        forward ? "carousel__item--left" : "carousel__item--right"
      );

      setTimeout(() => {
        this.elements.items.left.classList.add("carousel__item--out");
        this.elements.items.center.classList.remove("carousel__item--center");
        this.elements.items.center.classList.add(
          forward ? "carousel__item--left" : "carousel__item--right"
        );
        this.elements.items.right.classList.remove(
          forward ? "carousel__item--right" : "carousel__item--left"
        );
        this.elements.items.right.classList.add("carousel__item--center");
        this.elements.items.out.classList.remove("carousel__item--out");

        setTimeout(() => {
          this.activeIndex = forward
            ? this.getNextIndex()
            : this.getPreviousIndex();
          this.updateCarousel();
          this.animating = false;
        }, 50);
      }, 50);
    }, 50);
  }

  getPreviousIndex() {
    return this.activeIndex === 0
      ? this.items.length - 1
      : this.activeIndex - 1;
  }

  getNextIndex() {
    return this.activeIndex === this.items.length - 1
      ? 0
      : this.activeIndex + 1;
  }
}

new Carousel({
  target: document.querySelector(".carousel"),
  items: [
    {
      image:
        "https://images.unsplash.com/photo-1606983340126-99ab4feaa64a?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aGFwcHklMjBiaXJ0aGRheSUyMGNha2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80",
    },
    {
      image:
        "https://cdn.pixabay.com/photo/2023/03/14/21/29/birthday-cake-7853211_960_720.jpg",
    },
    {
      image:
        "https://www.deliciaecakes.com/static/eb16aa429dda166b602307d1583b19c5/0f3a1/3d-2448.jpg",
    },
    {
      image: "https://unsplash.it/600/600/?image=1076",
    },
    {
      image: "https://unsplash.it/600/600/?image=1075",
    },
  ],
});
