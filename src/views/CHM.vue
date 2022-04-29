<template>
  <div id="div01">
    <div id="div01-1">
      <p id="p01"><a>作品分类</a></p>
      <div id="div01-1-1">
      <p id="p02"><a>全部作品</a></p>
      <p id="p03"><a>排行</a></p>
      <p id="p04"><a>完本</a></p>
      <p id="p05"><a>免费</a></p>
      <p id="p06"><a>作家专区</a></p>
      <p id="p07"><a>搜索</a></p>
      <p id="p08"><a>女生网</a></p>
      <p id="p09"><a>客户端</a></p>
      <p id="p010"><a>页游</a></p>
      </div>
    </div>

    <div id="div01-2">
      <img src="../image/主题栏.png" alt="" srcset="">
      <div id="div01-2-1">


      </div>
    </div>

    <div id="div01-3">
      <img src="../image/截图1.png" alt="" srcset="">
    </div>
  </div>

</template>

<script>
export default {
  name: 'CHM'
}

</script>

<style scoped>
    /* 主题div */
    #div01{
          width:1463px;
          min-width: 1018px;
          height:1000px;
    }
    /* 标题栏 */
    #div01-1{background-color:black;
             display:flex;
             width:100%;
             height:50PX;
    }

    #div01-1-1{display: flex;
               margin-left:200px;     
    }

    #div01-1-1 p{margin-right:50px;}

    p{color:white;
      margin-top:10px;
      margin-left:8px;
    }

    #p01{align-items: center;
         color:white;    
    }

    #div01-2 img{
                  width:1463px;
                
    }

  #div01-3 img{
                  width: 1463px;
  }



</style>
