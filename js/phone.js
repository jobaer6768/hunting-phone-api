const loadPhone = async (searchText, isShowAll) => {
    const res = await fetch(`https://openapi.programming-hero.com/api/phones?search=${searchText}`)
    const data = await res.json();
    
    const phones = data.data;
    displayPhones(phones, isShowAll);
}

const displayPhones = (phones, isShowAll) => {
    const phoneContainer = document.getElementById('phone-container');
    phoneContainer.textContent = '';

    const showAllBtn = document.getElementById('show-all-btn-container'); 

    if(phones.length > 12 && !isShowAll){
        showAllBtn.classList.remove('hidden');
    }
    else{
        showAllBtn.classList.add('hidden');
    }

    if(!isShowAll){
        phones = phones.slice(0, 12);
    }

    phones.forEach(phone => {
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

    toggleHandler(false);
}

function searchEventHandler(isShowAll){
    toggleHandler(true);

    const searchField = document.getElementById('search-field');
    const searchText = searchField.value;
    console.log(searchText);

    loadPhone(searchText, isShowAll);
}

const toggleHandler = (isLoading) =>{
    const loadingSpinner = document.getElementById('loading-spinner');

    if(isLoading){
        loadingSpinner.classList.remove('hidden');
    }
    else{
        loadingSpinner.classList.add('hidden');
    }
}

const showAllBtnHandler = (isShowAll) =>{
    searchEventHandler(true);
}

// loadPhone();

