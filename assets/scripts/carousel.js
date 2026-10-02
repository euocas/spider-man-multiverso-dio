// função carrossel
function selectCarouselItem(selectedButtonElement) {
    if (!selectedButtonElement || !selectedButtonElement.id) return;

    const selectedItem = selectedButtonElement.id;
    const carousel = document.querySelector('.s-cards-carousel');
    if (!carousel) return;

    const transform = carousel.style.transform;
    const rotateY = transform.match(/rotateY\((-?\d+deg)\)/i);
    if (!rotateY) return;

    const rotateYDeg = 120 * (Number(selectedItem) - 1);
    const newTransform = transform.replace(rotateY[0], `rotateY(${rotateYDeg}deg)`);
  
    carousel.style.transform = newTransform;
  
    const activeButtonElement = document.querySelector('.s-controller__button--active');
    if (activeButtonElement) activeButtonElement.classList.remove('s-controller__button--active');
    selectedButtonElement.classList.add('s-controller__button--active');
  }
