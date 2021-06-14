var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    

function submitFullName(){
    event.preventDefault();
    var gender = document.getElementById('genders').value; 
    var date = document.getElementById('date').value;
    date = new Date(date);

    if (gender === 'male'){
        alert(" Since you were born on " + daysOfWeek[date.getDay()] + ',' + " your name is " + maleNames[date.getDay()]);
        document.getElementById('result').innerHTML = maleNames[date.getDay()]
    
    }
    else if (gender === 'female'){
        alert(" Since you were born on " + daysOfWeek[date.getDay()] + ',' + " your name is " + femaleNames[date.getDay()]);
        document.getElementById('result').innerHTML = femaleNames[date.getDay()];
    }
    else{
        alert("Error: Please Input your gender or correct date of birth");'' 
    }

}

