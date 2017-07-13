// 鸭子模型，只要是两条腿，会嘎嘎嘎叫的都是鸭子，国王只要听嘎嘎嘎叫的就可以
// 面向开发中，只要对象具有相同方法，就可以替代执行
  var duck = {
    duckSinging: function() {
      console.log('嘎嘎嘎');
    }
  }
  var chicken = {
    chickSinging: function() {
      console.log('咯咯咯');
    }
  }
  var chior = [] //合唱团
  var joinChior = function(animal) {
    //检测是个鸭但是没有类型检测
    //typeof 运算符，满足属性检测
    //具有相同接口的，在js就认为是一类对象
    if(animal && typeof animal.duckSinging == 'function') {
      chior.push(animal);
      console.log('欢迎加入皇家合唱团');
      console.log('合唱团已有成员人数' + chior.length);
    } else {
      console.log('这里不属于你');
    }
  }
  joinChior(duck);
  joinChior(chicken);
