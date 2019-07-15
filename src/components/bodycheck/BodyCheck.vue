<template>   

<table>
    <br>
    <h1 class="titleName">{{ name }}的体检报告</h1>
    <tr>
        <td>年龄</td>
        <td>18</td>
    </tr>
     <tr>
        <td>性别</td>
        <td>女</td>
    </tr>
     <tr>
        <td>体重</td>
        <td>43kg</td>
    </tr>
     <tr>
        <td>身高</td>
        <td>160</td>
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
    
    width:100%;

    .titleName{
         width: 100%;
         font-size: 20px;
         height: 30px;
         text-align: center;
         
    }
   
    tr{
      border: 3 black;
      height: 50px;
      width: 100%;
      background-color: rgb(255,192,0);
      margin: 5px;
      padding: 5px;  

     td{
        text-align:center;
        width:50%;
       
     }

    }

}


</style>


