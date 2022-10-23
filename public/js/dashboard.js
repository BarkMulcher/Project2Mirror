const createBtnHandler = async (event) => {
    event.preventDefault();

    const title = document.querySelector('#will-title').value.trim();
    const content = document.querySelector('#item-desc').value.trim();
    const item_name = document.querySelectorAll('.will-item');
    const itemValues = Array.from(item_name).map( (textarea) => {
        console.log(textarea);
        return textarea.value.trim();
    });

    if (title && content && item_name) {
        const response = await fetch('/api/wills', {
            method: 'POST',
            body: JSON.stringify({ title, content, item_name, itemValues }),
            headers: {
                'Content-Type': 'application/json',
            },
        });

        if (response.ok) {
            document.location.replace('/dashboard');
        } else {
            alert('Failed to create new will.')
        }
    }
};



document
    .querySelector('.new-will-form')
    .addEventListener('submit', createBtnHandler);