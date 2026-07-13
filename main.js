function submit(){
    var selfRating = prompt("Enter your self-rating (1-10)");

    var yearsOfExperience = Number(document.getElementById('YOE').value);
    var jobCategory = (yearsOfExperience < 2) ? 'Junior' :
    (yearsOfExperience  < 5) ? 'Mid-Level' :
    (yearsOfExperience < 10) ? 'Senior' :
    'Expert';

    var performanceRating;
    switch(+selfRating) {
        case 10:
        case 9:
            performanceRating = 'Excellent'; break;
        case 8:
        case 7:
            performanceRating = 'Good'; break;
        case 6:
        case 5:
            performanceRating = 'Average'; break;
        default:
            performanceRating = 'Needs Improvement'; break;
    }

    var baseSalary = Number(prompt("Enter your current Salary"));
    var bonus;
    switch (jobCategory){
        case 'Junior':
            bonus = 0.1*baseSalary; break;
        case 'Mid-Level':
            bonus = 0.15*baseSalary; break;
        default:
            bonus = 0.2*baseSalary;
    }
    var finalSalary = baseSalary + bonus;

    var currentHour = new Date().getHours();
    var shift = (currentHour > 9 && currentHour < 18) ? 'Day Shift' : 'Night Shift';
    

    document.getElementById('jobCat').innerText = `You\'re a ${jobCategory}`;
    window.alert(`Your performance rating is ${performanceRating}`);
    document.getElementById('bonus').innerText = `Your bonus is: ${bonus}`;
    document.getElementById('finalSal').innerText = `Your final salary is: ${finalSalary}`;
    console.log(`Current Shift is ${shift}`);
    
}