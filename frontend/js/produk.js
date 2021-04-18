

        var dataArray1=[
            {'gambar' :'frontend/images/Mask_Group_55.webp','name' :'carbanet Sauvignon','detail':'Full bodied and lush with sweet blackberry and black-cherry fruit flavors that lead to a long smooth and delicious finish.','harga':'32','stock':'99'},
            {'gambar' :'frontend/images/Mask_Group_53.webp','name' :'Pino Noir','detail':'Light to medium bodied. Soft and smooth with sweet cherry, plum and strawberry fruit flavors that lead to along and delicious finish.','harga':'23','stock':'55'},
            {'gambar' :'frontend/images/Mask_Group_54.webp','name' :'Merlot','detail':'Medium bodied. Rich and soft with licorice, cassis and jam flavors and hints of chocolate that lead to a lush and delicious finish.','harga':'45','stock':'88'},
  
          ]
        const dataarray1 = dataArray1.forEach(fungsiklik)

        function fungsiklik(index)
        {
            console.log(index )
        }
          buildData(dataArray1)
          
        let btnOpen=document.querySelectorAll('.btn-red')
         const btnproduk=   btnOpen.forEach(btn =>{
             btn.addEventListener('click',function(){
                window.location=`frontend/page/detailProduk.html`;
             })
         })


        console.log(btnproduk)

          function buildData(data){
              var card= document.getElementById('card-bottle')
          
          
                
              
                        var row =`   
                      <div class="col-md-2 col-sm-3 col-4 "  data-aos="fade-up" data-aos-easing="linear"
                       data-aos-duration="500"  id="animasisatu">
                         <card class="card card-bottle text-center d-flex flex-column">
                      <img src="${data[0].gambar}" alt=""  >
                      <form action="">
                        <button type="button"  class="btn-red">${data[0].name} </button>
                      </form>
                   
                      </card>
                      </div>
            
    
                    `
                    var row1 =`   
                      <div class="col-md-2 col-sm-3 col-4 "  data-aos="fade-up" data-aos-easing="linear"
                       data-aos-duration="600" data-aos-delay="200" id="animasisatu">
                         <card class="card card-bottle text-center d-flex flex-column">
                      <img src="${data[1].gambar}" alt=""  >
                      
                      <form action="">
                        <button type="button" class="btn-red" >${data[1].name} </button>
                      </form>
                      </card>
                      </div>
            
    
                    `
                    var row2 =`   
                      <div class="col-md-2 col-sm-3 col-4 "  data-aos="fade-up" data-aos-easing="linear"
                       data-aos-duration="700" data-aos-delay="300" id="animasisatu">
                         <card class="card card-bottle text-center d-flex flex-column">
                      <img src="${data[2].gambar}" alt=""  >
                      <form action="">
                        <button type="button" class="btn-red" >${data[2].name} </button>
                      </form>
                      </card>
                      </div>
            
    
                    `
                        card.innerHTML += row+=row1+=row2
                      
                  
              
  
          }
       
          
          var dataArray2=[
            {'gambar' :'frontend/images/chardonnay.webp','name' :'chardonnay','detail':'Medium Bodies. Rich and lush with sweet apple, pear and guava flavors that lead to a long and delicious finish.'},
            {'gambar' :'frontend/images/pinot.webp','name' :'Pinot','detail':'Light and Crip. Sweet honeysuckle and green apples with hints of lemon and lime. Crips and Balanced with a fresh and delicious finish.'},
            {'gambar' :'frontend/images/sauvignon.webp','name' :'sauvignon','detail':'Medium bodied with Sweet passion fruit, kiwi and white peach. Fresh and balanced with a crip and delicious finish.'},
            {'gambar' :'frontend/images/moscatto.webp','name' :'moscatto','detail':'Light and sweet with orange blossom, honeysuckle and pear flavors. Lush and balanced with a long delicious finish.'},
  
          ]
          buildDatadua(dataArray2)
  
          function buildDatadua(data){
            var cardd= document.getElementById('card-bottle-gold')
            var row =`  <div class="col-md-2 col-sm-3 col-3 ">
              <card class="card card-bottle d-flex flex-column" data-aos="fade-up" data-aos-easing="linear"
              data-aos-duration="300" >
                    <img src="${data[0].gambar}" alt=""  >
                    <button type="button">${data[0].name} </button>
              </card>
          </div>`
          var row1 =`  <div class="col-md-2 col-sm-3 col-3 ">
              <card class="card card-bottle d-flex flex-column" data-aos="fade-up" data-aos-easing="linear"
              data-aos-duration="400" data-aos-delay="200" >
                    <img src="${data[1].gambar}" alt=""  >
                    <button type="button">${data[1].name} </button>
              </card>
          </div>`
          var row2 =`  <div class="col-md-2 col-sm-3 col-3 ">
              <card class="card card-bottle d-flex flex-column" data-aos="fade-up" data-aos-easing="linear"
              data-aos-duration="500" data-aos-delay="300" >
                    <img src="${data[2].gambar}" alt=""  >
                    <button type="button">${data[2].name} </button>
              </card>
          </div>`
          var row3 =`  <div class="col-md-2 col-sm-3 col-3 ">
              <card class="card card-bottle d-flex flex-column" data-aos="fade-up" data-aos-easing="linear"
              data-aos-duration="600"  data-aos-delay="400">
                    <img src="${data[3].gambar}" alt=""  >
                    <button type="button">${data[3].name} </button>
              </card>
          </div>`
          cardd.innerHTML +=row+=row1+=row2+=row3
          }


         