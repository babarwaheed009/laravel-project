

// ---------remove------
  // $("#sc").on("click" , function(e){
  //   var check=e.target.classList.contains("remove-it");
  //   if(check){
  //     e.target.parentElement.parentElement.remove();

  //     var a=$(".number");
  //     var sum=0;
  //    for(var i=0;i<a.length;i++){
  //      sum=sum+parseInt(a[i].innerHTML)
  //    }
  //    $("#total").html("<h1 class='text-muted'>Total</h1>" +"$"+sum)
  //   }
  // }) 

 

// ----------------- ----------Scroll Button-----------------------------------
var scrol=document.getElementById("scroll");
scrol.addEventListener("click" , function(){
  $(window).scrollTop(0)
})

$(document).ready(function(){
  $(window).scroll(function(){
    if($(this).scrollTop() > 400){
      $("#scroll").css("display" , "block")
    }else{
      $("#scroll").css("display" , "none")
    }
  })
})

// -------------------------------Customize theme--------------------------------

var cbtn=document.getElementById("btn");
var cus=document.getElementById("custom");
cbtn.addEventListener("click" , function(){
  if(this.style.right <= "0px"){
    this.style.right="298px";
    cus.style.right="0px";
  }else if(this.style.right <= "298px"){
    this.style.right="0px";
    cus.style.right="-300px";
  }
})


document.getElementById("pri").addEventListener("click" , function(){
  $(".nav-link").addClass("par").removeClass("default sec info war");
  $("#cart").addClass("par").removeClass("default sec info war");
  $("#active").addClass("par-active").removeClass("default-active war-active sec-active info-active");
  $("span").addClass("text-primary").removeClass("text-warning text-info text-success text-secondary");
  $(".total").addClass("border-primary").removeClass("border-warning border-info border-success border-secondary");
  $("#car-inner").addClass("bg-primary").removeClass("bg-warning bg-info bg-success bg-secondary");
  $(".brdr-botm").addClass("header-pri").removeClass("header-war header-sec header-info header");
  $(".h3-brdr").addClass("h3-pri").removeClass("h3-war h3-sec h3-info h3");
  $(".cart").addClass("btn-outline-primary").removeClass("btn-outline-success btn-outline-warning btn-outline-secondary btn-outline-info");
  $(".price").addClass("text-primary").removeClass("text-success text-warning text-secondary text-info");
  $("#cart-header").addClass("header-pri").removeClass("header-war header-sec header-info header");
  $("#submit-btn").addClass("btn-primary").removeClass("btn-success btn-warning btn-info btn-secondary");
  $(".plus").addClass("btn-primary").removeClass("btn-success btn-warning btn-info btn-secondary");
  $(".minus").addClass("btn-primary").removeClass("btn-success btn-warning btn-info btn-secondary");
})

document.getElementById("war").addEventListener("click" , function(){
  $(".nav-link").addClass("war").removeClass("default par info sec");
  $("#cart").addClass("war").removeClass("default par info sec");
  $("#active").addClass("war-active").removeClass("default-active par-active sec-active info-active");
  $("span").addClass("text-warning").removeClass("text-primary text-info text-success text-secondary");
  $(".total").addClass("border-warning").removeClass("border-primary border-info border-success border-secondary");
  $("#car-inner").addClass("bg-warning").removeClass("bg-primary bg-info bg-success bg-secondary");
  $(".brdr-botm").addClass("header-war").removeClass("header-pri header-sec header-info header");
  $(".h3-brdr").addClass("h3-war").removeClass("h3-pri h3-sec h3-info h3");
  $(".cart").addClass("btn-outline-warning").removeClass("btn-outline-success btn-outline-primary btn-outline-secondary btn-outline-info");
  $(".price").addClass("text-warning").removeClass("text-success text-primary text-secondary text-info");
  $("#cart-header").addClass("header-war").removeClass("header-pri header-sec header-info header");
  $("#submit-btn").addClass("btn-warning").removeClass("btn-success btn-primary btn-info btn-secondary");
  $(".plus").addClass("btn-warning").removeClass("btn-success btn-primary btn-info btn-secondary");
  $(".minus").addClass("btn-warning").removeClass("btn-success btn-primary btn-info btn-secondary");
  
})

document.getElementById("info").addEventListener("click" , function(){
  $(".nav-link").addClass("info").removeClass("default sec par war");
  $("#cart").addClass("info").removeClass("default sec par war");
  $("#active").addClass("info-active").removeClass("default-active war-active sec-active par-active");
  $("span").addClass("text-info").removeClass("text-warning text-primary text-success text-secondary");
  $("#car-inner").addClass("bg-info").removeClass("bg-warning bg-primary bg-success bg-secondary");
  $(".brdr-botm").addClass("header-info").removeClass("header-war header-sec header-pri header");
  $(".total").addClass("border-info").removeClass("border-warning border-primary border-success border-secondary");
  $(".h3-brdr").addClass("h3-info").removeClass("h3-war h3-sec h3-pri h3");
  $(".cart").addClass("btn-outline-info").removeClass("btn-outline-success btn-outline-warning btn-outline-secondary btn-outline-primary");
  $(".price").addClass("text-info").removeClass("text-success text-warning text-secondary text-primary");
  $("#cart-header").addClass("header-info").removeClass("header-war header-sec header-pri header");
  $("#submit-btn").addClass("btn-info").removeClass("btn-success btn-warning btn-primary btn-secondary");
  $(".plus").addClass("btn-info").removeClass("btn-success btn-warning btn-primary btn-secondary");
  $(".minus").addClass("btn-info").removeClass("btn-success btn-warning btn-primary btn-secondary");
})

document.getElementById("sec").addEventListener("click" , function(){
  $(".nav-link").addClass("sec").removeClass("default par info war");
  $("#cart").addClass("sec").removeClass("default par info war");
  $("#active").addClass("sec-active").removeClass("default-active war-active par-active info-active");
  $("span").addClass("text-secondary").removeClass("text-warning text-info text-success text-primary");
  $("#car-inner").addClass("bg-secondary").removeClass("bg-warning bg-info bg-success bg-primary");
  $(".total").addClass("border-secondary").removeClass("border-warning border-info border-success border-primary");
  $(".brdr-botm").addClass("header-sec").removeClass("header-war header-pri header-info header");
  $(".h3-brdr").addClass("h3-sec").removeClass("h3-war h3-pri h3-info h3");
  $(".cart").addClass("btn-outline-secondary").removeClass("btn-outline-success btn-outline-warning btn-outline-primary btn-outline-info");
  $(".price").addClass("text-secondary").removeClass("text-success text-warning text-primary text-info");
  $("#cart-header").addClass("header-sec").removeClass("header-war header-pri header-info header");
  $("#submit-btn").addClass("btn-secondary").removeClass("btn-success btn-warning btn-info btn-primary");
  $(".plus").addClass("btn-secondary").removeClass("btn-success btn-warning btn-info btn-primary");
  $(".minus").addClass("btn-secondary").removeClass("btn-success btn-warning btn-info btn-primary");
})

document.getElementById("default").addEventListener("click" , function(){
  $(".nav-link").addClass("default").removeClass("par info war sec"); 
  $("#cart").addClass("default").removeClass("par info war sec"); 
  $("#active").addClass("default-active").removeClass("sec-active war-active par-active info-active");
  $("span").addClass("text-success").removeClass("text-warning text-info text-secondary text-primary");
  $(".total").addClass("border-success").removeClass("border-warning border-info border-primary border-secondary");
  $("#car-inner").addClass("bg-success").removeClass("bg-warning bg-info bg-secondary bg-primary");
  $(".brdr-botm").addClass("header").removeClass("header-war header-pri header-info header-sec");
  $(".h3-brdr").addClass("h3").removeClass("h3-war h3-pri h3-info h3-sec");
  $(".cart").addClass("btn-outline-success").removeClass("btn-outline-primary btn-outline-warning btn-outline-secondary btn-outline-info");
  $(".price").addClass("text-success").removeClass("text-primary text-warning text-secondary text-info");
  $("#cart-header").addClass("header").removeClass("header-war header-sec header-info header-pri");
  $("#submit-btn").addClass("btn-success").removeClass("btn-primary btn-warning btn-info btn-secondary");
  $(".plus").addClass("btn-success").removeClass("btn-primary btn-warning btn-info btn-secondary");
  $(".minus").addClass("btn-success").removeClass("btn-primary btn-warning btn-info btn-secondary");
})





$("#cart-items-no").css("display" , "none")
// ---------------------------Ajax & Cart with table------------------------


$(document).ready(function(){

  // ----watch----
  
$.ajax({
  url:`https://5ea949400ebc1d0016490a5e.mockapi.io/api/v1/User`,
  beforeSend:function loader(){
    var load=`<i class="fas fa-spinner fa-2x fa-spin"></i>`;
    $(".loader").html(load);
  },
  success:function success(data){
     data.forEach(value=>{
        var data=` <div class="col-md-3">
        <div class="card">
           <img src="${value.image}" alt="">
           <div class="card-body">
             <h4>${value.name}</h4>
             <div class="text-center">
                <button class="btn btn-success minus">-</button>
                <input class="quan" style="width:10%" type="number" value="1" disabled>
                <button class="btn btn-success plus">+</button>
              </div>
             <h4 class="text-success price float-left">$${value.price}</h4>
             <button img="${value.image}" price="${value.price}" class="btn cart btn-outline-success float-right"><i class="fas fa-shopping-cart"></i></button>
             <button data="${value.description}" brand="${value.brand}"  year="${value.year}"class="showModal text-light btn btn-warning float-left w-100 mt-4">View More</button>
           </div>
        </div>
      </div>`;
      

      if(value.type==1){
        $("#watch-block").append(data);
      }else if(value.type==2){
        $("#clothes-block").append(data);
      }else{
        $("#camera-block").append(data);
      }
     })
    //  ---------multiply carts clicks-------

     $(".cart").on("click" , function(){
       $(".alert").css("display" , "block");
       setTimeout(function(){
        $(".alert").fadeOut();
       } , 3000)
         var name=$(this).prev().prev().prev().html();
          var quan=$(this).prev().prev().children('input').val();
          var price=$(this).attr("price");
        var totalprice=parseInt(quan)*parseInt(price);

          var tr=document.createElement("tr");
          var No=$("tr");
          $("#cart-items-no").html(No.length);
          $("#cart-items-no").css("display" , "inline-block");
          var tdata=` <td>${No.length}</td>
          <td class='name'>${name}</td>
          <td>$<span class="number">${totalprice}</span></td>
          <td><button class="btn btn-danger remove-it">Remove</button></td>`;
          tr.innerHTML=tdata;
          $("#tbody").append(tr);
          
          // ---Total Price----
          var a=$(".number");
          var sum=0;
         for(var i=0;i<a.length;i++){
           sum=sum+parseInt(a[i].innerHTML)
         }
         $("#total").html("<h1 class='text-muted'>Total</h1>" +"$"+sum);
// -----------remove----------------
         $(".remove-it").each((a,v)=>{
           $(v).on("click" , function(){
             /*Delete modal show start
             it works like confirm()
             */
             $("#del-msg").modal("show");
             $(".sure").click(function(){
             $(v).parent().parent().remove();
             // cart items number
             var No=$("tr");
             for(var i=0;i<No.length;i++){
               $("#cart-items-no").html(i)
             }
             $("#cart-items-no").css("display" , "inline-block");
             // total price
             var a=$(".number");
                 var sum=0;
                for(var i=0;i<a.length;i++){
                  sum=sum+parseInt(a[i].innerHTML)
                }
                $("#total").html("<h1 class='text-muted'>Total</h1>" +"$"+sum)
   
                if($("#tbody").html()==""){
                 $("#empty").fadeIn();
                 $(".total").css("display" , "none");
                 $("#table").css("display" , "none");
               }else{
                 $("#empty").fadeOut();
                 $(".total").css("display" , "block");
                 $("#table").css("display" , "block");
               }
            })
           
           
              })
          })
        
    // ----------------remove button animation-----------------
        $(".remove-it").on("mouseenter" , function(){
          $(this).html(`<i class="fas fa-trash animate__animated animate__bounce" style="padding:0px 21px"></i>`)
        })

        $(".remove-it").on("mouseleave" , function(){
          $(this).html(`<span class="animate__animated animate__fadeIn">Remove</span>`)
        })

     })

     $(".minus").css("display","none");
     $(".plus").click(function(){
        var input=$(this).prev().val();
         input++;
         $(this).prev().val(input);
         if(input > 1){
           $(this).prev().prev().css("display","inline-block");
         }
     })

     $(".minus").click(function(){
      var input=$(this).next().val();
       input--;
       $(this).next().val(input);
       if(input < 2){
        $(this).css("display","none");
      }
   })

     $(".showModal").on("click" , function(){
      $("#itemModal").modal("show");
      var name=$(this).prev().prev().prev().html();
      $("#mh").html(name);
      var des=$(this).attr("data");
      $("#des").html(des);
      var brand=$(this).attr("brand");
      $("#brand").html(brand);
      var year=$(this).attr("year");
      $("#year").html(year);
      var img=$(this).parent().prev().attr("src");
      $("#modal-img").attr("src" , img)
       
    })
    
   var col=$(".card");
   col.each((v,i)=>{
     $(i).on({
     "mouseenter":function(){
       $(i).css({"box-shadow":"0px 0px 10px grey" , "transition":"0.3s" , "margin-top":"-3px"})
     },

     "mouseleave":function(){
      $(i).css({"box-shadow":"none","margin-top":"0px"})
    }
  })
   })
  },
  complete:function com(){
    $(".loader").fadeOut();
  }

})

$("#active").on("click" , function(){
  $("#hide").css("display" , "block");
  $("#shop").css("display" , "none");
  $("#active").addClass("default-active");
  $("#cart").removeClass("default-active");
  $(".s").css({"cursor" : "pointer"});
  $(".s").addClass("default");;
})

$("#form").submit(function(e){
e.preventDefault();
 var fname=$("#fname").val();
 var lname=$("#lname").val();
 var email=$("#email").val();
 var add=$("#address").val();

 if(fname==""){
   $("#fname").addClass("is-invalid");

 }else{
  $("#fname").removeClass("is-invalid");
 }

 if(lname==""){
  $("#lname").addClass("is-invalid");

}else{
 $("#lname").removeClass("is-invalid");
}

if(email==""){
  $("#email").addClass("is-invalid");

}else{
 $("#email").removeClass("is-invalid");
}

if(add==""){
  $("#address").addClass("is-invalid");

}else{
 $("#address").removeClass("is-invalid");
}
})
})
