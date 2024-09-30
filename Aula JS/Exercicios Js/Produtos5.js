
const produtos = {
    1: { nome: "Sapato", preco: "R$ 99,99" },
    2: { nome: "Bolsa", preco: "R$ 103,89" },
    3: { nome: "Camisa", preco: "R$ 49,98" },
    4: { nome: "Calça", preco: "R$ 89,72" },
    5: { nome: "Blusa", preco: "R$ 97,35" }
  };

  document.getElementById("productForm").addEventListener("submit", function(event) {
    event.preventDefault(); 
  

    const codigoProduto = document.getElementById("productCode").value;
    
   
    const priceAlert = document.getElementById("priceAlert");
    const productName = document.getElementById("productName");
    const priceValue = document.getElementById("priceValue");
  

    const invalidAlert = document.getElementById("invalidAlert");
  
    
    if (produtos[codigoProduto]) {
      
      productName.textContent = produtos[codigoProduto].nome;
      priceValue.textContent = produtos[codigoProduto].preco;
      priceAlert.style.display = "block"; 
      invalidAlert.style.display = "none"; 
    } else {
      
      priceAlert.style.display = "none"; 
      invalidAlert.style.display = "block"; 
      
    }
  });