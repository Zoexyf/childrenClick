<template>   

<table>
    
    <tr  class="titleName">
        
        <td colspan="2"><img src="../../images/picture1.png" alt="">{{ name }}的体检报告</td>
    </tr>
   
    <tr>
        <td>年龄性别</td>
        <td>18（女）</td>
    </tr>
     <tr>
        <td>体重</td>
        <td>43kg</td>
    </tr>
     <tr>
        <td>身高</td>
        <td>160</td>
    </tr>
    <tr>
        <td>体温</td>
        <td>36</td>
    </tr>
    <tr>
        <td>口部图像</td>
        <td><img src="../../images/mouth.jpg" alt=""></td>
    </tr>
    <tr>
        <td>手部图像</td>
        <td><img src="../../images/hand.png" alt=""></td>
    </tr>
</table>
 
</template>

<script>
export default {
    data(){
        
        return {
            name:'徐绎凡'
        }

    },
    methods:{
        
    }
}
</script>

<style lang="scss" scoped>

table{
   
  
    width: 100%;
    border:1px solid;
    
  

    .titleName{
         width: 100%;
         font-size: 25px;
         height: 70px;
         line-height:70px;
        //  vertical-align: middle
        background-color: #fff;
         
         img{
             width: 40px;
             height: 60px;
             margin-right: 20px;
             margin-bottom:-20px;
         }
    }
   
    tr{
      border: 3px black;
      height: 50px;
      width: 100%;
      background-color: rgb(255, 206, 58);
      margin: 5px;
      padding: 5px;  

     td{
        border:3px solid white;
        text-align:center;
        width:50%;
        img{
            width: 100px;
            height: 100px;
        }
       
     }

    }

}


</style>


