let algorithmDiv = document.querySelector(".algorithm_div");
let angle_down = document.querySelector(".angle_down");
let algorithmField = document.querySelector(".algorithm_fieldset");
let selectionDiv = document.createElement("div");
selectionDiv.classList.add("selection_div");

const toggleActive = () => {
  algorithmDiv.classList.toggle("active");
  if (algorithmDiv.classList.contains("algorithm_div")) {
    algorithmDiv.style.border = "2px solid #2694ff";
    algorithmDiv.style.boxShadow = "0 0 5px 0 rgba(23, 103, 252)";
    angle_down.style.filter = "opacity(1)";
  }

  if (algorithmDiv.classList.contains("active")) {
    selectionDiv.innerHTML = `<div class="select_box">
        <p class="para">First come First serve, FCFS</p>
        <p class="para">Shortest Job First, SJF...</p>
        <p class="para">Shortest Remaining Time...</p>
        <p class="para">Round-Robin, RR</p>
        <p class="para">Priority (non-preemptive)</p>
        <p class="para">Priority (preemptive)</p>
    </div>`;

    algorithmField.append(selectionDiv);
    
    const selectBox = selectionDiv.querySelector(".select_box");
    selectBox.addEventListener('click', selectParaFunction);
    
    setDefaultSelection();
  }

  window.removeActiveTimeout = setTimeout(removeActive, 3000);
};

const removeActive = () => {
  algorithmDiv.classList.remove("active");
  algorithmDiv.style.border = "";
  algorithmDiv.style.boxShadow = "";
  angle_down.style.filter = "opacity(0.5)";
  if (selectionDiv.parentNode === algorithmField) {
    algorithmField.removeChild(selectionDiv);
  }
};

const selectParaFunction = (e) => {
  if (e.target.classList.contains("para")) {
    const selectBox = e.target.closest('.select_box');
    const allParas = selectBox.querySelectorAll('.para');
    
    allParas.forEach(p => p.classList.remove('active_para'));
    
    e.target.classList.add('active_para');
    e.target.style.backgroundColor = '#2694ff';
    e.target.style.color = '#fff';
    
    algorithmDiv.querySelector('p').textContent = e.target.textContent;
    
    algorithmDiv.classList.remove("active");
    algorithmDiv.style.border = "";
    algorithmDiv.style.boxShadow = "";
    
    removeActive();
    
    clearTimeout(window.removeActiveTimeout);
  }
};

const setDefaultSelection = () => {
  const firstPara = selectionDiv.querySelector('.para:first-child');
  if (firstPara) {
    firstPara.classList.add('active_para');
    algorithmDiv.querySelector('p').textContent = firstPara.textContent;
    firstPara.style.backgroundColor = '#2694ff';
    firstPara.style.color = '#fff';
  }
};

algorithmDiv.addEventListener("click", toggleActive);