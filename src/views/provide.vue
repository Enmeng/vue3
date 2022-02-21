<template>
    <div>ddd</div>
    <HelloWorld :user="username"/>
    <button @click="changeToDoListLength" v-local-test.bar="1 + 1">click</button>
    <my-card></my-card>
</template>

<script>
import { computed } from '@vue/reactivity'
import HelloWorld from '../components/HelloWorld.vue'


export default {
    name: 'Provide',
    data() {
        return {
            todoList: [1, 2, 3],
            username: 'username: Enmeng'
        }
    },
    components: { HelloWorld },
    provide() {
        return {
            name: 'Enmeng',
            todoListLength: computed(() => this.todoList.length)
        }
    },
    directives: {
        'local-test': function(el, binding, vnode) {
            console.log('local-test', el, binding, vnode);
            //利用指令的钩子函数及指令传过来的参数进行某些操作
        }
    },
    methods: {
        changeToDoListLength() {
            let number = Math.floor(Math.random() * 10 + 1);
            this.todoList.splice(2, 0, number);
            this.username = 'hello Enmeng';
            console.log('provide', this.username);
        },
        /**
 * @param {number[]} nums
 * @return {number[][]}
 */
    threeSum(nums) {
    if(nums.length < 3) return [];
    if(nums.every(item => item === 0)) return [[0, 0, 0]];
    let result = [];
    nums = nums.sort((a, b) => a - b);
    // -4 -1 -1 0 1 2
    //  0  1  2 3 4 5
    // -1 -1 0 1
    console.log(nums);
    for(let i = 0; i < nums.length - 2; i ++) {
        if(nums[i] >= 0) break;
        if(nums[i] === nums[i - 1]) continue;
        //nums[i] < 0
        console.log(nums[i]);
        let left = i + 1,
            right = nums.length - 1;
        while(left < right) {
            if (nums[i] + nums[left] + nums[right] === 0) {
                result.push([nums[i], nums[left], nums[right]]);
                left ++;
                right --;
            } else if (nums[left] >= 0) {
                if(Math.abs(nums[i]) > Math.abs(nums[left] + nums[right])) break;
                else {
                    if(Math.abs(nums[i] + nums[left]) > nums[right]) {
                        left ++;
                    } else {
                        right --;
                    }
                }
            } else {
                if((Math.abs(nums[i] + nums[left]) > nums[right]) || nums[right] <= 0) {
                  left ++;
                }
                else {
                    if(Math.abs(nums[i] + nums[left]) > nums[right]) {
                       left ++;
                    } else {
                        right --;
                    }
                }
            }
        }
    }
    return result;
}
    },
    mounted() {
        console.log('provide', this.$el);
        console.log(this.threeSum([1, -1, -1, 0]));
    }
}
</script>
