//sajedur java script

function showInput() {
    // Get the input value
    var inputValue = document.getElementById('studentName').value;

    // Display the input value in the output div
    document.getElementById('output').innerHTML = 'You entered: ' + inputValue;
  }

//salman section

  let btnAdd = document.querySelector('button');
let table = document.querySelector('table');


let nameInput = document.querySelector('#name');
let hindimarks = document.querySelector('#hindi');
let englishmarks = document.querySelector('#english');
let urdumarks = document.querySelector('#urdu');
let mathsmarks = document.querySelector('#maths');
let marathimarks = document.querySelector('#marathi');


btnAdd.addEventListener('click', () => {
    let name = nameInput.value;
    let hindi = parseInt(hindimarks.value);
    let english = parseInt(englishmarks.value);
    let urdu = parseInt(urdumarks.value);
    let maths = parseInt(mathsmarks.value);
    let marathi = parseInt(marathimarks.value);
     

    let grade = (hindi+english+urdu+maths+marathi)
    let gradePercent= (grade/5);
    if (name == "")
     {
        return
    } else if(hindi ==""){
return
    }
    
    else if(english ==""){
return
    }
     else if( urdu==""){
return
    
    } else if(maths ==""){
return
    }
    else if(marathi ==""){
        return
    }
    
    else {
        let template = `
                <tr>
                    <td>${name}</td>
                    <td>${hindi} /100</td>
                    <td>${english} /100</td>
                    <td>${urdu} /100</td>
                    <td>${maths} /100</td>
                    <td>${marathi} /100</td>
                    <td>${gradePercent} % </td>

                </tr>`;

        table.innerHTML += template;
    }
});

