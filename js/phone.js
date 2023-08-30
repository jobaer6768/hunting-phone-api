const loadPhone = async () => {
    const res = await fetch('https://openapi.programming-hero.com/api/phones?search=iphone')
    const data = await res.json();
    
    const phones = data.data;
    displayPhones(phones);
}

const displayPhones = phones => {
    const phoneContainer = document.getElementById('phone-container');

    phones.forEach(phone => {
        console.log(phone);
        const phoneCard = document.createElement('div');
        phoneCard.classList = 'card bg-gray-100 p-4 shadow-xl';
        phoneCard.innerHTML = `
        <figure><img src="${phone.image}" alt="${phone.phone_name}" /></figure>
        <div class="card-body space-y-4">
            <h2 class="text-center font-bold text-black text-3xl">${phone.phone_name}</h2>
            <p class="text-center text-black">There are many variations of passages of available, but the majority have suffered</p>
            <p class="text-center text-black text-2xl font-bold">$999</p>
            <div class="card-actions justify-center">
                <button class="btn btn-primary font-semibold">Show Details</button>
            </div>
        </div> 
        `

        phoneContainer.appendChild(phoneCard);
    });
}

loadPhone();