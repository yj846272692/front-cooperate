<template>
  <div class="content">
    <v-carousel>
      <v-carousel-item
        v-for="(item, i) in items"
        :key="i"
        :src="item.src"
        reverse-transition="fade-transition"
        transition="fade-transition"
      ></v-carousel-item>
    </v-carousel>
    <br />
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header>1</v-expansion-panel-header>
        <v-expansion-panel-content>
          如果你的面前有阴影，那是因为你的背后有阳光。
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> 2 </v-expansion-panel-header>
        <v-expansion-panel-content>
          有了坚强的理由，一切顺风顺水，虚伪的懦弱，也会在真诚的诺言面前，显得苍白无力，无所适从。所以，坚强也就成了你人生中一道靓丽的风景!
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> 3 </v-expansion-panel-header>
        <v-expansion-panel-content>
          如果惧怕前面跌宕的山岩，生命就永远只能是死水一潭。
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
    <v-expansion-panels>
      <v-expansion-panel v-for="(item, i) in 1" :key="i">
        <v-expansion-panel-header> 4</v-expansion-panel-header>
        <v-expansion-panel-content>
          为梦想，千里行。因为心中怀有梦想，才要努力追求，创造美好来。筑梦前行，人生精彩.
        </v-expansion-panel-content>
      </v-expansion-panel>
    </v-expansion-panels>
  </div>
</template>

<script>
export default {
  name: 'ZYY',
  data() {
    return {
      items: [
        {
          src: 'https://img1.baidu.com/it/u=2770314362,2471810068&fm=253&fmt=auto&app=138&f=JPEG?w=1200&h=422'
        },
        {
          src: 'https://img0.baidu.com/it/u=4278242862,315660859&fm=253&fmt=auto&app=138&f=JPEG?w=782&h=500'
        },
        {
          src: 'https://img0.baidu.com/it/u=2972791747,38037328&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800'
        },
        {
          src: 'https://img2.baidu.com/it/u=428311214,31739466&fm=253&fmt=auto&app=120&f=JPEG?w=1422&h=800'
        }
      ]
    }
  }
}
</script>

<style scoped>
.content {
}
</style>
