Vue.directive('clickoutside',{
    bind:function(el,binding,vnode){
        function documentHandler(e){
            if(el.contains(e.target)){
                return false
            }
            if(binding.expression){
                console.log(binding.expression)
                console.log(binding.value(e))
                console.log(binding.value)
                //执行当前上下文methods中指定的函数
                binding.value(e)
            }
        }
        //通过这个来引用docementHandler
        el.__vueClickOutside__ = documentHandler
        document.addEventListener('click',documentHandler)
        //练习二：为document添加监听键盘事件，若按下esc，执行binding.value(e)
        //练习三：在练习二的基础上，加一层判断，若binding.modifiers.esc===true此处modifiers是.后面的，而arg是：后面的,则会执行binding.value(e)，否则什么也不做
    },
    unbind: function(el,binding){
        document.removeEventListener('click',el.__vueClickOutside__)
        delete el.__vueClickOutside__
    }
})