document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user || user.type !== "mestre") {
        window.location.href = "login.html";
        return;
    }

   
    document.getElementById("userName").textContent = user.name;

    
    const loadCampaigns = () => {
        const campaigns = JSON.parse(localStorage.getItem("campaigns")) || [];
        const campaignList = document.getElementById("campaignList");
        campaignList.innerHTML = ""; 

        campaigns.forEach((campaign, index) => {
            const campaignItem = document.createElement("li");
            campaignItem.innerHTML = `
                <strong>${campaign.name}</strong><br>
                Descrição: ${campaign.description}<br>
                Data de início: ${campaign.startDate}<br>
                <button onclick="editCampaign(${index})">Editar</button>
                <button onclick="deleteCampaign(${index})">Excluir</button>
            `;
            campaignList.appendChild(campaignItem);
        });
    };

   
    window.editCampaign = (index) => {
        const campaigns = JSON.parse(localStorage.getItem("campaigns")) || [];
        const campaign = campaigns[index];
        if (campaign) {
            
            document.getElementById("campaignName").value = campaign.name;
            document.getElementById("campaignDescription").value = campaign.description;
            document.getElementById("campaignStartDate").value = campaign.startDate;
            
            localStorage.setItem("editingCampaignIndex", index);
            window.location.href = "criarcampanha.html";
        }
    };

    
    window.deleteCampaign = (index) => {
        const campaigns = JSON.parse(localStorage.getItem("campaigns")) || [];
        campaigns.splice(index, 1); 
        localStorage.setItem("campaigns", JSON.stringify(campaigns));
        loadCampaigns(); 
    };

    
    loadCampaigns();

   
    document.getElementById("logoutBtn").addEventListener("click", function() {
        localStorage.removeItem("loggedUser");
        window.location.href = "login.html";
    });
});



document.addEventListener("DOMContentLoaded", function() {
    const user = JSON.parse(localStorage.getItem("loggedUser"));
    if (!user || user.type !== "mestre") {
        window.location.href = "login.html";
        return;
    }

   
    document.getElementById("userName").textContent = user.name;

    
    const loadCampaigns = () => {
        const campaigns = JSON.parse(localStorage.getItem("campaigns")) || [];
        const campaignList = document.getElementById("campaignList");
        campaignList.innerHTML = ""; 

        campaigns.forEach((campaign, index) => {
            const campaignItem = document.createElement("li");
            campaignItem.innerHTML = `
                <strong>${campaign.name}</strong><br>
                Descrição: ${campaign.description}<br>
                Data de início: ${campaign.startDate}<br>
                <button onclick="editCampaign(${index})">Editar</button>
                <button onclick="deleteCampaign(${index})">Excluir</button>
            `;
            campaignList.appendChild(campaignItem);
        });
    };

    
    window.editCampaign = (index) => {
        const campaigns = JSON.parse(localStorage.getItem("campaigns")) || [];
        const campaign = campaigns[index];
        if (campaign) {

            document.getElementById("campaignName").value = campaign.name;
            document.getElementById("campaignDescription").value = campaign.description;
            document.getElementById("campaignStartDate").value = campaign.startDate;
            
            localStorage.setItem("editingCampaignIndex", index);
            window.location.href = "criarcampanha.html";
        }
    };

    
    window.deleteCampaign = (index) => {
        const campaigns = JSON.parse(localStorage.getItem("campaigns")) || [];
        campaigns.splice(index, 1); 
        localStorage.setItem("campaigns", JSON.stringify(campaigns));
        loadCampaigns(); 
    };

    
    document.getElementById("editProfileBtn").addEventListener("click", function() {
        window.location.href = "editarperfilmestre.html"; // Redireciona para a página de edição
    });

   
    document.getElementById("deleteProfileBtn").addEventListener("click", function() {
        if (confirm("Tem certeza que deseja excluir seu perfil?")) {
         
            const users = JSON.parse(localStorage.getItem("users")) || [];
            const updatedUsers = users.filter(u => u.email !== user.email); // Remove o mestre pelo email
            localStorage.setItem("users", JSON.stringify(updatedUsers));

           
            localStorage.removeItem("loggedUser");

         
            window.location.href = "login.html";
        }
    });

   
    loadCampaigns();

   
    document.getElementById("logoutBtn").addEventListener("click", function() {
        localStorage.removeItem("loggedUser");
        window.location.href = "login.html";
    });
});

        