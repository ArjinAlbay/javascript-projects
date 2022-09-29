const inputs = document.querySelectorAll(`.control input`);

function handleUpdate() {
  const fixnew = this.dataset.sizing || ``;
  document.documentElement.style.setProperty(
    `--${this.name}`,
    this.value + fixnew
  );
}

inputs.forEach((element) => element.addEventListener(`change`, handleUpdate));
inputs.forEach((element) =>
  element.addEventListener(`mousemove`, handleUpdate)
);
