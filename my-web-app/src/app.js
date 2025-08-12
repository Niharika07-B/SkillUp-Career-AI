const app = () => {
    const appContainer = document.getElementById('app');
    appContainer.innerHTML = '<h1>Welcome to My Web App</h1>';
    
    const button = document.createElement('button');
    button.textContent = 'Click Me';
    button.onclick = () => {
        alert('Button was clicked!');
    };
    
    appContainer.appendChild(button);
};

document.addEventListener('DOMContentLoaded', app);