function component() {
  let element = document.createElement('div');

  element.innerHTML = 'webpack dev server working';

  return element;
}

document.body.appendChild(component());
