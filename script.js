// Search menu list by letter


    const displayMeal = () => {
    const input = document.getElementById('take-input').value;
   
     const url = `https://www.themealdb.com/api/json/v1/1/search.php?f=${input}`
     fetch(url)
    .then(res => res.json())
    .then(data => mealName (data.meals));}

        const mealName = meals => {

        const mealNameContainer = document.getElementById('search-result');
   
    for (let i = 0; i < meals.length; i++) {
        const element = meals[i];
       
        
        const mealName = document.createElement('div');
        mealName.className = 'food-name';
        const mealInfo = `
        <h3 class="food-list">${element.strMeal}</h3>
        <img onClick="fullDetails('${element.idMeal}')" class="image-size" src="${element.strMealThumb}">`

        mealName.innerHTML = mealInfo;
        mealNameContainer.appendChild(mealName);
        const displayHide = document.getElementById('search-result');
        displayHide.style.display = 'grid';
        const displayHideDetails = document.getElementById('menuDetails');
        displayHideDetails.style.display = 'none';}}



//  Show Details Menu Description 
    const fullDetails = idMeal =>{
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${idMeal}`
     fetch(url)
    .then(res => res.json())
    .then(data => showMenuDetails(data.meals[0]));
 }
 const showMenuDetails = meals =>{
     
       const menuDetails = document.getElementById('menuDetails');
       menuDetails.innerHTML=`
       <img class="detailsImageSize" src="${meals.strMealThumb}">
       <h3>${meals.strMeal}</h3>
       <p>${meals.strIngredient1}</p>
       <p>${meals.strIngredient2}</p>
       <p>${meals.strIngredient3}</p>
       <p>${meals.strIngredient4}</p>
       <p>${meals.strIngredient5}</p>
       <p>${meals.strIngredient6}</p>
       <p>${meals.strIngredient7}</p>
       <p>${meals.strIngredient8}</p>
       <p>${meals.strIngredient9}</p>
       <p>${meals.strIngredient10}</p>

       `
       const displayHide = document.getElementById('search-result');
       displayHide.style.display = 'none';
       const displayHideDetails = document.getElementById('menuDetails');
       displayHideDetails.style.display = 'block';
 }



 

    


  



