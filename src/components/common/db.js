export default 
  //动画缓动封装
  //obj要添加动效的元素，distancce移动距离的终点，chenge元素移动终点后的效果函数
  function animation(obj, distance, change) {
    //排他思想，为了避免多次调用定时器
    clearTimeout(obj.timer);
    //将定时器以对象赋值的方式添加给调用元素
    obj.timer = setInterval(function move() {
      //缓动特效公式
      var step = (distance - window.pageYOffset) / 10;
      //取整
      step = step > 0 ? Math.ceil(step) : Math.floor(step);
      //判断是否达到终点
      if (window.pageYOffset == distance) {
        //如果到达终点即结束定时器
        clearTimeout(obj.timer);
        //判断用户是否要添加终点效果
        if (change) {
          //达到终点后要执行的效果，效果在调用者参数里以回调函数执行
          change();
        }
      } else {
        // obj.style.left = obj.offsetLeft + step + 'px';
        window.scroll(0, window.pageYOffset + step);
      }
    }, 20);
  }
