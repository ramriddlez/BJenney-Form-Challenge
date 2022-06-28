const reviewForm = document.getElementById('review-form');
const confirm = document.getElementById('submission');
let firstName = document.getElementById("fname").value;
let lastName = document.getElementById("lname").value;

const update = {
    fn: firstName,
    ln: lastName,
    isSub: document.getElementById("submit"),
    email: document.getElementById("check"),
    comment: document.getElementById("comment")
}

reviewForm.addEventListener('submit', (e) => {
    e.preventDefault();

    fetch('https://jsonplaceholder.typicode.com/users', {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
        body: JSON.stringify(update),
    })
        .then((res) => res.json())
        .then((data) => {
            console.log('Successful POST request:', data);
            return data;
        })
        .catch((error) => {
            console.error('Error in POST request:', error);
        });
});