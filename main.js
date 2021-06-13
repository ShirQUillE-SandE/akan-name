var maleNames = ["Kwasi", "Kwadwo", "Kwabena", "Kwaku", "Yaw", "Kofi", "Kwame"];
    var femaleNames = ["Akosua", "Adwoa", "Abenaa", "Akua", "Yaa", "Afua", "Ama"];
    var daysOfWeek = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday","Saturday"];

function submitFullName(){
    event.preventDefault();
    var gender = document.getElementById('genders').value; 
    var date = document.getElementById('date').value;
    date = new Date(date);

    if (gender === 'male'){
        return(" Since you were born on " + daysOfWeek[date.getDay()] + ',' + " your name is " + maleNames[date.getDay()]);
        document.getElementById('result').innerHTML = maleNames[date.getDay()]
    
    }
    else if (gender === 'female'){
        return(" Since you were born on " + daysOfWeek[date.getDay()] + ',' + " your name is " + femaleNames[date.getDay()]);
        document.getElementById('result').innerHTML = femaleNames[date.getDay()];
    }
    else{
        return("Error: Input your gender or correct date");''
    }

  
}