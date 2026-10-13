const form = document.getElementById("formm");

form.addEventListener("submit", function(e){
    e.preventDefault();
    
    if(!form.checkValidity()){
        form.reportValidity();
        return;
    }

    const oldPanel = document.getElementById("reviewPanel");

    if (oldPanel) {
        oldPanel.remove();
    }

    const data = new FormData(form);

    const p = document.createElement("p");
    p.textContent = "";
    p.style.whiteSpace = "pre-line"; // Taken from AI

    for(const [name, value] of data.entries()){
        p.textContent += `${name}: ${value}\n`;
    }

    const panel = document.createElement("div");
    const title = document.createElement("h2");
    const editBtn = document.createElement("button");
    const submitBtn = document.createElement("button");

    editBtn.textContent = "Edit";
    editBtn.type = "button";
    submitBtn.textContent = "Confirm & Submit";
    submitBtn.type = "button";

    panel.id = "reviewPanel";
    title.textContent = "Review Your Profile";

    panel.appendChild(title);
    panel.appendChild(p);
    panel.appendChild(editBtn);
    panel.appendChild(submitBtn);

    document.body.appendChild(panel);

    form.style.display = "none";
    panel.style.display = "block";

    editBtn.addEventListener("click", function(){
        panel.style.display = "none";
        form.style.display = "block";
    })

    submitBtn.addEventListener("click", function(){
        form.submit();
    })
})