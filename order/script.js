let firstName = document.querySelector('#first-name');
let lastName = document.querySelector('#last-name');
let dob = document.querySelector('#dob');

let address = document.querySelector('#address');
let district = document.querySelector('#district');
let city = document.querySelector('#city');
let postcode = document.querySelector('#postcode');
let phone = document.querySelector('#phone');

let product = document.querySelector('#product');

let order = document.querySelector('#order-button');

order.addEventListener('click', (e) => {
    e.preventDefault();
    clearBorder();
    clearError();

    if (firstName.value == '') {
        createBorder(firstName);
        createError(firstName, 'First name is required');
    }

    if (lastName.value == '') {
        createBorder(lastName);
        createError(lastName, 'Last name is required');
    }

    if (dob.value == '') {
        createBorder(dob);
        createError(dob, 'Date of birth is required');
    }

    if (address.value == '') {
        createBorder(address);
        createError(address, 'Address is required');
    }

    if (district.value == '') {
        createBorder(district);
        createError(district, 'District is required');
    }

    if (city.value == '') {
        createBorder(city);
        createError(city, 'City is required');
    }

    if (postcode.value == '') {
        createBorder(postcode);
        createError(postcode, 'Postcode is required');
    }

    if (phone.value == '') {
        createBorder(phone);
        createError(phone, 'Phone is required');
    }
    else {
        let phonePattern = /^[0-9]{10}$/;
        if (!phonePattern.test(phone.value)) {
            createBorder(phone);
            createError(phone, 'Phone is invalid');
        }
    }

    if (product.value == '') {
        createBorder(product);
        createError(product, 'Product is required');
    }
});

function createBorder(element) {
    element.style.border = '2px solid red';
}

function clearBorder() {
    document.querySelectorAll('input').forEach((element) => {
        element.style.border = "";
    });
    document.querySelectorAll('select').forEach((element) => {
        element.style.border = "";
    });
}

function createError(element, message) {
    let error = document.createElement('p');
    error.classList.add('error');
    error.style.color = 'red';
    error.style.marginTop = '10px';
    error.textContent = message;
    element.after(error);
}

function clearError() {
    document.querySelectorAll('.error').forEach((element) => {
        element.remove();
    });
}
