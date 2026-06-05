const inputElement = document.getElementById('input') as HTMLInputElement;
const buttonElement = document.getElementById('button') as HTMLButtonElement;

buttonElement.addEventListener('click', () => {
    const inputValue = inputElement.value;
    console.log('Input value:', inputValue);
});