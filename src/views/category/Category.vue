<template>
 
    <div class="wrapper">
      <ul class="content">
        <button @click="btnClick">按钮</button>
        <li>项目列表1</li>
        <li>项目列表2</li>
        <li>项目列表3</li>
        <li>项目列表4</li>
        <li>项目列表5</li>
        <li>项目列表6</li>
        <li>项目列表7</li>
        <li>项目列表8</li>
        <li>项目列表9</li>
        <li>项目列表10</li>
        <li>项目列表11</li>
        <li>项目列表12</li>
        <li>项目列表13</li>
        <li>项目列表14</li>
        <li>项目列表15</li>
        <li>项目列表16</li>
        <li>项目列表17</li>
        <li>项目列表18</li>
        <li>项目列表19</li>
        <li>项目列表20</li>
        <li>项目列表21</li>
        <li>项目列表22</li>
        <li>项目列表23</li>
        <li>项目列表24</li>
        <li>项目列表25</li>
        <li>项目列表26</li>
        <li>项目列表27</li>
        <li>项目列表28</li>
        <li>项目列表29</li>
        <li>项目列表30</li>
        <li>项目列表31</li>
        <li>项目列表32</li>
        <li>项目列表33</li>
        <li>项目列表34</li>
        <li>项目列表35</li>
        <li>项目列表36</li>
        <li>项目列表37</li>
        <li>项目列表38</li>
        <li>项目列表39</li>
        <li>项目列表40</li>
        <li>项目列表41</li>
        <li>项目列表42</li>
        <li>项目列表43</li>
        <li>项目列表44</li>
        <li>项目列表45</li>
        <li>项目列表46</li>
        <li>项目列表47</li>
        <li>项目列表48</li>
        <li>项目列表49</li>
        <li>项目列表50</li>
        <li>项目列表51</li>
        <li>项目列表52</li>
        <li>项目列表53</li>
        <li>项目列表54</li>
        <li>项目列表55</li>
        <li>项目列表56</li>
        <li>项目列表57</li>
        <li>项目列表58</li>
        <li>项目列表59</li>
        <li>项目列表60</li>
        <li>项目列表61</li>
        <li>项目列表62</li>
        <li>项目列表63</li>
        <li>项目列表64</li>
        <li>项目列表65</li>
        <li>项目列表66</li>
        <li>项目列表67</li>
        <li>项目列表68</li>
        <li>项目列表69</li>
        <li>项目列表70</li>
        <li>项目列表71</li>
        <li>项目列表72</li>
        <li>项目列表73</li>
        <li>项目列表74</li>
        <li>项目列表75</li>
        <li>项目列表76</li>
        <li>项目列表77</li>
        <li>项目列表78</li>
        <li>项目列表79</li>
        <li>项目列表80</li>
        <li>项目列表81</li>
        <li>项目列表82</li>
        <li>项目列表83</li>
        <li>项目列表84</li>
        <li>项目列表85</li>
        <li>项目列表86</li>
        <li>项目列表87</li>
        <li>项目列表88</li>
        <li>项目列表89</li>
        <li>项目列表90</li>
        <li>项目列表91</li>
        <li>项目列表92</li>
        <li>项目列表93</li>
        <li>项目列表94</li>
        <li>项目列表95</li>
        <li>项目列表96</li>
        <li>项目列表97</li>
        <li>项目列表98</li>
        <li>项目列表99</li>
        <li>项目列表100</li>
      </ul>
    </div>
 
</template>

<script>
  import BScroll from 'better-scroll'
  export default {
    data() {
      return {
        bscroll:null
      }
    },
    mounted() {
      this.bscroll = new BScroll(document.querySelector('.wrapper'), {
        probeType:3,
        pullUpLoad:true

      })
      this.bscroll.on('scroll',(position)=>{
        console.log(position);
        
      })
      this.bscroll.on('pullingUp',()=>{
        console.log('上拉加载更多');
        
      })
    },
    methods: {
      btnClick(){
        console.log('btnClick');
        
      }
    },
  }
</script>

<style scoped>
.wrapper {
  height: 300px;
  background-color: skyblue;
  overflow: hidden;
}
</style>