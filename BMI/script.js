const calculate = document.querySelector('.down');
calculate.addEventListener('click',function(e)
{
    e.preventDefault();
    const height=parseInt(document.querySelector('#height').value);
    const weight=parseInt(document.querySelector('#weight').value);
    const results=document.querySelector('#results');

    if((height===' ') || (height < 0) || (isNaN(height)))
    {
        results.innerHTML="Please provide a valid Height";
    }

    else if((weight===' ') || (weight < 0) || (isNaN(weight)))
    {
        results.innerHTML="Please provide a valid Weight";
    }
    else
    {
        const bmi=(weight/((height*height)/10000)).toFixed(2);

        //display the results
        results.innerHTML=`<span>Your BMI is ${bmi}</span>`
    }
});