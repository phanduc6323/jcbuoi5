var man = [
    {
      id:1,
      name: "The Cosmo (đen) Quần short kaki",
      code: "TN001",
      price: "150.000",
      image: "https://cdn.santino.com.vn/storage/upload/products/2023/05/quan-short-gio-nam-the-thao-g104-1.webp"
    },
    {
      id:2,
      name: "Quần baggy đen sang trọng QQ",
      code: "TN002",
      price: "200.000",
      image: "https://cdn.santino.com.vn/storage/upload/products/2023/12/quan-short-nam-mau-den-cao-cap.webp"
    },
    {
      id:3,
      name: "Áo thun nam",
      code: "TN003",
      price: "250.000",
      image: "https://cdn.santino.com.vn/storage/upload/products/2023/04/ao-phong-nam-chat-lieu-cotton-e808-01.webp"
    },
    {
      id:4,
      name: "Áo sơ mi tay dài",
      code: "TN004",
      price: "175.000",
      image: "https://cdn.santino.com.vn/storage/upload/products/2023/10/ao-so-mi-nam-dai-tay-cao-cap-s675-01.webp"
    },
  ];
  var woman = [
    {
      id:1,
      name: "Váy Fashion",
      code: "TN011",
      price: "175.000",
      image: "https://milvus.com.vn/wp-content/uploads/2023/08/Milvus-07-1.png"
    },
    {
      id:2,
      name: "Áo thun phối tay ngắn",
      code: "TN012",
      price: "120.000",
      image: "https://milvus.com.vn/wp-content/uploads/2023/08/BRP026WWVI20-1.png"
    },
    {
      id:3,
      name: "Đầm công sở",
      code: "TN013",
      price: "200.000",
      image: "https://milvus.com.vn/wp-content/uploads/2023/08/LZGD001WFOC038.jpg"
    },
    {
      id:4,
      name: "Đồ bộ nữ",
      code: "TN014",
      price: "230.000",
      image: "https://milvus.com.vn/wp-content/uploads/2023/08/BRBC019WBK01.jpg"
    },
  ];
  function listProducts(){
    for (let i=0;i<=man.length-1;i++){
      var demo= '<div class="col-3">';
      demo += '<div class="card" style="width: 18rem">';
      demo += '<img src="'+man[i].image+'"class="card-img-top" style="height:300px;">';
      demo += '<div class="card-body">';
      demo += '<h5 class="card-title">'+man[i].name+'</h5>';
      demo += '<p class="card-text">'+man[i].price+' vnđ</p>';
      demo += '<a href="#" class="btn btn-success" onclick="oder()">Đặt mua</a>'
      demo += '</div>';
      demo += '</div>';
      demo += '</div>';
      console.log(demo);
      document.getElementById("man").innerHTML +=demo;
    }
    for (let i=0;i<=woman.length-1;i++){
      var demo= '<div class="col-3">';
      demo += '<div class="card" style="width: 18rem">';
      demo += '<img src="'+woman[i].image+'"class="card-img-top" style="height:300px;">';
      demo += '<div class="card-body">';
      demo += '<h5 class="card-title">'+woman[i].name+'</h5>';
      demo += '<p class="card-text">'+woman[i].price+' vnđ</p>';
      demo += '<a href="#" class="btn btn-danger" onclick="oder()">Đặt mua</a>'
      demo += '</div>';
      demo += '</div>';
      demo += '</div>';
      console.log(demo);
      document.getElementById("woman").innerHTML +=demo;
    }
  }