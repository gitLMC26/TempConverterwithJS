function tempConversion() {
    let num_input = document.querySelector("#input_num").value;
    let num_temp = document.querySelector("#temp_input").value;
    let result_temp = document.querySelector("#temp_result").value;

    // Celsius > F, K, R
    if(num_temp==="celsius" && result_temp==="fahrenheit")
    {
        if(num_input!="")
        {
            const F = (parseFloat(num_input) * (9/5) + 32);9
            document.querySelector("#result_num").value = parseFloat(F).toFixed(2)+" "+"°F";
        }

        else{
            document.querySelector("#result_num").value ="";
        }
    }

    else if(num_temp==="celsius" && result_temp==="kelvin")
    {
        if(num_input!="")
        {
            const K = (parseFloat(num_input) + 273.15);
            document.querySelector("#result_num").value = parseFloat(K).toFixed(2)+" "+"°K";
        }

        else{
            document.querySelector("#result_num").value ="";
        }
    }

    else if(num_temp==="celsius" && result_temp==="rankine")
    {
        if(num_input!="")
        {
            const R = (parseFloat(num_input) + 273.15) * (9/5);
            document.querySelector("#result_num").value = parseFloat(R).toFixed(2)+" "+"°R";
        }

        else{
            document.querySelector("#result_num").value ="";
        }
    }

    // Fahrenheit > C, K, R
    else if(num_temp==="fahrenheit" && result_temp==="celsius")
    {
        if(num_input!="")
        {
            const C = (parseFloat(num_input) - 32) * (5/9);
            document.querySelector("#result_num").value = parseFloat(C).toFixed(2)+" "+"°C";
        }

        else{
            document.querySelector("#result_num").value ="";
        }
    }

    else if(num_temp==="fahrenheit" && result_temp==="kelvin")
    {
        if(num_input!="")
        {
            const K = (parseFloat(num_input) - 32) * (5/9) + 273.15;
            document.querySelector("#result_num").value = parseFloat(K).toFixed(2)+" "+"°K";
        }

        else{
            document.querySelector("#result_num").value ="";
        }
    }

    else if(num_temp==="fahrenheit" && result_temp==="rankine")
    {
        if(num_input!="")
        {
            const R = (parseFloat(num_input) - 32) * (5/9) + 273.15;
            document.querySelector("#result_num").value = parseFloat(R).toFixed(2)+" "+"°R";
        }

        else{
            document.querySelector("#result_num").value = "";
        }
    }

    // Kelvin > C, F, R
    else if(num_temp==="kelvin" && result_temp==="celsius")
    {
        if(num_input!="")
        {
            const C = parseFloat(num_input) - 273.15;
            document.querySelector("#result_num").value = parseFloat(C).toFixed(2)+" "+"°C";
        }

        else{
            document.querySelector("#result_num").value = "";
        }
    }

    else if(num_temp==="kelvin" && result_temp==="fahrenheit")
    {
        if(num_input!="")
        {
            const F = (parseFloat(num_input) - 273.15) * (9/5) + 32;
            document.querySelector("#result_num").value = parseFloat(F).toFixed(2)+" "+"°F";
        }

        else{
            document.querySelector("#result_num").value = "";
        }
    }
    
    else if(num_temp==="kelvin" && result_temp==="rankine")
    {
        if(num_input!="")
        {
            const R = parseFloat(num_input) * 1.8;
            document.querySelector("#result_num").value = parseFloat(R).toFixed(2)+" "+"°R";
        }
        
        else{
            document.querySelector("#result_num").value = "";
        }
    }

    // Rankine > C, F, K
    else if(num_temp==="rankine" && result_temp==="celsius")
    {
        if(num_input!="")
        {
            const C = (parseFloat(num_input) - 491.67) * (5/9);
            document.querySelector("#result_num").value = parseFloat(C).toFixed(2)+" "+"°C";
        }
        
        else{
            document.querySelector("#result_num").value = "";
        }
    }

    else if(num_temp==="rankine" && result_temp==="fahrenheit")
    {
        if(num_input!="")
        {
            const F = parseFloat(num_input) - 459.67;
            document.querySelector("#result_num").value = parseFloat(F).toFixed(2)+" "+"°F";
        }
        
        else{
            document.querySelector("#result_num").value = "";
        }
    }

    else if(num_temp==="rankine" && result_temp==="kelvin")
    {
        if(num_input!="")
        {
            const K = parseFloat(num_input) * (5/9);
            document.querySelector("#result_num").value = parseFloat(K).toFixed(2)+" "+"°K";
        }
        
        else{
            document.querySelector("#result_num").value = "";
        }
    }

    else if(num_temp==="celsius" && result_temp==="celsius")
    {
        document.querySelector("#result_num").value = num_input+" "+"°C";
    }

    else if(num_temp==="fahrenheit" && result_temp==="fahrenheit")
    {
        document.querySelector("#result_num").value = num_input+" "+"°F";
    }

    else if(num_temp==="kelvin" && result_temp==="kelvin")
    {
        document.querySelector("#result_num").value = num_input+" "+"°K";
    }

    else if(num_temp==="rankine" && result_temp==="rankine")
    {
        document.querySelector("#result_num").value = num_input+" "+"°R";
    }
}